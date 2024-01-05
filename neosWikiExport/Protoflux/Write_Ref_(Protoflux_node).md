<languages></languages> <translate>

The **Write Ref** node overwrites the `Reference` with a reference to
the input `Target` when an impulse is received at `Write`.

## Usage

When spawned from the node browser, the `Target` input has a general
IWorldElement datatype. It is recommended to overload the node to the
required datatype by first connecting the `Reference` output to the
target field before connecting an input to `Target`. This is because any
reference type can be cast to IWorldElement which is not, generally, the
datatype of the intendend target field.

The `OnDone` output fires an impulse when the `Reference` target value
has been successfully overwritten after an impulse was received at
`Write` **or** the `Reference` target value is driven by a system which
allows an attempted written variable to be hooked (e.g.
[ReferenceCopy](ReferenceCopy_(Component) "wikilink") component, etc.).
This impulse continues the impulse chain which arrived at `Write`.

The `OnFail` output fires an impulse when the `Reference` target value
could not be set, e.g. if the `Reference` target value is driven from
another source which does not allow hooking of the written value, or if
there is no valid `Reference` target. This impulse continues the impulse
chain which arrived at `Write`.

Changing the value of a Component field etc. via a Write Ref node
results in a datamodel change which will then be synchronised to other
users in the session. Note that changes are only synchronised at the end
of every update so, if multiple writes to the same target are performed
by a single client within an update, only the final value will be sent.
Additionally, no changes will be broadcast if the value is reset to the
value it held at the beginning of an update. Due to this synchronisation
process, to avoid unnecessary network traffic it is inadvisable to write
to a target very regularly (e.g. every update) unless absolutely
necessary .
[Source](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2590#issuecomment-874788205).

Generally one should write to component or slot fields which are
reference-typed (e.g. slot, user, IAssetProvider<AudioClip> etc.) using
Write Ref. However, it *is not* possible to write to reference-typed
Protoflux variable nodes using a Write Ref node whereas it *is* possible
to do so with [Write](Write_(Protoflux_node) "wikilink")/[Write
Latch](Write_Latch_(Protoflux_node) "wikilink"). It is also possible to
write to reference-typed fields using Write/Write Latch if the inputs
are RefIDs, rather than reference datatypes. However, it is generally
not recommended to work with raw RefIDs though - better to use Write Ref
with the correct datatypes.

## Examples

<figure>
<img src="Protoflux.Actions.WriteRef.Example.jpg" title="Protoflux.Actions.WriteRef.Example.jpg" width="900" alt="Protoflux.Actions.WriteRef.Example.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.WriteRef.Example.jpg</figcaption>
</figure>

## Node Menu

</translate>

[Write Ref](Category:Protoflux{{#translation:}} "wikilink") [Write
Ref](Category:Protoflux:Actions{{#translation:}} "wikilink") [Write
Ref](Category:Protoflux:References{{#translation:}} "wikilink")