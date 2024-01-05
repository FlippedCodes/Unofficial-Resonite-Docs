<languages></languages> <translate>

The **Timer** node fires impulses from `Pulse` separated by the number
of seconds specified by the `Interval` input.

## Usage

Each frame update, this node checks whether a number of seconds greater
than or equal to the `Interval` input have elapsed. If they have, an
impulse is fired owned by the `UpdatingUser`. If no `UpdatingUser` is
provided, the default owner is the world host. If a null
</code>UpdatingUser</code> is provided, the node will not fire at all.

### User Handling

It is **NOT** recommended to use **[Local
User](Local_User_(Protoflux_node) "wikilink")** with this node. When
[Local User](Local_User_(Protoflux_node) "wikilink") is used, it will
fire impulses for all users in the session. This is similar to the
guidance for [Fire On True](Fire_On_True_(Protoflux_node) "wikilink")
etc.

## Examples

## Node Menu

</translate>

[Timer](Category:Protoflux{{#translation:}} "wikilink")
[Timer](Category:Protoflux:Flow{{#translation:}} "wikilink")