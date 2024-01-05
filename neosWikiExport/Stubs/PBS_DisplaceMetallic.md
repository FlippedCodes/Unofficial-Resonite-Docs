<languages></languages> <translate>

## Fields

## Usage

The PBS Displace Metallic shader can displace the vertices of a mesh *in
the direction of the vertex's normal* via the VertexDisplaceMap settings
and the WorldSpaceVertexOffsetMap.

### VertexDisplaceMap

The texture is an intensity map, so it goes from 0 (black) to 1 (white).
Every vertex in the mesh is displaced along its normal *by the same
factor* according to the following formula:

V'<sub>n</sub> ← V<sub>n</sub> + N<sub>n</sub> x \[ T'(x,y) x M + B \]

where:

-   V'<sub>n</sub> is the displaced position of vertex n.
-   V<sub>n</sub> is the original position of vertex n.
-   N<sub>n</sub> is the normal vector for vertex n.
-   T(x,y) is the texture map, where x and y are in the range \[-1,1\],
    and T(x,y) is in the range \[0,1\].
-   T'(x,y) is the texture map after it has been scaled by
    VertexDisplaceMapScale and offset by VertexDisplaceMapOffset.
-   M is the VertexDisplacementMagnitude.
-   B is the VertexDisplaceBias.
-   x and y are 0 (but see WorldSpaceVertexOffsetMap below).

It is important to realize that (x,y) is simply the position in the
texture that the swing of each vertex is based off of. It has nothing to
do with the positions of the vertices.

Thus:

-   T, along with VertexDisplaceMapScale and VertexDisplaceMapOffset,
    affects the "swing" of the vertex about its original position, in
    the range \[0,1\], along the direction of the vertex's normal.
-   N is the direction and base amplitude of the "swing" of the vertex
    about its original position.
-   M amplifies the effect of the swing.
-   B affects the centerpoint of the vertex's swing. Set it to -M/2 for
    equal swing if you expect to cover T(x,y) such that you'll see its
    full range.

### WorldSpaceVertexOffsetMap

Because the material may be applied to multiple instances of an object
at different world locations, it would look strange if all the instances
were displaced in exactly the same way. The WorldSpaceVertexOffsetMap
adds an additional modification to the displacements of the vertices of
an object at a given world position. In addition, this map allows each
vertex to be affected by a different position in the VertexDisplaceMap,
rather than just the (0,0) point.

The texture map for WorldSpaceVertexOffsetMap is an RGB color map.

If the vertex is at global position X,Z (the Y position is ignored),
then, after the texture scale and offset are applied, the texture's
value is R, G, B (each within the range \[0,1\]). These values have the
following effect on the displacement:

-   The R channel is the offset added to x for the VertexDisplaceMap
    formula above.
-   The G channel is the offset added to y for the VertexDisplaceMap
    formula above.

## Examples

Froox shows how the displace maps affect how the leaves in palm trees
are affected. Note that he is using a constantly bouncing LERP from 0 to
1 to simulate the effect of wind.
<youtube url=https://www.youtube.com/watch?v=VNQr_k0H0MY/>

## Related Components

</translate>

[Category:Materials:PBS](Category:Materials:PBS "wikilink")
[Category:Materials](Category:Materials "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink") [PBS
Displace Metallic](Category:Components{{#translation:}} "wikilink") [PBS
Displace
Metallic](Category:Components:Assets:Materials:PBS{{#translation:}} "wikilink")