<languages></languages> <translate>

## Intoduction

The **IcoSphereMesh** component procedurally generates a icosahedron
mesh for use with a MeshRenderer, according to the parameters provided.

## Usage

## Behavior

The vertex count on a generated **IcoSphereMesh** is 20×4<sup>n</sup>,
where n is `Subdivisions` — this may result in extremely large vertex
counts for seemingly small values of `Subdivisions` — **Please use
caution!**

As of [Version
2020.10.25.1103](https://github.com/Frooxius/ResonitePublic/issues/1206),
this value is clamped in the range \[0,8\] to prevent accidentally
creating a mesh with an excessive number of vertices.

## Examples

## Related Components

</translate>

[IcoSphereMesh
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[IcoSphereMesh
(Component){{#translation:}}](Category:Components:Assets:Procedural_Meshes{{#translation:}} "wikilink")