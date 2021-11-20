$loc = Get-ChildItem "HKLM:\Software\Microsoft\Windows\CurrentVersion\App Paths"

$names = $loc |foreach-object {Get-ItemProperty $_.PsPath}

foreach ($name in $names)
{
    Write-Host $name.PSChildName
}
