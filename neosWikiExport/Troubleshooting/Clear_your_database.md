<languages/> <translate> If all else fails, you'll need to clear your
database. __TOC__

<div style="font-size:1.5em;">

# Only do this if

1.  You've tried [everything
    else](:Category:Troubleshooting "wikilink").
2.  You've tried speaking to the community in the
    [Discord](https://discord.gg/Resonite%7CResonite).
3.  You understand the [consequences](#Consequences "wikilink").
4.  You're not doing this
    [regularly](#Regularly_doing_this.3F "wikilink").

</div>

# Consequences

Doing this:

1.  **May lead to data loss** including:
    -   Wiping your [Local Home](Homes#Local_Home "wikilink")
    -   Resetting your Settings
    -   Deleting anything not successfully synced to the Resonite Cloud
2.  Will require you to login again
3.  Will reset your Resonite [Machine ID](Machine_ID "wikilink")
4.  Will require you to do the Metaverse Training Center tutorial again.
    (This can be skipped by using the `-SkipIntroTutorial` [command line
    argument](Command_Line_Arguments "wikilink").

# Steps for Windows

1.  Push Windows Key + R.
2.  Type/Copy this `%USERPROFILE%\AppData\LocalLow\` into the Run box
    that appears.
3.  Press Enter or the Ok button.
4.  If you want to you can copy or backup the "Solirax" folder, but this
    is not required.
5.  Delete the "Solirax" folder.
6.  Restart Resonite.

# Steps for SteamDeck

SteamDeck Users have two flavors of Resonite. The Steam OS ARC Linux
version that installs files on a "Normal" location and the Proton (Wine)
version. In both cases it's required to use the Steam OS in desktop mode
to get to these locations.

For Proton on SteamDeck: \[file location
/home/deck/.local/share/Steam/steamapps/compatdata/740250/pfx/drive_c/users/steamuser/AppData/LocalLow/\]

1.  Start the Steam OS in Desktop mode
2.  In the file browser make sure you "Show Hidden Files"
3.  Navigate with the file browser to:
    `/home/deck/.local/share/Steam/steamapps/compatdata/740250/pfx/drive_c/users/steamuser/AppData/LocalLow/`
4.  If you want to you can copy or backup the "Solirax" folder, but this
    is not required.
5.  Delete the folder "Solirax"

# Regularly doing this?

You should **NOT** be doing this regularly. If you are needing to,
please ask in the [discord](https://discord.gg/Resonite) or open a
[bug](https://github.com/Resonite-Metaverse/ResonitePublic/issues/new?assignees=&labels=Bug&template=bug_report.yml)
on our issue tracker. This is NOT normal and represents a problem that
we'd like to resolve.

</translate>

[Category:Troubleshooting](Category:Troubleshooting "wikilink")