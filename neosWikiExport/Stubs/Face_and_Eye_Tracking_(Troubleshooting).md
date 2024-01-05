__TOC__

<languages/> <translate>

Resonite Supports face and Eye tracking with the following hardware
currently:

-   Vive Pro Eye - Eye Tracking
-   Vive Facial Tracker - Face Tracking
    -   This doesn't require a Vive Headset. Users have had success with
        a variety of headsets and Tape.

If you're having issues with either of these systems please take a look
and follow the general advice below.

# Hardware

-   Make sure everything is plugged in. If you're unsure unplug and then
    re-plug all cables. A green or blue light should be present on all
    items.
-   Check all cables are intact and do not look frayed, damaged or
    kinked.

For non Vive Pro Eye headsets, you may need a USB-C to USB Adapter.
These look like this:

<figure>
<img src="USBC_USBAdapter.jpg" title="USBC_USBAdapter.jpg" width="250" alt="USBC_USBAdapter.jpg" /><figcaption aria-hidden="true">USBC_USBAdapter.jpg</figcaption>
</figure>

## Face Tracker Mounting

For non-vive headsets, users have been sharing all sorts of mounting
options. A short list of these is supplied below for reference.

-   **Tape** - Lots of tape and the Tracker sticks quite well. Any tape
    works.
-   **Double Sided Velcro Tape** - This provides a removable mounting
    option. Make sure it is heavy duty so it can support the weight of
    the tracker and the movement of your head.
-   3D Printing
    -   **[Simple Mount](https://www.thingiverse.com/thing:4798891)** -
        A simple mount that can be stuck to the bottom of the headset
        with tape.
    -   **[Friction
        Mount](https://www.thingiverse.com/thing:4806854)** - A mount
        that uses friction/clips between the mount and the Valve Index
        Frunk. This can fail if you are moving your head around too
        vigorously.
    -   **[Magnetic
        Mount](https://www.thingiverse.com/thing:4807214)** - Uses the
        existing Valve Index Frunk Cover's Magnets to stick to the
        headset. This one will require magnets with the following
        dimensions: 1/8" dia. x 1/8" thick. Stuck to the print.

# Software

## Installing the Software

Both Facial tracking and Eye tracking require the same software from
HTC. You can download the software from the [HTC
Website](https://www.vive.com/setup/facial-tracker). Once downloaded
please find it within your Start Menu and run it. Once installed and ran
it should place an icon in your system tray(the icons to the right side
of your taskbar) which look like this:

<figure>
<img src="SRAnipal_Icon.png" title="SRAnipal_Icon.png" width="100" alt="SRAnipal_Icon.png" /><figcaption aria-hidden="true">SRAnipal_Icon.png</figcaption>
</figure>

If this icon appears, tracking will usually be functional.

## Tracking Status

The icon(a robot), also communicates the status of the tracking:

-   The Eyes of the robot show the status of Eye Tracking
-   The mouth of the robot shows the status of Face Tracking

The color of the eyes or mouth tell you what is happening:

-   Black means the tracking is inactive
-   Orange means the tracking is idle/standby
-   Green means the tracking is active

## About Window

If you right-click the robot icon, you will see a small menu, selecting
about will bring up a window. This window will provide addtional
information such as:

-   The Software Version
-   The Eye Tracker Version
-   The Face Tracker Version

If N/A is displayed in the Eye Camera or Lip camera portion it means
that the software cannot detect your device. see
[Hardware](#Hardware "wikilink") for some troubleshooting steps.

The current version of the software is: **1.3.2.0**.

## Eye Tacking Calibration

The Vive Pro Eye, needs occasional Calibration to detect your eyes as
best as it can. See [HTC Vive Pro Eye
Calibration](https://www.vive.com/us/support/vive-pro-eye/category_howto/calibrating-eye-tracking.html)
for how to do this.

## Additional Software / Hardware Help

As the Vive Headsets and Facial Trackers are made by HTC, they have
their own help sections and support systems. Please see their resources
for additional assistance:

-   [Facial Tracker HTC
    Help](https://www.vive.com/us/support/facial-tracker/category_howto/tracker.html)
-   [Vive Pro Eye HTC
    Help](https://www.vive.com/us/support/vive-pro-eye/)
-   [HTC Vive Pro Eye
    Calibration](https://www.vive.com/us/support/vive-pro-eye/category_howto/calibrating-eye-tracking.html)

# Resonite

Once the software and hardware is setup, you should be able to just run
Resonite and everything should work out ok. After Resonite starts and is
running in your starting world.

If you have Eye Tracking, the Robot Eyes should be green. If you have
Facial Tracking, the Robot Mouth should be green.

Now, try equipping a Face/Eye Tracking Compatible avatar. You can find
the Face Bot in Resonite Essentials -> Avatars -> Face and Eye Tracking
Ready. It has full capabilities. Equip it and move your eyes and face
around to see.

## Issues with Resonite

If your tracking is not working in Resonite. Try:

-   Ensuring the Robot Icon is in your System Tray
-   Restarting Resonite
-   Restarting your Computer
-   Adding `-ForceSRAnipal` to your [Command Line
    Arguments](Command_Line_Arguments#How_to_use_command_line_arguments "wikilink")

If things are still not working. Please [grab some
logs](Frequently_Asked_Questions#Regular_Log_Files "wikilink") and ask
in `#❓questions-help` within the Resonite Discord.

## Shape Keys and Setup

Once your avatar is working please see the guide on setting up your
avatar. TODO: THIS NEEDS TO BE WRITTEN.

</translate>

[Category:Troubleshooting](Category:Troubleshooting "wikilink")