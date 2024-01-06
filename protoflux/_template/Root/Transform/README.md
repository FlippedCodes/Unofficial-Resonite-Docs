<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Transform

### Global Transform

<!-- ProtofluxNode:start -->
| Global Transform | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | GlobalPosition |
| output | floatQ | GlobalRotation |
| output | float3 | GlobalScale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalTransform |  |
<!-- ProtofluxNode:end -->


### Local Transform

<!-- ProtofluxNode:start -->
| Local Transform | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | LocalPosition |
| output | floatQ | LocalRotation |
| output | float3 | LocalScale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalTransform |  |
<!-- ProtofluxNode:end -->


### Set Global Position

<!-- ProtofluxNode:start -->
| Set Global Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalPosition |  |
<!-- ProtofluxNode:end -->


### Set Global Position Rotation

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


### Set Global Rotation

<!-- ProtofluxNode:start -->
| Set Global Rotation | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | floatQ | Rotation |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalRotation |  |
<!-- ProtofluxNode:end -->


### Set Global Scale

<!-- ProtofluxNode:start -->
| Set Global Scale | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Scale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalScale |  |
<!-- ProtofluxNode:end -->


### Set Global Transform

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


### Set Global Transform Matrix

<!-- ProtofluxNode:start -->
| Set Global Transform Matrix | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float4x4 | Matrix |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetGlobalTransformMatrix |  |
<!-- ProtofluxNode:end -->


### Set Local Position

<!-- ProtofluxNode:start -->
| Set Local Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Position |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalPosition |  |
<!-- ProtofluxNode:end -->


### Set Local Position Rotation

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


### Set Local Rotation

<!-- ProtofluxNode:start -->
| Set Local Rotation | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | floatQ | Rotation |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalRotation |  |
<!-- ProtofluxNode:end -->


### Set Local Scale

<!-- ProtofluxNode:start -->
| Set Local Scale | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float3 | Scale |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetLocalScale |  |
<!-- ProtofluxNode:end -->


### Set Local Transform

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


### Set TRS

<!-- ProtofluxNode:start -->
| Set TRS | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | Instance |
| input | float4x4 | TRS |
| Root/Transform | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.SetTRS |  |
<!-- ProtofluxNode:end -->


