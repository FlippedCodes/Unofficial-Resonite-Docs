<languages></languages> <translate>

The **Write** node overwrites the referenced `Target` value with the
input `Value` when an impulse is received at `Write`.

## Usage

When spawned from the node browser, the `Value` input has a dummy
datatype. This will overload to match the input data type when a valid
input is connected. The input type and that of the referenced `Target`
must match.

The `OnDone` output fires an impulse when the `Target` value has been
successfully overwritten after an impulse was received at `Write` **or**
the `Target` value is driven by a system which allows an attempted
written variable to be hooked (e.g.
[Drive](Drive_(Protoflux_node) "wikilink") node,
[ValueCopy](ValueCopy_(Component) "wikilink") component, etc.). This
impulse continues the impulse chain which arrived at `Write`.

The `OnFail` output fires an impulse when the `Target` value could not
be set, e.g. if the `Target` value is driven from another source which
does not allow hooking of the written value, or if there is no valid
`Target`. This impulse continues the impulse chain which arrived at
`Write`.

Changing the value of a Variable node, Component field etc. via a Write
node results in a datamodel change which will then be synchronised to
other users in the session. Note that changes are only synchronised at
the end of every update so, if multiple writes to the same target are
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

<figure>
<img src="Protoflux.Actions.Write_Example1.jpg" title="Protoflux.Actions.Write_Example1.jpg" width="600" alt="Protoflux.Actions.Write_Example1.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Write_Example1.jpg</figcaption>
</figure>

## Node Menu

</translate>

}}

[Write](Category:Protoflux{{#translation:}} "wikilink")
[Write](Category:Protoflux:Actions{{#translation:}} "wikilink")