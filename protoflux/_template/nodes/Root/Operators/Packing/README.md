<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Operators/Packing

### Pack Xy

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool2 -->
<!-- ProtofluxNode:start -->
| Pack Xy | Type | Label |
| --- | ---- | ----- |
| input | Boolean | X |
| output | bool2 | * |
| input | Boolean | Y |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool2 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool2 -->


### Pack Xyz

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool3 -->
<!-- ProtofluxNode:start -->
| Pack Xyz | Type | Label |
| --- | ---- | ----- |
| input | Boolean | X |
| output | bool3 | * |
| input | Boolean | Y |
| input | Boolean | Z |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool3 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool3 -->


### Pack Xyzw

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool4 -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Operators.Pack_Bool4 -->


### Unpack Xy

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool2 -->
<!-- ProtofluxNode:start -->
| Unpack Xy | Type | Label |
| --- | ---- | ----- |
| input | bool2 | V |
| output | Boolean | X |
| output | Boolean | Y |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool2 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool2 -->


### Unpack Xyz

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool3 -->
<!-- ProtofluxNode:start -->
| Unpack Xyz | Type | Label |
| --- | ---- | ----- |
| input | bool3 | V |
| output | Boolean | X |
| output | Boolean | Y |
| output | Boolean | Z |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool3 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool3 -->


### Unpack Xyzw

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool4 -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Operators.Unpack_Bool4 -->


### Pack Nullable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.PackNullable`1 -->
<!-- ProtofluxNode:start -->
| Pack Nullable | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| output | Nullable_1 | * |
| input | Boolean | HasValue |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.PackNullable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.PackNullable`1 -->


### Unpack Nullable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.UnpackNullable`1 -->
<!-- ProtofluxNode:start -->
| Unpack Nullable | Type | Label |
| --- | ---- | ----- |
| input | Nullable_1 | Nullable |
| output | T | Value |
| output | Boolean | HasValue |
| Root/Operators/Packing | ProtoFlux.Runtimes.Execution.Nodes.UnpackNullable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.UnpackNullable`1 -->


