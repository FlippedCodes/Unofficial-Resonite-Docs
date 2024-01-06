<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Transform

### Global Transform

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalTransform -->
<!-- ProtofluxNode:start -->
| Global Transform | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | GlobalPosition |
| output | floatQ | GlobalRotation |
| output | float3 | GlobalScale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalTransform |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalTransform -->


### Local Transform

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalTransform -->
<!-- ProtofluxNode:start -->
| Local Transform | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | LocalPosition |
| output | floatQ | LocalRotation |
| output | float3 | LocalScale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalTransform |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalTransform -->


### Set Global Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPosition -->
<!-- ProtofluxNode:start -->
| Set Global Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPosition |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPosition -->


### Set Global Position Rotation

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPositionRotation -->
<!-- ProtofluxNode:start -->
| Set Global Position Rotation | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| input | floatQ | Rotation |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPositionRotation |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPositionRotation -->


### Set Global Rotation

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalRotation -->
<!-- ProtofluxNode:start -->
| Set Global Rotation | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | floatQ | Rotation |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalRotation |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalRotation -->


### Set Global Scale

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalScale -->
<!-- ProtofluxNode:start -->
| Set Global Scale | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Scale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalScale |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalScale -->


### Set Global Transform

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransform -->
<!-- ProtofluxNode:start -->
| Set Global Transform | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| input | floatQ | Rotation |
| input | float3 | Scale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransform |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransform -->


### Set Global Transform Matrix

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransformMatrix -->
<!-- ProtofluxNode:start -->
| Set Global Transform Matrix | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float4x4 | Matrix |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransformMatrix |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransformMatrix -->


### Set Local Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPosition -->
<!-- ProtofluxNode:start -->
| Set Local Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPosition |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPosition -->


### Set Local Position Rotation

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPositionRotation -->
<!-- ProtofluxNode:start -->
| Set Local Position Rotation | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| input | floatQ | Rotation |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPositionRotation |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPositionRotation -->


### Set Local Rotation

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalRotation -->
<!-- ProtofluxNode:start -->
| Set Local Rotation | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | floatQ | Rotation |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalRotation |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalRotation -->


### Set Local Scale

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalScale -->
<!-- ProtofluxNode:start -->
| Set Local Scale | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Scale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalScale |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalScale -->


### Set Local Transform

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalTransform -->
<!-- ProtofluxNode:start -->
| Set Local Transform | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| input | floatQ | Rotation |
| input | float3 | Scale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalTransform |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalTransform -->


### Set TRS

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetTRS -->
<!-- ProtofluxNode:start -->
| Set TRS | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float4x4 | TRS |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetTRS |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetTRS -->


