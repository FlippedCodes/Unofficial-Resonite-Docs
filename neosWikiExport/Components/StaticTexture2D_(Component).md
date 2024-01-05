<languages></languages> <translate>

## Intoduction

The **StaticTexture2D** Component stores a reference to a static
[asset](Asset "wikilink") representing a 2D Texture.

## Usage

## Behavior

By default `Filter` is set to [Bilinear
Filtering](Bilinear_Filtering "wikilink"), however [Anisotropic
Filtering](Anisotropic_Filtering "wikilink") results in a much better
appearance at very steep angles, and only has a very minor performance
impact. If visual fidelity of your texture is a concern, you should set
`Filter` to Anisotropic, and `AnisotropicLevel` to 4 or 8.

### Special Functions

Any of the operations listed below will generate a new static texture
asset, and anything referring to this **StaticTexture2D** component will
be updated with the new texture. The existing asset is deleted from the
servers if no other items refer to it.

| Custom UI Elements                   |
|--------------------------------------|
| Name                                 |
| Invert RGB                           |
| Invert R                             |
| Invert G                             |
| Invert B                             |
| Invert A                             |
| Color to Alpha (White)               |
| Color to Alpha (Black)               |
| Alpha from intensity                 |
| Alpha to mask                        |
| Remove Alpha                         |
| Convert to grayscale (average)       |
| Swap R and G                         |
| Swap R and B                         |
| Swap G and B                         |
| Shift Hue                            |
| Adjust Gamma                         |
| Resize                               |
| Flip Horizontal                      |
| Flip Vertical                        |
| Rotate 90° CW                        |
| Rotate 90° CCW                       |
| Rotate 180°                          |
| Make square                          |
| To nearest power of two              |
| Diagnostic: Invalid floats           |
| Diagnostic: Generate Bitmap Metadata |
|                                      |

## Examples

## Related Components

</translate>

[StaticTexture2D
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[StaticTexture2D
(Component){{#translation:}}](Category:Components:Assets{{#translation:}} "wikilink")