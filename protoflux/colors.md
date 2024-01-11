# Colors

<!-- panels:start -->
<!-- div:title-panel -->
## Alpha Blend

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Colors/README.md#ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAlphaBlend ':include')

<!-- div:left-panel -->
The **Alpha Blend** node outputs a blend of the input `Source` and `Desination` colors according their respective alpha values.

### Usage

The output is an RGBA color whose alpha value is 1. Values for R, G and B are the sum of the input R, G and B values after multiplying by each input's alpha value. e.g. if the `Source` RGBA color is \[0.5, 0.5, 0.5, 0.5\] and the `Destination` color is \[1,1,1,0.25\] the output will be \[(0.5 \* 0.5) + (1 \* 0.25), (0.5 \* 0.5) + (1 \* 0.25), (0.5 \* 0.5) + (1 \* 0.25), 1\], or \[0.75, 0.75, 0.75, 1\].
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Black Body Color

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Colors/README.md#ProtoFlux.Runtimes.Execution.Nodes.Color.BlackBodyColor ':include')

<!-- div:left-panel -->
The **Black Body Color** node outputs a color corresponding to the color of light emitted by a [black body radiation](https://en.wikipedia.org/wiki/Black-body_radiation) source of the input Temperature.

### Usage

The input `Temperature` is in [Kelvin](https://en.wikipedia.org/wiki/Kelvin).
<!-- panels:end -->

<!--                                   Color (RGBA)                                -->

<!-- panels:start -->
<!-- div:title-panel -->
## Color To Hex Code

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Colors/README.md#ProtoFlux.Runtimes.Execution.Nodes.Color.ColorToHexCode ':include')

<!-- div:left-panel -->
The **Color To Hex Code** node outputs a hexadecimal code corresponding to the input RGB(A) `Color`.

### Usage

Default `Color` output is #000000 which corresponds to black.

If `IncludeAlpha` is True (False by default) a trailing fourth pair of hexadecimal values is added which encodes the alpha input value.

If `ShortForm` is True (false by Default) the output corresponding to each of R, G and B (and alpha if `IncludeAlpha` is True) is scaled and rounded so as to be represented as a single hexadecimal digit.

The `Prefix` input is prepended to the output string (# by default).
<!-- panels:end -->

#### Page end
