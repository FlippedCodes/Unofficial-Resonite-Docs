<languages></languages>

The **Drive** node will start [driving](Drive "wikilink") the referenced
`DriveTarget` with the input `Source` value when an impulse is received
at `StartDrive`. The drive can be stopped by an impulse received at
`StopDrive`.

## Usage

The `Source` input has a 'dummy' datatype when the node is spawned from
the node browser. However, the node will overload to the correct value
type when a suitable wire is connected.

The `OnStartDrive` output fires an impulse whenever an impulse arrives
at the `StartDrive` input. This continues the impulse chain which
arrived at `StartDrive`.

The `OnStopDrive` output fires an impulse whenever an impulse arrives at
the `StopDrive` input. This continues the impulse chain which arrived at
`StopDrive`.

The `OnHook` fires an impulse whenever the `DriveTarget` is driven with
the `Source` value and another source (e.g. a
[Write](Write_(Protoflux_node) "wikilink") node or
[ButtonValueSet](ButtonValueSet_(Component) "wikilink") component)
attempts (but is not able) to overwrite the value.

The `IsDriving` output is True while the `DriveTarget` is driven with
the `Source` value, otherwise False.

The `HookedValue` output provides the value which another source
attempted to set the `DriveTarget` to when an impulse is fired from
`OnHook`. The value is only available for the duration of the impulse
chain started from `OnHook`.

Note that, when an impulse is received at `StartDrive` the drive target
will become driven by the `Source` value regardless of whether it was
already driven by some other source i.e. control of the target value is
overridden.

## Examples

<figure>
<img src="Protoflux.Actions.Drive.Sample.jpg" title="Protoflux.Actions.Drive.Sample.jpg" width="900" alt="Protoflux.Actions.Drive.Sample.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Drive.Sample.jpg</figcaption>
</figure>

## Node Menu

[Drive](Category:Protoflux{{#translation:}} "wikilink")
[Drive](Category:Protoflux{{#translation:}}:Actions{{#translation:}} "wikilink")