<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Transform/Bounds

### Bounding Box Properties

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.BoundingBoxProperties -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.BoundingBoxProperties -->


### Compute Bounding Box

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.ComputeBoundingBox -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.ComputeBoundingBox -->


### Empty

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.Empty -->
<!-- ProtofluxNode:start -->
| Empty | Type | Label |
| --- | ---- | ----- |
| output | BoundingBox | * |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.Empty |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.Empty -->


### Encapsulate Bounds

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulateBounds -->
<!-- ProtofluxNode:start -->
| Encapsulate Bounds | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | BoundingBox | * |
| input | BoundingBox | OtherBounds |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulateBounds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulateBounds -->


### Encapsulate Point

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulatePoint -->
<!-- ProtofluxNode:start -->
| Encapsulate Point | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | BoundingBox | * |
| input | float3 | Point |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulatePoint |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.EncapsulatePoint -->


### From Center Size

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.FromCenterSize -->
<!-- ProtofluxNode:start -->
| From Center Size | Type | Label |
| --- | ---- | ----- |
| input | float3 | Center |
| output | BoundingBox | * |
| input | float3 | Size |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.FromCenterSize |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.FromCenterSize -->


### Transform Bounds

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.TransformBounds -->
<!-- ProtofluxNode:start -->
| Transform Bounds | Type | Label |
| --- | ---- | ----- |
| input | BoundingBox | Bounds |
| output | BoundingBox | * |
| input | Slot | SourceSpace |
| input | Slot | TargetSpace |
| Root/Transform/Bounds | ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.TransformBounds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Bounds.TransformBounds -->


