<languages></languages> <translate>

The **Play One Shot** node plays the input `Clip` once when an impulse
is received at `Play`. The manner in which the clip is played is highly
configurable.

## Usage

### Inputs

The `Clip` input determines which clip will be played. The easiest
method to specify this is to use an [Audio Clip
Input](Audio_Clip_Input_(Protoflux_node) "wikilink") node.

The `Volume` controls the base volume with which the clip is played.
Default is 1, i.e. full volume.

The `Speed` controls the speed with which the clip is played. Default is
1, i.e. standard playback speed.

The `Spatialize` input determines whether the audio source is
spatialized within the world (i.e it sounds like it originates from a
specific point) or non-spatialized. Note that this value can be
overridden if the `SpatialBlend` is specified. Default is True.

The `SpatialBlend` input can be used to set an intermediate
spatialization value. A value of 0 results in completely non-spatialized
playback, a value of 1 results in fully spatialized playback, and values
between these extremes result in the playback being partially
spatialized. Note that this value, if specified, will override any
`Spatialize` input. Default is 1.

The `Point` sets the origin point from which any spatialized audio will
originate. This is interpreted as \[X;Y;Z\] coordinates in the [local
coordinate space](Coordinate_spaces#Global_vs._Local "wikilink") of the
`Root` input slot. Default is \[0;0;0\].

The `Root` input sets the slot relative to whose [local coordinate
space](Coordinate_spaces#Global_vs._Local "wikilink") the `Point` value
is interpreted. Default is the Play One Shot node's slot.

The `Priority` input sets the priority level of the spawned audio
output. In the event too many audio outputs are present in a world, this
is used to select which outputs are silenced. Higher priority outputs
(i.e. priority number is **lower**) take precedence over ones with lower
priority. Default is 128 (medium priority, lowest possible value is
256).

The `Doppler` input determines the strength of the simulated Doppler
effect. Default is 1 (i.e. Doppler effect is applied), set this to 0 to
disable.

The `MinDistance` input determines the distance (in metres) from the
sound source at which volume rolloff begins. This only takes effect if
the `Rolloff` value is Linear. Note that this input value is scaled
depending on the `DistanceSpace` input - if that is set to Global then
the MinDistance value is interpreted in global coordinate space, if set
to Local it is interpeted in local coordinate space which may then be
affected by the scale of the audio output. Default is 1.

The `MaxDistance` input determines the distance (in metres) from the
sound source at which volume rolloff ends and the sound becomes
inaudible. This only takes effect if the `Rolloff` value is Linear. Note
that this input value is scaled depending on the `DistanceSpace` input -
if that is set to Global then the MinDistance value is interpreted in
global coordinate space, if set to Local it is interpeted in local
coordinate space which may then be affected by the scale of the audio
output. Default is 500.

The `Rolloff` input determines the volume rolloff mode used for the
audio output. This must be set to Linear for `MinDistance` and
`MaxDistance` to take effect. Default is Logarithmic.

The `Group` input determines what volume group the played audio is
categorized under. Default is Sound Effects.

The `DistanceSpace` input determines whether scale and distance values
are interpreted relative to global coordinates or local coordinates.
Default is Global.

The `MinScale` input determines the MinScale field value on the spawned
AudioOutput.

The `MaxScale` input determines the MaxScale field value on the spawned
AudioOutput.

The `ParentUnderRoot` input determines whether the spawned
"OneShotAudio" slot is parented directly under the input `Root` slot. If
set to False, the "OneShotAudio" slot will be parented under the world
root slot. Default is True.

The `LocalOnly` input determines whether the played audio will only be
audible for the local user who owns the impulse arriving at `Play`.
Default is False.

### Outputs

The `OnStartedPlaying` output fires an impulse when the one shot audio
has started playing as a result of an impulse at `Play`. This fires as
long as a valid `Clip` input is present and continues the impulse chain
which arrived at `Play`.

### Notes

When an impulse is received at `Run`, and a valid `Clip` is available, a
new non-persistent slot is spawned called "OneShotAudio" with
[AudioOutput](AudioOutput_(Component) "wikilink"),
[AudioClipPlayer](AudioClipPlayer_(Component) "wikilink"), and
[StoppedPlayableCleaner](StoppedPlayableCleaner_(Component) "wikilink")
components. This slot is automatically deleted when playback ends.

Play One Shot is an excellent playback option for audio which should
play to completion after some trigger. This is because it prevents
cluttering the limited audio buffer unless the relevant sound effect is
actually playing. Play One Shot may not be ideal for situations where
triggers occur extremely rapidly (e.g. in the case of an automatic
weapon) due to the network traffic required to spawn and delete slots
and components. In situations like those, consider using a persistent
AudioOutput and AudioClipPlayer and using nodes under
[:Category:Protoflux:Playback](:Category:Protoflux:Playback "wikilink")
instead.

## Examples

## Node Menu

</translate>

[Play One Shot](Category:Protoflux{{#translation:}} "wikilink") [Play
One Shot](Category:Protoflux:Audio{{#translation:}} "wikilink")