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
        public HtmlToMdTransformer() {

        }

        public string Transform(string[] content) {
            for (int linenr = 1; linenr <= content.Length; linenr++) {
                string line = content[linenr - 1];
                string linetocheck = content[linenr - 1].Trim();

                if (linetocheck.StartsWith(@"<article")) {
                    IsInArticle = true;
                    ParseNamespace(linetocheck);
                }
                if (IsInArticle && linetocheck.StartsWith(@"</article>"))
                    IsInArticle = false;

                if (IsInArticle) {
                    if (string.IsNullOrWhiteSpace(linetocheck))
                        continue;
                    TryParseTitle(linetocheck);
                    TryParseDescription(linetocheck);

                    if (linetocheck.StartsWith(@"<div class=""codewrapper""")) {
                        IsInPre = true;
                        Output.AppendLine(@"{{< /rawhtml >}}");
                        Output.AppendLine();
                        Output.AppendLine(@"```C#");
                        continue;
                    }

                    if (IsInPre && linetocheck.StartsWith("</div>")) {
                        IsInPre = false;
                        Output.AppendLine(@"```");
                        Output.AppendLine();
                        Output.AppendLine(@"{{< rawhtml >}}");
                        continue;
                    }

                    if (IsInPre) {
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

        private void ParseNamespace(string linetocheck) {
            Namespace = linetocheck.Substring(linetocheck.IndexOf("data-uid=") + 10);
            Namespace = Namespace.Substring(0, Namespace.LastIndexOf("."));
        }

        private void TryParseTitle(string linetocheck) {
            if (linetocheck.StartsWith(@"<h1")) {
                Title = linetocheck.Substring(linetocheck.IndexOf(">") + 1);
                Title = ReplaceBrackets(Title);
            }
        }
        private void TryParseDescription(string linetocheck) {
            if (linetocheck.StartsWith(@"<div class=""markdown level0 summary"">")) {
                Description = linetocheck.Substring(linetocheck.IndexOf("<p>") + 3);
                Description = Description.Replace("</p>", "");
                Description = ReplaceBrackets(Description);
            }
        }

        private string ReplaceBrackets(string s) {
            return s.Replace("&lt;", "<").Replace("&gt;", ">");
        }

        Dictionary<string, string> ManualLinkMapping = new Dictionary<string, string>() {
            { 
                "ETLBox.DataFlow.RedisDestination-1.RedisSetParameter.html",
                "etlbox.dataflow.redisdestination-1/redissetparameter" 
            },
            {
                "ETLBox.DataFlow.CrossJoin-3.InMemoryDestination-1.html",
                "etlbox.dataflow.crossjoin-3/inmemorydestination-1"
            },
            {
                "ETLBox.DataFlow.LookupTransformation-2.PartialDbCacheSettings.html#ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_LoadCacheSql",
                "etlbox.dataflow.lookuptransformation-2/partialdbcachesettings"
            },
            {
                "ETLBox.DataFlow.LookupTransformation-2.PartialDbCacheSettings.html",
            "   etlbox.dataflow.lookuptransformation-2/partialdbcachesettings"
            },
            {
                "ETLBox.Redis.RedisDestination-1.RedisSetParameter.html",
                "etlbox.redis.redisdestination-1/redissetparameter"
            },
            {
                "ETLBox.Sap.Hana.HanaConnectionString.html",
                "etlbox.sap.hana/hanaconnectionstring"
            }
        };
        private string AdjustLinks(string line) {
            if (!line.Contains(" href=")) return line;
            foreach (var kvp in ManualLinkMapping) {
                if (line.Contains(kvp.Key))
                    line = line.Replace(kvp.Key, "/api/" + kvp.Value.Trim());
            }
            MatchEvaluator evaluator = new MatchEvaluator(LinkReplacement);
            
            //Needs to work with 3 and 4 dots as well, e.g.
            //    "ETLBox.MySql.MySqlonnectionManager.html" -> "etlbox.mysql/mysqlconnectionmanager.html"
            //    "ETLBox.Sap.Ase.AseConnectionManager.html" -> "etlbox.sap.ase/aseconnectionmanager.html"
            string regex3Dots = @"href=\""(?<ns>\w*\.?\w+)(?<sep>\.)(?<cl>[\w\d-]*)\.html";
            string regex4Dots = @"href=\""(?<ns>\w*\.\w+\.\w+)(?<sep>\.)(?<cl>[\w\d-]*)\.html";
            var newLine = Regex.Replace(line, regex3Dots, evaluator);
            if (line == newLine) //regex3Dots did not match
                newLine = Regex.Replace(line, regex4Dots, evaluator);
            return newLine;
        }

        string LinkReplacementWithInnerClass(Match match) {
            var ns = match.Groups[1].Value;
            //var sep = match.Groups[2].Value;
            var cl = match.Groups[3].Value;
            var ic = match.Groups[5].Value;
            return @$"href=""/api/{ns.ToLower()}/{cl.ToLower()}#{ic.ToLower()}";
        }

        string LinkReplacement(Match match) {
            var ns = match.Groups[1].Value;
            //var sep = match.Groups[2].Value;
            var cl = match.Groups[3].Value;
            if (Program.MainFolder!="")
                return @$"href=""/{Program.MainFolder}/api/{ns.ToLower()}/{cl.ToLower()}";
            else 
                return @$"href=""/api/{ns.ToLower()}/{cl.ToLower()}";
        }

        string RemoveNamespaceLink(string line) {
            // <h6><strong>Namespace</strong>: <a class="xref" href="ETLBox.Connection.html">ETLBox.Connection</a></h6>
            return $@"<h6><strong>Namespace</strong>: {Namespace}</h6>";
        }
        private string CreateHeader() {
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

        private string CreateTitle() {
            return Title.Replace("Class ", "").Replace("Interface ", "").Replace("Enum ", "");
        }

        private string CreateDescription() {
            return $"Details for {Title} ({Namespace})";
        }

        private string CreateFooter() {
            return @"
{{< /rawhtml >}}
";
        }

    }
}
