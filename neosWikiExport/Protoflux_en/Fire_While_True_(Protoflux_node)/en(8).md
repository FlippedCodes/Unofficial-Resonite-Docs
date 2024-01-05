<languages></languages>

The **Fire While True** node fires an impulse every frame while the
input `Condition` is True.

## Usage

The `FiringUser` input determines for which users impulses will fire: if
a valid user value is present, impulses will only fire for that user. If
no FiringUser is provided, or [Local
User](Local_User_(Protoflux_node) "wikilink") is used, impulses will
fire for all users. If an explicit *null* value provided, no impulses
will fire at all.

It is recommended to specify the `FiringUser` to minimize redundant
impulses and to keep behavior predictable.

## Examples

This will continue firing until the condition is no longer True.

<figure>
<img src="FireWhileTrueExample.gif" title="FireWhileTrueExample.gif" width="200" alt="FireWhileTrueExample.gif" /><figcaption aria-hidden="true">FireWhileTrueExample.gif</figcaption>
</figure>

## Node Menu

[Fire While True](Category:Protoflux{{#translation:}} "wikilink") [Fire
While True](Category:Protoflux:Flow{{#translation:}} "wikilink")