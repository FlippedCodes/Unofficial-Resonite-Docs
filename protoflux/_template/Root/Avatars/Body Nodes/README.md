<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Avatars/Body Nodes

### Body Node Chirality

<!-- ProtofluxNode:start -->
| Body Node Chirality | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | Chirality | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeChirality |  |
<!-- ProtofluxNode:end -->


### Body Node Slot

<!-- ProtofluxNode:start -->
| Body Node Slot | Type | Label |
| --- | ---- | ----- |
| input | User | Source |
| output | Slot | * |
| input | BodyNode | Node |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlot |  |
<!-- ProtofluxNode:end -->


### Body Node Slot In Children

<!-- ProtofluxNode:start -->
| Body Node Slot In Children | Type | Label |
| --- | ---- | ----- |
| input | Slot | Source |
| output | Slot | * |
| input | BodyNode | Node |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlotInChildren |  |
<!-- ProtofluxNode:end -->


### Compose Finger

<!-- ProtofluxNode:start -->
| Compose Finger | Type | Label |
| --- | ---- | ----- |
| input | FingerType | Finger |
| output | BodyNode | * |
| input | FingerSegmentType | Segment |
| input | Chirality | Chirality |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.ComposeFinger |  |
<!-- ProtofluxNode:end -->


### Finger Node Index

<!-- ProtofluxNode:start -->
| Finger Node Index | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | Int32 | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.FingerNodeIndex |  |
<!-- ProtofluxNode:end -->


### Get Finger Segment Type

<!-- ProtofluxNode:start -->
| Get Finger Segment Type | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | FingerSegmentType | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerSegmentType |  |
<!-- ProtofluxNode:end -->


### Get Finger Type

<!-- ProtofluxNode:start -->
| Get Finger Type | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | FingerType | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerType |  |
<!-- ProtofluxNode:end -->


### Get Side

<!-- ProtofluxNode:start -->
| Get Side | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | BodyNode | * |
| input | Chirality | Side |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetSide |  |
<!-- ProtofluxNode:end -->


### Is Eye

<!-- ProtofluxNode:start -->
| Is Eye | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | Boolean | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.IsEye |  |
<!-- ProtofluxNode:end -->


### Other Side

<!-- ProtofluxNode:start -->
| Other Side | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | BodyNode | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.OtherSide |  |
<!-- ProtofluxNode:end -->


### Relative Body Node

<!-- ProtofluxNode:start -->
| Relative Body Node | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | BodyNode | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.RelativeBodyNode |  |
<!-- ProtofluxNode:end -->


