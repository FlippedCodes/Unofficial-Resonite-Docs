<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Utility

### Continuous Relay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ContinuouslyChangingValueRelay`1 -->
<!-- ProtofluxNode:start -->
| Continuous Relay | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| output | T | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.ContinuouslyChangingValueRelay`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ContinuouslyChangingValueRelay`1 -->


### Demultiplex

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ValueDemultiplex`1 -->
<!-- ProtofluxNode:start -->
| Demultiplex | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| outputlist | T | ValueOutputs |
| input | T | DefaultValue |
| outputlistbuttons | T | ValueOutputs |
| input | Int32 | Index |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.ValueDemultiplex`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ValueDemultiplex`1 -->


### Multiplex

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ValueMultiplex`1 -->
<!-- ProtofluxNode:start -->
| Multiplex | Type | Label |
| --- | ---- | ----- |
| input | Int32 | Index |
| output | T | Output |
| inputlist | T | Inputs |
| output | Int32 | InputCount |
| inputlistbuttons | T | Inputs |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.ValueMultiplex`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ValueMultiplex`1 -->


### Index Of First Match

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Utility.IndexOfFirstValueMatch`1 -->
<!-- ProtofluxNode:start -->
| Index Of First Match | Type | Label |
| --- | ---- | ----- |
| input | T | Match |
| output | Int32 | Index |
| inputlist | T | Values |
| output | Boolean | FoundMatch |
| inputlistbuttons | T | Values |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.Utility.IndexOfFirstValueMatch`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Utility.IndexOfFirstValueMatch`1 -->


### Delay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.DelayValue`1 -->
<!-- ProtofluxNode:start -->
| Delay | Type | Label |
| --- | ---- | ----- |
| input | Single | DelaySeconds |
| output | T | DelayedValue |
| input | T | Value |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.DelayValue`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.DelayValue`1 -->


### Get Type

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.GetType -->
<!-- ProtofluxNode:start -->
| Get Type | Type | Label |
| --- | ---- | ----- |
| input | Object | Object |
| output | Type | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.GetType |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.GetType -->


### Nice Type Name

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Utility.NiceTypeName -->
<!-- ProtofluxNode:start -->
| Nice Type Name | Type | Label |
| --- | ---- | ----- |
| input | Type | Type |
| output | String | * |
| input | String | OpenSymbol |
| input | String | CloseSymbol |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.Utility.NiceTypeName |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Utility.NiceTypeName -->


### Notify Modified

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interactions.NotifyModified -->
<!-- ProtofluxNode:start -->
| Notify Modified | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IComponent | ModifiedComponent |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interactions.NotifyModified |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interactions.NotifyModified -->


### Pick Random

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Utility.PickRandomValue`1 -->
<!-- ProtofluxNode:start -->
| Pick Random | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Operands |
| output | T | * |
| inputlistbuttons | T | Operands |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.Utility.PickRandomValue`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Utility.PickRandomValue`1 -->


### Type Color

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.TypeColor -->
<!-- ProtofluxNode:start -->
| Type Color | Type | Label |
| --- | ---- | ----- |
| input | Type | Type |
| output | colorX | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.TypeColor |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.TypeColor -->


