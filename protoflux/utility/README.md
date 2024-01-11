# Utilities

<!-- panels:start -->
<!-- div:title-panel -->
## Demultiplex

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Utility/README.md#ProtoFlux.Runtimes.Execution.Nodes.ValueDemultiplex`1 ':include')

<!-- div:left-panel -->
The **Demultiplex** node outputs the input `Value` at the output with corresponding to the input `Index`. Every other output is set to the input `DefaultValue`.

### Usage

The `Index` value corresponding to each `ValueOutput` is indicated in square brackets in the output's name.

The `OutputCount` output provides the number of ValueOutputs the node currently supports.

This node has a dummy unset datatype when spawned from the node browser. However, it will overload to the correct type when any value or reference typed input is connected. If the `Index` is less than 0 or greater than `OutputCount` -1 all outputs will have the `DefaultValue`.
<!-- panels:end -->
