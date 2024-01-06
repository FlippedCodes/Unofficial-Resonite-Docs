<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Avatars

### Default User Scale

<!-- ProtofluxNode:start -->
| Default User Scale | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Single | * |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.DefaultUserScale |  |
<!-- ProtofluxNode:end -->


### Equip Avatar

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


### Finger Pose

<!-- ProtofluxNode:start -->
| Finger Pose | Type | Label |
| --- | ---- | ----- |
| input | IFingerPoseSource | PoseSource |
| output | float3 | Position |
| input | BodyNode | FingerNode |
| output | floatQ | Rotation |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.FingerPose |  |
<!-- ProtofluxNode:end -->


### Nearest User Foot

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


### Nearest User Hand

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


### Nearest User Head

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


### User Finger Pose Source

<!-- ProtofluxNode:start -->
| User Finger Pose Source | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | IFingerPoseSource | * |
| Root/Avatars | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.UserFingerPoseSource |  |
<!-- ProtofluxNode:end -->


