<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root

### Async Function Proxy

<!-- ProtofluxNode:start -->
| Async Function Proxy | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| output | TResult | Result |
| Root | FrooxEngine.ProtoFlux.CoreNodes.AsyncValueFunctionProxy\`1 |  |
<!-- ProtofluxNode:end -->


### Async Method Proxy

<!-- ProtofluxNode:start -->
| Async Method Proxy | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| Root | FrooxEngine.ProtoFlux.CoreNodes.AsyncMethodProxy |  |
<!-- ProtofluxNode:end -->


### Add

<!-- ProtofluxNode:start -->
| Add | Type | Label |
| --- | ---- | ----- |
| input | Single | A |
| output | Single | Output |
| input | Single | B |
| Root | ProtoFlux.Runtimes.DSP.Array.TestAddArraysNode |  |
<!-- ProtofluxNode:end -->


### Nest

<!-- ProtofluxNode:start -->
| Nest | Type | Label |
| --- | ---- | ----- |
| inputlist | MixedOperation | Operations |
| outputlist | Call | Impulses |
| inputlist | ArgumentList | Inputs |
| outputlist | * | Outputs |
| Root | ProtoFlux.Runtimes.Execution.NestedNode\`1 |  |
<!-- ProtofluxNode:end -->


### Data Import Node

<!-- ProtofluxNode:start -->
| Data Import Node | Type | Label |
| --- | ---- | ----- |
| Root | ProtoFlux.Core.DataImportNode |  |
<!-- ProtofluxNode:end -->


### Function Proxy

<!-- ProtofluxNode:start -->
| Function Proxy | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| output | TResult | Result |
| Root | FrooxEngine.ProtoFlux.CoreNodes.SyncValueFunctionProxy\`1 |  |
<!-- ProtofluxNode:end -->


### Impulse Export Node

<!-- ProtofluxNode:start -->
| Impulse Export Node | Type | Label |
| --- | ---- | ----- |
| Root | ProtoFlux.Core.ImpulseExportNode |  |
<!-- ProtofluxNode:end -->


### Method Proxy

<!-- ProtofluxNode:start -->
| Method Proxy | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root | FrooxEngine.ProtoFlux.CoreNodes.SyncMethodProxy |  |
<!-- ProtofluxNode:end -->


### Test Amplify Array

<!-- ProtofluxNode:start -->
| Test Amplify Array | Type | Label |
| --- | ---- | ----- |
| input | Single | Input |
| output | Single | Output |
| input | Single | Multiplier |
| Root | ProtoFlux.Runtimes.DSP.Array.TestAmplifyArray |  |
<!-- ProtofluxNode:end -->


### Test Conditional Collect Array Node

<!-- ProtofluxNode:start -->
| Test Conditional Collect Array Node | Type | Label |
| --- | ---- | ----- |
| input | Single | OnTrue |
| output | Single | Output |
| input | Single | OnFalse |
| input | Boolean | Condition |
| Root | ProtoFlux.Runtimes.DSP.Array.TestConditionalCollectArrayNode |  |
<!-- ProtofluxNode:end -->


### Test Negate Array Node

<!-- ProtofluxNode:start -->
| Test Negate Array Node | Type | Label |
| --- | ---- | ----- |
| input | Single | Input |
| output | Single | Output |
| Root | ProtoFlux.Runtimes.DSP.Array.TestNegateArrayNode |  |
<!-- ProtofluxNode:end -->


### Test Random Array Node

<!-- ProtofluxNode:start -->
| Test Random Array Node | Type | Label |
| --- | ---- | ----- |
| output | Single | Output |
| Root | ProtoFlux.Runtimes.DSP.Array.TestRandomArrayNode |  |
<!-- ProtofluxNode:end -->


### Test Sequence Array Node

<!-- ProtofluxNode:start -->
| Test Sequence Array Node | Type | Label |
| --- | ---- | ----- |
| output | Single | Output |
| Root | ProtoFlux.Runtimes.DSP.Array.TestSequenceArrayNode |  |
<!-- ProtofluxNode:end -->


