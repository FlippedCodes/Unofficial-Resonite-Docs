<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Avatars/Anchors

### Anchor Events

<!-- ProtofluxNode:start -->
| Anchor Events | Type | Label |
| --- | ---- | ----- |
| output | Call | OnAnchored |
| output | Call | OnReleased |
| output | User | User |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchorEvents |  |
<!-- ProtofluxNode:end -->


### Anchor Locomotion Data

<!-- ProtofluxNode:start -->
| Anchor Locomotion Data | Type | Label |
| --- | ---- | ----- |
| output | Call | OnLocomotionUpdate |
| output | Boolean | HasPrimary |
| output | Boolean | HasSecondary |
| output | float2 | PrimaryAxis |
| output | float2 | SecondaryAxis |
| output | Boolean | PrimaryAction |
| output | Boolean | SecondaryAction |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchorLocomotionData |  |
<!-- ProtofluxNode:end -->


### Anchor User

<!-- ProtofluxNode:start -->
| Anchor User | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnAnchored |
| input | IAvatarAnchor | Anchor |
| output | Continuation | OnFailure |
| input | User | User |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchorUser |  |
<!-- ProtofluxNode:end -->


### Anchored User

<!-- ProtofluxNode:start -->
| Anchored User | Type | Label |
| --- | ---- | ----- |
| input | IAvatarAnchor | Anchor |
| output | User | * |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.AnchoredUser |  |
<!-- ProtofluxNode:end -->


### Get User Anchor

<!-- ProtofluxNode:start -->
| Get User Anchor | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | IAvatarAnchor | * |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.GetUserAnchor |  |
<!-- ProtofluxNode:end -->


### Is Anchor Occupied

<!-- ProtofluxNode:start -->
| Is Anchor Occupied | Type | Label |
| --- | ---- | ----- |
| input | IAvatarAnchor | Anchor |
| output | Boolean | * |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.IsAnchorOccupied |  |
<!-- ProtofluxNode:end -->


### Is User Anchored

<!-- ProtofluxNode:start -->
| Is User Anchored | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Boolean | * |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.IsUserAnchored |  |
<!-- ProtofluxNode:end -->


### Release User

<!-- ProtofluxNode:start -->
| Release User | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnReleased |
| input | IAvatarAnchor | Anchor |
| output | Continuation | OnFailure |
| Root/Avatars/Anchors | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.Anchors.ReleaseUser |  |
<!-- ProtofluxNode:end -->


