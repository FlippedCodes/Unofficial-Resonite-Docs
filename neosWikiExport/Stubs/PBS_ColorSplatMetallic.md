<languages></languages> <translate>

A PBS Color Splat (Metallic & Specular) shader:

-   Supports 4 textures of each and a color map, where each channel
    represents contribution from each
-   Supports height map blending too for sharper, more defined look
-   Is useful for terrains

## Fields

## Usage

For comprehensive guides see [Color Splat
Materials](Color_Splat_Materials "wikilink").

**PackedEmissionMap** is greyscale and uses **EmissiveColor0-3** Colors.

**EmissiveMap0-3** can be used for RGB Emissive Maps.

Referencing a **PackedEmissionMap** Overrides **EmissiveMap0-3** Inputs.

**Packed Textures Channel Mappings:**

**PackedHeightMap:**
**R:** HeightMap0 - greyscale

**G:** HeightMap1 - greyscale

**B:** HeightMap2 - greyscale

**A:** HeightMap4 - greyscale

<!-- -->

**PackedEmissionMap:**
**R:** EmissionMap0 - greyscale

**G:** EmissionMap1 - greyscale

**B:** EmissionMap2 - greyscale

**A:** EmissionMap4 - greyscale

<!-- -->

**PackedNormalMap01:**
**R:** NormalMap0 - Red

**G:** NormalMap0 - Green

**B:** NormalMap1 - Red

**A:** NormalMap1 - Green

<!-- -->

**PackedNormalMap23:**
**R:** NormalMap2 - Red

**G:** NormalMap2 - Green

**B:** NormalMap3 - Red

**A:** NormalMap3 - Green

<!-- -->

**MetallicMap01:**
**R:** MetallicMap0 - Red

**G:** MetallicMap0 - Alpha

**B:** MetallicMap1 - Red

**A:** MetallicMap1 - Alpha

<!-- -->

**MetallicMap23:**
**R:** MetallicMap2 - Red

**G:** MetallicMap2 - Alpha

**B:** MetallicMap3 - Red

**A:** MetallicMap3 - Alpha

## Examples

## Related Components

</translate>

[Category:Materials:PBS](Category:Materials:PBS "wikilink")
[Category:Materials](Category:Materials "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink") [PBS Color
Splat Metallic](Category:Components{{#translation:}} "wikilink") [PBS
Color Splat
Metallic](Category:Components:Assets:Materials:PBS{{#translation:}} "wikilink")