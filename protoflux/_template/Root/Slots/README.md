<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Slots

### Children Count

<!-- ProtofluxNode:start -->
| Children Count | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Int32 | * |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.ChildrenCount |  |
<!-- ProtofluxNode:end -->


### Destroy Slot

<!-- ProtofluxNode:start -->
| Destroy Slot | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | Boolean | PreserveAssets |
| input | Boolean | SendDestroyingEvent |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DestroySlot |  |
<!-- ProtofluxNode:end -->


### Destroy Slot Children

<!-- ProtofluxNode:start -->
| Destroy Slot Children | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | Boolean | PreserveAssets |
| input | Boolean | SendDestroyingEvent |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DestroySlotChildren |  |
<!-- ProtofluxNode:end -->


### Duplicate Slot

<!-- ProtofluxNode:start -->
| Duplicate Slot | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Template |
| output | Slot | Duplicate |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DuplicateSlot |  |
<!-- ProtofluxNode:end -->


### Get Child

<!-- ProtofluxNode:start -->
| Get Child | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Slot | * |
| input | Int32 | ChildIndex |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetChild |  |
<!-- ProtofluxNode:end -->


### Get Object Root

<!-- ProtofluxNode:start -->
| Get Object Root | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Slot | * |
| input | Boolean | OnlyExplicit |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetObjectRoot |  |
<!-- ProtofluxNode:end -->


### Get Parent Slot

<!-- ProtofluxNode:start -->
| Get Parent Slot | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Slot | * |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetParentSlot |  |
<!-- ProtofluxNode:end -->


### Get Slot

<!-- ProtofluxNode:start -->
| Get Slot | Type | Label |
| --- | ---- | ----- |
| input | IComponent | Component |
| output | Slot | * |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlot |  |
<!-- ProtofluxNode:end -->


### Get Slot Order Offset

<!-- ProtofluxNode:start -->
| Get Slot Order Offset | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Int64 | * |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetSlotOrderOffset |  |
<!-- ProtofluxNode:end -->


### Index Of Child

<!-- ProtofluxNode:start -->
| Index Of Child | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Int32 | * |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.IndexOfChild |  |
<!-- ProtofluxNode:end -->


### Is Child Of

<!-- ProtofluxNode:start -->
| Is Child Of | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | Boolean | * |
| input | Slot | Other |
| input | Boolean | IncludeSelf |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.IsChildOf |  |
<!-- ProtofluxNode:end -->


### Root Slot

<!-- ProtofluxNode:start -->
| Root Slot | Type | Label |
| --- | ---- | ----- |
| output | Slot | * |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.RootSlot |  |
<!-- ProtofluxNode:end -->


### Set Child Index

<!-- ProtofluxNode:start -->
| Set Child Index | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | Int32 | Index |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetChildIndex |  |
<!-- ProtofluxNode:end -->


### Set Parent

<!-- ProtofluxNode:start -->
| Set Parent | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | Slot | NewParent |
| input | Boolean | PreserveGlobalPosition |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SetParent |  |
<!-- ProtofluxNode:end -->


### Slot Children Events

<!-- ProtofluxNode:start -->
| Slot Children Events | Type | Label |
| --- | ---- | ----- |
| input | User | OnUser |
| output | Call | OnChildAdded |
| output | Call | OnChildRemoved |
| output | Slot | Child |
| Root/Slots | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.SlotChildrenEvents |  |
<!-- ProtofluxNode:end -->


