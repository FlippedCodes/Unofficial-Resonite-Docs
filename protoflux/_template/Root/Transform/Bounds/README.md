<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Transform/Bounds

### Bounding Box Properties

<!-- ProtofluxNode:start -->
| Bounding Box Properties | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | float3 | Min |
| output | float3 | Max |
| output | float3 | Center |
| output | float3 | Size |
| output | Boolean | Valid |
| output | Boolean | Empty |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.BoundingBoxProperties |  |
<!-- ProtofluxNode:end -->


### Compute Bounding Box

<!-- ProtofluxNode:start -->
| Compute Bounding Box | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | BoundingBox | * |
| input | Boolean | IncludeInactive |
| input | Slot | CoordinateSpace |
| input | String | OnlyWithTag |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.ComputeBoundingBox |  |
<!-- ProtofluxNode:end -->


### Empty

<!-- ProtofluxNode:start -->
| Empty | Type | Label |
| --- | ---- | ----- |
| output | BoundingBox | * |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.Empty |  |
<!-- ProtofluxNode:end -->


### Encapsulate Bounds

<!-- ProtofluxNode:start -->
| Encapsulate Bounds | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | BoundingBox | * |
| input | BoundingBox | OtherBounds |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulateBounds |  |
<!-- ProtofluxNode:end -->


### Encapsulate Point

<!-- ProtofluxNode:start -->
| Encapsulate Point | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | BoundingBox | * |
| input | float3 | Point |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulatePoint |  |
<!-- ProtofluxNode:end -->


### From Center Size

<!-- ProtofluxNode:start -->
| From Center Size | Type | Label |
| --- | ---- | ----- |
| input | float3 | Center |
| output | BoundingBox | * |
| input | float3 | Size |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.FromCenterSize |  |
<!-- ProtofluxNode:end -->


### Transform Bounds

<!-- ProtofluxNode:start -->
| Transform Bounds | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | BoundingBox | * |
| input | Slot | SourceSpace |
| input | Slot | TargetSpace |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.TransformBounds |  |
<!-- ProtofluxNode:end -->


