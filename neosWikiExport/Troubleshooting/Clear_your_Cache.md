<languages/> <translate>

## Resonite on Windows

You may want to clear your cache for different reasons:

1.  To save drive space - This is fine carry on
2.  To fix an issue - Make sure you've tried [other other
    troubleshooting steps](:Category:Troubleshooting "wikilink") first.

If you're sure you need to do this then:

1.  Push Windows Key + R
2.  Type/Copy this `%USERPROFILE%\AppData\Local\Temp\Solirax\Resonite`
    into the Run box that appears
3.  Press Enter or the Ok button
4.  Select the "Cache" folder
5.  Hold Shift and then press Delete. This will skip the recycle bin as
    the cache can be quite large and is comprised of temporary files.

# Resonite on SteamDeck

SteamDeck Users have two flavors of Resonite. The Steam OS ARC Linux
version that installs files on a "Normal" location and the Proton (Wine)
version. In both cases it's required to use the Steam OS in desktop mode
to get to these locations.

For Steam Native on SteamDeck: \[file location is at
/tmp/Solirax/Resonite/Cache\]

1.  Start the Steam OS in Desktop mode
2.  In the file browser make sure you "Show Hidden Files"
3.  Navigate with the file browser to: `/tmp/Solirax/Resonite/`
4.  Delete the folder "Cache"

For Proton on SteamDeck: \[file location
/home/deck/.local/share/Steam/steamapps/compatdata/740250/pfx/drive_c/users/steamuser/Temp/Solirax/Resonite/Cache\]

1.  Start the Steam OS in Desktop mode
2.  In the file browser make sure you "Show Hidden Files"
3.  Navigate with the file browser to:
    `/home/deck/.local/share/Steam/steamapps/compatdata/740250/pfx/drive_c/users/steamuser/Temp/Solirax/Resonite/`
4.  Delete the folder "Cache"

# Regularly doing this?

You should ideally, **NOT** be doing this regularly. If it's to save
drive space then you may want to consider [relocating your Resonite
folders](Relocate_Resonite_Folders "wikilink"). However if its to
resolve another issue that regularly occurs, please ask in the
[discord](https://discord.gg/Resonite) or open a
[bug](https://github.com/Resonite-Metaverse/ResonitePublic/issues/new?assignees=&labels=Bug&template=bug_report.yml)
on our issue tracker.

</translate>

[Category:Troubleshooting](Category:Troubleshooting "wikilink")