using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DocFxToHugoMD
{
    public class HtmlToMdTransformer
    {
        StringBuilder Output = new StringBuilder();
        bool IsInArticle = false;
        bool IsInPre = false;
        string Title;
        string Description;
        string Namespace;

        public int Weight { get; set; }
        public HtmlToMdTransformer()
        {

        }

        public string Transform(string[] content)
        {
            for (int linenr = 1; linenr <= content.Length; linenr++)
            {
                string line = content[linenr - 1];
                string linetocheck = content[linenr - 1].Trim();
                if (linetocheck.StartsWith(@"<article"))
                {
                    IsInArticle = true;
                    ParseNamespace(linetocheck);
                }
                if (IsInArticle && linetocheck.StartsWith(@"</article>"))
                    IsInArticle = false;

                if (IsInArticle)
                {
                    if (string.IsNullOrWhiteSpace(linetocheck))
                        continue;
                    TryParseTitle(linetocheck);
                    TryParseDescription(linetocheck);

                    if (linetocheck.StartsWith(@"<div class=""codewrapper"""))
                    {
                        IsInPre = true;
                        Output.AppendLine(@"{{< /rawhtml >}}");
                        Output.AppendLine();
                        Output.AppendLine(@"```C#");
                        continue;
                    }

                    if (IsInPre && linetocheck.StartsWith("</div>"))
                    {
                        IsInPre = false;
                        Output.AppendLine(@"```");
                        Output.AppendLine();
                        Output.AppendLine(@"{{< rawhtml >}}");
                        continue;
                    }

                    if (IsInPre)
                    {
                        line = line.Replace(@"<pre><code class=""lang-csharp hljs"">", "");
                        line = line.Replace(@"</code></pre>", "");
                        line = ReplaceBrackets(line);
                    }

                    if (linetocheck.StartsWith(@"<h6><strong>Namespace</strong>:"))
                        line = RemoveNamespaceLink(line);
                    line = AdjustLinks(line);
                    Output.AppendLine(line);


                }
            }

            return CreateHeader() +
                Output.ToString()
                + CreateFooter();
        }

        private void ParseNamespace(string linetocheck)
        {
            Namespace = linetocheck.Substring(linetocheck.IndexOf("data-uid=") + 10);
            Namespace = Namespace.Substring(0, Namespace.LastIndexOf("."));
        }

        private void TryParseTitle(string linetocheck)
        {
            if (linetocheck.StartsWith(@"<h1"))
            {
                Title = linetocheck.Substring(linetocheck.IndexOf(">") + 1);
                Title = ReplaceBrackets(Title);
            }
        }
        private void TryParseDescription(string linetocheck)
        {
            if (linetocheck.StartsWith(@"<div class=""markdown level0 summary"">"))
            {
                Description = linetocheck.Substring(linetocheck.IndexOf("<p>") + 3);
                Description = Description.Replace("</p>", "");
                Description = ReplaceBrackets(Description);
            }
        }

        private string ReplaceBrackets(string s)
        {
            return s.Replace("&lt;", "<").Replace("&gt;", ">");
        }

        private string AdjustLinks(string line)
        {
            if (!line.Contains(" href=")) return line;
            //Check if link has inner class
            //e.g. href="ETLBox.DataFlow.Transformations.CrossJoin-3.InMemoryDestination-1.html"
            if (line.Contains("class=\"level4\"") &&  line.Count(c => c == '.') == 6) {
                MatchEvaluator evaluator = new MatchEvaluator(LinkReplacementWithInnerClass);
                string regex = @"href=\""(?<ns>\w*\.\w*\.?\w+)(?<sep>\.)(?<cl>[\w\d-]*)(?<sep2>\.)(?<ic>[\w\d-]*)\.html";
                return Regex.Replace(line, regex, evaluator);
            }
            else {
                MatchEvaluator evaluator = new MatchEvaluator(LinkReplacement);
                string regex = @"href=\""(?<ns>\w*\.\w*\.?\w+)(?<sep>\.)(?<cl>[\w\d-]*)\.html";
                return Regex.Replace(line, regex, evaluator);
            }
        }

        string LinkReplacementWithInnerClass(Match match) {
            var ns = match.Groups[1].Value;
            //var sep = match.Groups[2].Value;
            var cl = match.Groups[3].Value;
            var ic = match.Groups[5].Value;
            return @$"href=""/api/{ns.ToLower()}/{cl.ToLower()}#{ic.ToLower()}";
        }

        string LinkReplacement(Match match)
        {
            var ns = match.Groups[1].Value;
            //var sep = match.Groups[2].Value;
            var cl = match.Groups[3].Value;
            return @$"href=""/api/{ns.ToLower()}/{cl.ToLower()}";
        }

        string RemoveNamespaceLink(string line)
        {
            // <h6><strong>Namespace</strong>: <a class="xref" href="ETLBox.Connection.html">ETLBox.Connection</a></h6>
            return $@"<h6><strong>Namespace</strong>: {Namespace}</h6>";
        }
        private string CreateHeader()
        {
            return $@"---
title: ""{CreateTitle()}""
description: ""{CreateDescription()}""
draft: false
images: []
menu:
  api:
    parent: ""{Namespace.ToLower()}""
weight: {Weight}
toc: false
---

" + @"{{< rawhtml >}}" + @"

";
        }

        private string CreateTitle()
        {
            return Title.Replace("Class ", "").Replace("Interface ", "").Replace("Enum ", "");
        }

        private string CreateDescription()
        {
            return $"Details for {Title} ({Namespace})";
        }

        private string CreateFooter()
        {
            return @"
{{< /rawhtml >}}
";
        }

    }
}
