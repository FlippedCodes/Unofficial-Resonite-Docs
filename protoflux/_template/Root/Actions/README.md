<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Actions

###   

<!-- ProtofluxNode:start -->
|    | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| output | Continuation | OnFail |
| Root/Actions | ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueDecrement\`2 |  |
<!-- ProtofluxNode:end -->


### ++

<!-- ProtofluxNode:start -->
| ++ | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| output | Continuation | OnFail |
| Root/Actions | ProtoFlux.Runtimes.Execution.Nodes.Actions.ValueIncrement\`2 |  |
<!-- ProtofluxNode:end -->


### Write

<!-- ProtofluxNode:start -->
| Write | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| input | T | Value |
| output | Continuation | OnFail |
| Root/Actions | ProtoFlux.Runtimes.Execution.Nodes.ValueWrite\`2 |  |
<!-- ProtofluxNode:end -->


### Write Latch

<!-- ProtofluxNode:start -->
| Write Latch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Set |
| output | Continuation | OnSet |
| input | SyncOperation | Reset |
| output | Continuation | OnReset |
| input | T | SetValue |
| output | Continuation | OnFail |
| input | T | ResetValue |
| Root/Actions | ProtoFlux.Runtimes.Execution.Nodes.ValueWriteLatch\`2 |  |
<!-- ProtofluxNode:end -->


### Tween

<!-- ProtofluxNode:start -->
| Tween | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnStarted |
| input | T | To |
| output | Continuation | OnDone |
| input | T | From |
| input | Single | Duration |
| input | CurvePreset | Curve |
| input | Boolean | ProportionalDuration |
| input | IField_1 | Target |
| Root/Actions | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Animation.TweenValue\`1 |  |
<!-- ProtofluxNode:end -->


