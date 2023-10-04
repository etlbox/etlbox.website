using System;
using System.IO;
using System.Linq;
using System.Text;

namespace DocFxToHugoMD
{
    public class Program
    {
        static string DocFxApiFolder = @"C:\Users\andreaslennartz\Github\etlbox\etlbox.website\create_api_md\docfx_project\_site\api";
        static string MainOutputFolder = @"./Output";
        static string OutputFolder = "./Output/api";

        public static string MainFolder = "";
        static void Main(string[] args) {
            if (args.Length > 0) {
                MainFolder = args[0];
            }
            if (!Directory.Exists(MainOutputFolder)) {
                Directory.CreateDirectory(MainOutputFolder);
            } else {
                Directory.Delete(MainOutputFolder, true);
                Directory.CreateDirectory(MainOutputFolder);
            }

            int weight = 10000;
            foreach (string apiHtmlFileName in Directory.GetFiles(DocFxApiFolder)) {
                if (IsInFilterList(apiHtmlFileName)) continue;
                if (IsNamespaceRootFile(apiHtmlFileName)) {
                    CreateNamespaceIndexFile(apiHtmlFileName);
                    continue;
                }
                HtmlToMdTransformer transformer = new HtmlToMdTransformer() {
                    Weight = weight++
                };
                string outputFileName = CreateOutputFileNameAndDirectory(apiHtmlFileName);
                string[] htmlContent = File.ReadAllLines(apiHtmlFileName);
                string mdContent = transformer.Transform(htmlContent);
                File.WriteAllText(outputFileName, mdContent);

            }
            CreateIndexFile();
        }

        static void CreateIndexFile() {
            string indexFileContent = $@"---
title : ""API documentation""
description: ""The auto generated API documentation of all ETLBox classes""
draft: false
images: []
---

The auto generated API documentation gives you an overview of all public available classes. 
The documentation will contain generated documentation for all available ETLBox packages. 
Below is an overview of all classes in each namespace.";


            File.WriteAllText(Path.Combine(OutputFolder, "_index.md"), indexFileContent);
        }


        private static bool IsInFilterList(string apiHtmlFileName) {
            string fileName = Path.GetFileName(apiHtmlFileName);
            string[] filterListCompleteName = new[]
            {
                "index.html", "toc.html"
            };
            if (filterListCompleteName.Contains(fileName))
                return true;
            string[] filterListStartsWith = new[]
            {
                "ETLBox.EntityFramework"
            };
            foreach (var startWith in filterListStartsWith)
                if (fileName.StartsWith(startWith)) return true;

            return false;
        }

        private static bool IsNamespaceRootFile(string apiHtmlFileName) {
            string fileName = Path.GetFileName(apiHtmlFileName);
            //if (fileName.Count(ch => ch == '.') == 2 && fileName.StartsWith("ETLBox") && fileName.EndsWith(".html"))
            if (fileName == "ETLBox.html")
                return true;
            string fileContent = File.ReadAllText(apiHtmlFileName);
            if (fileContent.Contains("class=\"text-break\">Namespace"))
                return true;
            return false;
        }

        private static void CreateNamespaceIndexFile(string apiHtmlFileName) {
            string namespaceName = Path.GetFileName(apiHtmlFileName).Replace(".html", "");
            string outputFileName = Path.GetFileName(apiHtmlFileName).ToLower();
            string dirName = outputFileName.Substring(0, outputFileName.LastIndexOf("."));
            dirName = Path.Combine(OutputFolder, dirName);
            if (!Directory.Exists(dirName))
                Directory.CreateDirectory(dirName);
            string fileName = Path.Combine(dirName, "_index.md");
            File.WriteAllText(fileName, $@"---
title : ""{namespaceName}""
description: ""All classes of the namespace {namespaceName}""
draft: false
---
");
        }


        private static string CreateOutputFileNameAndDirectory(string apiHtmlFileName) {
            string outputFileName = Path.GetFileName(apiHtmlFileName).ToLower();
            outputFileName = outputFileName.Substring(0, outputFileName.LastIndexOf("."));
            string dirName = outputFileName.Substring(0, outputFileName.LastIndexOf("."));
            //if (dirName.Contains("connectors.") || dirName.Contains("transformations.") || dirName.Contains("helper."))
            //    dirName = dirName.Substring(0, dirName.LastIndexOf("."));
            dirName = Path.Combine(OutputFolder, dirName);
            outputFileName = outputFileName.Substring(outputFileName.LastIndexOf(".") + 1);
            outputFileName += ".md";
            if (!Directory.Exists(dirName))
                Directory.CreateDirectory(dirName);
            return Path.Combine(dirName, outputFileName);
        }


    }
}
