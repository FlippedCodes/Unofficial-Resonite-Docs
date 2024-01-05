<!---------------------------------------------------------------------!
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the protoflux.css file instead.                                  !
 !----------------------------------------------------------------------->

[License Information](./_template/allNodes_prefix.md ':include')

<!-- panels:start -->
<!-- div:title-panel -->
### Source
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Source | Type | Label |
| ------ | ---- | ----- |
| output | T    | *     |
| Core   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Async Dynamic Impulse Reciever With Data
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Async Dynamic Impulse Reciever With Data | Type      | Label       |
| ---------------------------------------- | --------- | ----------- |
| output                                   | AsyncCall | OnTriggered |
| output                                   | T         | Value       |
| Async                                    |           |             |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Dynamic Impulse Reciever With Data
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Dynamic Impulse Reciever With Data | Type | Label       |
| ---------------------------------- | ---- | ----------- |
| output                             | Call | OnTriggered |
| output                             | T    | Value       |
| Flow                               |      |             |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Dynamic Impulse Trigger With Data
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Dynamic Impulse Trigger With Data | Type          | Label           |
| --------------------------------- | ------------- | --------------- |
| input                             | SyncOperation | *               |
| output                            | Continuation  | Next            |
| input                             | String        | Tag             |
| output                            | Int32         | TriggeredCount  |
| input                             | Slot          | TargetHierarchy |
| input                             | Boolean       | ExcludeDisabled |
| input                             | T             | Value           |
| Flow                              |               |                 |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Once Per Frame
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Once Per Frame | Type          | Label |
| -------------- | ------------- | ----- |
| input          | SyncOperation | *     |
| output         | Continuation  | Next  |
| Flow           |               |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### --
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| --      | Type          | Label     |
| ------- | ------------- | --------- |
| input   | SyncOperation | *         |
| output  | Continuation  | OnWritten |
| output  | Continuation  | OnFail    |
| Actions |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ++
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ++      | Type          | Label     |
| ------- | ------------- | --------- |
| input   | SyncOperation | *         |
| output  | Continuation  | OnWritten |
| output  | Continuation  | OnFail    |
| Actions |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Indirect Decrement
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Indirect Decrement | Type          | Label     |
| ------------------ | ------------- | --------- |
| input              | SyncOperation | *         |
| output             | Continuation  | OnWritten |
| input              | IVariable\`2  | Variable  |
| output             | Continuation  | OnFail    |
| Indirect           |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Indirect Increment
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Indirect Increment | Type          | Label     |
| ------------------ | ------------- | --------- |
| input              | SyncOperation | *         |
| output             | Continuation  | OnWritten |
| input              | IVariable\`2  | Variable  |
| output             | Continuation  | OnFail    |
| Indirect           |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Async For
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Async For | Type           | Label         |
| --------- | -------------- | ------------- |
| input     | AsyncOperation | *             |
| output    | AsyncCall      | LoopStart     |
| input     | Int32          | Count         |
| output    | AsyncCall      | LoopIteration |
| input     | Boolean        | Reverse       |
| output    | Continuation   | LoopEnd       |
| output    | Int32          | Iteration     |
| Async     |                |               |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Async Range Loop
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Async Range Loop | Type           | Label         |
| ---------------- | -------------- | ------------- |
| input            | AsyncOperation | *             |
| output           | AsyncCall      | LoopStart     |
| input            | Int32          | Start         |
| output           | AsyncCall      | LoopIteration |
| input            | Int32          | End           |
| output           | Continuation   | LoopEnd       |
| input            | Int32          | StepSize      |
| output           | Int32          | Current       |
| Async            |                |               |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Async Sequence
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Async Sequence | Type           | Label |
| -------------- | -------------- | ----- |
| input          | AsyncOperation | *     |
| output         | AsyncCall      | Calls |
| Async          |                |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Async While
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Async While | Type           | Label         |
| ----------- | -------------- | ------------- |
| input       | AsyncOperation | *             |
| output      | AsyncCall      | LoopStart     |
| input       | Boolean        | Condition     |
| output      | AsyncCall      | LoopIteration |
| output      | Continuation   | LoopEnd       |
| Async       |                |               |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits byte
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits byte | Type    | Label |
| ----------------- | ------- | ----- |
| input             | Boolean | Bit0  |
| output            | Byte    | *     |
| input             | Boolean | Bit1  |
| input             | Boolean | Bit2  |
| input             | Boolean | Bit3  |
| input             | Boolean | Bit4  |
| input             | Boolean | Bit5  |
| input             | Boolean | Bit6  |
| input             | Boolean | Bit7  |
| Binary            |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits int
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits int | Type    | Label |
| ---------------- | ------- | ----- |
| input            | Boolean | Bit0  |
| output           | Int32   | *     |
| input            | Boolean | Bit1  |
| input            | Boolean | Bit2  |
| input            | Boolean | Bit3  |
| input            | Boolean | Bit4  |
| input            | Boolean | Bit5  |
| input            | Boolean | Bit6  |
| input            | Boolean | Bit7  |
| input            | Boolean | Bit8  |
| input            | Boolean | Bit9  |
| input            | Boolean | Bit10 |
| input            | Boolean | Bit11 |
| input            | Boolean | Bit12 |
| input            | Boolean | Bit13 |
| input            | Boolean | Bit14 |
| input            | Boolean | Bit15 |
| input            | Boolean | Bit16 |
| input            | Boolean | Bit17 |
| input            | Boolean | Bit18 |
| input            | Boolean | Bit19 |
| input            | Boolean | Bit20 |
| input            | Boolean | Bit21 |
| input            | Boolean | Bit22 |
| input            | Boolean | Bit23 |
| input            | Boolean | Bit24 |
| input            | Boolean | Bit25 |
| input            | Boolean | Bit26 |
| input            | Boolean | Bit27 |
| input            | Boolean | Bit28 |
| input            | Boolean | Bit29 |
| input            | Boolean | Bit30 |
| input            | Boolean | Bit31 |
| Binary           |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits long
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits long | Type    | Label |
| ----------------- | ------- | ----- |
| input             | Boolean | Bit0  |
| output            | Int64   | *     |
| input             | Boolean | Bit1  |
| input             | Boolean | Bit2  |
| input             | Boolean | Bit3  |
| input             | Boolean | Bit4  |
| input             | Boolean | Bit5  |
| input             | Boolean | Bit6  |
| input             | Boolean | Bit7  |
| input             | Boolean | Bit8  |
| input             | Boolean | Bit9  |
| input             | Boolean | Bit10 |
| input             | Boolean | Bit11 |
| input             | Boolean | Bit12 |
| input             | Boolean | Bit13 |
| input             | Boolean | Bit14 |
| input             | Boolean | Bit15 |
| input             | Boolean | Bit16 |
| input             | Boolean | Bit17 |
| input             | Boolean | Bit18 |
| input             | Boolean | Bit19 |
| input             | Boolean | Bit20 |
| input             | Boolean | Bit21 |
| input             | Boolean | Bit22 |
| input             | Boolean | Bit23 |
| input             | Boolean | Bit24 |
| input             | Boolean | Bit25 |
| input             | Boolean | Bit26 |
| input             | Boolean | Bit27 |
| input             | Boolean | Bit28 |
| input             | Boolean | Bit29 |
| input             | Boolean | Bit30 |
| input             | Boolean | Bit31 |
| input             | Boolean | Bit32 |
| input             | Boolean | Bit33 |
| input             | Boolean | Bit34 |
| input             | Boolean | Bit35 |
| input             | Boolean | Bit36 |
| input             | Boolean | Bit37 |
| input             | Boolean | Bit38 |
| input             | Boolean | Bit39 |
| input             | Boolean | Bit40 |
| input             | Boolean | Bit41 |
| input             | Boolean | Bit42 |
| input             | Boolean | Bit43 |
| input             | Boolean | Bit44 |
| input             | Boolean | Bit45 |
| input             | Boolean | Bit46 |
| input             | Boolean | Bit47 |
| input             | Boolean | Bit48 |
| input             | Boolean | Bit49 |
| input             | Boolean | Bit50 |
| input             | Boolean | Bit51 |
| input             | Boolean | Bit52 |
| input             | Boolean | Bit53 |
| input             | Boolean | Bit54 |
| input             | Boolean | Bit55 |
| input             | Boolean | Bit56 |
| input             | Boolean | Bit57 |
| input             | Boolean | Bit58 |
| input             | Boolean | Bit59 |
| input             | Boolean | Bit60 |
| input             | Boolean | Bit61 |
| input             | Boolean | Bit62 |
| input             | Boolean | Bit63 |
| Binary            |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits sbyte
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits sbyte | Type    | Label |
| ------------------ | ------- | ----- |
| input              | Boolean | Bit0  |
| output             | SByte   | *     |
| input              | Boolean | Bit1  |
| input              | Boolean | Bit2  |
| input              | Boolean | Bit3  |
| input              | Boolean | Bit4  |
| input              | Boolean | Bit5  |
| input              | Boolean | Bit6  |
| input              | Boolean | Bit7  |
| Binary             |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits short
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits short | Type    | Label |
| ------------------ | ------- | ----- |
| input              | Boolean | Bit0  |
| output             | Int16   | *     |
| input              | Boolean | Bit1  |
| input              | Boolean | Bit2  |
| input              | Boolean | Bit3  |
| input              | Boolean | Bit4  |
| input              | Boolean | Bit5  |
| input              | Boolean | Bit6  |
| input              | Boolean | Bit7  |
| input              | Boolean | Bit8  |
| input              | Boolean | Bit9  |
| input              | Boolean | Bit10 |
| input              | Boolean | Bit11 |
| input              | Boolean | Bit12 |
| input              | Boolean | Bit13 |
| input              | Boolean | Bit14 |
| input              | Boolean | Bit15 |
| Binary             |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits uint
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits uint | Type    | Label |
| ----------------- | ------- | ----- |
| input             | Boolean | Bit0  |
| output            | UInt32  | *     |
| input             | Boolean | Bit1  |
| input             | Boolean | Bit2  |
| input             | Boolean | Bit3  |
| input             | Boolean | Bit4  |
| input             | Boolean | Bit5  |
| input             | Boolean | Bit6  |
| input             | Boolean | Bit7  |
| input             | Boolean | Bit8  |
| input             | Boolean | Bit9  |
| input             | Boolean | Bit10 |
| input             | Boolean | Bit11 |
| input             | Boolean | Bit12 |
| input             | Boolean | Bit13 |
| input             | Boolean | Bit14 |
| input             | Boolean | Bit15 |
| input             | Boolean | Bit16 |
| input             | Boolean | Bit17 |
| input             | Boolean | Bit18 |
| input             | Boolean | Bit19 |
| input             | Boolean | Bit20 |
| input             | Boolean | Bit21 |
| input             | Boolean | Bit22 |
| input             | Boolean | Bit23 |
| input             | Boolean | Bit24 |
| input             | Boolean | Bit25 |
| input             | Boolean | Bit26 |
| input             | Boolean | Bit27 |
| input             | Boolean | Bit28 |
| input             | Boolean | Bit29 |
| input             | Boolean | Bit30 |
| input             | Boolean | Bit31 |
| Binary            |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits ulong
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits ulong | Type    | Label |
| ------------------ | ------- | ----- |
| input              | Boolean | Bit0  |
| output             | UInt64  | *     |
| input              | Boolean | Bit1  |
| input              | Boolean | Bit2  |
| input              | Boolean | Bit3  |
| input              | Boolean | Bit4  |
| input              | Boolean | Bit5  |
| input              | Boolean | Bit6  |
| input              | Boolean | Bit7  |
| input              | Boolean | Bit8  |
| input              | Boolean | Bit9  |
| input              | Boolean | Bit10 |
| input              | Boolean | Bit11 |
| input              | Boolean | Bit12 |
| input              | Boolean | Bit13 |
| input              | Boolean | Bit14 |
| input              | Boolean | Bit15 |
| input              | Boolean | Bit16 |
| input              | Boolean | Bit17 |
| input              | Boolean | Bit18 |
| input              | Boolean | Bit19 |
| input              | Boolean | Bit20 |
| input              | Boolean | Bit21 |
| input              | Boolean | Bit22 |
| input              | Boolean | Bit23 |
| input              | Boolean | Bit24 |
| input              | Boolean | Bit25 |
| input              | Boolean | Bit26 |
| input              | Boolean | Bit27 |
| input              | Boolean | Bit28 |
| input              | Boolean | Bit29 |
| input              | Boolean | Bit30 |
| input              | Boolean | Bit31 |
| input              | Boolean | Bit32 |
| input              | Boolean | Bit33 |
| input              | Boolean | Bit34 |
| input              | Boolean | Bit35 |
| input              | Boolean | Bit36 |
| input              | Boolean | Bit37 |
| input              | Boolean | Bit38 |
| input              | Boolean | Bit39 |
| input              | Boolean | Bit40 |
| input              | Boolean | Bit41 |
| input              | Boolean | Bit42 |
| input              | Boolean | Bit43 |
| input              | Boolean | Bit44 |
| input              | Boolean | Bit45 |
| input              | Boolean | Bit46 |
| input              | Boolean | Bit47 |
| input              | Boolean | Bit48 |
| input              | Boolean | Bit49 |
| input              | Boolean | Bit50 |
| input              | Boolean | Bit51 |
| input              | Boolean | Bit52 |
| input              | Boolean | Bit53 |
| input              | Boolean | Bit54 |
| input              | Boolean | Bit55 |
| input              | Boolean | Bit56 |
| input              | Boolean | Bit57 |
| input              | Boolean | Bit58 |
| input              | Boolean | Bit59 |
| input              | Boolean | Bit60 |
| input              | Boolean | Bit61 |
| input              | Boolean | Bit62 |
| input              | Boolean | Bit63 |
| Binary             |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Compose Bits ushort
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Compose Bits ushort | Type    | Label |
| ------------------- | ------- | ----- |
| input               | Boolean | Bit0  |
| output              | UInt16  | *     |
| input               | Boolean | Bit1  |
| input               | Boolean | Bit2  |
| input               | Boolean | Bit3  |
| input               | Boolean | Bit4  |
| input               | Boolean | Bit5  |
| input               | Boolean | Bit6  |
| input               | Boolean | Bit7  |
| input               | Boolean | Bit8  |
| input               | Boolean | Bit9  |
| input               | Boolean | Bit10 |
| input               | Boolean | Bit11 |
| input               | Boolean | Bit12 |
| input               | Boolean | Bit13 |
| input               | Boolean | Bit14 |
| input               | Boolean | Bit15 |
| Binary              |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits byte
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits byte | Type    | Label   |
| ----------------- | ------- | ------- |
| input             | Byte    | Integer |
| output            | Boolean | Bit0    |
| output            | Boolean | Bit1    |
| output            | Boolean | Bit2    |
| output            | Boolean | Bit3    |
| output            | Boolean | Bit4    |
| output            | Boolean | Bit5    |
| output            | Boolean | Bit6    |
| output            | Boolean | Bit7    |
| Binary            |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits int
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits int | Type    | Label   |
| ---------------- | ------- | ------- |
| input            | Int32   | Integer |
| output           | Boolean | Bit0    |
| output           | Boolean | Bit1    |
| output           | Boolean | Bit2    |
| output           | Boolean | Bit3    |
| output           | Boolean | Bit4    |
| output           | Boolean | Bit5    |
| output           | Boolean | Bit6    |
| output           | Boolean | Bit7    |
| output           | Boolean | Bit8    |
| output           | Boolean | Bit9    |
| output           | Boolean | Bit10   |
| output           | Boolean | Bit11   |
| output           | Boolean | Bit12   |
| output           | Boolean | Bit13   |
| output           | Boolean | Bit14   |
| output           | Boolean | Bit15   |
| output           | Boolean | Bit16   |
| output           | Boolean | Bit17   |
| output           | Boolean | Bit18   |
| output           | Boolean | Bit19   |
| output           | Boolean | Bit20   |
| output           | Boolean | Bit21   |
| output           | Boolean | Bit22   |
| output           | Boolean | Bit23   |
| output           | Boolean | Bit24   |
| output           | Boolean | Bit25   |
| output           | Boolean | Bit26   |
| output           | Boolean | Bit27   |
| output           | Boolean | Bit28   |
| output           | Boolean | Bit29   |
| output           | Boolean | Bit30   |
| output           | Boolean | Bit31   |
| Binary           |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits long
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits long | Type    | Label   |
| ----------------- | ------- | ------- |
| input             | Int64   | Integer |
| output            | Boolean | Bit0    |
| output            | Boolean | Bit1    |
| output            | Boolean | Bit2    |
| output            | Boolean | Bit3    |
| output            | Boolean | Bit4    |
| output            | Boolean | Bit5    |
| output            | Boolean | Bit6    |
| output            | Boolean | Bit7    |
| output            | Boolean | Bit8    |
| output            | Boolean | Bit9    |
| output            | Boolean | Bit10   |
| output            | Boolean | Bit11   |
| output            | Boolean | Bit12   |
| output            | Boolean | Bit13   |
| output            | Boolean | Bit14   |
| output            | Boolean | Bit15   |
| output            | Boolean | Bit16   |
| output            | Boolean | Bit17   |
| output            | Boolean | Bit18   |
| output            | Boolean | Bit19   |
| output            | Boolean | Bit20   |
| output            | Boolean | Bit21   |
| output            | Boolean | Bit22   |
| output            | Boolean | Bit23   |
| output            | Boolean | Bit24   |
| output            | Boolean | Bit25   |
| output            | Boolean | Bit26   |
| output            | Boolean | Bit27   |
| output            | Boolean | Bit28   |
| output            | Boolean | Bit29   |
| output            | Boolean | Bit30   |
| output            | Boolean | Bit31   |
| output            | Boolean | Bit32   |
| output            | Boolean | Bit33   |
| output            | Boolean | Bit34   |
| output            | Boolean | Bit35   |
| output            | Boolean | Bit36   |
| output            | Boolean | Bit37   |
| output            | Boolean | Bit38   |
| output            | Boolean | Bit39   |
| output            | Boolean | Bit40   |
| output            | Boolean | Bit41   |
| output            | Boolean | Bit42   |
| output            | Boolean | Bit43   |
| output            | Boolean | Bit44   |
| output            | Boolean | Bit45   |
| output            | Boolean | Bit46   |
| output            | Boolean | Bit47   |
| output            | Boolean | Bit48   |
| output            | Boolean | Bit49   |
| output            | Boolean | Bit50   |
| output            | Boolean | Bit51   |
| output            | Boolean | Bit52   |
| output            | Boolean | Bit53   |
| output            | Boolean | Bit54   |
| output            | Boolean | Bit55   |
| output            | Boolean | Bit56   |
| output            | Boolean | Bit57   |
| output            | Boolean | Bit58   |
| output            | Boolean | Bit59   |
| output            | Boolean | Bit60   |
| output            | Boolean | Bit61   |
| output            | Boolean | Bit62   |
| output            | Boolean | Bit63   |
| Binary            |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits sbyte
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits sbyte | Type    | Label   |
| ------------------ | ------- | ------- |
| input              | SByte   | Integer |
| output             | Boolean | Bit0    |
| output             | Boolean | Bit1    |
| output             | Boolean | Bit2    |
| output             | Boolean | Bit3    |
| output             | Boolean | Bit4    |
| output             | Boolean | Bit5    |
| output             | Boolean | Bit6    |
| output             | Boolean | Bit7    |
| Binary             |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits short
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits short | Type    | Label   |
| ------------------ | ------- | ------- |
| input              | Int16   | Integer |
| output             | Boolean | Bit0    |
| output             | Boolean | Bit1    |
| output             | Boolean | Bit2    |
| output             | Boolean | Bit3    |
| output             | Boolean | Bit4    |
| output             | Boolean | Bit5    |
| output             | Boolean | Bit6    |
| output             | Boolean | Bit7    |
| output             | Boolean | Bit8    |
| output             | Boolean | Bit9    |
| output             | Boolean | Bit10   |
| output             | Boolean | Bit11   |
| output             | Boolean | Bit12   |
| output             | Boolean | Bit13   |
| output             | Boolean | Bit14   |
| output             | Boolean | Bit15   |
| Binary             |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits uint
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits uint | Type    | Label   |
| ----------------- | ------- | ------- |
| input             | UInt32  | Integer |
| output            | Boolean | Bit0    |
| output            | Boolean | Bit1    |
| output            | Boolean | Bit2    |
| output            | Boolean | Bit3    |
| output            | Boolean | Bit4    |
| output            | Boolean | Bit5    |
| output            | Boolean | Bit6    |
| output            | Boolean | Bit7    |
| output            | Boolean | Bit8    |
| output            | Boolean | Bit9    |
| output            | Boolean | Bit10   |
| output            | Boolean | Bit11   |
| output            | Boolean | Bit12   |
| output            | Boolean | Bit13   |
| output            | Boolean | Bit14   |
| output            | Boolean | Bit15   |
| output            | Boolean | Bit16   |
| output            | Boolean | Bit17   |
| output            | Boolean | Bit18   |
| output            | Boolean | Bit19   |
| output            | Boolean | Bit20   |
| output            | Boolean | Bit21   |
| output            | Boolean | Bit22   |
| output            | Boolean | Bit23   |
| output            | Boolean | Bit24   |
| output            | Boolean | Bit25   |
| output            | Boolean | Bit26   |
| output            | Boolean | Bit27   |
| output            | Boolean | Bit28   |
| output            | Boolean | Bit29   |
| output            | Boolean | Bit30   |
| output            | Boolean | Bit31   |
| Binary            |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits ulong
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits ulong | Type    | Label   |
| ------------------ | ------- | ------- |
| input              | UInt64  | Integer |
| output             | Boolean | Bit0    |
| output             | Boolean | Bit1    |
| output             | Boolean | Bit2    |
| output             | Boolean | Bit3    |
| output             | Boolean | Bit4    |
| output             | Boolean | Bit5    |
| output             | Boolean | Bit6    |
| output             | Boolean | Bit7    |
| output             | Boolean | Bit8    |
| output             | Boolean | Bit9    |
| output             | Boolean | Bit10   |
| output             | Boolean | Bit11   |
| output             | Boolean | Bit12   |
| output             | Boolean | Bit13   |
| output             | Boolean | Bit14   |
| output             | Boolean | Bit15   |
| output             | Boolean | Bit16   |
| output             | Boolean | Bit17   |
| output             | Boolean | Bit18   |
| output             | Boolean | Bit19   |
| output             | Boolean | Bit20   |
| output             | Boolean | Bit21   |
| output             | Boolean | Bit22   |
| output             | Boolean | Bit23   |
| output             | Boolean | Bit24   |
| output             | Boolean | Bit25   |
| output             | Boolean | Bit26   |
| output             | Boolean | Bit27   |
| output             | Boolean | Bit28   |
| output             | Boolean | Bit29   |
| output             | Boolean | Bit30   |
| output             | Boolean | Bit31   |
| output             | Boolean | Bit32   |
| output             | Boolean | Bit33   |
| output             | Boolean | Bit34   |
| output             | Boolean | Bit35   |
| output             | Boolean | Bit36   |
| output             | Boolean | Bit37   |
| output             | Boolean | Bit38   |
| output             | Boolean | Bit39   |
| output             | Boolean | Bit40   |
| output             | Boolean | Bit41   |
| output             | Boolean | Bit42   |
| output             | Boolean | Bit43   |
| output             | Boolean | Bit44   |
| output             | Boolean | Bit45   |
| output             | Boolean | Bit46   |
| output             | Boolean | Bit47   |
| output             | Boolean | Bit48   |
| output             | Boolean | Bit49   |
| output             | Boolean | Bit50   |
| output             | Boolean | Bit51   |
| output             | Boolean | Bit52   |
| output             | Boolean | Bit53   |
| output             | Boolean | Bit54   |
| output             | Boolean | Bit55   |
| output             | Boolean | Bit56   |
| output             | Boolean | Bit57   |
| output             | Boolean | Bit58   |
| output             | Boolean | Bit59   |
| output             | Boolean | Bit60   |
| output             | Boolean | Bit61   |
| output             | Boolean | Bit62   |
| output             | Boolean | Bit63   |
| Binary             |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Extract Bits ushort
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Extract Bits ushort | Type    | Label   |
| ------------------- | ------- | ------- |
| input               | UInt16  | Integer |
| output              | Boolean | Bit0    |
| output              | Boolean | Bit1    |
| output              | Boolean | Bit2    |
| output              | Boolean | Bit3    |
| output              | Boolean | Bit4    |
| output              | Boolean | Bit5    |
| output              | Boolean | Bit6    |
| output              | Boolean | Bit7    |
| output              | Boolean | Bit8    |
| output              | Boolean | Bit9    |
| output              | Boolean | Bit10   |
| output              | Boolean | Bit11   |
| output              | Boolean | Bit12   |
| output              | Boolean | Bit13   |
| output              | Boolean | Bit14   |
| output              | Boolean | Bit15   |
| Binary              |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Box
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Box    | Type   | Label |
| ------ | ------ | ----- |
| input  | T      | Input |
| output | Object | *     |
| Core   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Call Relay
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Call Relay | Type          | Label       |
| ---------- | ------------- | ----------- |
| input      | SyncOperation | *           |
| output     | Call          | OnTriggered |
| Core       |               |             |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ValueCast
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ValueCast | Type        | Label |
| --------- | ----------- | ----- |
| input     | Nullable\`1 | Input |
| output    | Object      | *     |
| Casts     |             |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ObjectCast
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ObjectCast | Type | Label |
| ---------- | ---- | ----- |
| input      | I    | Input |
| output     | O    | *     |
| Casts      |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Alpha
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Alpha | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Blue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Blue | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Blue HDR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Blue HDR | Type   | Label |
| ------------ | ------ | ----- |
| input        | color  | Color |
| output       | color  | *     |
| input        | Single | Value |
| Channels     |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Green
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Green | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Green HDR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Green HDR | Type   | Label |
| ------------- | ------ | ----- |
| input         | color  | Color |
| output        | color  | *     |
| input         | Single | Value |
| Channels      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Hue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Hue  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Red
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Red  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Red HDR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Red HDR | Type   | Label |
| ----------- | ------ | ----- |
| input       | color  | Color |
| output      | color  | *     |
| input       | Single | Value |
| Channels    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Saturation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Saturation | Type   | Label |
| -------------- | ------ | ----- |
| input          | color  | Color |
| output         | color  | *     |
| input          | Single | Value |
| Channels       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Value
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Value | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Add Value HDR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Add Value HDR | Type   | Label |
| ------------- | ------ | ----- |
| input         | color  | Color |
| output        | color  | *     |
| input         | Single | Value |
| Channels      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Hue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Hue    | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | Hue   |
| output | color  | *     |
| Colors |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Luminance
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Luminance | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | Single | *     |
| Colors    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Alpha
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Alpha | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Blue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Blue | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Green
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Green | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Hue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Hue  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Red
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Red  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul RGB
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul RGB  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Saturation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Saturation | Type   | Label |
| -------------- | ------ | ----- |
| input          | color  | Color |
| output         | color  | *     |
| input          | Single | Value |
| Channels       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mul Value
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mul Value | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Alpha
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Alpha | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Blue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Blue | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Green
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Green | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Hue
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Hue  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Red
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Red  | Type   | Label |
| -------- | ------ | ----- |
| input    | color  | Color |
| output   | color  | *     |
| input    | Single | Value |
| Channels |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Saturation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Saturation | Type   | Label |
| -------------- | ------ | ----- |
| input          | color  | Color |
| output         | color  | *     |
| input          | Single | Value |
| Channels       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Set Value
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Set Value | Type   | Label |
| --------- | ------ | ----- |
| input     | color  | Color |
| output    | color  | *     |
| input     | Single | Value |
| Channels  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Color To HSL
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Color To HSL | Type   | Label |
| ------------ | ------ | ----- |
| input        | color  | C     |
| output       | Single | H     |
| output       | Single | S     |
| output       | Single | L     |
| Colors       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Color To HSV
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Color To HSV | Type   | Label |
| ------------ | ------ | ----- |
| input        | color  | C     |
| output       | Single | H     |
| output       | Single | S     |
| output       | Single | V     |
| Colors       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### HSL To Color
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| HSL To Color | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | H     |
| output       | color  | *     |
| input        | Single | S     |
| input        | Single | L     |
| Colors       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### HSV To Color
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| HSV To Color | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | H     |
| output       | color  | *     |
| input        | Single | S     |
| input        | Single | V     |
| Colors       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Continuation Relay
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Continuation Relay | Type          | Label |
| ------------------ | ------------- | ----- |
| input              | SyncOperation | *     |
| output             | Continuation  | Next  |
| Core               |               |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Continuous Relay
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Continuous Relay | Type | Label |
| ---------------- | ---- | ----- |
| input            | T    | Input |
| output           | T    | *     |
| Utility          |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NumberToEnum
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NumberToEnum | Type | Label |
| ------------ | ---- | ----- |
| input        | Byte | Value |
| output       | E    | *     |
| Enums        |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### EnumToNumber
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| EnumToNumber | Type | Label |
| ------------ | ---- | ----- |
| input        | E    | Value |
| output       | Byte | *     |
| Enums        |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Async Call
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Async Call | Type      | Label  |
| ---------- | --------- | ------ |
| output     | AsyncCall | Target |
| Core       |           |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Call
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Call   | Type | Label  |
| ------ | ---- | ------ |
| output | Call | Target |
| Core   |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pulse Display
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pulse Display | Type          | Label |
| ------------- | ------------- | ----- |
| input         | SyncOperation | *     |
| Core          |               |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Display
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Display | Type | Label |
| ------- | ---- | ----- |
| input   | T    | Input |
| Core    |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Input
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Input  | Type | Label |
| ------ | ---- | ----- |
| output | T    | *     |
| Core   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### FilterInput
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| FilterInput | Type | Label |
| ----------- | ---- | ----- |
| output      | T    | *     |
| Core        |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### For
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| For    | Type          | Label         |
| ------ | ------------- | ------------- |
| input  | SyncOperation | *             |
| output | Call          | LoopStart     |
| input  | Int32         | Count         |
| output | Call          | LoopIteration |
| input  | Boolean       | Reverse       |
| output | Continuation  | LoopEnd       |
| output | Int32         | Iteration     |
| Flow   |               |               |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Tween
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Tween   | Type           | Label                |
| ------- | -------------- | -------------------- |
| input   | AsyncOperation | *                    |
| output  | AsyncCall      | OnStarted            |
| input   | T              | To                   |
| output  | Continuation   | OnDone               |
| input   | T              | From                 |
| input   | Single         | Duration             |
| input   | CurvePreset    | Curve                |
| input   | Boolean        | ProportionalDuration |
| input   | IField\`1      | Target               |
| Actions |                |                      |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### AssetLoadProgress
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| AssetLoadProgress | Type                      | Label            |
| ----------------- | ------------------------- | ---------------- |
| input             | UsersAssetLoadProgress\`1 | Tracker          |
| output            | Nullable\`1               | DownloadProgress |
| input             | User                      | User             |
| output            | AssetLoadState            | LoadState        |
| Assets            |                           |                  |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Get Texture 2D Pixel
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Get Texture 2D Pixel | Type      | Label    |
| -------------------- | --------- | -------- |
| input                | Texture2D | Texture  |
| output               | colorX    | *        |
| input                | int2      | Position |
| input                | Int32     | MipLevel |
| Assets               |           |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Get Texture 3D Pixel
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Get Texture 3D Pixel | Type      | Label    |
| -------------------- | --------- | -------- |
| input                | Texture3D | Texture  |
| output               | colorX    | *        |
| input                | int3      | Position |
| input                | Int32     | MipLevel |
| Assets               |           |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sample Texture 2D UV
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sample Texture 2D UV | Type      | Label    |
| -------------------- | --------- | -------- |
| input                | Texture2D | Texture  |
| output               | colorX    | *        |
| input                | float2    | UV       |
| input                | WrapMode  | WrapMode |
| Assets               |           |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sample Texture 2D UVW
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sample Texture 2D UVW | Type      | Label   |
| --------------------- | --------- | ------- |
| input                 | Texture3D | Texture |
| output                | colorX    | *       |
| input                 | float3    | UVW     |
| Assets                |           |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Texture 2D Format
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Texture 2D Format | Type          | Label       |
| ----------------- | ------------- | ----------- |
| input             | Texture2D     | Texture     |
| output            | int2          | Size        |
| output            | TextureFormat | Format      |
| output            | Int32         | MipMapCount |
| Assets            |               |             |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Texture 3D Format
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Texture 3D Format | Type          | Label       |
| ----------------- | ------------- | ----------- |
| input             | Texture3D     | Texture     |
| output            | int3          | Size        |
| output            | TextureFormat | Format      |
| output            | Int32         | MipMapCount |
| Assets            |               |             |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Updates Delay
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Updates Delay | Type           | Label       |
| ------------- | -------------- | ----------- |
| input         | AsyncOperation | *           |
| output        | Continuation   | Next        |
| input         | Int32          | Updates     |
| output        | AsyncCall      | OnTriggered |
| Async         |                |             |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Updates Delay with Data
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Updates Delay with Data | Type           | Label        |
| ----------------------- | -------------- | ------------ |
| input                   | AsyncOperation | *            |
| output                  | Continuation   | Next         |
| input                   | Int32          | Updates      |
| output                  | AsyncCall      | OnTriggered  |
| input                   | T              | Value        |
| output                  | T              | DelayedValue |
| Async                   |                |              |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### DefaultUserScale
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| DefaultUserScale | Type   | Label |
| ---------------- | ------ | ----- |
| input            | User   | User  |
| output           | Single | *     |
| Avatars          |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Is Host Access Allowed
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Is Host Access Allowed | Type    | Label |
| ---------------------- | ------- | ----- |
| input                  | String  | Host  |
| output                 | Boolean | *     |
| input                  | Int32   | Port  |
| Network                |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ÷dT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ÷dT    | Type | Label |
| ------ | ---- | ----- |
| input  | T    | A     |
| output | T    | *     |
| Time   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### *dT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| *dT    | Type | Label |
| ------ | ---- | ----- |
| input  | T    | A     |
| output | T    | *     |
| Time   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### dT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| dT     | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1/dT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1/dT   | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Smooth 1/dT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Smooth 1/dT | Type   | Label |
| ----------- | ------ | ----- |
| output      | Single | *     |
| Time        |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Smooth dT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Smooth dT | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Time      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### T*10
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| T*10   | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### T*2
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| T*2    | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### T <size=25%>(double)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| T <size=25%>(double) | Type   | Label |
| -------------------- | ------ | ----- |
| output               | Double | *     |
| Time                 |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### T
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| T      | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### T/2
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| T/2    | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### T/10
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| T/10   | Type   | Label |
| ------ | ------ | ----- |
| output | Single | *     |
| Time   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### User VR Active
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| User VR Active | Type    | Label |
| -------------- | ------- | ----- |
| input          | User    | User  |
| output         | Boolean | *     |
| Info           |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Boolean Latch
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Boolean Latch | Type          | Label   |
| ------------- | ------------- | ------- |
| input         | SyncOperation | Set     |
| output        | Continuation  | OnSet   |
| input         | SyncOperation | Reset   |
| output        | Continuation  | OnReset |
| input         | SyncOperation | Toggle  |
| output        | Boolean       | *       |
| Flow          |               |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### DataModelStore
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| DataModelStore | Type | Label |
| -------------- | ---- | ----- |
| output         | T    | *     |
| Variables      |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Get Type
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Get Type | Type   | Label  |
| -------- | ------ | ------ |
| input    | Object | Object |
| output   | Type   | *      |
| Utility  |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Global To Output
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Global To Output | Type | Label |
| ---------------- | ---- | ----- |
| output           | T    | *     |
| Core             |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### If
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| If     | Type          | Label     |
| ------ | ------------- | --------- |
| input  | SyncOperation | *         |
| output | Continuation  | OnTrue    |
| input  | Boolean       | Condition |
| output | Continuation  | OnFalse   |
| Flow   |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Multiplex
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Multiplex | Type          | Label    |
| --------- | ------------- | -------- |
| input     | SyncOperation | *        |
| output    | Continuation  | Impulses |
| input     | Int32         | Index    |
| Flow      |               |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Is Null
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Is Null   | Type    | Label    |
| --------- | ------- | -------- |
| input     | T       | Instance |
| output    | Boolean | *        |
| Operators |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Link
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Link | Type | Label |
| ---- | ---- | ----- |
| Core |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Local
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Local     | Type | Label |
| --------- | ---- | ----- |
| output    | T    | *     |
| Variables |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Cos<sup>-1
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Cos<sup>-1   | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Single | *     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sin<sup>-1
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sin<sup>-1   | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Single | *     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Tan<sup>-1
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Tan<sup>-1   | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Single | *     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Atan2
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Atan2        | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | Y     |
| output       | Single | *     |
| input        | Single | X     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Avg
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Avg    | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | A     |
| output | Single | *     |
| input  | Single | B     |
| Math   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Avg
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Avg    | Type   | Label    |
| ------ | ------ | -------- |
| input  | Single | Operands |
| output | Single | *        |
| Math   |        |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Bezier Curve
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Bezier Curve  | Type              | Label |
| ------------- | ----------------- | ----- |
| input         | TangentPointFloat | From  |
| output        | Single            | *     |
| input         | TangentPointFloat | To    |
| input         | Single            | Lerp  |
| Interpolation |                   |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Ceil
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Ceil   | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | N     |
| output | Single | *     |
| Math   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### CeilToInt
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| CeilToInt | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | N     |
| output    | Int32  | *     |
| Math      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Clamp01
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Clamp01 | Type   | Label |
| ------- | ------ | ----- |
| input   | Single | N     |
| output  | Single | *     |
| Math    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### <color=red>b<color=orange>o<color=yellow>b<color=lime>o<color=cyan>o<color=blue>l<color=purple>3<color=magenta>o<color=red>l
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| <color=red>b<color=orange>o<color=yellow>b<color=lime>o<color=cyan>o<color=blue>l<color=purple>3<color=magenta>o<color=red>l | Type      | Label |
| ---------------------------------------------------------------------------------------------------------------------------- | --------- | ----- |
| output                                                                                                                       | bobool3ol | *     |
| Constants                                                                                                                    |           |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Deg 2 Rad
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Deg 2 Rad | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### e
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| e         | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 7
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 7         | Type   | Label |
| --------- | ------ | ----- |
| output    | UInt64 | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### π/2
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| π/2       | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1/(π/2)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1/(π/2)   | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1/π
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1/π       | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1/(π/4)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1/(π/4)   | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1/τ
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1/τ       | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### OwO
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| OwO       | Type   | Label |
| --------- | ------ | ----- |
| output    | String | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ϕ
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ϕ         | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### π
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| π         | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### π/4
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| π/4       | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Rad 2 Deg
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Rad 2 Deg | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### τ
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| τ         | Type   | Label |
| --------- | ------ | ----- |
| output    | Single | *     |
| Constants |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Constant Slerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Constant Slerp | Type   | Label |
| -------------- | ------ | ----- |
| input          | floatQ | Input |
| output         | floatQ | *     |
| input          | Single | Speed |
| Interpolation  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Cos
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Cos          | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Single | *     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Cosine Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Cosine Lerp   | Type   | Label |
| ------------- | ------ | ----- |
| input         | Single | A     |
| output        | Single | *     |
| input         | Single | B     |
| input         | Single | Lerp  |
| Interpolation |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Cubic Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Cubic Lerp    | Type              | Label |
| ------------- | ----------------- | ----- |
| input         | TangentPointFloat | From  |
| output        | Single            | *     |
| input         | TangentPointFloat | To    |
| input         | Single            | Lerp  |
| Interpolation |                   |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### e<sup>n
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| e<sup>n | Type   | Label |
| ------- | ------ | ----- |
| input   | Single | N     |
| output  | Single | *     |
| Math    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Floor
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Floor  | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | N     |
| output | Single | *     |
| Math   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### FloorToInt
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| FloorToInt | Type   | Label |
| ---------- | ------ | ----- |
| input      | Single | N     |
| output     | Int32  | *     |
| Math       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### GreatestCommonDivisor
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| GreatestCommonDivisor | Type   | Label |
| --------------------- | ------ | ----- |
| input                 | UInt32 | A     |
| output                | UInt32 | *     |
| input                 | UInt32 | B     |
| Math                  |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Is Between
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Is Between | Type    | Label |
| ---------- | ------- | ----- |
| input      | UInt32  | Value |
| output     | Boolean | *     |
| input      | UInt32  | Min   |
| input      | UInt32  | Max   |
| Math       |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### LeastCommonMultiple
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| LeastCommonMultiple | Type   | Label |
| ------------------- | ------ | ----- |
| input               | UInt32 | A     |
| output              | UInt32 | *     |
| input               | UInt32 | B     |
| Math                |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Log<sub>e
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Log<sub>e | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | N     |
| output    | Single | *     |
| Math      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Log<sub>e10
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Log<sub>e10 | Type   | Label |
| ----------- | ------ | ----- |
| input       | Single | N     |
| output      | Single | *     |
| Math        |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Log<sub>N
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Log<sub>N | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | N     |
| output    | Single | *     |
| input     | Single | Base  |
| Math      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Bezier Curve
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Bezier Curve  | Type              | Label    |
| ------------- | ----------------- | -------- |
| input         | Single            | Lerp     |
| output        | Single            | *        |
| input         | TangentPointFloat | Operands |
| Interpolation |                   |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Cosine Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Cosine Lerp   | Type   | Label    |
| ------------- | ------ | -------- |
| input         | Single | Lerp     |
| output        | Single | *        |
| input         | Single | Operands |
| Interpolation |        |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Cubic Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Cubic Lerp    | Type              | Label    |
| ------------- | ----------------- | -------- |
| input         | Single            | Lerp     |
| output        | Single            | *        |
| input         | TangentPointFloat | Operands |
| Interpolation |                   |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Slerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Slerp         | Type   | Label    |
| ------------- | ------ | -------- |
| input         | Single | Lerp     |
| output        | float3 | *        |
| input         | float3 | Operands |
| Interpolation |        |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### n√x
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| n√x    | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | Value |
| output | Single | *     |
| input  | Single | N     |
| Math   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack Tangent Point
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack Tangent Point | Type              | Label   |
| ------------------ | ----------------- | ------- |
| input              | Single            | Value   |
| output             | TangentPointFloat | *       |
| input              | Single            | Tangent |
| Trigonometry       |                   |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Ping Pong
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Ping Pong | Type   | Label  |
| --------- | ------ | ------ |
| input     | UInt32 | N      |
| output    | UInt32 | *      |
| input     | UInt32 | Length |
| Math      |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### n<sup>y
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| n<sup>y | Type   | Label |
| ------- | ------ | ----- |
| input   | Single | N     |
| output  | Single | *     |
| input   | Single | Power |
| Math    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Axis Angle
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Axis Angle | Type   | Label |
| ---------- | ------ | ----- |
| input      | float3 | Axis  |
| output     | floatQ | *     |
| input      | Single | Angle |
| Rotation   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Euler Angles
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Euler Angles | Type   | Label |
| ------------ | ------ | ----- |
| input        | floatQ | Q     |
| output       | float3 | *     |
| Rotation     |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### From Euler
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| From Euler | Type   | Label  |
| ---------- | ------ | ------ |
| input      | float3 | Angles |
| output     | floatQ | *      |
| Rotation   |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### From To Rotation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| From To Rotation | Type   | Label |
| ---------------- | ------ | ----- |
| input            | float3 | From  |
| output           | floatQ | *     |
| input            | float3 | To    |
| Rotation         |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Inverse Rotation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Inverse Rotation | Type   | Label |
| ---------------- | ------ | ----- |
| input            | floatQ | Q     |
| output           | floatQ | *     |
| Rotation         |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Look Rotation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Look Rotation | Type   | Label   |
| ------------- | ------ | ------- |
| input         | float3 | Forward |
| output        | floatQ | *       |
| input         | float3 | Up      |
| Rotation      |        |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### To Axis Angle
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| To Axis Angle | Type   | Label |
| ------------- | ------ | ----- |
| input         | floatQ | Q     |
| output        | float3 | Axis  |
| output        | Single | Angle |
| Rotation      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Simplex 1D
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Simplex 1D | Type   | Label    |
| ---------- | ------ | -------- |
| input      | Single | Position |
| output     | Single | *        |
| Random     |        |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Remap
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Remap  | Type   | Label  |
| ------ | ------ | ------ |
| input  | Single | InMin  |
| output | Single | *      |
| input  | Single | InMax  |
| input  | Single | OutMin |
| input  | Single | OutMax |
| input  | Single | Value  |
| Math   |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Remap11_01
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Remap11_01 | Type   | Label |
| ---------- | ------ | ----- |
| input      | Single | Value |
| output     | Single | *     |
| Math       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Repeat 01
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Repeat 01 | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | Value |
| output    | Single | *     |
| Math      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Round
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Round  | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | N     |
| output | Single | *     |
| Math   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Round To Int
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Round To Int | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Int32  | *     |
| Math         |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sigmoid
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sigmoid | Type   | Label |
| ------- | ------ | ----- |
| input   | Single | X     |
| output  | Single | *     |
| input   | Single | E     |
| Math    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sign
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sign   | Type  | Label |
| ------ | ----- | ----- |
| input  | Int32 | N     |
| output | Int32 | *     |
| Math   |       |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sin
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sin          | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Single | *     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Slerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Slerp         | Type   | Label |
| ------------- | ------ | ----- |
| input         | float3 | From  |
| output        | float3 | *     |
| input         | float3 | To    |
| input         | Single | Lerp  |
| Interpolation |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### √n
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| √n     | Type   | Label |
| ------ | ------ | ----- |
| input  | Single | N     |
| output | Single | *     |
| Math   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Tan
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Tan          | Type   | Label |
| ------------ | ------ | ----- |
| input        | Single | N     |
| output       | Single | *     |
| Trigonometry |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Abs
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Abs    | Type | Label |
| ------ | ---- | ----- |
| input  | T    | N     |
| output | T    | *     |
| Math   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Clamp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Clamp  | Type | Label |
| ------ | ---- | ----- |
| input  | T    | Value |
| output | T    | *     |
| input  | T    | Min   |
| input  | T    | Max   |
| Math   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Constant Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Constant Lerp | Type   | Label |
| ------------- | ------ | ----- |
| input         | T      | Input |
| output        | T      | *     |
| input         | Single | Speed |
| Interpolation |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Inverse Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Inverse Lerp  | Type   | Label |
| ------------- | ------ | ----- |
| input         | T      | From  |
| output        | Single | *     |
| input         | T      | To    |
| input         | T      | Value |
| Interpolation |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Lerp          | Type   | Label |
| ------------- | ------ | ----- |
| input         | T      | From  |
| output        | T      | *     |
| input         | T      | To    |
| input         | Single | Lerp  |
| Interpolation |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Lerp (unclamped)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Lerp (unclamped) | Type   | Label |
| ---------------- | ------ | ----- |
| input            | T      | From  |
| output           | T      | *     |
| input            | T      | To    |
| input            | Single | Lerp  |
| Interpolation    |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Max
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Max    | Type | Label |
| ------ | ---- | ----- |
| input  | T    | A     |
| output | T    | *     |
| input  | T    | B     |
| Math   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Max
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Max    | Type | Label    |
| ------ | ---- | -------- |
| input  | T    | Operands |
| output | T    | *        |
| Math   |      |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Min
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Min    | Type | Label |
| ------ | ---- | ----- |
| input  | T    | A     |
| output | T    | *     |
| input  | T    | B     |
| Math   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Min
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Min    | Type | Label    |
| ------ | ---- | -------- |
| input  | T    | Operands |
| output | T    | *        |
| Math   |      |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Lerp
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Lerp          | Type   | Label    |
| ------------- | ------ | -------- |
| input         | Single | Lerp     |
| output        | T      | *        |
| input         | T      | Operands |
| Interpolation |        |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Repeat
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Repeat | Type | Label  |
| ------ | ---- | ------ |
| input  | T    | N      |
| output | T    | *      |
| input  | T    | Length |
| Math   |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ??
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ??        | Type | Label    |
| --------- | ---- | -------- |
| input     | T    | Operands |
| output    | T    | *        |
| Operators |      |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NOT Null
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NOT Null  | Type    | Label    |
| --------- | ------- | -------- |
| input     | T       | Instance |
| output    | Boolean | *        |
| Operators |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ??
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ??        | Type | Label |
| --------- | ---- | ----- |
| input     | T    | A     |
| output    | T    | *     |
| input     | T    | B     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### +
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| +         | Type   | Label |
| --------- | ------ | ----- |
| input     | uint2  | A     |
| output    | uint2  | *     |
| input     | UInt32 | B     |
| Operators |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### All
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| All          | Type    | Label |
| ------------ | ------- | ----- |
| input        | bool2   | V     |
| output       | Boolean | *     |
| Bool Vectors |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### AND
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| AND     | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| input   | Boolean | B     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### AND
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| AND     | Type    | Label    |
| ------- | ------- | -------- |
| input   | Boolean | Operands |
| output  | Boolean | *        |
| Boolean |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### °<br><size=25%>(angle)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| °<br><size=25%>(angle) | Type   | Label |
| ---------------------- | ------ | ----- |
| input                  | uint2  | A     |
| output                 | Single | *     |
| input                  | uint2  | B     |
| Vectors                |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Any
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Any          | Type    | Label |
| ------------ | ------- | ----- |
| input        | bool2   | V     |
| output       | Boolean | *     |
| Bool Vectors |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ≈
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ≈         | Type    | Label   |
| --------- | ------- | ------- |
| input     | Single  | A       |
| output    | Boolean | *       |
| input     | Single  | B       |
| input     | Single  | Epsilon |
| Operators |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### !≈
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| !≈        | Type    | Label   |
| --------- | ------- | ------- |
| input     | Single  | A       |
| output    | Boolean | *       |
| input     | Single  | B       |
| input     | Single  | Epsilon |
| Operators |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ComposeRotation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ComposeRotation | Type     | Label    |
| --------------- | -------- | -------- |
| input           | floatQ   | Rotation |
| output          | float3x3 | *        |
| Matrix          |          |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ComposeScale
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ComposeScale | Type     | Label |
| ------------ | -------- | ----- |
| input        | float3   | Scale |
| output       | float3x3 | *     |
| Matrix       |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ComposeScaleRotation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ComposeScaleRotation | Type     | Label    |
| -------------------- | -------- | -------- |
| input                | float3   | Scale    |
| output               | float3x3 | *        |
| input                | floatQ   | Rotation |
| Matrix               |          |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ComposeTRS
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ComposeTRS | Type     | Label    |
| ---------- | -------- | -------- |
| input      | float3   | Position |
| output     | float4x4 | *        |
| input      | floatQ   | Rotation |
| input      | float3   | Scale    |
| Matrix     |          |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ×<br><size=25%>(cross product)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ×<br><size=25%>(cross product) | Type   | Label |
| ------------------------------ | ------ | ----- |
| input                          | float3 | A     |
| output                         | float3 | *     |
| input                          | float3 | B     |
| Vectors                        |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### DecomposedPosition
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| DecomposedPosition | Type     | Label |
| ------------------ | -------- | ----- |
| input              | float4x4 | A     |
| output             | float3   | *     |
| Matrix             |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### DecomposedRotation
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| DecomposedRotation | Type     | Label |
| ------------------ | -------- | ----- |
| input              | float3x3 | A     |
| output             | floatQ   | *     |
| Matrix             |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### DecomposedScale
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| DecomposedScale | Type     | Label |
| --------------- | -------- | ----- |
| input           | float3x3 | A     |
| output          | float3   | *     |
| Matrix          |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Determinant
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Determinant | Type     | Label |
| ----------- | -------- | ----- |
| input       | float2x2 | A     |
| output      | Single   | *     |
| Matrix      |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Distance
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Distance  | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | A     |
| output    | Single | *     |
| input     | Single | B     |
| Operators |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ÷
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ÷         | Type   | Label |
| --------- | ------ | ----- |
| input     | uint2  | A     |
| output    | uint2  | *     |
| input     | UInt32 | B     |
| Operators |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ⋅<br><size=25%>(dot product)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ⋅<br><size=25%>(dot product) | Type   | Label |
| ---------------------------- | ------ | ----- |
| input                        | uint2  | A     |
| output                       | Single | *     |
| input                        | uint2  | B     |
| Vectors                      |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ≥
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ≥         | Type  | Label |
| --------- | ----- | ----- |
| input     | uint2 | A     |
| output    | bool2 | *     |
| input     | uint2 | B     |
| Operators |       |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### >
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| >         | Type  | Label |
| --------- | ----- | ----- |
| input     | uint2 | A     |
| output    | bool2 | *     |
| input     | uint2 | B     |
| Operators |       |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### M<sup>-1</sup><br><size=25%>(inverse)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| M<sup>-1</sup><br><size=25%>(inverse) | Type     | Label |
| ------------------------------------- | -------- | ----- |
| input                                 | float2x2 | A     |
| output                                | float2x2 | *     |
| Matrix                                |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Is ∞
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Is ∞      | Type    | Label |
| --------- | ------- | ----- |
| input     | Single  | Value |
| output    | Boolean | *     |
| Operators |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Is NaN
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Is NaN    | Type    | Label |
| --------- | ------- | ----- |
| input     | Single  | Value |
| output    | Boolean | *     |
| Operators |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ≤
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ≤         | Type  | Label |
| --------- | ----- | ----- |
| input     | uint2 | A     |
| output    | bool2 | *     |
| input     | uint2 | B     |
| Operators |       |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### <
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| <         | Type  | Label |
| --------- | ----- | ----- |
| input     | uint2 | A     |
| output    | bool2 | *     |
| input     | uint2 | B     |
| Operators |       |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \|V\|
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \|V\|   | Type   | Label |
| ------- | ------ | ----- |
| input   | uint2  | A     |
| output  | Single | *     |
| Vectors |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mask
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mask      | Type  | Label   |
| --------- | ----- | ------- |
| input     | uint2 | OnTrue  |
| output    | uint2 | *       |
| input     | uint2 | OnFalse |
| input     | bool2 | Mask    |
| Operators |       |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Get Matrix Element
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Get Matrix Element | Type     | Label  |
| ------------------ | -------- | ------ |
| input              | float2x2 | Matrix |
| output             | Single   | *      |
| input              | Int32    | Row    |
| input              | Int32    | Column |
| Matrix             |          |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ×
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ×         | Type   | Label |
| --------- | ------ | ----- |
| input     | uint2  | A     |
| output    | uint2  | *     |
| input     | UInt32 | B     |
| Operators |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NAND
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NAND    | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| input   | Boolean | B     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NAND
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NAND    | Type    | Label    |
| ------- | ------- | -------- |
| input   | Boolean | Operands |
| output  | Boolean | *        |
| Boolean |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### None
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| None         | Type    | Label |
| ------------ | ------- | ----- |
| input        | bool2   | V     |
| output       | Boolean | *     |
| Bool Vectors |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NOR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NOR     | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| input   | Boolean | B     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NOR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NOR     | Type    | Label    |
| ------- | ------- | -------- |
| input   | Boolean | Operands |
| output  | Boolean | *        |
| Boolean |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Normalize
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Normalize | Type   | Label |
| --------- | ------ | ----- |
| input     | float2 | A     |
| output    | float2 | *     |
| Vectors   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### NOT
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| NOT     | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### OR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| OR      | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| input   | Boolean | B     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### OR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| OR      | Type    | Label    |
| ------- | ------- | -------- |
| input   | Boolean | Operands |
| output  | Boolean | *        |
| Boolean |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack xy
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack xy | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | X     |
| output  | bool2   | *     |
| input   | Boolean | Y     |
| Packing |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack xyz
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack xyz | Type    | Label |
| -------- | ------- | ----- |
| input    | Boolean | X     |
| output   | bool3   | *     |
| input    | Boolean | Y     |
| input    | Boolean | Z     |
| Packing  |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack xyzw
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack xyzw | Type    | Label |
| --------- | ------- | ----- |
| input     | Boolean | X     |
| output    | bool4   | *     |
| input     | Boolean | Y     |
| input     | Boolean | Z     |
| input     | Boolean | W     |
| Packing   |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack rgba
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack rgba | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | R     |
| output    | color  | *     |
| input     | Single | G     |
| input     | Single | B     |
| input     | Single | A     |
| Packing   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack rgba
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack rgba | Type         | Label   |
| --------- | ------------ | ------- |
| input     | Single       | R       |
| output    | colorX       | *       |
| input     | Single       | G       |
| input     | Single       | B       |
| input     | Single       | A       |
| input     | ColorProfile | Profile |
| Packing   |              |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack Columns
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack Columns | Type     | Label   |
| ------------ | -------- | ------- |
| input        | float2   | Column0 |
| output       | float2x2 | *       |
| input        | float2   | Column1 |
| Matrix       |          |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack Rows
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack Rows | Type     | Label |
| --------- | -------- | ----- |
| input     | float2   | Row0  |
| output    | float2x2 | *     |
| input     | float2   | Row1  |
| Matrix    |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Project
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Project | Type   | Label |
| ------- | ------ | ----- |
| input   | float2 | A     |
| output  | float2 | *     |
| input   | float2 | B     |
| Vectors |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Reflect
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Reflect | Type   | Label |
| ------- | ------ | ----- |
| input   | float3 | A     |
| output  | float3 | *     |
| input   | float3 | B     |
| Vectors |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ROL
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ROL     | Type   | Label  |
| ------- | ------ | ------ |
| input   | UInt32 | A      |
| output  | UInt32 | *      |
| input   | Int32  | Rotate |
| Boolean |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ROR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ROR     | Type   | Label  |
| ------- | ------ | ------ |
| input   | UInt32 | A      |
| output  | UInt32 | *      |
| input   | Int32  | Rotate |
| Boolean |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### <<
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| <<      | Type   | Label |
| ------- | ------ | ----- |
| input   | UInt32 | A     |
| output  | UInt32 | *     |
| input   | Int32  | Shift |
| Boolean |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### >>
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| >>      | Type   | Label |
| ------- | ------ | ----- |
| input   | UInt32 | A     |
| output  | UInt32 | *     |
| input   | Int32  | Shift |
| Boolean |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sin Shape
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sin Shape | Type   | Label |
| --------- | ------ | ----- |
| input     | Single | Value |
| output    | Single | *     |
| Shaping   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Smoother Step
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Smoother Step | Type   | Label |
| ------------- | ------ | ----- |
| input         | Single | Value |
| output        | Single | *     |
| Shaping       |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Smooth Step
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Smooth Step | Type   | Label |
| ----------- | ------ | ----- |
| input       | Single | Value |
| output      | Single | *     |
| Shaping     |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \|V\|<sup>2</sup>
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \|V\|<sup>2</sup> | Type   | Label |
| ----------------- | ------ | ----- |
| input             | uint2  | A     |
| output            | Single | *     |
| Vectors           |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### -
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| -         | Type   | Label |
| --------- | ------ | ----- |
| input     | uint2  | A     |
| output    | uint2  | *     |
| input     | UInt32 | B     |
| Operators |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Mirrored Pow Shape
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Mirrored Pow Shape | Type   | Label |
| ------------------ | ------ | ----- |
| input              | Single | Value |
| output             | Single | *     |
| input              | Single | Power |
| Shaping            |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### M<sup>T</sup><br><size=25%>(transpose)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| M<sup>T</sup><br><size=25%>(transpose) | Type     | Label |
| -------------------------------------- | -------- | ----- |
| input                                  | float2x2 | A     |
| output                                 | float2x2 | *     |
| Matrix                                 |          |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unpack xy
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unpack xy | Type    | Label |
| --------- | ------- | ----- |
| input     | bool2   | V     |
| output    | Boolean | X     |
| output    | Boolean | Y     |
| Packing   |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unpack xyz
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unpack xyz | Type    | Label |
| ---------- | ------- | ----- |
| input      | bool3   | V     |
| output     | Boolean | X     |
| output     | Boolean | Y     |
| output     | Boolean | Z     |
| Packing    |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unpack xyzw
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unpack xyzw | Type    | Label |
| ----------- | ------- | ----- |
| input       | bool4   | V     |
| output      | Boolean | X     |
| output      | Boolean | Y     |
| output      | Boolean | Z     |
| output      | Boolean | W     |
| Packing     |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unpack Columns
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unpack Columns | Type     | Label   |
| -------------- | -------- | ------- |
| input          | float2x2 | Matrix  |
| output         | float2   | Column0 |
| output         | float2   | Column1 |
| Matrix         |          |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unpack Rows
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unpack Rows | Type     | Label  |
| ----------- | -------- | ------ |
| input       | float2x2 | Matrix |
| output      | float2   | Row0   |
| output      | float2   | Row1   |
| Matrix      |          |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### +
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| +         | Type | Label  |
| --------- | ---- | ------ |
| input     | T    | Inputs |
| output    | T    | *      |
| Operators |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### n<sup>3</sup>
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| n<sup>3</sup> | Type | Label |
| ------------- | ---- | ----- |
| input         | T    | N     |
| output        | T    | *     |
| Operators     |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### -1
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| -1        | Type | Label |
| --------- | ---- | ----- |
| input     | T    | N     |
| output    | T    | *     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ÷
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ÷         | Type | Label  |
| --------- | ---- | ------ |
| input     | T    | Inputs |
| output    | T    | *      |
| Operators |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Filter Invalid
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Filter Invalid | Type | Label    |
| -------------- | ---- | -------- |
| input          | T    | Value    |
| output         | T    | *        |
| input          | T    | Fallback |
| Operators      |      |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### +1
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| +1        | Type | Label |
| --------- | ---- | ----- |
| input     | T    | N     |
| output    | T    | *     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### %
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| %         | Type | Label |
| --------- | ---- | ----- |
| input     | T    | A     |
| output    | T    | *     |
| input     | T    | B     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ×
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ×         | Type | Label  |
| --------- | ---- | ------ |
| input     | T    | Inputs |
| output    | T    | *      |
| Operators |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### -n
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| -n        | Type | Label |
| --------- | ---- | ----- |
| input     | T    | N     |
| output    | T    | *     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1-n
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1-n       | Type | Label |
| --------- | ---- | ----- |
| input     | T    | X     |
| output    | T    | *     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ±
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ±         | Type | Label  |
| --------- | ---- | ------ |
| input     | T    | Value  |
| output    | T    | Plus   |
| input     | T    | Offset |
| output    | T    | Minus  |
| Operators |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 1/n
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 1/n       | Type | Label |
| --------- | ---- | ----- |
| input     | T    | N     |
| output    | T    | *     |
| Operators |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### n<sup>2</sup>
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| n<sup>2</sup> | Type | Label |
| ------------- | ---- | ----- |
| input         | T    | N     |
| output        | T    | *     |
| Operators     |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### -
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| -         | Type | Label  |
| --------- | ---- | ------ |
| input     | T    | Inputs |
| output    | T    | *      |
| Operators |      |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### XNOR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| XNOR    | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| input   | Boolean | B     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### XNOR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| XNOR    | Type    | Label    |
| ------- | ------- | -------- |
| input   | Boolean | Operands |
| output  | Boolean | *        |
| Boolean |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### XOR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| XOR     | Type    | Label |
| ------- | ------- | ----- |
| input   | Boolean | A     |
| output  | Boolean | *     |
| input   | Boolean | B     |
| Boolean |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### XOR
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| XOR     | Type    | Label    |
| ------- | ------- | -------- |
| input   | Boolean | Operands |
| output  | Boolean | *        |
| Boolean |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### 0/1 (int)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| 0/1 (int) | Type    | Label   |
| --------- | ------- | ------- |
| input     | Boolean | Boolean |
| output    | Int32   | *       |
| Operators |         |         |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pack Nullable
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pack Nullable | Type        | Label    |
| ------------- | ----------- | -------- |
| input         | T           | Value    |
| output        | Nullable\`1 | *        |
| input         | Boolean     | HasValue |
| Packing       |             |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Parse Bool
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Parse Bool | Type    | Label    |
| ---------- | ------- | -------- |
| input      | String  | Str      |
| output     | Boolean | Value    |
| output     | Boolean | IsParsed |
| Parsing    |         |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### To String
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| To String | Type            | Label          |
| --------- | --------------- | -------------- |
| input     | Object          | Object         |
| output    | String          | *              |
| input     | String          | Format         |
| input     | IFormatProvider | FormatProvider |
| Strings   |                 |                |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Range Loop
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Range Loop | Type          | Label         |
| ---------- | ------------- | ------------- |
| input      | SyncOperation | *             |
| output     | Call          | LoopStart     |
| input      | Int32         | Start         |
| output     | Call          | LoopIteration |
| input      | Int32         | End           |
| output     | Continuation  | LoopEnd       |
| input      | Int32         | StepSize      |
| output     | Int32         | Current       |
| Flow       |               |               |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Ref To Output
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Ref To Output | Type | Label |
| ------------- | ---- | ----- |
| output        | T    | *     |
| Core          |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Sequence
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Sequence | Type          | Label |
| -------- | ------------- | ----- |
| input    | SyncOperation | *     |
| output   | Call          | Calls |
| Flow     |               |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Store
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Store     | Type | Label |
| --------- | ---- | ----- |
| output    | T    | *     |
| Variables |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \b
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \b        | Type | Label |
| --------- | ---- | ----- |
| output    | Char | *     |
| Constants |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \a
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \a        | Type | Label |
| --------- | ---- | ----- |
| output    | Char | *     |
| Constants |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \r
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \r        | Type | Label |
| --------- | ---- | ----- |
| output    | Char | *     |
| Constants |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### +
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| +          | Type   | Label |
| ---------- | ------ | ----- |
| input      | Char   | A     |
| output     | String | *     |
| input      | Char   | B     |
| Characters |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \f
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \f        | Type | Label |
| --------- | ---- | ----- |
| output    | Char | *     |
| Constants |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ' '<size=25%>(Space)
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ' '<size=25%>(Space) | Type | Label |
| -------------------- | ---- | ----- |
| output               | Char | *     |
| Constants            |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \t
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \t        | Type | Label |
| --------- | ---- | ----- |
| output    | Char | *     |
| Constants |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### \v
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| \v        | Type | Label |
| --------- | ---- | ----- |
| output    | Char | *     |
| Constants |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Escape String
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Escape String | Type   | Label  |
| ------------- | ------ | ------ |
| input         | String | String |
| output        | String | *      |
| Strings       |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Format
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Format     | Type            | Label          |
| ---------- | --------------- | -------------- |
| input      | String          | Format         |
| output     | String          | *              |
| input      | IFormatProvider | FormatProvider |
| input      | Object          | Parameters     |
| Formatting |                 |                |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Join
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Join    | Type   | Label     |
| ------- | ------ | --------- |
| input   | String | Separator |
| output  | String | *         |
| input   | String | Inputs    |
| Strings |        |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Strip RTF
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Strip RTF | Type   | Label  |
| --------- | ------ | ------ |
| input     | String | String |
| output    | String | *      |
| Strings   |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unescape String
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unescape String | Type   | Label  |
| --------------- | ------ | ------ |
| input           | String | String |
| output          | String | *      |
| Strings         |        |        |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unbox
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unbox  | Type   | Label |
| ------ | ------ | ----- |
| input  | Object | Input |
| output | T      | *     |
| Core   |        |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Unpack Nullable
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Unpack Nullable | Type        | Label    |
| --------------- | ----------- | -------- |
| input           | Nullable\`1 | Nullable |
| output          | T           | Value    |
| output          | Boolean     | HasValue |
| Packing         |             |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Index of First Match
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Index of First Match | Type    | Label      |
| -------------------- | ------- | ---------- |
| input                | T       | Match      |
| output               | Int32   | Index      |
| input                | T       | Values     |
| output               | Boolean | FoundMatch |
| Utility              |         |            |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pick Random
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pick Random | Type | Label    |
| ----------- | ---- | -------- |
| input       | T    | Operands |
| output      | T    | *        |
| Utility     |      |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Pick Random
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Pick Random | Type | Label    |
| ----------- | ---- | -------- |
| input       | T    | Operands |
| output      | T    | *        |
| Utility     |      |          |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ?:
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ?:        | Type    | Label     |
| --------- | ------- | --------- |
| input     | T       | OnTrue    |
| output    | T       | *         |
| input     | T       | OnFalse   |
| input     | Boolean | Condition |
| Operators |         |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Constant
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Constant | Type | Label |
| -------- | ---- | ----- |
| output   | T    | *     |
| Core     |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Demultiplex
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Demultiplex | Type  | Label        |
| ----------- | ----- | ------------ |
| input       | T     | Value        |
| output      | T     | ValueOutputs |
| input       | T     | DefaultValue |
| input       | Int32 | Index        |
| Utility     |       |              |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### ==
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| ==        | Type    | Label |
| --------- | ------- | ----- |
| input     | T       | A     |
| output    | Boolean | *     |
| input     | T       | B     |
| Operators |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Eval Point
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Eval Point | Type | Label |
| ---------- | ---- | ----- |
| input      | T    | Input |
| Core       |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Indirect Write
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Indirect Write | Type          | Label     |
| -------------- | ------------- | --------- |
| input          | SyncOperation | *         |
| output         | Continuation  | OnWritten |
| input          | IVariable\`2  | Variable  |
| output         | Continuation  | OnFail    |
| input          | T             | Value     |
| Indirect       |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Indirect Write Latch
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Indirect Write Latch | Type          | Label      |
| -------------------- | ------------- | ---------- |
| input                | SyncOperation | Set        |
| output               | Continuation  | OnSet      |
| input                | SyncOperation | Reset      |
| output               | Continuation  | OnReset    |
| input                | IVariable\`2  | Variable   |
| output               | Continuation  | OnFail     |
| input                | T             | SetValue   |
| input                | T             | ResetValue |
| Indirect             |               |            |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Multiplex
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Multiplex | Type  | Label      |
| --------- | ----- | ---------- |
| input     | Int32 | Index      |
| output    | T     | Output     |
| input     | T     | Inputs     |
| output    | Int32 | InputCount |
| Utility   |       |            |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### !=
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| !=        | Type    | Label |
| --------- | ------- | ----- |
| input     | T       | A     |
| output    | Boolean | *     |
| input     | T       | B     |
| Operators |         |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Relay
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Relay  | Type | Label |
| ------ | ---- | ----- |
| input  | T    | Input |
| output | T    | *     |
| Core   |      |       |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Write
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Write   | Type          | Label     |
| ------- | ------------- | --------- |
| input   | SyncOperation | *         |
| output  | Continuation  | OnWritten |
| input   | T             | Value     |
| output  | Continuation  | OnFail    |
| Actions |               |           |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Write Latch
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Write Latch | Type          | Label      |
| ----------- | ------------- | ---------- |
| input       | SyncOperation | Set        |
| output      | Continuation  | OnSet      |
| input       | SyncOperation | Reset      |
| output      | Continuation  | OnReset    |
| input       | T             | SetValue   |
| output      | Continuation  | OnFail     |
| input       | T             | ResetValue |
| Actions     |               |            |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### While
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| While  | Type          | Label         |
| ------ | ------------- | ------------- |
| input  | SyncOperation | *             |
| output | Call          | LoopStart     |
| input  | Boolean       | Condition     |
| output | Call          | LoopIteration |
| output | Continuation  | LoopEnd       |
| Flow   |               |               |
<!-- ProtofluxNode:end -->



<!-- panels:start -->
<!-- div:title-panel -->
### Write Global
<!-- div:left-panel -->

<!-- div:right-panel -->
<!-- ProtofluxNode:start -->
| Write Global | Type          | Label     |
| ------------ | ------------- | --------- |
| input        | SyncOperation | *         |
| output       | Continuation  | OnWritten |
| input        | T             | Value     |
| output       | Continuation  | OnFail    |
| Core         |               |           |
<!-- ProtofluxNode:end -->



