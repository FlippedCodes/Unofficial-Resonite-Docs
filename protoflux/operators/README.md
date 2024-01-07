# Operators

<!-- panels:start -->
<!-- div:title-panel -->
## ?:

<!-- div:right-panel -->
[Node](../_template/nodes/Root/Operators/README.md#ProtoFlux.Runtimes.Execution.Nodes.ValueConditional`1 ':include')

<!-- div:left-panel -->
The **?:** node outputs either the OnTrue or OnFalse input values
depending on the value of the Condition input.

### Usage

When spawned from the node browser, this node accepts the float datatype
by default. However, this node can be overloaded to use other value or
reference types if an appropriate wire is connected. This operator is
commonly referred to as the 'ternary' or 'conditional' operator.
[Youtube Video](https://www.youtube-nocookie.com/embed/qIHwqWjaeyU ':include :type=iframe')
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## ==

<!-- div:right-panel -->
[Node](../_template/nodes/Root/Operators/README.md#ProtoFlux.Runtimes.Execution.Nodes.ValueEquals`1 ':include')

<!-- div:left-panel -->
The **==** node checks whether inputs A and B are equal, outputting True if they are equal and False if they are not equal.

### Usage

When spawned from the node browser, this node accepts float data by default. However, this node can be overloaded to accept a wide variety of value and reference datatypes if an appropriate wire is connected to one of the inputs.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Distance

<!-- div:right-panel -->
[Node](../_template/nodes/Root/Operators/README.md#ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float ':include')

<!-- div:left-panel -->
Get distance by float between two object.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Mask

<!-- div:right-panel -->
[Node](../_template/nodes/Root/Operators/README.md#ProtoFlux.Runtimes.Execution.Nodes.Operators.Mask_Uint2 ':include')

<!-- div:left-panel -->
Filtered value from Input data by bool switch.

### Usage

Bool(True/False) type input switches make output. If switch is set to all "True" then output data is equal by first input parameter.

<!-- ### Example

\[1, 2\] is True side and \[3, 4\] is False side. Top switch is True. So getting top data(1) from True side. And bottom switch is set to False this is get bottom data(4) from False side. -->
<!-- panels:end -->

#### Page end
