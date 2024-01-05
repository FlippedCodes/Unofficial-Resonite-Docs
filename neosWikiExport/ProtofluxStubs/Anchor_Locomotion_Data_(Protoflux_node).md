<languages></languages> <translate> The **Anchor Locomotion Data** node
gives locomotion data from the anchored user.

## Inputs & Outputs

|       |        |                                                         |
|-------|--------|---------------------------------------------------------|
| Color | Label  | Type                                                    |
|       | Anchor | [AvatarAnchor](:Category:Types:AvatarAnchor "wikilink") |

Inputs

|       |                  |                                             |
|-------|------------------|---------------------------------------------|
| Color | Label            | Type                                        |
|       | LocomotionUpdate | [Impulse](:Protoflux:Impulses "wikilink")   |
|       | HasPrimary       | [Boolean](:Category:Types:Bool "wikilink")  |
|       | HasSecondary     | [Boolean](:Category:Types:Bool "wikilink")  |
|       | PrimaryAxis      | [Float2](:Category:Types:Float2 "wikilink") |
|       | SecondaryAxis    | [Float2](:Category:Types:Float2 "wikilink") |
|       | PrimaryAction    | [Boolean](:Category:Types:Bool "wikilink")  |
|       | SecondaryAction  | [Boolean](:Category:Types:Bool "wikilink")  |

Outputs

## Usage

LocomotionUpdate is an impulse that fires every time one of the values
is updated. It also returns the user inputs on the anchor.

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink")
[Category:Protoflux{{#translation:}}](Category:Protoflux{{#translation:}} "wikilink")
[Category:Protoflux:Avatar:Anchors{{#translation:}}](Category:Protoflux:Avatar:Anchors{{#translation:}} "wikilink")