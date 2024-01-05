<languages></languages> <translate>

The **Raycaster** node generates a raycast with the input properties
which is updated every frame update. Details about the current hit
target collider (if there is one) are available from the outputs.

## Usage

### Inputs

The `Origin` defines the point from which the ray is cast. This value is
treated as being relative to the [local coordinate
space](Coordinate_spaces#Global_vs._Local "wikilink") of the input
`Root` slot. Default is \[0;0;0\].

The `Direction` defines the direction vector along which the ray is
cast. This value is treated as being relative to the local coordinate
space of the input `Root` slot. This input requires an value to be set
as the default is \[0;0;0\].

The `MaxDistance` controls the maximum length of the raycast. The actual
length of the raycast is affected by both this input and the global
scale of the input `Root` slot. Default value is very large
(\~3.4×10<sup>38</sup>), so setting this is recommended.

The `HitTriggers` determines whether collider components with the
collider `Type` field set as </code>Trigger</code> or `HapticTrigger`
are considered valid hit targets. Default is false.

The `UsersOnly` determines whether colliders which do not have an active
user are considered valid hit targets. Defaults to false, in which case
all colliders are considered valid hit targets (depending on other
factors). However, if set to true, only colliders with an active user
(i.e. are parented under a user's slot hierarchy) are considered valid
hit targets.

The `Root` input defines the slot relative to whose local coordinate
space the `Origin`, `Direction`, and `MaxDistance` are calcluated.

### Outputs

The `HasHit` input outputs whether the raycast has a valid hit target
currently.

The `HitCollider` output provides the first valid target collider hit
along the path of the raycast. Default is *null*.

The `HitDistance` output provides the global distance between the
raycast origin and the `HitPoint`. Default is 0.

The `HitPoint` output provides the global coordinates of the point where
raycast first intersects with the `HitCollider`. Default is \[0;0;0\].

The `HitNormal` output provides the normal vector for the intersection
of the raycast and the `HitCollider`.

The `HitTriangleIndex` outputs the index of the mesh triangle which was
hit in the case that the `HitCollider` is a [MeshCollider
(Component)](MeshCollider_(Component) "wikilink").

### Notes

Colliders will generally be valid hit targets for raycasts unless their
`Type` enum field is set to `Trigger`, `HapticTrigger`, or
`HapticSampler`, though see details for the `HitTriggers` input.
Colliders will *not* be valid targets if the `IgnoreRaycasts` bool is
set to true on the collider component.

## Examples

## Node Menu

</translate>

[Raycaster](Category:Protoflux{{#translation:}} "wikilink")
[Raycaster](Category:Protoflux:Physics{{#translation:}} "wikilink")