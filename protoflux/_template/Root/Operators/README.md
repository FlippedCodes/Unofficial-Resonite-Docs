<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Operators

### ?:

<!-- ProtofluxNode:start -->
| ?: | Type | Label |
| --- | ---- | ----- |
| input | T | OnTrue |
| output | T | * |
| input | T | OnFalse |
| input | Boolean | Condition |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.ValueConditional\`1 |  |
<!-- ProtofluxNode:end -->


### ==

<!-- ProtofluxNode:start -->
| == | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | Boolean | * |
| input | T | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.ValueEquals\`1 |  |
<!-- ProtofluxNode:end -->


### Is Null

<!-- ProtofluxNode:start -->
| Is Null | Type | Label |
| --- | ---- | ----- |
| input | T | Instance |
| output | Boolean | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.IsNull\`1 |  |
<!-- ProtofluxNode:end -->


### Distance

<!-- ProtofluxNode:start -->
| Distance | Type | Label |
| --- | ---- | ----- |
| input | Single | A |
| output | Single | * |
| input | Single | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Distance_Float |  |
<!-- ProtofluxNode:end -->


### ??

<!-- ProtofluxNode:start -->
| ?? | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Operands |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.MultiNullCoalesce\`1 |  |
<!-- ProtofluxNode:end -->


### !=

<!-- ProtofluxNode:start -->
| != | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | Boolean | * |
| input | T | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.ValueNotEquals\`1 |  |
<!-- ProtofluxNode:end -->


### NOT Null

<!-- ProtofluxNode:start -->
| NOT Null | Type | Label |
| --- | ---- | ----- |
| input | T | Instance |
| output | Boolean | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.NotNull\`1 |  |
<!-- ProtofluxNode:end -->


### ??

<!-- ProtofluxNode:start -->
| ?? | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | T | * |
| input | T | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.NullCoalesce\`1 |  |
<!-- ProtofluxNode:end -->


### +

<!-- ProtofluxNode:start -->
| + | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | uint2 | * |
| input | UInt32 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Add_Uint2_Uint |  |
<!-- ProtofluxNode:end -->


### +

<!-- ProtofluxNode:start -->
| + | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Inputs |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueAddMulti\`1 |  |
<!-- ProtofluxNode:end -->


### ≈

<!-- ProtofluxNode:start -->
| ≈ | Type | Label |
| --- | ---- | ----- |
| input | Single | A |
| output | Boolean | * |
| input | Single | B |
| input | Single | Epsilon |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Approximately_Float |  |
<!-- ProtofluxNode:end -->


### !≈

<!-- ProtofluxNode:start -->
| !≈ | Type | Label |
| --- | ---- | ----- |
| input | Single | A |
| output | Boolean | * |
| input | Single | B |
| input | Single | Epsilon |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ApproximatelyNot_Float |  |
<!-- ProtofluxNode:end -->


### N3

<!-- ProtofluxNode:start -->
| N3 | Type | Label |
| --- | ---- | ----- |
| input | T | N |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueCube\`1 |  |
<!-- ProtofluxNode:end -->


###  1

<!-- ProtofluxNode:start -->
|  1 | Type | Label |
| --- | ---- | ----- |
| input | T | N |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueDec\`1 |  |
<!-- ProtofluxNode:end -->


### ÷

<!-- ProtofluxNode:start -->
| ÷ | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | uint2 | * |
| input | UInt32 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Div_Uint2_Uint |  |
<!-- ProtofluxNode:end -->


### ÷

<!-- ProtofluxNode:start -->
| ÷ | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Inputs |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueDivMulti\`1 |  |
<!-- ProtofluxNode:end -->


### Filter Invalid

<!-- ProtofluxNode:start -->
| Filter Invalid | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| output | T | * |
| input | T | Fallback |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueFilterInvalid\`1 |  |
<!-- ProtofluxNode:end -->


### ≥

<!-- ProtofluxNode:start -->
| ≥ | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | bool2 | * |
| input | uint2 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.GreaterOrEqual_Uint2 |  |
<!-- ProtofluxNode:end -->


### >

<!-- ProtofluxNode:start -->
| > | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | bool2 | * |
| input | uint2 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.GreaterThan_Uint2 |  |
<!-- ProtofluxNode:end -->


### +1

<!-- ProtofluxNode:start -->
| +1 | Type | Label |
| --- | ---- | ----- |
| input | T | N |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueInc\`1 |  |
<!-- ProtofluxNode:end -->


### Is ∞

<!-- ProtofluxNode:start -->
| Is ∞ | Type | Label |
| --- | ---- | ----- |
| input | Single | Value |
| output | Boolean | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.IsInfinity_Float |  |
<!-- ProtofluxNode:end -->


### Is Na N

<!-- ProtofluxNode:start -->
| Is Na N | Type | Label |
| --- | ---- | ----- |
| input | Single | Value |
| output | Boolean | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.IsNaN_Float |  |
<!-- ProtofluxNode:end -->


### ≤

<!-- ProtofluxNode:start -->
| ≤ | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | bool2 | * |
| input | uint2 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.LessOrEqual_Uint2 |  |
<!-- ProtofluxNode:end -->


### <

<!-- ProtofluxNode:start -->
| < | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | bool2 | * |
| input | uint2 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.LessThan_Uint2 |  |
<!-- ProtofluxNode:end -->


### Mask

<!-- ProtofluxNode:start -->
| Mask | Type | Label |
| --- | ---- | ----- |
| input | uint2 | OnTrue |
| output | uint2 | * |
| input | uint2 | OnFalse |
| input | bool2 | Mask |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Mask_Uint2 |  |
<!-- ProtofluxNode:end -->


### %

<!-- ProtofluxNode:start -->
| % | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | T | * |
| input | T | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueMod\`1 |  |
<!-- ProtofluxNode:end -->


### ×

<!-- ProtofluxNode:start -->
| × | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | uint2 | * |
| input | UInt32 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Mul_Uint2_Uint |  |
<!-- ProtofluxNode:end -->


### ×

<!-- ProtofluxNode:start -->
| × | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Inputs |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueMulMulti\`1 |  |
<!-- ProtofluxNode:end -->


###  N

<!-- ProtofluxNode:start -->
|  N | Type | Label |
| --- | ---- | ----- |
| input | T | N |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueNegate\`1 |  |
<!-- ProtofluxNode:end -->


### 1 N

<!-- ProtofluxNode:start -->
| 1 N | Type | Label |
| --- | ---- | ----- |
| input | T | X |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueOneMinus\`1 |  |
<!-- ProtofluxNode:end -->


### ±

<!-- ProtofluxNode:start -->
| ± | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| output | T | Plus |
| input | T | Offset |
| output | T | Minus |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValuePlusMinus\`1 |  |
<!-- ProtofluxNode:end -->


### 1/n

<!-- ProtofluxNode:start -->
| 1/n | Type | Label |
| --- | ---- | ----- |
| input | T | N |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueReciprocal\`1 |  |
<!-- ProtofluxNode:end -->


### N2

<!-- ProtofluxNode:start -->
| N2 | Type | Label |
| --- | ---- | ----- |
| input | T | N |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueSquare\`1 |  |
<!-- ProtofluxNode:end -->


###  

<!-- ProtofluxNode:start -->
|   | Type | Label |
| --- | ---- | ----- |
| input | uint2 | A |
| output | uint2 | * |
| input | UInt32 | B |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.Sub_Uint2_Uint |  |
<!-- ProtofluxNode:end -->


###  

<!-- ProtofluxNode:start -->
|   | Type | Label |
| --- | ---- | ----- |
| inputlist | T | Inputs |
| output | T | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ValueSubMulti\`1 |  |
<!-- ProtofluxNode:end -->


### 0/1 (int)

<!-- ProtofluxNode:start -->
| 0/1 (int) | Type | Label |
| --- | ---- | ----- |
| input | Boolean | Boolean |
| output | Int32 | * |
| Root/Operators | ProtoFlux.Runtimes.Execution.Nodes.Operators.ZeroOneInt |  |
<!-- ProtofluxNode:end -->


