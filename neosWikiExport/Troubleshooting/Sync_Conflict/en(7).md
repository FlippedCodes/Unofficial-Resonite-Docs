<languages/> Sync Conflicts can occur when a local asset is out of sync
with the data stored on the cloud. This can occur for a variety of
reasons. You can check the [Log Files](Log_Files "wikilink") to see
which files are conflicting, and whether the local, or cloud storage is
newer. Just open these in a text editor to view them.

# Ensure you're reading the right guide

We have multiple guides for Sync related matters, please ensure you are
reading the correct one for your problem, for the "Hub" of these see
[Sync Errors](Sync_Errors "wikilink") **BEFORE** you start.

These problems are slightly different and may require differing steps,
so we've split them into separate guides.

# What to do

## Figuring out what isn't syncing

This step is **optional**, but think about what you were doing just
before the sync conflict occurred. Were you working on something
important? How you follow these next steps may determine if this work is
recoverable or not. So it is a good idea to think about what you were
doing and how important it was. The following steps can help you.

1.  [Find your log files](Log_Files "wikilink") and open the **LATEST**
    one.
2.  Once the log file is open, look for the phrases "unsynced record",
    "failed sync", "Record preprocessing failed" or similar, using the
    "Find" feature(usually CTRL + F)
3.  If you find instances of this text then you can read them to figure
    out what is not syncing. For example it might say near this text
    something like "Home" or "Avatar". This will tell you what's failing
    to sync.
4.  Based on what is failing to sync, think about how important that
    work was.

If you're not sure, ask in our [discord](https://discord.gg/Resonite),
make sure to provide the log file and someone will be able to help you.

## Adding a command line argument

Now you've had a chance to think about/look at what is not syncing, you
will need to make a choice between **two** options:

1.  Deleting the un-synced content this will lose any work that did not
    successfully make it to the cloud.
2.  Forcing an overwrite from your local content to the cloud. This is
    good if you know the copy of your content on your computer is newer.

Based on your decision, you will then need to add **ONE** of the
following command line arguments to your copy of Resonite:

1.  `-DeleteUnsyncedCloudRecords` will delete any local(to your
    computer) un-synced files/items from your computer and re-download
    the cloud copies. Only use this command if you are certain you will
    not lose important files/items when they are deleted from your
    computer.
2.  `-ForceSyncConflictingCloudRecords` will force the conflicting local
    files/items to be uploaded to the cloud. This will overwrite the
    existing cloud files/items with your local copies. This can
    overwrite your cloud data with an earlier/incorrect version, so use
    it carefully.

To add these to Resonite follow the following steps, for either the
Steam or Standalone build:

### For the Steam build

### For the Standalone build

## Running Resonite

Once you've added **one** of the above commands following the above
instructions. Run Resonite **once**, when it is running look for **All
Synced** at the top center of your Resonite Dash. This will indicate
that the sync issue has been resolved.

## Cleaning Up

Once the issue is resolved, **remove the command line argument that you
added**. It is only needed while you are actually fixing the conflict.
Leaving these command line arguments in place permanently may result in
data loss.

## Other Issues

If you believe that the syncing issue is caused by something else please
double check our other [Sync Errors guides](Sync_Errors "wikilink").

[Category:Troubleshooting](Category:Troubleshooting "wikilink")