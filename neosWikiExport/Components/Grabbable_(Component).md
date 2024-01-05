<languages></languages> <translate>

## Intoduction

The **Grabbable** component allows you to grab any slot it is attached
to, provided it has some type of [Collider](Collider "wikilink")

## Usage

## Behavior

The interaction between `ReparentOnRelease`, `PreserveUserSpace` and any
[Grabbable Extensions](:Category:GrabbableExtensions "wikilink"), such
as
[GrabbableReparentBlock](GrabbleReparentBlock_(Component) "wikilink"),
is somewhat complex.

When released, the following will be evaluated, in order:

1.  If `ReparentOnRelease` is true, the slot will be parented to the
    value in `_lastParent`
2.  If `PreserveUserSpace` and `_lastParentIsUserSpace` is true, the
    slot will be parented to [Local User
    Space](Local_User_Space "wikilink")
3.  If an [Grabbable
    Extension](:Category:GrabbableExtensions "wikilink") exists above
    this component in the hierarchy, and it is within the `MaxDepth`
    specified in the block, the slot will be parented to [Local User
    Space](Local_User_Space "wikilink")
4.  Otherwise, the slot is parented to root.

## Examples

-   [Grabbable Overview](https://www.youtube.com/watch?v=XtVHrlD8eVo) by
    [ProbablePrime](User:ProbablePrime "wikilink")
-   [Use grab priorities to control overlapping
    grabbables](https://www.youtube.com/watch?v=UDxArfyboFY) by
    [ProbablePrime](User:ProbablePrime "wikilink")

## Related Components

</translate>

[Grabbable
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Grabbable
(Component){{#translation:}}](Category:Components:Transform:Interaction{{#translation:}} "wikilink")