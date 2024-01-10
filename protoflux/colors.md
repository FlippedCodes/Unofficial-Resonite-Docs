# Colors

<!-- panels:start -->
<!-- div:title-panel -->
## Alpha Blend

<!-- div:right-panel -->
[Node](./_template/nodes/Root/Colors/README.md#ProtoFlux.Runtimes.Execution.Nodes.Color.ColorAlphaBlend ':include')

<!-- div:left-panel -->
The **Alpha Blend** node outputs a blend of the input `Source` and `Desination` colors according their respective alpha values.

### Usage

The output is an RGBA color whose alpha value is 1. Values for R, G and B are the sum of the input R, G and B values after multiplying by each input's alpha value. e.g. if the `Source` RGBA color is \[0.5, 0.5, 0.5, 0.5\] and the `Destination` color is \[1,1,1,0.25\] the output will be \[(0.5 \* 0.5) + (1 \* 0.25), (0.5 \* 0.5) + (1 \* 0.25), (0.5 \* 0.5) + (1 \* 0.25), 1\], or \[0.75, 0.75, 0.75, 1\].
<!-- panels:end -->

#### Page end
