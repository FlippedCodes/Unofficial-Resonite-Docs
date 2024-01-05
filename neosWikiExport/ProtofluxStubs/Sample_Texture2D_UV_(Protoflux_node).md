<languages></languages> <translate>

The **Sample Texture2D UV** node samples the color of a pixel by
locating it on the input 2D texture according to the specified position
in [UV space](https://en.wikipedia.org/wiki/UV_mapping). This node is
distinct from from the [Get Texture 2D
Pixel](Get_Texture_2D_Pixel_(Protoflux_node) "wikilink") node as it
accepts a float2 instead of an int2; this lets the sampling be
[interpolated across
pixels](https://en.wikipedia.org/wiki/Texture_filtering) rather than
being constrained to individual pixels.

## Usage

`Texture` is the texture you want to sample a pixel from. `Position` is
the coordinate of the point you want to sample in UV space, where the
components of the input [float2](Types:Float2 "wikilink") range from 0.0
to 1.0. `WrapMode` defines whether the texture should wrap around UV
space.

## Examples

## Node Menu

</translate> }}

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Sample
Texture2D UV](Category:Protoflux{{#translation:}} "wikilink") [Sample
Texture2D UV](Category:Protoflux:Assets{{#translation:}} "wikilink")