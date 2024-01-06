<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Math/Geometry 3D

### Closest Points Between Lines

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.ClosestPointsBetweenLines -->
<!-- ProtofluxNode:start -->
| Closest Points Between Lines | Type | Label |
| --- | ---- | ----- |
| input | float3 | LinePoint0 |
| output | float3 | Point0 |
| input | float3 | LineDir0 |
| output | float3 | Point1 |
| input | float3 | LinePoint1 |
| input | float3 | LineDir1 |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.ClosestPointsBetweenLines |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.ClosestPointsBetweenLines -->


### Orientation On UVSphere

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.OrientationOnUVSphere -->
<!-- ProtofluxNode:start -->
| Orientation On UVSphere | Type | Label |
| --- | ---- | ----- |
| input | float2 | UV |
| output | floatQ | * |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.OrientationOnUVSphere |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.OrientationOnUVSphere -->


### Point On UVSphere

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.PointOnUVSphere -->
<!-- ProtofluxNode:start -->
| Point On UVSphere | Type | Label |
| --- | ---- | ----- |
| input | float2 | UV |
| output | float3 | * |
| input | Single | Radius |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.PointOnUVSphere |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.PointOnUVSphere -->


### Ray Plane Intersection

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RayPlaneIntersection -->
<!-- ProtofluxNode:start -->
| Ray Plane Intersection | Type | Label |
| --- | ---- | ----- |
| input | float3 | RayOrigin |
| output | float3 | * |
| input | float3 | RayDirection |
| input | float3 | PlanePoint |
| input | float3 | PlaneNormal |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RayPlaneIntersection |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RayPlaneIntersection -->


### Ray Sphere Intersection

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RaySphereIntersection -->
<!-- ProtofluxNode:start -->
| Ray Sphere Intersection | Type | Label |
| --- | ---- | ----- |
| input | float3 | Center |
| output | float3 | Point |
| input | Single | Radius |
| output | Boolean | IsIntersecting |
| input | float3 | RayOrigin |
| input | float3 | RayDirection |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RaySphereIntersection |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RaySphereIntersection -->


### Rotation At Target Point

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RotationAtTargetPoint -->
<!-- ProtofluxNode:start -->
| Rotation At Target Point | Type | Label |
| --- | ---- | ----- |
| input | float3 | Pivot |
| output | floatQ | * |
| input | float3 | Point |
| input | float3 | Direction |
| input | float3 | TargetPoint |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RotationAtTargetPoint |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.RotationAtTargetPoint -->


### Sphere For Tangent Line

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.SphereForTangentLine -->
<!-- ProtofluxNode:start -->
| Sphere For Tangent Line | Type | Label |
| --- | ---- | ----- |
| input | float3 | LinePoint |
| output | float3 | TangentPoint |
| input | float3 | LineDirection |
| output | Single | Radius |
| input | float3 | SphereCenter |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.SphereForTangentLine |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.SphereForTangentLine -->


### Triangle Normal

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.TriangleNormal -->
<!-- ProtofluxNode:start -->
| Triangle Normal | Type | Label |
| --- | ---- | ----- |
| input | float3 | Point0 |
| output | float3 | Normal |
| input | float3 | Point1 |
| output | Boolean | IsValid |
| input | float3 | Point2 |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.TriangleNormal |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.TriangleNormal -->


