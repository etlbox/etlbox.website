#Preparations could be (untested)
# dotnet tool update -g docfx
#copy docfx.json into docfx_project folder
# dotnet build DocFxToHugoMD 

#Then run the API migration (tested, should work like this)
dotnet build ../../etlbox.source
docfx docfx_project/docfx.json --build
./apitransform/DocFxToHugoMD/bin/Debug/net5.0/DocFxToHugoMD.exe
remove-item 'C:\Users\andreaslennartz\Github\etlbox\etlbox.website\newdoks\content\en\api' -Recurse
move-item './Output/api' 'C:\Users\andreaslennartz\Github\etlbox\etlbox.website\newdoks\content\en\' 
pause
