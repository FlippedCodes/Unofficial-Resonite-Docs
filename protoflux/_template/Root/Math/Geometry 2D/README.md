<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Math/Geometry 2D

### Line Circle Intersections

<!-- ProtofluxNode:start -->
| Line Circle Intersections | Type | Label |
| --- | ---- | ----- |
| input | float2 | Center |
| output | Int32 | IntersectionCount |
| input | Single | Radius |
| output | float2 | Intersection0 |
| input | float2 | LinePoint0 |
| output | float2 | Intersection1 |
| input | float2 | LinePoint1 |
| Root/Math/Geometry 2D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry2D.LineCircleIntersections |  |
<!-- ProtofluxNode:end -->


### Point On Circle

<!-- ProtofluxNode:start -->
| Point On Circle | Type | Label |
| --- | ---- | ----- |
| input | Single | NormalizedPosition |
| output | float2 | * |
| input | Single | Radius |
| Root/Math/Geometry 2D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry2D.PointOnCircle |  |
<!-- ProtofluxNode:end -->


### Ray Rectangle Intersection

<!-- ProtofluxNode:start -->
| Ray Rectangle Intersection | Type | Label |
| --- | ---- | ----- |
| input | float2 | Origin |
| output | float2 | Intersection |
| input | float2 | Direction |
| output | Boolean | Intersects |
| input | Rect | Rectangle |
| Root/Math/Geometry 2D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry2D.RayRectangleIntersection |  |
<!-- ProtofluxNode:end -->


### Ray To Line Intersection

<!-- ProtofluxNode:start -->
| Ray To Line Intersection | Type | Label |
| --- | ---- | ----- |
| input | float2 | Origin |
| output | float2 | Intersection |
| input | float2 | Direction |
| output | Boolean | Intersects |
| input | float2 | LinePoint0 |
| input | float2 | LinePoint1 |
| Root/Math/Geometry 2D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry2D.RayToLineIntersection |  |
<!-- ProtofluxNode:end -->


### Ray To Line Intersection Distance

<!-- ProtofluxNode:start -->
| Ray To Line Intersection Distance | Type | Label |
| --- | ---- | ----- |
| input | float2 | Origin |
| output | Single | Distance |
| input | float2 | Direction |
| output | Boolean | Intersects |
| input | float2 | LinePoint0 |
| input | float2 | LinePoint1 |
| Root/Math/Geometry 2D | ProtoFlux.Runtimes.Execution.Nodes.Math.Geometry2D.RayToLineIntersectionDistance |  |
<!-- ProtofluxNode:end -->


