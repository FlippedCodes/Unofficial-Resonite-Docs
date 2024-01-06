<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Math/Geometry 3D

### Closest Points Between Lines

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


### Orientation On UVSphere

<!-- ProtofluxNode:start -->
| Orientation On UVSphere | Type | Label |
| --- | ---- | ----- |
| input | float2 | UV |
| output | floatQ | * |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.OrientationOnUVSphere |  |
<!-- ProtofluxNode:end -->


### Point On UVSphere

<!-- ProtofluxNode:start -->
| Point On UVSphere | Type | Label |
| --- | ---- | ----- |
| input | float2 | UV |
| output | float3 | * |
| input | Single | Radius |
| Root/Math/Geometry 3D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry3D.PointOnUVSphere |  |
<!-- ProtofluxNode:end -->


### Ray Plane Intersection

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


### Ray Sphere Intersection

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


### Rotation At Target Point

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


### Sphere For Tangent Line

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


### Triangle Normal

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


