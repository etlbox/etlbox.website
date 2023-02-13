#Preparations could be (untested)
# dotnet tool update -g docfx
#copy docfx.json into docfx_project folder
# dotnet build DocFxToHugoMD 

# We need to clean up the bin/obj folders (we also need to docfx cache folder stored there)
#dotnet clean ..\..\etlbox.tests --configuration Debug
#dotnet clean ..\..\etlbox.tests --configuration Release
#dotnet clean ..\..\etlbox.tests --configuration DebNoLic
#dotnet clean ..\..\etlbox.tests --configuration RelNoLic
$dir = dir ..\..\etlbox.source | ?{$_.PSISContainer}
foreach ($d in $dir){
    $binPath = Join-Path -Path $d.FullName -ChildPath \bin
    $objPath = Join-Path -Path $d.FullName -ChildPath \obj
    #write-host $objPath
    remove-item $binPath -Recurse
    remove-item $objPath -Recurse
}
# make sure that the xdoc folders used by docfx are removed from the obj/bin folders, otherwise cached data is used which 
# can lead to incorrect result
#Then run the API migration (tested, should work like this)
dotnet build ..\..\etlbox.tests --configuration Debug
dotnet build apitransform\DocFxToHugoMD --configuration Debug

docfx docfx_project/docfx.json --build
./apitransform/DocFxToHugoMD/bin/Debug/net5.0/DocFxToHugoMD.exe
remove-item 'C:\Users\andreaslennartz\Github\etlbox\etlbox.website\doks_v0.5\content\en\api' -Recurse
move-item './Output/api' 'C:\Users\andreaslennartz\Github\etlbox\etlbox.website\doks_v0.5\content\en\' 
pause
