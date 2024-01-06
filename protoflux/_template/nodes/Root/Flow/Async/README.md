<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Flow/Async

### Async Dynamic Impulse Receiver

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiver -->
<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Receiver | Type                                                                   | Label       |
| ------------------------------ | ---------------------------------------------------------------------- | ----------- |
| output                         | AsyncCall                                                              | OnTriggered |
| Root/Flow/Async                | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiver |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiver -->


### Async For

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.AsyncFor -->
<!-- ProtofluxNode:start -->
| Async For       | Type                                        | Label         |
| --------------- | ------------------------------------------- | ------------- |
| input           | AsyncOperation                              | *             |
| output          | AsyncCall                                   | LoopStart     |
| input           | Int32                                       | Count         |
| output          | AsyncCall                                   | LoopIteration |
| input           | Boolean                                     | Reverse       |
| output          | Continuation                                | LoopEnd       |
| output          | Int32                                       | Iteration     |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.AsyncFor |               |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.AsyncFor -->


### Async Sequence

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.AsyncSequence -->
<!-- ProtofluxNode:start -->
| Async Sequence    | Type                                             | Label |
| ----------------- | ------------------------------------------------ | ----- |
| input             | AsyncOperation                                   | *     |
| outputlist        | AsyncCall                                        | Calls |
| outputlistbuttons | AsyncCall                                        | Calls |
| Root/Flow/Async   | ProtoFlux.Runtimes.Execution.Nodes.AsyncSequence |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.AsyncSequence -->


### Async While

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.AsyncWhile -->
<!-- ProtofluxNode:start -->
| Async While     | Type                                          | Label         |
| --------------- | --------------------------------------------- | ------------- |
| input           | AsyncOperation                                | *             |
| output          | AsyncCall                                     | LoopStart     |
| input           | Boolean                                       | Condition     |
| output          | AsyncCall                                     | LoopIteration |
| output          | Continuation                                  | LoopEnd       |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.AsyncWhile |               |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.AsyncWhile -->


### Asyncs Dynamic Impulse Trigger

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTrigger -->
<!-- ProtofluxNode:start -->
| Asyncs Dynamic Impulse Trigger | Type                                                                  | Label           |
| ------------------------------ | --------------------------------------------------------------------- | --------------- |
| input                          | AsyncOperation                                                        | *               |
| output                         | Continuation                                                          | Next            |
| input                          | String                                                                | Tag             |
| output                         | Int32                                                                 | TriggeredCount  |
| input                          | Slot                                                                  | TargetHierarchy |
| input                          | Boolean                                                               | ExcludeDisabled |
| Root/Flow/Async                | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTrigger |                 |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTrigger -->


### Async Range Loop

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.AsyncRangeLoopInt -->
<!-- ProtofluxNode:start -->
| Async Range Loop | Type                                                 | Label         |
| ---------------- | ---------------------------------------------------- | ------------- |
| input            | AsyncOperation                                       | *             |
| output           | AsyncCall                                            | LoopStart     |
| input            | Int32                                                | Start         |
| output           | AsyncCall                                            | LoopIteration |
| input            | Int32                                                | End           |
| output           | Continuation                                         | LoopEnd       |
| input            | Int32                                                | StepSize      |
| output           | Int32                                                | Current       |
| Root/Flow/Async  | ProtoFlux.Runtimes.Execution.Nodes.AsyncRangeLoopInt |               |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.AsyncRangeLoopInt -->


### Async Dynamic Impulse Reciever With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue`1 -->
<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Reciever With Data | Type                                                                              | Label       |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ----------- |
| output                                   | AsyncCall                                                                         | OnTriggered |
| output                                   | T                                                                                 | Value       |
| Root/Flow/Async                          | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue`1 |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue`1 -->


### Async Dynamic Impulse Trigger With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue`1 -->
<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Trigger With Data | Type                                                                             | Label           |
| --------------------------------------- | -------------------------------------------------------------------------------- | --------------- |
| input                                   | AsyncOperation                                                                   | *               |
| output                                  | Continuation                                                                     | Next            |
| input                                   | String                                                                           | Tag             |
| output                                  | Int32                                                                            | TriggeredCount  |
| input                                   | Slot                                                                             | TargetHierarchy |
| input                                   | Boolean                                                                          | ExcludeDisabled |
| input                                   | T                                                                                | Value           |
| Root/Flow/Async                         | ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue`1 |                 |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue`1 -->


### Updates Delay With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesWithValue`1 -->
<!-- ProtofluxNode:start -->
| Updates Delay With Data | Type                                                                         | Label        |
| ----------------------- | ---------------------------------------------------------------------------- | ------------ |
| input                   | AsyncOperation                                                               | *            |
| output                  | Continuation                                                                 | Next         |
| input                   | Int32                                                                        | Updates      |
| output                  | AsyncCall                                                                    | OnTriggered  |
| input                   | T                                                                            | Value        |
| output                  | T                                                                            | DelayedValue |
| Root/Flow/Async         | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesWithValue`1 |              |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesWithValue`1 -->


### Updates Or Time Delay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsInt -->
<!-- ProtofluxNode:start -->
| Updates Or Time Delay | Type                                                                          | Label       |
| --------------------- | ----------------------------------------------------------------------------- | ----------- |
| input                 | AsyncOperation                                                                | *           |
| output                | Continuation                                                                  | Next        |
| input                 | Int32                                                                         | Updates     |
| output                | AsyncCall                                                                     | OnTriggered |
| input                 | Int32                                                                         | Duration    |
| Root/Flow/Async       | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsInt |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrSecondsInt -->


### Updates Or Time Delay With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithValueTimeSpan`1 -->
<!-- ProtofluxNode:start -->
| Updates Or Time Delay With Data | Type                                                                                       | Label        |
| ------------------------------- | ------------------------------------------------------------------------------------------ | ------------ |
| input                           | AsyncOperation                                                                             | *            |
| output                          | Continuation                                                                               | Next         |
| input                           | Int32                                                                                      | Updates      |
| output                          | AsyncCall                                                                                  | OnTriggered  |
| input                           | T                                                                                          | Value        |
| output                          | T                                                                                          | DelayedValue |
| input                           | TimeSpan                                                                                   | Duration     |
| Root/Flow/Async                 | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithValueTimeSpan`1 |              |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdatesOrTimeWithValueTimeSpan`1 -->


### Start Async Task

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.StartAsyncTask -->
<!-- ProtofluxNode:start -->
| Start Async Task | Type                                                                | Label     |
| ---------------- | ------------------------------------------------------------------- | --------- |
| input            | SyncOperation                                                       | *         |
| output           | AsyncResumption                                                     | TaskStart |
| output           | Continuation                                                        | OnStarted |
| output           | Continuation                                                        | OnFailed  |
| Root/Flow/Async  | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.StartAsyncTask |           |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.StartAsyncTask -->


### Updates Delay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdates -->
<!-- ProtofluxNode:start -->
| Updates Delay   | Type                                                              | Label       |
| --------------- | ----------------------------------------------------------------- | ----------- |
| input           | AsyncOperation                                                    | *           |
| output          | Continuation                                                      | Next        |
| input           | Int32                                                             | Updates     |
| output          | AsyncCall                                                         | OnTriggered |
| Root/Flow/Async | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdates |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Async.DelayUpdates -->


