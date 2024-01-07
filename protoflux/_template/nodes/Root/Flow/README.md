<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Flow

### Fire On Local Change

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalValueChange`1 -->
<!-- ProtofluxNode:start -->
| Fire On Local Change | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| output | Call | OnChange |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalValueChange`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalValueChange`1 -->


### Fire On Local False

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalFalse -->
<!-- ProtofluxNode:start -->
| Fire On Local False | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnChange |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalFalse |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalFalse -->


### Fire On Local True

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalTrue -->
<!-- ProtofluxNode:start -->
| Fire On Local True | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnChange |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalTrue |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnLocalTrue -->


### Local Impulse Timeout

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalImpulseTimeoutSeconds -->
<!-- ProtofluxNode:start -->
| Local Impulse Timeout | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Trigger |
| output | Continuation | Next |
| input | SyncOperation | Reset |
| input | Single | Timeout |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalImpulseTimeoutSeconds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalImpulseTimeoutSeconds -->


### Delay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.DelayTimeSpan -->
<!-- ProtofluxNode:start -->
| Delay | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | TimeSpan | Duration |
| output | AsyncCall | OnTriggered |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.DelayTimeSpan |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.DelayTimeSpan -->


### Time Delay With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.DelayWithValueTimeSpan`1 -->
<!-- ProtofluxNode:start -->
| Time Delay With Data | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | Next |
| input | T | Value |
| output | AsyncCall | OnTriggered |
| input | TimeSpan | Duration |
| output | T | DelayedValue |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.DelayWithValueTimeSpan`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.DelayWithValueTimeSpan`1 -->


### Range Loop

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.RangeLoopInt -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.RangeLoopInt -->


### Dynamic Impulse Receiver

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiver -->
<!-- ProtofluxNode:start -->
| Dynamic Impulse Receiver | Type | Label |
| --- | ---- | ----- |
| output | Call | OnTriggered |
| reference | String | Tag |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiver |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiver -->


### Dynamic Impulse Trigger

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTrigger -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTrigger -->


### Boolean Latch

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DataModelBooleanToggle -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DataModelBooleanToggle -->


### Dynamic Impulse Reciever With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue`1 -->
<!-- ProtofluxNode:start -->
| Dynamic Impulse Reciever With Data | Type | Label |
| --- | ---- | ----- |
| output | Call | OnTriggered |
| output | T | Value |
| reference | String | Tag |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue`1 -->


### Dynamic Impulse Trigger With Data

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue`1 -->
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
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue`1 -->


### Fire On Change

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnValueChange`1 -->
<!-- ProtofluxNode:start -->
| Fire On Change | Type | Label |
| --- | ---- | ----- |
| input | User | OnlyForUser |
| output | Call | OnChanged |
| input | T | Value |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnValueChange`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnValueChange`1 -->


### Fire On False

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnFalse -->
<!-- ProtofluxNode:start -->
| Fire On False | Type | Label |
| --- | ---- | ----- |
| input | User | OnlyForUser |
| output | Call | OnChanged |
| input | Boolean | Condition |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnFalse |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnFalse -->


### Fire On True

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue -->
<!-- ProtofluxNode:start -->
| Fire On True | Type | Label |
| --- | ---- | ----- |
| input | User | OnlyForUser |
| output | Call | OnChanged |
| input | Boolean | Condition |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue -->


### Fire While True

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue -->
<!-- ProtofluxNode:start -->
| Fire While True | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnUpdate |
| reference | User | UpdatingUser |
| reference | Boolean | SkipIfNull |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue -->


### For

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.For -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.For -->


### If

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.If -->
<!-- ProtofluxNode:start -->
| If | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnTrue |
| input | Boolean | Condition |
| output | Continuation | OnFalse |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.If |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.If -->


### Impulse Demultiplexer

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ImpulseDemultiplexer -->
<!-- ProtofluxNode:start -->
| Impulse Demultiplexer | Type | Label |
| --- | ---- | ----- |
| inputlist | SyncOperation | Operations |
| output | Continuation | OnTriggered |
| inputlistbuttons | SyncOperation | Operations |
| output | Int32 | Index |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.ImpulseDemultiplexer |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ImpulseDemultiplexer -->


### Local Fire While True

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalFireWhileTrue -->
<!-- ProtofluxNode:start -->
| Local Fire While True | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Condition |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalFireWhileTrue |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalFireWhileTrue -->


### Local Leaky Impulse Bucket

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalLeakyImpulseBucket -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalLeakyImpulseBucket -->


### Local Update

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalUpdate -->
<!-- ProtofluxNode:start -->
| Local Update | Type | Label |
| --- | ---- | ----- |
| output | Call | OnUpdate |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalUpdate |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.LocalUpdate -->


### Multiplex

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ImpulseMultiplexer -->
<!-- ProtofluxNode:start -->
| Multiplex | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| outputlist | Continuation | Impulses |
| input | Int32 | Index |
| outputlistbuttons | Continuation | Impulses |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.ImpulseMultiplexer |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ImpulseMultiplexer -->


### Once Per Frame

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.OnePerFrame -->
<!-- ProtofluxNode:start -->
| Once Per Frame | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.OnePerFrame |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.OnePerFrame -->


### Pulse Random

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.PulseRandom -->
<!-- ProtofluxNode:start -->
| Pulse Random | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| outputlist | Continuation | Impulses |
| outputlistbuttons | Continuation | Impulses |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.PulseRandom |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.PulseRandom -->


### Seconds Timer

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.SecondsTimer -->
<!-- ProtofluxNode:start -->
| Seconds Timer | Type | Label |
| --- | ---- | ----- |
| input | Single | Interval |
| output | Call | OnUpdate |
| reference | User | UpdatingUser |
| reference | Boolean | SkipIfNull |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.SecondsTimer |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.SecondsTimer -->


### Sequence

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Sequence -->
<!-- ProtofluxNode:start -->
| Sequence | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| outputlist | Call | Calls |
| outputlistbuttons | Call | Calls |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Sequence |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Sequence -->


### Update

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.Update -->
<!-- ProtofluxNode:start -->
| Update | Type | Label |
| --- | ---- | ----- |
| output | Call | OnUpdate |
| reference | User | UpdatingUser |
| reference | Boolean | SkipIfNull |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.Update |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.Update -->


### Updates Timer

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Actions.UpdatesTimer -->
<!-- ProtofluxNode:start -->
| Updates Timer | Type | Label |
| --- | ---- | ----- |
| input | Int32 | Interval |
| output | Call | OnUpdate |
| reference | User | UpdatingUser |
| reference | Boolean | SkipIfNull |
| Root/Flow | ProtoFlux.Runtimes.Execution.Nodes.Actions.UpdatesTimer |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Actions.UpdatesTimer -->


### While

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.While -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.While -->


