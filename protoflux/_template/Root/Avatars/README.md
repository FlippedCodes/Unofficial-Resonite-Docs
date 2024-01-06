<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Avatars

### Default User Scale

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.DefaultUserScale -->
<!-- ProtofluxNode:start -->
| Default User Scale | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Single | * |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.DefaultUserScale |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.DefaultUserScale -->


### Equip Avatar

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.EquipAvatar -->
<!-- ProtofluxNode:start -->
| Equip Avatar | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | User | User |
| input | Slot | AvatarRoot |
| input | Boolean | DestroyOld |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.EquipAvatar |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.EquipAvatar -->


### Finger Pose

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.FingerPose -->
<!-- ProtofluxNode:start -->
| Finger Pose | Type | Label |
| --- | ---- | ----- |
| input | IFingerPoseSource | PoseSource |
| output | float3 | Position |
| input | BodyNode | FingerNode |
| output | floatQ | Rotation |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.FingerPose |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.FingerPose -->


### Nearest User Foot

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserFoot -->
<!-- ProtofluxNode:start -->
| Nearest User Foot | Type | Label |
| --- | ---- | ----- |
| input | Slot | Reference |
| output | Slot | Slot |
| input | User | IgnoreUser |
| output | User | User |
| input | Boolean | IgnoreAFK |
| output | Single | Distance |
| input | Boolean | GetLeft |
| output | Chirality | Chirality |
| input | Boolean | GetRight |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserFoot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserFoot -->


### Nearest User Hand

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHand -->
<!-- ProtofluxNode:start -->
| Nearest User Hand | Type | Label |
| --- | ---- | ----- |
| input | Slot | Reference |
| output | Slot | Slot |
| input | User | IgnoreUser |
| output | User | User |
| input | Boolean | IgnoreAFK |
| output | Single | Distance |
| input | Boolean | GetLeft |
| output | Chirality | Chirality |
| input | Boolean | GetRight |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHand |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHand -->


### Nearest User Head

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHead -->
<!-- ProtofluxNode:start -->
| Nearest User Head | Type | Label |
| --- | ---- | ----- |
| input | Slot | Reference |
| output | Slot | Slot |
| input | User | IgnoreUser |
| output | User | User |
| input | Boolean | IgnoreAFK |
| output | Single | Distance |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHead |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.NearestUserHead -->


### User Finger Pose Source

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.UserFingerPoseSource -->
<!-- ProtofluxNode:start -->
| User Finger Pose Source | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | IFingerPoseSource | * |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.UserFingerPoseSource |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.UserFingerPoseSource -->


