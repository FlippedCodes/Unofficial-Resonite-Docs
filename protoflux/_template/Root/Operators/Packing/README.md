<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Operators/Packing

### Pack Xy

<!-- ProtofluxNode:start -->
| Pack Xy | Type | Label |
| --- | ---- | ----- |
| input | Boolean | X |
| output | bool2 | * |
| input | Boolean | Y |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool2 |  |
<!-- ProtofluxNode:end -->


### Pack Xyz

<!-- ProtofluxNode:start -->
| Pack Xyz | Type | Label |
| --- | ---- | ----- |
| input | Boolean | X |
| output | bool3 | * |
| input | Boolean | Y |
| input | Boolean | Z |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool3 |  |
<!-- ProtofluxNode:end -->


### Pack Xyzw

<!-- ProtofluxNode:start -->
| Pack Xyzw | Type | Label |
| --- | ---- | ----- |
| input | Boolean | X |
| output | bool4 | * |
| input | Boolean | Y |
| input | Boolean | Z |
| input | Boolean | W |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool4 |  |
<!-- ProtofluxNode:end -->


### Unpack Xy

<!-- ProtofluxNode:start -->
| Unpack Xy | Type | Label |
| --- | ---- | ----- |
| input | bool2 | V |
| output | Boolean | X |
| output | Boolean | Y |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool2 |  |
<!-- ProtofluxNode:end -->


### Unpack Xyz

<!-- ProtofluxNode:start -->
| Unpack Xyz | Type | Label |
| --- | ---- | ----- |
| input | bool3 | V |
| output | Boolean | X |
| output | Boolean | Y |
| output | Boolean | Z |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool3 |  |
<!-- ProtofluxNode:end -->


### Unpack Xyzw

<!-- ProtofluxNode:start -->
| Unpack Xyzw | Type | Label |
| --- | ---- | ----- |
| input | bool4 | V |
| output | Boolean | X |
| output | Boolean | Y |
| output | Boolean | Z |
| output | Boolean | W |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool4 |  |
<!-- ProtofluxNode:end -->


### Pack Nullable

<!-- ProtofluxNode:start -->
| Pack Nullable | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| output | Nullable_1 | * |
| input | Boolean | HasValue |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.PackNullable\`1 |  |
<!-- ProtofluxNode:end -->


### Unpack Nullable

<!-- ProtofluxNode:start -->
| Unpack Nullable | Type | Label |
| --- | ---- | ----- |
| input | Nullable_1 | Nullable |
| output | T | Value |
| output | Boolean | HasValue |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.UnpackNullable\`1 |  |
<!-- ProtofluxNode:end -->


