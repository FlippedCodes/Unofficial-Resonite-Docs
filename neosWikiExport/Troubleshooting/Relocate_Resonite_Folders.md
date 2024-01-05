<languages/> <translate>

If you have a unique drive setup, or want more control about where these
files are stored, then this guide is for you.

# Relocating these folders

The following steps have the **potential for data loss** so please be
careful.

## Preparations

As these folders refer to each other in some places, it is best to start
fresh with **no existing contents** when relocating these folders. This
will result in a smoother experience but **will result in some data loss
unless these preparations are followed**:

1.  Ensure that your Resonite reports "All Synced" at the top centre of
    your dash.
2.  If you have anything saved in your **Local Home**, make sure it is
    backed up to your cloud home.
3.  Take a note of your settings, in the settings tab. Some of these
    will reset.
4.  Make sure you have your username and password to hand, you will be
    logged out.
5.  If you use [2FA](2FA "wikilink") for logging in, make sure you have
    your device handy, you'll need it to login.

## Adding command line arguments

To relocate these folders to another location:

1.  Add either of the following command line flags to Resonite(following
    the instructions below) to relocate the folders:
    -   `-DataPath path_here` - Instructs Resonite to use the location
        you specify for the **Data** folder. Any absolute path syntax
        supported by the underlying platform's file system libraries can
        be used here, such as DOS-style or UNC paths.
    -   `-CachePath Insert_filepath_here` - Instructs Resonite to use
        the location you specify for the *'Cache* folder. Any absolute
        path syntax supported by the underlying platform's file system
        libraries can be used here, such as DOS-style or UNC paths.
2.  Leave these in the command line arguments, permanently or Resonite
    will go back to using the default locations

Entering these command line arguments, differs depending on your
platform.

### For the Steam build

### For the Standalone build

## Cleaning Up

You can delete the old location's folders once the new locations are in
use.

</translate>

[Category:Troubleshooting](Category:Troubleshooting "wikilink")