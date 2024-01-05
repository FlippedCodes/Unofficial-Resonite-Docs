<languages></languages>

## Fields

## Usage

Audio Output is used to Output audio from a large variety of audio
sources. From Audio Clips, Audio Streams, Opus Streams, ect. Be careful
with how many Audio Outputs you have in a world at once or the Audio
Buffer can be overfilled and you wont hear anymore Audio Sources until
it's cleared. You can negate this by disabling the Active State of the
Audio Output component when it's not in use.

## Examples

In this example. I'm using a
[AudioClipPlayer](AudioClipPlayer_(Component) "wikilink") that's going
into the Audio Output Source. I set it's volume to .5 so it plays at
half volume, disabled DopplerLevel by setting it to 0, changed it's
RolloffMode to Linear drop off and made it so you'll only only hear the
audio from 5 meters away. I also made it so a specific user can not hear
the audio.
<img src="AudioOutputExample.png" title="fig:AudioOutputExample.png" width="500" alt="AudioOutputExample.png" />

## Related Components

[Category:ComponentStubs](Category:ComponentStubs "wikilink") [Audio
Output](Category:Components{{#translation:}} "wikilink") [Audio
Output](Category:Components:Audio{{#translation:}} "wikilink")