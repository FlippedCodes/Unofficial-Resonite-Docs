<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Utility

### Continuous Relay

<!-- ProtofluxNode:start -->
| Continuous Relay | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| output | T | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.ContinuouslyChangingValueRelay\`1 |  |
<!-- ProtofluxNode:end -->


### Demultiplex

<!-- ProtofluxNode:start -->
| Demultiplex | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| outputlist | T | ValueOutputs |
| input | T | DefaultValue |
| input | Int32 | Index |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.ValueDemultiplex\`1 |  |
<!-- ProtofluxNode:end -->


### Multiplex

<!-- ProtofluxNode:start -->
| Multiplex | Type | Label |
| --- | ---- | ----- |
| input | Int32 | Index |
| output | T | Output |
| inputlist | T | Inputs |
| output | Int32 | InputCount |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.ValueMultiplex\`1 |  |
<!-- ProtofluxNode:end -->


### Index Of First Match

<!-- ProtofluxNode:start -->
| Index Of First Match | Type | Label |
| --- | ---- | ----- |
| input | T | Match |
| output | Int32 | Index |
| inputlist | T | Values |
| output | Boolean | FoundMatch |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.Utility.IndexOfFirstValueMatch\`1 |  |
<!-- ProtofluxNode:end -->


### Delay

<!-- ProtofluxNode:start -->
| Delay | Type | Label |
| --- | ---- | ----- |
| input | Single | DelaySeconds |
| output | T | DelayedValue |
| input | T | Value |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.DelayValue\`1 |  |
<!-- ProtofluxNode:end -->


### Get Type

<!-- ProtofluxNode:start -->
| Get Type | Type | Label |
| --- | ---- | ----- |
| input | Object | Object |
| output | Type | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.GetType |  |
<!-- ProtofluxNode:end -->


### Nice Type Name

<!-- ProtofluxNode:start -->
| Nice Type Name | Type | Label |
| --- | ---- | ----- |
| input | Type | Type |
| output | String | * |
| input | String | OpenSymbol |
| input | String | CloseSymbol |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.Utility.NiceTypeName |  |
<!-- ProtofluxNode:end -->


### Notify Modified

<!-- ProtofluxNode:start -->
| Notify Modified | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IComponent | ModifiedComponent |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interactions.NotifyModified |  |
<!-- ProtofluxNode:end -->


### Pick Random

<!-- ProtofluxNode:start -->
| Pick Random | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Operands |
| output | T | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.Utility.PickRandomValue\`1 |  |
<!-- ProtofluxNode:end -->


### Type Color

<!-- ProtofluxNode:start -->
| Type Color | Type | Label |
| --- | ---- | ----- |
| input | Type | Type |
| output | colorX | * |
| Root/Utility | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Utility.TypeColor |  |
<!-- ProtofluxNode:end -->


