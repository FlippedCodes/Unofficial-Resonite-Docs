<languages/> There are multiple log file types which Resonite Produces:

1.  Regular Log Files
2.  Player.log Files
3.  Unity Crash Dumps

When asking for logs to diagnose issues we usually need just the
"Regular Log Files" so start by providing these.

# Regular Log Files

Resonite logs can be found in the Resonite installation directory.

**For the Steam build of Resonite, these is most easily accessed by**:

1.  Right clicking on Resonite VR in your Steam library
2.  Selecting Properties
3.  Then selecting Local Files
4.  Then selecting Browse Local Files.
5.  This will open a file browser, to the Resonite Installation Folder
6.  Open the "Logs" folder

**For the standalone build**:

1.  Find the directory that you installed Resonite to.
2.  You can right click the Resonite launcher shortcut (the one with the
    blue Resonite logo)
3.  Click Open file location
4.  Then open up the "app" folder.
5.  Then open the "Logs" folder.

In both cases, once in the log folder, you'll find logs named by build
number, the date, and time of the log’s creation. When submitting them
for help, select the most recent logs which correspond to the session
the issue occurred in.

# Player.log Files

Please start with the regular log files as listed above, these files are
usually only needed if requested.

Unity Player.log files can be found by pressing Windows Key + R and
entering `%userprofile%\AppData\LocalLow\Solirax\Resonite` then OK. The
Player.log is overwritten each time you launch Resonite, so make sure to
collect it right away after you encounter a crash, or bug. If you have
launched Resonite once since the issue occurred, the contents will be in
the Player-prev.log file. If you’ve launched Resonite twice or more
since the issue occurred, the Player.log file will be gone as it will
have been overwritten.

# Crash log and memory dump

In the event that you crash, Resonite will attempt to create crash logs,
and memory dumps that are located in a Crashes folder found at
`%USERPROFILE%\AppData\Local\Temp\Solirax\Resonite\Crashes`. Inside of
the Crashes folder are folders for each crash logged, and inside of each
is an error.log file, a Player.log file, and a memory dump.

If they exist, submit the error.log, and Player.log file from the crash
folder alongside the Resonite log from your installation folder.
Otherwise, just submit the Resonite log, and the Player.log.

[Category:Troubleshooting](Category:Troubleshooting "wikilink")