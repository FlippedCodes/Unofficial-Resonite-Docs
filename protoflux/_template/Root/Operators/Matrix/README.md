<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Operators/Matrix

### Compose TRS

<!-- ProtofluxNode:start -->
| Compose TRS | Type | Label |
| --- | ---- | ----- |
| input | float3 | Position |
| output | float4x4 | * |
| input | floatQ | Rotation |
| input | float3 | Scale |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.ComposeTRS_Float4x4 |  |
<!-- ProtofluxNode:end -->


### Compose Rotation

<!-- ProtofluxNode:start -->
| Compose Rotation | Type | Label |
| --- | ---- | ----- |
| input | floatQ | Rotation |
| output | float3x3 | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Compose_Rotation_Float3x3 |  |
<!-- ProtofluxNode:end -->


### Compose Scale

<!-- ProtofluxNode:start -->
| Compose Scale | Type | Label |
| --- | ---- | ----- |
| input | float3 | Scale |
| output | float3x3 | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Compose_ScaleFloat3x3 |  |
<!-- ProtofluxNode:end -->


### Compose Scale Rotation

<!-- ProtofluxNode:start -->
| Compose Scale Rotation | Type | Label |
| --- | ---- | ----- |
| input | float3 | Scale |
| output | float3x3 | * |
| input | floatQ | Rotation |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Compose_ScaleRotation_Float3x3 |  |
<!-- ProtofluxNode:end -->


### Decomposed Position

<!-- ProtofluxNode:start -->
| Decomposed Position | Type | Label |
| --- | ---- | ----- |
| input | float4x4 | A |
| output | float3 | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Decomposed_Position_Float4x4 |  |
<!-- ProtofluxNode:end -->


### Decomposed Rotation

<!-- ProtofluxNode:start -->
| Decomposed Rotation | Type | Label |
| --- | ---- | ----- |
| input | float3x3 | A |
| output | floatQ | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Decomposed_Rotation_Float3x3 |  |
<!-- ProtofluxNode:end -->


### Decomposed Scale

<!-- ProtofluxNode:start -->
| Decomposed Scale | Type | Label |
| --- | ---- | ----- |
| input | float3x3 | A |
| output | float3 | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Decomposed_Scale_Float3x3 |  |
<!-- ProtofluxNode:end -->


### Determinant

<!-- ProtofluxNode:start -->
| Determinant | Type | Label |
| --- | ---- | ----- |
| input | float2x2 | A |
| output | Single | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Determinant_Float2x2 |  |
<!-- ProtofluxNode:end -->


### M 1(inverse)

<!-- ProtofluxNode:start -->
| M 1(inverse) | Type | Label |
| --- | ---- | ----- |
| input | float2x2 | A |
| output | float2x2 | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Inverse_Float2x2 |  |
<!-- ProtofluxNode:end -->


### Get Matrix Element

<!-- ProtofluxNode:start -->
| Get Matrix Element | Type | Label |
| --- | ---- | ----- |
| input | float2x2 | Matrix |
| output | Single | * |
| input | Int32 | Row |
| input | Int32 | Column |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.MatrixElement_Float2x2 |  |
<!-- ProtofluxNode:end -->


### Pack Columns

<!-- ProtofluxNode:start -->
| Pack Columns | Type | Label |
| --- | ---- | ----- |
| input | float2 | Column0 |
| output | float2x2 | * |
| input | float2 | Column1 |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.PackColumns_Float2x2 |  |
<!-- ProtofluxNode:end -->


### Pack Rows

<!-- ProtofluxNode:start -->
| Pack Rows | Type | Label |
| --- | ---- | ----- |
| input | float2 | Row0 |
| output | float2x2 | * |
| input | float2 | Row1 |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.PackRows_Float2x2 |  |
<!-- ProtofluxNode:end -->


### M T(transpose)

<!-- ProtofluxNode:start -->
| M T(transpose) | Type | Label |
| --- | ---- | ----- |
| input | float2x2 | A |
| output | float2x2 | * |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.Transpose_Float2x2 |  |
<!-- ProtofluxNode:end -->


### Unpack Columns

<!-- ProtofluxNode:start -->
| Unpack Columns | Type | Label |
| --- | ---- | ----- |
| input | float2x2 | Matrix |
| output | float2 | Column0 |
| output | float2 | Column1 |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.UnpackColumns_Float2x2 |  |
<!-- ProtofluxNode:end -->


### Unpack Rows

<!-- ProtofluxNode:start -->
| Unpack Rows | Type | Label |
| --- | ---- | ----- |
| input | float2x2 | Matrix |
| output | float2 | Row0 |
| output | float2 | Row1 |
| Root/Operators/Matrix | ProtoFlux.Runtimes.Execution.Nodes.Operators.UnpackRows_Float2x2 |  |
<!-- ProtofluxNode:end -->


