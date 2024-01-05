<languages></languages> <translate> The **Equip Avatar** node equips the
avatar given by the AvatarRoot input for the input User when an impulse
is received.

## Inputs & Outputs

|       |            |                                            |
|-------|------------|--------------------------------------------|
| Color | Label      | Type                                       |
|       | Equip      | [Impulse](:Protoflux:Impulses "wikilink")  |
|       | Source     | [User](:Category:Types:User "wikilink")    |
|       | AvatarRoot | [Slot](:Category:Types:Slot "wikilink")    |
|       | DestroyOld | [Boolean](:Category:Types:Bool "wikilink") |

Inputs

|       |        |                                           |
|-------|--------|-------------------------------------------|
| Color | Label  | Type                                      |
|       | OnDone | [Impulse](:Protoflux:Impulses "wikilink") |

Outputs

## Usage

This node equips the avatar for the user without moving the user - this
behavior is akin to equipping an avatar from the inventory directly
instead of equipping an avatar spawned into the world. If DestroyOld is
True the user's previously equipped avatar is destroyed once the new
avatar is equipped.

## Examples

## Node Menu

</translate>

[Equip Avatar](Category:Protoflux{{#translation:}} "wikilink") [Equip
Avatar](Category:Protoflux:Avatar{{#translation:}} "wikilink")