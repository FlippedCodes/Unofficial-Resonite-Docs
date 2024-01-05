<languages></languages> <translate>

The **To HSL** takes an input color `C` and decomposes it into the
corresponding `H` (hue), `S` (saturation) and `L` (lightness) values.

## Usage

HSL format is an alternative way to specify colors in the RBG colorspace
- see [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV).

Note that the default input is \[0,0,0,0\] which gives default output of
`H` = NaN, `S` = 0 and `V` = 0. Values of \[0,0,0,\*\] or \[1,1,1,\*\]
give NaN as the `H` output which has the potential to cause unexpected
behavior with downstream calculations etc.

## Examples

## Node Menu

</translate>

[To HSL](Category:Protoflux{{#translation:}} "wikilink") [To
HSL](Category:Protoflux:Color{{#translation:}} "wikilink")