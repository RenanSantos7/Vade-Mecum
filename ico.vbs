Set objShell = CreateObject("WScript.Shell")
strDesktop = objShell.SpecialFolders("Desktop")
Set objLink = objShell.CreateShortcut(strDesktop & "\Vade Mecum.lnk")
objLink.TargetPath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
objLink.Arguments = "%programfiles%\Vade%20Mecum\index.html"
objLink.WorkingDirectory = "%HOMEDRIVE%%HOMEPATH%"
objLink.IconLocation = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe, 2"
objLink.Save