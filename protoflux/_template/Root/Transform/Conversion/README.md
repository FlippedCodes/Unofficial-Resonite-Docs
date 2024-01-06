<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Transform/Conversion

### Global Direction To Local

<!-- ProtofluxNode:start -->
| Global Direction To Local | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | GlobalDirection |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalDirectionToLocal |  |
<!-- ProtofluxNode:end -->


### Global Point To Local

<!-- ProtofluxNode:start -->
| Global Point To Local | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | GlobalPoint |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalPointToLocal |  |
<!-- ProtofluxNode:end -->


### Global Rotation To Local

<!-- ProtofluxNode:start -->
| Global Rotation To Local | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | floatQ | * |
| input | floatQ | GlobalRotation |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalRotationToLocal |  |
<!-- ProtofluxNode:end -->


### Global Scale To Local

<!-- ProtofluxNode:start -->
| Global Scale To Local | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | GlobalScale |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalScaleToLocal |  |
<!-- ProtofluxNode:end -->


### Global Vector To Local

<!-- ProtofluxNode:start -->
| Global Vector To Local | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | GlobalVector |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.GlobalVectorToLocal |  |
<!-- ProtofluxNode:end -->


### Local Direction To Global

<!-- ProtofluxNode:start -->
| Local Direction To Global | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | LocalDirection |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalDirectionToGlobal |  |
<!-- ProtofluxNode:end -->


### Local Point To Global

<!-- ProtofluxNode:start -->
| Local Point To Global | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | LocalPoint |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalPointToGlobal |  |
<!-- ProtofluxNode:end -->


### Local Rotation To Global

<!-- ProtofluxNode:start -->
| Local Rotation To Global | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | floatQ | * |
| input | floatQ | LocalRotation |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalRotationToGlobal |  |
<!-- ProtofluxNode:end -->


### Local Scale To Global

<!-- ProtofluxNode:start -->
| Local Scale To Global | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | LocalScale |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalScaleToGlobal |  |
<!-- ProtofluxNode:end -->


### Local Screen Point To Direction

<!-- ProtofluxNode:start -->
| Local Screen Point To Direction | Type | Label |
| --- | ---- | ----- |
| input | float2 | NormalizedScreenPoint |
| output | float3 | * |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalScreen.LocalScreenPointToDirection |  |
<!-- ProtofluxNode:end -->


### Local Screen Point To World

<!-- ProtofluxNode:start -->
| Local Screen Point To World | Type | Label |
| --- | ---- | ----- |
| input | float2 | NormalizedScreenPoint |
| output | float3 | * |
| input | Single | Distance |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalScreen.LocalScreenPointToWorld |  |
<!-- ProtofluxNode:end -->


### Local Vector To Global

<!-- ProtofluxNode:start -->
| Local Vector To Global | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | float3 | * |
| input | float3 | LocalVector |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.LocalVectorToGlobal |  |
<!-- ProtofluxNode:end -->


### Transform Direction

<!-- ProtofluxNode:start -->
| Transform Direction | Type | Label |
| --- | ---- | ----- |
| input | Slot | FromSpace |
| output | float3 | * |
| input | Slot | ToSpace |
| input | float3 | SourceDirection |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.TransformDirection |  |
<!-- ProtofluxNode:end -->


### Transform Point

<!-- ProtofluxNode:start -->
| Transform Point | Type | Label |
| --- | ---- | ----- |
| input | Slot | FromSpace |
| output | float3 | * |
| input | Slot | ToSpace |
| input | float3 | SourcePoint |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.TransformPoint |  |
<!-- ProtofluxNode:end -->


### Transform Rotation

<!-- ProtofluxNode:start -->
| Transform Rotation | Type | Label |
| --- | ---- | ----- |
| input | Slot | FromSpace |
| output | floatQ | * |
| input | Slot | ToSpace |
| input | floatQ | SourceRotation |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.TransformRotation |  |
<!-- ProtofluxNode:end -->


### Transform Scale

<!-- ProtofluxNode:start -->
| Transform Scale | Type | Label |
| --- | ---- | ----- |
| input | Slot | FromSpace |
| output | float3 | * |
| input | Slot | ToSpace |
| input | float3 | SourceScale |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.TransformScale |  |
<!-- ProtofluxNode:end -->


### Transform Vector

<!-- ProtofluxNode:start -->
| Transform Vector | Type | Label |
| --- | ---- | ----- |
| input | Slot | FromSpace |
| output | float3 | * |
| input | Slot | ToSpace |
| input | float3 | SourceVector |
| Root/Transform/Conversion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Transform.TransformVector |  |
<!-- ProtofluxNode:end -->


