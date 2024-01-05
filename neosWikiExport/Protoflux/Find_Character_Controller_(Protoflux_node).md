<languages></languages> <translate>

The **Find Character Controller** node attempts to find and output a
[CharacterController
(Component)](CharacterController_(Component) "wikilink") from either the
input user or slot.

## Usage

This node has two versions which work slightly differently but to the
same effect:

-   The User variant of this node outputs the CharacterController
    associated with the input user's currently selected locomotion
    module.
-   The Slot variant of this node attempts to output the closest
    CharacterController component from the input slot or its parent
    slots.
    -   Failing this, it attempts to output the CharacterController
        associated with its active user's currently selected locomotion
        module.

If the User in question here is using a Locomotion Module that lacks a
CharacterController such as NoClip this node will output null.

The Default output is *null*.

## Examples

## Node Menu

</translate>

[Find Character
Controller](Category:Protoflux{{#translation:}} "wikilink") [Find
Character
Controller](Category:Protoflux:Physics{{#translation:}} "wikilink")