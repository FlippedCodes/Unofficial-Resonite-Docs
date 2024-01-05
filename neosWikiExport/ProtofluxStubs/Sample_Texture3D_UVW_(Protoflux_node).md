<languages></languages> <translate>

The **Sample Texture3D UVW** node samples the color of a pixel by
locating it on the input 3D texture according to the specified position
in [UVW space](https://en.wikipedia.org/wiki/UV_mapping). This node is
distinct from from the [Get Texture 3D
Pixel](Get_Texture_3D_Pixel_(Protoflux_node) "wikilink") node as it
accepts a float3 instead of an int3; this lets the sampling be
[interpolated across
pixels](https://en.wikipedia.org/wiki/Texture_filtering) rather than
being constrained to individual pixels.

## Usage

`Texture` is the texture you want to sample a pixel from. `Position` is
the coordinate of the point you want to sample in UVW space, where the
components of the input [float3](Types:Float3 "wikilink") range from 0.0
to 1.0.

## Examples

## Node Menu

</translate> }}

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Sample
Texture3D UVW](Category:Protoflux{{#translation:}} "wikilink") [Sample
Texture3D UVW](Category:Protoflux:Assets{{#translation:}} "wikilink")