#Preparations could be (untested)
# dotnet tool update -g docfx
# copy docfx.json into docfx_project folder
# dotnet build DocFxToHugoMD

# We need to clean up the bin/obj folders (we also need to docfx cache folder stored there)
# in order to make sure that the xdoc folders used by docfx are removed from the obj/bin folders, otherwise cached data is used which
# can lead to incorrect result

# Approach 1 using dotnet clean
#dotnet clean ..\..\etlbox.tests --configuration Debug
#dotnet clean ..\..\etlbox.tests --configuration Release
#dotnet clean ..\..\etlbox.tests --configuration DebNoLic
#dotnet clean ..\..\etlbox.tests --configuration RelNoLic

#dotnet clean does not always clean up properly, so let's do it the hard way
$dir = dir ..\..\etlbox.source | ?{$_.PSISContainer}
foreach ($d in $dir){
    $binPath = Join-Path -Path $d.FullName -ChildPath \bin
    $objPath = Join-Path -Path $d.FullName -ChildPath \obj
    write-host "Removing folder $binPath"
    write-host "Removing folder $objPath"
    remove-item $binPath -Recurse
    remove-item $objPath -Recurse
}

#The _site and some obj folder created by docfx may contain some cached date, so we remove it as well
#remove-item ./obj -Recurse
remove-item docfx_project/obj -Recurse
remove-item docfx_project/_site -Recurse

#Then run the API migration (tested, should work like this)
dotnet build ..\..\etlbox.tests --configuration Debug
dotnet build apitransform\DocFxToHugoMD --configuration Debug

docfx docfx_project/docfx.json
./apitransform/DocFxToHugoMD/bin/Debug/net6.0/DocFxToHugoMD.exe
remove-item 'C:\Users\andreaslennartz\Github\etlbox\etlbox.website\doks_v1.6\content\api' -Recurse
move-item './Output/api' 'C:\Users\andreaslennartz\Github\etlbox\etlbox.website\doks_v1.6\content\'
pause
