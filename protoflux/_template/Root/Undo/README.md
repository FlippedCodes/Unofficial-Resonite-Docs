<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Undo

### Begin Undo Batch

<!-- ProtofluxNode:start -->
| Begin Undo Batch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | String | Description |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.BeginUndoBatch |  |
<!-- ProtofluxNode:end -->


### Create Field Undo Step

<!-- ProtofluxNode:start -->
| Create Field Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IField | Target |
| input | Boolean | ForceNew |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateFieldUndoStep |  |
<!-- ProtofluxNode:end -->


### Create Reference Undo Step

<!-- ProtofluxNode:start -->
| Create Reference Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | ISyncRef | Target |
| input | Boolean | ForceNew |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateReferenceUndoStep |  |
<!-- ProtofluxNode:end -->


### Create Spawn Undo Step

<!-- ProtofluxNode:start -->
| Create Spawn Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Target |
| input | String | Description |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateSpawnUndoStep |  |
<!-- ProtofluxNode:end -->


### Create Transform Undo Step

<!-- ProtofluxNode:start -->
| Create Transform Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Target |
| input | Boolean | SaveParent |
| input | Boolean | SavePosition |
| input | Boolean | SaveRotation |
| input | Boolean | SaveScale |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTransformUndoStep |  |
<!-- ProtofluxNode:end -->


### Create Type Field Undo Step

<!-- ProtofluxNode:start -->
| Create Type Field Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | SyncType | Target |
| input | Boolean | ForceNew |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTypeFieldUndoStep |  |
<!-- ProtofluxNode:end -->


### Create Undo Batch

<!-- ProtofluxNode:start -->
| Create Undo Batch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Call | Create |
| input | String | Description |
| output | Continuation | OnCreated |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateUndoBatch |  |
<!-- ProtofluxNode:end -->


### End Undo Batch

<!-- ProtofluxNode:start -->
| End Undo Batch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.EndUndoBatch |  |
<!-- ProtofluxNode:end -->


### Undoable Destroy

<!-- ProtofluxNode:start -->
| Undoable Destroy | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Target |
| input | Boolean | PreserveAssets |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.UndoableDestroy |  |
<!-- ProtofluxNode:end -->


