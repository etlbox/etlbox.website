using System;
using System.IO;
using System.Linq;
using System.Text;

namespace DocFxToHugoMD
{
    class Program
    {
        static string DocFxApiFolder = @"C:\Users\andreaslennartz\Github\etlbox\etlbox.website\create_api_md\docfx_project\_site\api";
        static string OutputFolder = @"./Output";

        static void Main(string[] args) {
            if (!Directory.Exists(OutputFolder)) {
                Directory.CreateDirectory(OutputFolder);
            } else {
                Directory.Delete(OutputFolder, true);
                Directory.CreateDirectory(OutputFolder);
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
        }

        private static bool IsInFilterList(string apiHtmlFileName) {
            string fileName = Path.GetFileName(apiHtmlFileName);
            string[] filterList = new[]
            {
                "index.html", "toc.html"
                //"ETLBox.Connection.html", "ETLBox.ControlFlow.html","ETLBox.DataFlow.html",
                //"ETLBox.Exceptions.html","ETLBox.Helper.html", "ETLBox.Logging.html"
            };
            if (filterList.Contains(fileName))
                return true;
            return false;
        }

        private static bool IsNamespaceRootFile(string apiHtmlFileName) {
            string fileName = Path.GetFileName(apiHtmlFileName);
            if (fileName.Count(ch => ch == '.') == 2 && fileName.StartsWith("ETLBox") && fileName.EndsWith(".html"))
                return true;
            return false;
        }

        private static void CreateNamespaceIndexFile(string apiHtmlFileName) {
            string namespaceName = Path.GetFileName(apiHtmlFileName).Replace(".html","");
            string outputFileName = Path.GetFileName(apiHtmlFileName).ToLower();
            string dirName = outputFileName.Substring(0, outputFileName.LastIndexOf("."));
            dirName = Path.Combine(OutputFolder, dirName);
            if (!Directory.Exists(dirName))
                Directory.CreateDirectory(dirName);
            string fileName = Path.Combine(dirName, "_index.md");
            File.WriteAllText(fileName, $@"
---
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
