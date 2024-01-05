<languages/> <translate> If you're running Resonite and seeing that all
textures or assets in the world are checkerboard like the picture below:

<figure>
<img src="CheckerboardTextures.png" title="CheckerboardTextures.png" width="700" alt="CheckerboardTextures.png" /><figcaption aria-hidden="true">CheckerboardTextures.png</figcaption>
</figure>

# Troubleshooting Steps

Before trying these steps, please do not delete any local files, as that
can break things more.

When following these steps, each time you try restarting Resonite,
ensure you are waiting a few minutes to see if stuff will actually load.

## Quick Steps

1.  Try restarting Resonite
2.  Try restarting your computer and then running Resonite again
3.  Try [Synchronizing your Clock](Synchronize_your_Clock "wikilink")
4.  Try running Resonite again

## Database Repair

Sometimes the local database can corrupt, resulting in checkerboard
textures. This can manifest as checkerboard textures for world objects,
menus, selection lasers, and skyboxes. Resonite files failing local
validation repeatedly may also be a symptom of this problem. To attempt
to fix this, you can temporarily add `-RepairDatabase` to your [Command
Line Arguments](Command_Line_Arguments "wikilink"). Note: If you
uninstall then reinstall the Resonite Steam build, then by default the
database is not deleted and may need to be repaired with the
`-RepairDatabase` command line argument even after a reinstallation

## Computer Settings

### Drives

1.  Verify That your main computer drive(usually C:) has enough free
    space

### Internet Settings

1.  Go to your Windows Settings
2.  Select Network & Internet, Proxy
3.  Verify that all proxy settings are disabled.
4.  Double check that you don't have an anti-virus, firewall etc that's
    blocking Resonite
5.  If you're running a VPN please disconnect it
6.  Try running Resonite again

### Disabling IPV6

-   For Windows 10:
    -   Go to Windows Settings
    -   Go to Network & Internet
    -   Click "Change Adapter Options"
    -   Double click on the ethernet or wifi that you are using
    -   Click properties
    -   Scroll down until you see "Internet Protocol Version 6
        (TCP/IPv6)" and turn it off.
    -   Click OK
-   Windows 11:
    -   Go to Windows Settings
    -   Click Network & Internet
    -   Click Advanced Network Settings
    -   Click "More network adapter options" (A new window will pop up)
    -   Double click on the ethernet or wifi you are using
    -   Click properties
    -   Scroll down until you see "Internet Protocol Version 6
        (TCP/IPv6)" and turn it off.
    -   Click OK

Keep in mind other programs might complain that this is off. Or some
internet features in the future might not work at all without this on.
Resonite has an item on its roadmap/issue list to support IPV6 Later.

If this IPv6 step did not work for you, please revert your changes.

## Final Steps

If you're still having trouble, these additional steps may help.

-   Follow the steps on our [Database
    repair](Database_repair "wikilink") guide.
-   [Clearing your cache](Clear_your_Cache "wikilink")

## How to get further help

If you're still having an issue after trying all of these steps then:

1.  Collect your latest set of [Log Files](Log_Files "wikilink")
2.  Ask on our [discord](https://discord.gg/Resonite) ensuring that you
    include these log files

</translate>

[Category:Troubleshooting](Category:Troubleshooting "wikilink")