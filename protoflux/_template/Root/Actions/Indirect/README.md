<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Actions/Indirect

### Indirect Decrement

<!-- ProtofluxNode:start -->
| Indirect Decrement | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| input | IVariable_2 | Variable |
| output | Continuation | OnFail |
| Root/Actions/Indirect | ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueIndirectDecrement\`2 |  |
<!-- ProtofluxNode:end -->


### Indirect Increment

<!-- ProtofluxNode:start -->
| Indirect Increment | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| input | IVariable_2 | Variable |
| output | Continuation | OnFail |
| Root/Actions/Indirect | ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueIndirectIncrement\`2 |  |
<!-- ProtofluxNode:end -->


### Indirect Write

<!-- ProtofluxNode:start -->
| Indirect Write | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| input | IVariable_2 | Variable |
| output | Continuation | OnFail |
| input | T | Value |
| Root/Actions/Indirect | ProtoFlux.Runtimes.Execution.Nodes.ValueIndirectWrite\`2 |  |
<!-- ProtofluxNode:end -->


### Indirect Write Latch

<!-- ProtofluxNode:start -->
| Indirect Write Latch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Set |
| output | Continuation | OnSet |
| input | SyncOperation | Reset |
| output | Continuation | OnReset |
| input | IVariable_2 | Variable |
| output | Continuation | OnFail |
| input | T | SetValue |
| input | T | ResetValue |
| Root/Actions/Indirect | ProtoFlux.Runtimes.Execution.Nodes.ValueIndirectWriteLatch\`2 |  |
<!-- ProtofluxNode:end -->


