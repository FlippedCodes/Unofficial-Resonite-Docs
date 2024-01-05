<languages></languages> <translate>

# Intoduction

The **GrabbableReceiverSurface** component allows you to set up an
object so that [Grabbable](Grabbable_(Component) "wikilink") objects
snap to its surface when a user releases the
[Grabbable](Grabbable_(Component) "wikilink") object within range of it.

Add Component Path: Transform \> Interaction \>
GrabbableReceiverSurface.

# Usage

TagFilter:

| Fields |
|--------|
| Name   |
| `Mode` |
| `Tags` |

# Behavior

When a GrabbableReceiverSurface is setup on an object, it will become
visible to Grabbable objects when they are released from a user's grab.
When this occurs the Surface will carry out some checks and if these
pass the object will snap to the GrabbableReceiverSurface. If the
`ParentPlaced` checkbox is enable the Grabbable will be parented to the
surface or the slot specified in `OverrideParent`

## Explanation of the Checks

These are a little complicated but if you want to fully understand what
happens it is provided.

When a user is holding a Grabbable object and let's go(releases it):

1.  The Grabbable object will look around it in its vicinity using a
    sphere collider based on the Object's bounding box plus a radius
    defined on the User's Hand
2.  If this collider overlaps with any objects which have
    GrabbableRecieverSurface attached to them then the Grabbable will
    perform some checks on each surface.
3.  First it asks the Surface to check its distance from the Grabbable
    object.
    1.  The distance check first calculates if a Raycast from the
        released object towards the surface would hit in the directions
        specified in the component.
    2.  If the Raycast would hit a distance is then calculated.
    3.  This distance varies depending on the directions specified in
        the component's properties.
        -   For example, placing an object on top of a cube from above
            has a shorter distance to the top of the Cube than the
            bottom of a cube because the distance from above the cube to
            the bottom face of the cube is greater.
4.  If this distance is to great as specified in the component's
    properties a second check using the released object's bounding box
    corners is also computed
5.  After both distance checks a final distance value is provided.
6.  The [Grabbable](Grabbable_(Component) "wikilink") then selects the
    surface with the smallest distance and tells the Surface to receive
    it.
7.  The Surface will then position the
    [Grabbable](Grabbable_(Component) "wikilink") upon the surface using
    an Animation if a `Tween Time` value is set.
8.  The Surface will then parent the
    [Grabbable](Grabbable_(Component) "wikilink") to itself or the
    `OverrideParent` location if the `ParentPlaced` checkbox is checked.

# Examples

[ProbablePrime](User:ProbablePrime "wikilink")'s tutorial on
GrabbleReceiverSurface:

<youtube>9IZI3ui-RLY</youtube>

# Frequently Asked Questions

## Can objects which are not grabbed be received?

No, this component only works with
[Grabbable](Grabbable_(Component) "wikilink") objects which are released
by a user.

## Can this be used with objects that are not Grabbable?

No, It cannot be used with objects that do not have a
[Grabbable](Grabbable_(Component) "wikilink") component.

# Related Components

-   [Grabbable](Grabbable_(Component) "wikilink")
-   [Grabbable Parenter](GrabbableParenter_(Component) "wikilink")

</translate>

[Category:Components{{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Category:Components:Transform:Interaction{{#translation:}}](Category:Components:Transform:Interaction{{#translation:}} "wikilink")