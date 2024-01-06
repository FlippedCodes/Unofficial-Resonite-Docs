<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Flow/Async

### Async Dynamic Impulse Receiver

<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Receiver | Type | Label |
| --- | ---- | ----- |
| output | AsyncCall | OnTriggered |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiver |  |
<!-- ProtofluxNode:end -->


### Async For

<!-- ProtofluxNode:start -->
| Async For | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | LoopStart |
| input | Int32 | Count |
| output | AsyncCall | LoopIteration |
| input | Boolean | Reverse |
| output | Continuation | LoopEnd |
| output | Int32 | Iteration |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.AsyncFor |  |
<!-- ProtofluxNode:end -->


### Async Sequence

<!-- ProtofluxNode:start -->
| Async Sequence | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| outputlist | AsyncCall | Calls |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.AsyncSequence |  |
<!-- ProtofluxNode:end -->


### Async While

<!-- ProtofluxNode:start -->
| Async While | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | LoopStart |
| input | Boolean | Condition |
| output | AsyncCall | LoopIteration |
| output | Continuation | LoopEnd |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.AsyncWhile |  |
<!-- ProtofluxNode:end -->


### Asyncs Dynamic Impulse Trigger

<!-- ProtofluxNode:start -->
| Asyncs Dynamic Impulse Trigger | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | String | Tag |
| output | Int32 | TriggeredCount |
| input | Slot | TargetHierarchy |
| input | Boolean | ExcludeDisabled |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTrigger |  |
<!-- ProtofluxNode:end -->


### Async Range Loop

<!-- ProtofluxNode:start -->
| Async Range Loop | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | LoopStart |
| input | Int32 | Start |
| output | AsyncCall | LoopIteration |
| input | Int32 | End |
| output | Continuation | LoopEnd |
| input | Int32 | StepSize |
| output | Int32 | Current |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.AsyncRangeLoopInt |  |
<!-- ProtofluxNode:end -->


### Async Dynamic Impulse Reciever With Data

<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Reciever With Data | Type | Label |
| --- | ---- | ----- |
| output | AsyncCall | OnTriggered |
| output | T | Value |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue\`1 |  |
<!-- ProtofluxNode:end -->


### Async Dynamic Impulse Trigger With Data

<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Trigger With Data | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | String | Tag |
| output | Int32 | TriggeredCount |
| input | Slot | TargetHierarchy |
| input | Boolean | ExcludeDisabled |
| input | T | Value |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue\`1 |  |
<!-- ProtofluxNode:end -->


### Updates Delay With Data

<!-- ProtofluxNode:start -->
| Updates Delay With Data | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | Int32 | Updates |
| output | AsyncCall | OnTriggered |
| input | T | Value |
| output | T | DelayedValue |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesWithValue\`1 |  |
<!-- ProtofluxNode:end -->


### Updates Or Time Delay

<!-- ProtofluxNode:start -->
| Updates Or Time Delay | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | Int32 | Updates |
| output | AsyncCall | OnTriggered |
| input | Int32 | Duration |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsInt |  |
<!-- ProtofluxNode:end -->


### Updates Or Time Delay With Data

<!-- ProtofluxNode:start -->
| Updates Or Time Delay With Data | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | Int32 | Updates |
| output | AsyncCall | OnTriggered |
| input | T | Value |
| output | T | DelayedValue |
| input | TimeSpan | Duration |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithValueTimeSpan\`1 |  |
<!-- ProtofluxNode:end -->


### Start Async Task

<!-- ProtofluxNode:start -->
| Start Async Task | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | AsyncResumption | TaskStart |
| output | Continuation | OnStarted |
| output | Continuation | OnFailed |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.StartAsyncTask |  |
<!-- ProtofluxNode:end -->


### Updates Delay

<!-- ProtofluxNode:start -->
| Updates Delay | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | Int32 | Updates |
| output | AsyncCall | OnTriggered |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdates |  |
<!-- ProtofluxNode:end -->


