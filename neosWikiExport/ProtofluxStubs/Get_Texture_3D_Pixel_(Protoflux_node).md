<languages></languages> <translate>

The **Get Texture 3D Pixel** node returns the color of a pixel by
locating it on the input 3D texture according to the specified position.
This node is distinct from from the [Sample Texture3D
UVW](Sample_Texture3D_UVW_(Protoflux_node) "wikilink") node as it
accepts an int3 instead of an float3; this ensures the sampling remains
constrained to individual pixels rather than being [interpolated across
pixels](https://en.wikipedia.org/wiki/Texture_filtering).

## Usage

`Texture` is the texture you want to sample a pixel from. `Position` is
the 3D coordinate (starting from the bottom left of the texture) of the
pixel you want to return the color value of.

## Examples

## Node Menu

</translate> }}

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Get
Texture 3D Pixel](Category:Protoflux{{#translation:}} "wikilink") [Get
Texture 3D Pixel](Category:Protoflux:Assets{{#translation:}} "wikilink")