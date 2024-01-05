<languages></languages> <translate>

The **Write Latch** node node overwrites the referenced `Target` value
with the input `SetValue` or `ResetValue` when an impulse is received at
`Set` or `Reset` respectively.

## Usage

When spawned from the node browser, the `SetValue` and `ResetValue`
inputs have a dummy datatype. This will overload to match the input data
type when a valid input is connected. The type of these two inputs and
that of the referenced `Target` must match.

The `OnSet` output fires an impulse after an impulse is received at
`Set`. This occurs regardless of whether there is a valid `Target` or
whether any `Target` was actually written to. This continues the impulse
chain which arrived at `Set`.

The `OnReset` output fires an impulse after an impulse is received at
`Reset`. This occurs regardless of whether there is a valid `Target` or
whether any `Target` was actually written to. This continues the impulse
chain which arrived at `Reset`.

Changing the value of a Variable node, Component field etc. via a Write
Latch node results in a datamodel change which will then be synchronised
to other users in the session. Note that changes are only synchronised
at the end of every update so, if multiple writes to the same target are
performed by a single client within an update, only the final value will
be sent. Additionally, no changes will be broadcast if the value is
reset to the value it held at the beginning of an update. Due to this
synchronisation process, it is inadvisable to write to a value very
regularly (e.g. every update) unless absolutely necessary. It is
generally better to use the [Drive](drive "wikilink") system instead for
continuously changing values to avoid unnecessary network traffic.
[Source](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2590#issuecomment-874788205).

Generally, with a Write/Write Latch node, one can only write to
component or slot fields which are value-typed (e.g. bools, ints,
strings, floats), whereas reference-typed fields (e.g. slot, user,
IAssetProvider<AudioClip> etc.) require [Write
Ref](Write_Ref_(Protoflux_node) "wikilink"). However, it *is* possible
to write to reference-typed Protoflux variable nodes using a Write/Write
Latch node where it *isn't* possible to do so with Write Ref. It is also
possible to write to reference-typed fields using Write/Write Latch if
the input `SetValue` and `ResetValue` are RefIDs, rather than reference
datatypes - it is generally not recommended to work with raw RefIDs
though.

## Examples

These two images illustrate comparable Protoflux setups using either one
Write Latch node or two [Write](Write_(Protoflux_node) "wikilink")
nodes. Note that the presence of the `OnFail` impulse output and
different behaviour of `OnDone` and `OnFail` compared with `OnSet` and
`OnReset` means that the two setups are not exactly identical.

<figure>
<img src="Protoflux.Actions.WriteLatch.Example.jpg" title="Protoflux.Actions.WriteLatch.Example.jpg" width="600" alt="Protoflux.Actions.WriteLatch.Example.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.WriteLatch.Example.jpg</figcaption>
</figure>

<figure>
<img src="Protoflux.Actions.Write.imp_WriteLatch.jpg" title="Protoflux.Actions.Write.imp_WriteLatch.jpg" width="600" alt="Protoflux.Actions.Write.imp_WriteLatch.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Write.imp_WriteLatch.jpg</figcaption>
</figure>

## Node Menu

</translate>

}}

[Write Latch](Category:Protoflux{{#translation:}} "wikilink") [Write
Latch](Category:Protoflux:Actions{{#translation:}} "wikilink")