<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Math/Interpolation

### Bezier Curve

<!-- ProtofluxNode:start -->
| Bezier Curve | Type | Label |
| --- | ---- | ----- |
| input | TangentPointFloat | From |
| output | Single | * |
| input | TangentPointFloat | To |
| input | Single | Lerp |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.BezierCurve_Float |  |
<!-- ProtofluxNode:end -->


### Cosine Lerp

<!-- ProtofluxNode:start -->
| Cosine Lerp | Type | Label |
| --- | ---- | ----- |
| input | Single | A |
| output | Single | * |
| input | Single | B |
| input | Single | Lerp |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.CosineLerp_Float |  |
<!-- ProtofluxNode:end -->


### Cubic Lerp

<!-- ProtofluxNode:start -->
| Cubic Lerp | Type | Label |
| --- | ---- | ----- |
| input | TangentPointFloat | From |
| output | Single | * |
| input | TangentPointFloat | To |
| input | Single | Lerp |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.CubicLerp_Float |  |
<!-- ProtofluxNode:end -->


### Inverse Lerp

<!-- ProtofluxNode:start -->
| Inverse Lerp | Type | Label |
| --- | ---- | ----- |
| input | T | From |
| output | Single | * |
| input | T | To |
| input | T | Value |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ValueInverseLerp\`1 |  |
<!-- ProtofluxNode:end -->


### Lerp

<!-- ProtofluxNode:start -->
| Lerp | Type | Label |
| --- | ---- | ----- |
| input | T | From |
| output | T | * |
| input | T | To |
| input | Single | Lerp |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ValueLerp\`1 |  |
<!-- ProtofluxNode:end -->


### Lerp (unclamped)

<!-- ProtofluxNode:start -->
| Lerp (unclamped) | Type | Label |
| --- | ---- | ----- |
| input | T | From |
| output | T | * |
| input | T | To |
| input | Single | Lerp |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ValueLerpUnclamped\`1 |  |
<!-- ProtofluxNode:end -->


### Bezier Curve

<!-- ProtofluxNode:start -->
| Bezier Curve | Type | Label |
| --- | ---- | ----- |
| input | Single | Lerp |
| output | Single | * |
| inputlist | TangentPointFloat | Operands |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.MultiBezierCurve_Float |  |
<!-- ProtofluxNode:end -->


### Cosine Lerp

<!-- ProtofluxNode:start -->
| Cosine Lerp | Type | Label |
| --- | ---- | ----- |
| input | Single | Lerp |
| output | Single | * |
| inputlist | Single | Operands |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.MultiCosineLerp_Float |  |
<!-- ProtofluxNode:end -->


### Cubic Lerp

<!-- ProtofluxNode:start -->
| Cubic Lerp | Type | Label |
| --- | ---- | ----- |
| input | Single | Lerp |
| output | Single | * |
| inputlist | TangentPointFloat | Operands |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.MultiCubicLerp_Float |  |
<!-- ProtofluxNode:end -->


### Lerp

<!-- ProtofluxNode:start -->
| Lerp | Type | Label |
| --- | ---- | ----- |
| input | Single | Lerp |
| output | T | * |
| inputlist | T | Operands |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ValueMultiLerp\`1 |  |
<!-- ProtofluxNode:end -->


### Slerp

<!-- ProtofluxNode:start -->
| Slerp | Type | Label |
| --- | ---- | ----- |
| input | Single | Lerp |
| output | float3 | * |
| inputlist | float3 | Operands |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.MultiSlerp_Float3 |  |
<!-- ProtofluxNode:end -->


### Slerp

<!-- ProtofluxNode:start -->
| Slerp | Type | Label |
| --- | ---- | ----- |
| input | float3 | From |
| output | float3 | * |
| input | float3 | To |
| input | Single | Lerp |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.Slerp_Float3 |  |
<!-- ProtofluxNode:end -->


### Constant Lerp

<!-- ProtofluxNode:start -->
| Constant Lerp | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| output | T | * |
| input | Single | Speed |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ValueConstantLerp\`1 |  |
<!-- ProtofluxNode:end -->


### Constant Slerp

<!-- ProtofluxNode:start -->
| Constant Slerp | Type | Label |
| --- | ---- | ----- |
| input | floatQ | Input |
| output | floatQ | * |
| input | Single | Speed |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ConstantSlerp_floatQ |  |
<!-- ProtofluxNode:end -->


### Smooth Lerp

<!-- ProtofluxNode:start -->
| Smooth Lerp | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| output | T | * |
| input | Single | Speed |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.ValueSmoothLerp\`1 |  |
<!-- ProtofluxNode:end -->


### Smooth Slerp

<!-- ProtofluxNode:start -->
| Smooth Slerp | Type | Label |
| --- | ---- | ----- |
| input | floatQ | Input |
| output | floatQ | * |
| input | Single | Speed |
| Root/Math/Interpolation | ProtoFlux.Runtimes.Execution.Nodes.Math.SmoothSlerp_floatQ |  |
<!-- ProtofluxNode:end -->


