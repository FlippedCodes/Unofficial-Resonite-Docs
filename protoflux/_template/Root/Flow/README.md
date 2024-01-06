<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Flow

### Fire On Local Change

<!-- ProtofluxNode:start -->
| Fire On Local Change | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| output | Call | OnChange |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalValueChange\`1 |  |
<!-- ProtofluxNode:end -->


### Fire On Local False

<!-- ProtofluxNode:start -->
| Fire On Local False | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnChange |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalFalse |  |
<!-- ProtofluxNode:end -->


### Fire On Local True

<!-- ProtofluxNode:start -->
| Fire On Local True | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnChange |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalTrue |  |
<!-- ProtofluxNode:end -->


### Local Impulse Timeout

<!-- ProtofluxNode:start -->
| Local Impulse Timeout | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Trigger |
| output | Continuation | Next |
| input | SyncOperation | Reset |
| input | Single | Timeout |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalImpulseTimeoutSeconds |  |
<!-- ProtofluxNode:end -->


### Delay

<!-- ProtofluxNode:start -->
| Delay | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | TimeSpan | Duration |
| output | AsyncCall | OnTriggered |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.DelayTimeSpan |  |
<!-- ProtofluxNode:end -->


### Time Delay With Data

<!-- ProtofluxNode:start -->
| Time Delay With Data | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | T | Value |
| output | AsyncCall | OnTriggered |
| input | TimeSpan | Duration |
| output | T | DelayedValue |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.DelayWithValueTimeSpan\`1 |  |
<!-- ProtofluxNode:end -->


### Range Loop

<!-- ProtofluxNode:start -->
| Range Loop | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Call | LoopStart |
| input | Int32 | Start |
| output | Call | LoopIteration |
| input | Int32 | End |
| output | Continuation | LoopEnd |
| input | Int32 | StepSize |
| output | Int32 | Current |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.RangeLoopInt |  |
<!-- ProtofluxNode:end -->


### Dynamic Impulse Receiver

<!-- ProtofluxNode:start -->
| Dynamic Impulse Receiver | Type | Label |
| --- | ---- | ----- |
| output | Call | OnTriggered |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiver |  |
<!-- ProtofluxNode:end -->


### Dynamic Impulse Trigger

<!-- ProtofluxNode:start -->
| Dynamic Impulse Trigger | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | String | Tag |
| output | Int32 | TriggeredCount |
| input | Slot | TargetHierarchy |
| input | Boolean | ExcludeDisabled |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTrigger |  |
<!-- ProtofluxNode:end -->


### Boolean Latch

<!-- ProtofluxNode:start -->
| Boolean Latch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Set |
| output | Continuation | OnSet |
| input | SyncOperation | Reset |
| output | Continuation | OnReset |
| input | SyncOperation | Toggle |
| output | Boolean | * |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DataModelBooleanToggle |  |
<!-- ProtofluxNode:end -->


### Dynamic Impulse Reciever With Data

<!-- ProtofluxNode:start -->
| Dynamic Impulse Reciever With Data | Type | Label |
| --- | ---- | ----- |
| output | Call | OnTriggered |
| output | T | Value |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue\`1 |  |
<!-- ProtofluxNode:end -->


### Dynamic Impulse Trigger With Data

<!-- ProtofluxNode:start -->
| Dynamic Impulse Trigger With Data | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | String | Tag |
| output | Int32 | TriggeredCount |
| input | Slot | TargetHierarchy |
| input | Boolean | ExcludeDisabled |
| input | T | Value |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue\`1 |  |
<!-- ProtofluxNode:end -->


### Fire On Change

<!-- ProtofluxNode:start -->
| Fire On Change | Type | Label |
| --- | ---- | ----- |
| input | User | OnlyForUser |
| output | Call | OnChanged |
| input | T | Value |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnValueChange\`1 |  |
<!-- ProtofluxNode:end -->


### Fire On False

<!-- ProtofluxNode:start -->
| Fire On False | Type | Label |
| --- | ---- | ----- |
| input | User | OnlyForUser |
| output | Call | OnChanged |
| input | Boolean | Condition |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnFalse |  |
<!-- ProtofluxNode:end -->


### Fire On True

<!-- ProtofluxNode:start -->
| Fire On True | Type | Label |
| --- | ---- | ----- |
| input | User | OnlyForUser |
| output | Call | OnChanged |
| input | Boolean | Condition |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue |  |
<!-- ProtofluxNode:end -->


### Fire While True

<!-- ProtofluxNode:start -->
| Fire While True | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue |  |
<!-- ProtofluxNode:end -->


### For

<!-- ProtofluxNode:start -->
| For | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Call | LoopStart |
| input | Int32 | Count |
| output | Call | LoopIteration |
| input | Boolean | Reverse |
| output | Continuation | LoopEnd |
| output | Int32 | Iteration |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.For |  |
<!-- ProtofluxNode:end -->


### If

<!-- ProtofluxNode:start -->
| If | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnTrue |
| input | Boolean | Condition |
| output | Continuation | OnFalse |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.If |  |
<!-- ProtofluxNode:end -->


### Impulse Demultiplexer

<!-- ProtofluxNode:start -->
| Impulse Demultiplexer | Type | Label |
| --- | ---- | ----- |
| inputlist | SyncOperation | Operations |
| output | Continuation | OnTriggered |
| output | Int32 | Index |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.ImpulseDemultiplexer |  |
<!-- ProtofluxNode:end -->


### Local Fire While True

<!-- ProtofluxNode:start -->
| Local Fire While True | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalFireWhileTrue |  |
<!-- ProtofluxNode:end -->


### Local Leaky Impulse Bucket

<!-- ProtofluxNode:start -->
| Local Leaky Impulse Bucket | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Trigger |
| output | Call | Pulse |
| input | SyncOperation | Reset |
| output | Continuation | Overflow |
| input | Single | Interval |
| output | Int32 | CurrentCapacity |
| input | Int32 | MaximumCapacity |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalLeakyImpulseBucket |  |
<!-- ProtofluxNode:end -->


### Local Update

<!-- ProtofluxNode:start -->
| Local Update | Type | Label |
| --- | ---- | ----- |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalUpdate |  |
<!-- ProtofluxNode:end -->


### Multiplex

<!-- ProtofluxNode:start -->
| Multiplex | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| outputlist | Continuation | Impulses |
| input | Int32 | Index |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.ImpulseMultiplexer |  |
<!-- ProtofluxNode:end -->


### Once Per Frame

<!-- ProtofluxNode:start -->
| Once Per Frame | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.OnePerFrame |  |
<!-- ProtofluxNode:end -->


### Pulse Random

<!-- ProtofluxNode:start -->
| Pulse Random | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| outputlist | Continuation | Impulses |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.PulseRandom |  |
<!-- ProtofluxNode:end -->


### Seconds Timer

<!-- ProtofluxNode:start -->
| Seconds Timer | Type | Label |
| --- | ---- | ----- |
| input | Single | Interval |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.SecondsTimer |  |
<!-- ProtofluxNode:end -->


### Sequence

<!-- ProtofluxNode:start -->
| Sequence | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| outputlist | Call | Calls |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Sequence |  |
<!-- ProtofluxNode:end -->


### Update

<!-- ProtofluxNode:start -->
| Update | Type | Label |
| --- | ---- | ----- |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.Update |  |
<!-- ProtofluxNode:end -->


### Updates Timer

<!-- ProtofluxNode:start -->
| Updates Timer | Type | Label |
| --- | ---- | ----- |
| input | Int32 | Interval |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.UpdatesTimer |  |
<!-- ProtofluxNode:end -->


### While

<!-- ProtofluxNode:start -->
| While | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Call | LoopStart |
| input | Boolean | Condition |
| output | Call | LoopIteration |
| output | Continuation | LoopEnd |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.While |  |
<!-- ProtofluxNode:end -->


