<languages></languages> <translate>

The **Hit UV Coordinate** node outputs the UV coordinate corresponding
to the input `HitPoint` on the `HitTriangleIndex` for the input
`HitCollider` mesh collider.

## Usage

The `HitCollider` must be a [MeshCollider
(Component)](MeshCollider_(Component) "wikilink") otherwise only default
output values are used.

The `UV` output provides the calculated UV coordinates, \[0;0\] by
default.

The `IsValidUV` outputs true if valid `HitCollider` and
`HitTriangleIndex` values are provided, otherwise false.

This node is primarily to be used in conjuction with [Raycast One
(Protoflux node)](Raycast_One_(Protoflux_node) "wikilink") or [Raycaster
(Protoflux node)](Raycaster_(Protoflux_node) "wikilink").

## Examples

## Node Menu

</translate>

[Hit UV Coordinate](Category:Protoflux{{#translation:}} "wikilink") [Hit
UV Coordinate](Category:Protoflux:Physics{{#translation:}} "wikilink")