<languages/> <translate> Sometimes, when your account is syncing, the
sync status as shown on the dashboard will stick at various
percentages(0% and 10% are common). This indicates that there was a
problem while syncing that is halting or pausing the sync process. This
guide aims to aid you in resolving a stuck sync. Please follow each
step.

# Ensure you're reading the right guide

First, We have multiple guides for Sync related matters, please ensure
you are reading the correct one for your problem, if you sync is not
stuck or you're experiencing some other sync issue please see [Sync
Errors](Sync_Errors "wikilink") **BEFORE** you start.

These problems are slightly different and may require differing steps,
so we've split them into separate guides.

# Diagnosing a Stuck Sync

The first step for fixing a Stuck Sync, is to ensure it really is stuck.
Sometimes syncing may take a long time or appear stuck but, it's just
being slow. Follow these steps to confirm the issue:

1.  Examine the sync status section of your Dash menu. It is in the top
    bar of the dash and will usually display "All Synced" in green
2.  If it says "Syncing" and then a percentage, examine this percentage.
    See if it changes or increases. Give it a few minutes to double
    check that its not just being slow.
3.  If it is still not moving, then you have a stuck sync!

# Fixing a Stuck Sync

Fixing a stuck sync, is a little challenging depending on what exactly
is wrong so make sure to follow our steps.

First, let's try some steps which are common to many sync issues:

1.  Try restarting Resonite, this will re-start the sync process and can
    sometimes get it unstuck.
2.  Try disabling any mods, plugins or other modifications you have made
    to Resonite, these may affect syncing.

If you've tried these initial steps then let's move on to discovering
exactly what's wrong:

1.  Examine your [Log Files](Log_Files "wikilink"), Sync issues are
    usually shown in the "Regular" logs.
2.  The most recent file from the log folder should usually be the one
    to look at, it's more likely to show a stuck sync.
3.  Scroll through the file looking for the phrase "Sync".
    -   This term is usually quite overloaded as some of Resonite'
        internals are also called "Sync".
    -   Make sure you're looking for obvious errors, things that have
        the words "Fail" or "Error" in their text.
4.  Once you've found a relevant log file selection please read below in
    the following list ("Common Stuck Sync Causes"), to see if you can
    match any of the problems to your problem.
5.  If you can find a match, click its name in the table to find a
    dedicated guide just for that problem.
6.  If you cannot find a matching section, or have trouble with reading
    your log files, then please share a [log file](Log_Files "wikilink")
    in the #questions-help channel, where another user can examine it to
    see what is wrong.

# Common Stuck Sync Causes

| Name/Link                                                    | Example Log File contents                                                             | Description                                                                                                                                        |
|--------------------------------------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Out Of Space](Stuck_Sync/Out_Of_Space "wikilink")           | `Fail Reason: Out of space`                                                           | Your Resonite Account's storage is full. Read the [Out Of Space](Stuck_Sync/Out_Of_Space "wikilink") page for more help.                           |
| [Too Many Requests](Stuck_Sync/Too_Many_Requests "wikilink") | `Fail Reason: Response status code does not indicate success: TooManyRequests (429);` | The Resonite Cloud is making too many requests at the moment. Read the [Too Many Requests](Stuck_Sync/Too_Many_Requests "wikilink") for more help. |
| [Conflict](Sync_Conflict "wikilink")                         | Anything that has the word "Conflict"                                                 | Your have a sync conflict. Read the [Conflict](Sync_Conflict "wikilink") page for more help.                                                       |

## Something else?

If you can't find something that matches the above list. Please report
it on our [issue
tracker](https://github.com/Frooxius/ResonitePublic/issues) or in our
Discord. In both cases make sure to provide a [log
file](Log_Files "wikilink"). For a technical reason on why stuck syncs
occur and break the syncing loop, see
[#3915](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3915)
on the Resonite Public GitHub.

</translate>

[Category:Troubleshooting](Category:Troubleshooting "wikilink")