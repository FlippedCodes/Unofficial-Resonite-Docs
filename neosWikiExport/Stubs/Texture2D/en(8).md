<languages/>Texture2D is an object that contains a texture. A texture is
an image that is used by [Materials](Material "wikilink") in Resonite to
customize the appearance of an object. Textures provide information
about how an object should be rendered.

Materials contain one or more texture slots which can be filled with
various textures. Textures may be used to supply various types of data
to materials, including albedo (color), metallics, roughness, normals
(surface variations), height, and more. When imported, textures are
represented as a plane. Textures can be placed into various texture
slots by holding them and clicking the appropriate slot in a material.
Texture planes only serve to preview the texture and aren't necessary
for the texture to function. After placing a texture into a texture
slot, the texture plane may be deleted without consequence.

The resolution of a texture is always a power of two. For example, the
resolution of a 2048x2048 texture can be represented as 2^11x2^11. The
[bit depth](https://en.wikipedia.org/wiki/Color_depth) of a texture is
either 8 or 16 bits. Higher bit depths are used for certain texture
types that benefit from a higher level of color precision, like height
and normal maps.

## See Also

-   [StaticTexture2D
    (Component)](StaticTexture2D_(Component) "wikilink")