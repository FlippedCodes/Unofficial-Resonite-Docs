<languages></languages>

The **Drive Playback** node can be used to directly control the rate of
playback of the `DriveTarget`. Since this is a
[drive](Drive "wikilink"), it is possible to localize the speed of
playback, or even whether the clip is played at all, for different
users.

## Usage

### Inputs

When an impulse is received at `StartDrive`, the node will start driving
the playback state of the `DriveTarget`. This gives exclusive control
over the playback state to the Drive Playback node. Control will be
taken over if the `DriveTarget` was previously driven by another source.

When an impulse is received at `StopDrive`, the node will stop driving
the playback state of the `DriveTarget`. Playback will continue in the
same state as it was just before driving stopped.

The `ForceResync` input will force the normalised position of the
`DriveTarget` to the `NormalizedPosition` input value when an impulse is
received.

The `NormalizedPosition` input controls the rate/state of playback.
Default is 0.

The `MaximumPositionError` value is the maximum number of seconds that
the `DriveTarget` playback position can deviate from the absolute
playback position corresponding to `NormalizedPosition` input. The
normalized playback position will be reset to the `NormalizedPosition`
if the absolute playback position error is greater than
`MaximumPositionError`. Default is 0.

The `Speed` input scales the rate of playback relative to the rate of
change of the `NormalizedPosition` input, i.e. rate of normalized
position change in the `DriveTarget` is equal to rate of change of
`NormalizedPosition` multiplied by the `Speed`. If this has a value of
1, the default, the rate of change of `DriveTarget` playback normalized
position is equal to the rate of change of `NormalizedPosition`. At
higher, lower, or negative values the `DriveTarget` normalized playback
position will start to deviate from the `NormalizedPosition`, resulting
in altered playback speed, until the absolute playback position error is
greater than the `MaximumPositionError`.

The `Play` input controls whether the `DriveTarget` playback position
changes if `NormalizedPosition` is changing. Default is False.

The `Loop` input controls whether playback will restart from the
beginning if the `DriveTarget`'s normalized position is greater than or
equal to 1. Default is False.

### Outputs

The `OnStartDrive` output fires an impulse when an impulse is received
at `StartDrive`. This continues the impulse chain which arrived at
`StartDrive`.

The `OnStopDrive` output fires an impulse when an impulse is received at
`StopDrive`. This continues the impulse chain which arrived at
`StopDrive`.

The `IsDriving` output is True if the `DriveTarget`'s playback is being
driven by the Drive Playback node, otherwise False.

## Examples

## Node Menu

[Drive Playback](Category:Protoflux{{#translation:}} "wikilink") [Drive
Playback](Category:Protoflux:Actions{{#translation:}} "wikilink") [Drive
Playback](Category:Protoflux:Playback{{#translation:}} "wikilink")