<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Avatars/Body Nodes

### Body Node Chirality

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeChirality -->
<!-- ProtofluxNode:start -->
| Body Node Chirality | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | Chirality | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeChirality |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.BodyNodeChirality -->


### Body Node Slot

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlot -->
<!-- ProtofluxNode:start -->
| Body Node Slot | Type | Label |
| --- | ---- | ----- |
| input | User | Source |
| output | Slot | * |
| input | BodyNode | Node |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlot -->


### Body Node Slot In Children

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlotInChildren -->
<!-- ProtofluxNode:start -->
| Body Node Slot In Children | Type | Label |
| --- | ---- | ----- |
| input | Slot | Source |
| output | Slot | * |
| input | BodyNode | Node |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlotInChildren |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlotInChildren -->


### Compose Finger

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.ComposeFinger -->
<!-- ProtofluxNode:start -->
| Compose Finger | Type | Label |
| --- | ---- | ----- |
| input | FingerType | Finger |
| output | BodyNode | * |
| input | FingerSegmentType | Segment |
| input | Chirality | Chirality |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.ComposeFinger |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.ComposeFinger -->


### Finger Node Index

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.FingerNodeIndex -->
<!-- ProtofluxNode:start -->
| Finger Node Index | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | Int32 | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.FingerNodeIndex |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.FingerNodeIndex -->


### Get Finger Segment Type

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerSegmentType -->
<!-- ProtofluxNode:start -->
| Get Finger Segment Type | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | FingerSegmentType | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerSegmentType |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerSegmentType -->


### Get Finger Type

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerType -->
<!-- ProtofluxNode:start -->
| Get Finger Type | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | FingerType | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerType |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetFingerType -->


### Get Side

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetSide -->
<!-- ProtofluxNode:start -->
| Get Side | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | BodyNode | * |
| input | Chirality | Side |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetSide |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.GetSide -->


### Is Eye

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.IsEye -->
<!-- ProtofluxNode:start -->
| Is Eye | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | Boolean | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.IsEye |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.IsEye -->


### Other Side

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.OtherSide -->
<!-- ProtofluxNode:start -->
| Other Side | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | BodyNode | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.OtherSide |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.OtherSide -->


### Relative Body Node

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.RelativeBodyNode -->
<!-- ProtofluxNode:start -->
| Relative Body Node | Type | Label |
| --- | ---- | ----- |
| input | BodyNode | Node |
| output | BodyNode | * |
| Root/Avatars/Body Nodes | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.RelativeBodyNode |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodes.RelativeBodyNode -->


