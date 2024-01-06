<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Undo

### Begin Undo Batch

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.BeginUndoBatch -->
<!-- ProtofluxNode:start -->
| Begin Undo Batch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | String | Description |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.BeginUndoBatch |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.BeginUndoBatch -->


### Create Field Undo Step

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateFieldUndoStep -->
<!-- ProtofluxNode:start -->
| Create Field Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IField | Target |
| input | Boolean | ForceNew |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateFieldUndoStep |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateFieldUndoStep -->


### Create Reference Undo Step

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateReferenceUndoStep -->
<!-- ProtofluxNode:start -->
| Create Reference Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | ISyncRef | Target |
| input | Boolean | ForceNew |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateReferenceUndoStep |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateReferenceUndoStep -->


### Create Spawn Undo Step

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateSpawnUndoStep -->
<!-- ProtofluxNode:start -->
| Create Spawn Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Target |
| input | String | Description |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateSpawnUndoStep |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateSpawnUndoStep -->


### Create Transform Undo Step

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTransformUndoStep -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTransformUndoStep -->


### Create Type Field Undo Step

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTypeFieldUndoStep -->
<!-- ProtofluxNode:start -->
| Create Type Field Undo Step | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | SyncType | Target |
| input | Boolean | ForceNew |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTypeFieldUndoStep |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateTypeFieldUndoStep -->


### Create Undo Batch

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateUndoBatch -->
<!-- ProtofluxNode:start -->
| Create Undo Batch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Call | Create |
| input | String | Description |
| output | Continuation | OnCreated |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateUndoBatch |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.CreateUndoBatch -->


### End Undo Batch

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.EndUndoBatch -->
<!-- ProtofluxNode:start -->
| End Undo Batch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.EndUndoBatch |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.EndUndoBatch -->


### Undoable Destroy

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.UndoableDestroy -->
<!-- ProtofluxNode:start -->
| Undoable Destroy | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Target |
| input | Boolean | PreserveAssets |
| Root/Undo | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.UndoableDestroy |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Undo.UndoableDestroy -->


