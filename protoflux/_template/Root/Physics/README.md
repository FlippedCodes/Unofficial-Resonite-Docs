<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Physics

### Apply Character Force

<!-- ProtofluxNode:start -->
| Apply Character Force | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | float3 | Force |
| input | CharacterController | Character |
| input | Boolean | IgnoreMass |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.ApplyCharacterForce |  |
<!-- ProtofluxNode:end -->


### Apply Character Impulse

<!-- ProtofluxNode:start -->
| Apply Character Impulse | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | float3 | Impulse |
| input | CharacterController | Character |
| input | Boolean | IgnoreMass |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.ApplyCharacterImpulse |  |
<!-- ProtofluxNode:end -->


### As Character Controller

<!-- ProtofluxNode:start -->
| As Character Controller | Type | Label |
| --- | ---- | ----- |
| input | ICollider | Collider |
| output | CharacterController | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.AsCharacterController |  |
<!-- ProtofluxNode:end -->


### Character Controller User

<!-- ProtofluxNode:start -->
| Character Controller User | Type | Label |
| --- | ---- | ----- |
| input | CharacterController | Character |
| output | User | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterControllerUser |  |
<!-- ProtofluxNode:end -->


### Character Gravity

<!-- ProtofluxNode:start -->
| Character Gravity | Type | Label |
| --- | ---- | ----- |
| input | CharacterController | Character |
| output | float3 | Gravity |
| output | float3 | ActualGravity |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterGravity |  |
<!-- ProtofluxNode:end -->


### Character Ground Collider

<!-- ProtofluxNode:start -->
| Character Ground Collider | Type | Label |
| --- | ---- | ----- |
| input | CharacterController | Character |
| output | ICollider | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterGroundCollider |  |
<!-- ProtofluxNode:end -->


### Character Linear Velocity

<!-- ProtofluxNode:start -->
| Character Linear Velocity | Type | Label |
| --- | ---- | ----- |
| input | CharacterController | Character |
| output | float3 | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterLinearVelocity |  |
<!-- ProtofluxNode:end -->


### Find Character Controller From Slot

<!-- ProtofluxNode:start -->
| Find Character Controller From Slot | Type | Label |
| --- | ---- | ----- |
| input | Slot | Source |
| output | CharacterController | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.FindCharacterControllerFromSlot |  |
<!-- ProtofluxNode:end -->


### Find Character Controller From User

<!-- ProtofluxNode:start -->
| Find Character Controller From User | Type | Label |
| --- | ---- | ----- |
| input | User | Source |
| output | CharacterController | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.FindCharacterControllerFromUser |  |
<!-- ProtofluxNode:end -->


### Hit UVCoordinate

<!-- ProtofluxNode:start -->
| Hit UVCoordinate | Type | Label |
| --- | ---- | ----- |
| input | ICollider | HitCollider |
| output | float2 | UV |
| input | Int32 | HitTriangleIndex |
| output | Boolean | IsValidUV |
| input | float3 | HitPoint |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.HitUVCoordinate |  |
<!-- ProtofluxNode:end -->


### Is Character Controller

<!-- ProtofluxNode:start -->
| Is Character Controller | Type | Label |
| --- | ---- | ----- |
| input | ICollider | Collider |
| output | Boolean | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.IsCharacterController |  |
<!-- ProtofluxNode:end -->


### Is Character On Ground

<!-- ProtofluxNode:start -->
| Is Character On Ground | Type | Label |
| --- | ---- | ----- |
| input | CharacterController | Character |
| output | Boolean | * |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.IsCharacterOnGround |  |
<!-- ProtofluxNode:end -->


### Raycast One

<!-- ProtofluxNode:start -->
| Raycast One | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnHit |
| input | float3 | Origin |
| output | Continuation | OnMiss |
| input | float3 | Direction |
| output | ICollider | HitCollider |
| input | Single | MaxDistance |
| output | Single | HitDistance |
| input | Boolean | HitTriggers |
| output | float3 | HitPoint |
| input | Boolean | UsersOnly |
| output | float3 | HitNormal |
| input | Single | DebugDuration |
| output | Int32 | HitTriangleIndex |
| input | Slot | Root |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.RaycastOne |  |
<!-- ProtofluxNode:end -->


### Raycaster

<!-- ProtofluxNode:start -->
| Raycaster | Type | Label |
| --- | ---- | ----- |
| input | float3 | Origin |
| output | Boolean | HasHit |
| input | float3 | Direction |
| output | ICollider | HitCollider |
| input | Single | MaxDistance |
| output | Single | HitDistance |
| input | Boolean | HitTriggers |
| output | float3 | HitPoint |
| input | Boolean | UsersOnly |
| output | float3 | HitNormal |
| input | Slot | Root |
| output | Int32 | HitTriangleIndex |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.Raycaster |  |
<!-- ProtofluxNode:end -->


### Set Character Gravity

<!-- ProtofluxNode:start -->
| Set Character Gravity | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | float3 | Gravity |
| input | CharacterController | Character |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.SetCharacterGravity |  |
<!-- ProtofluxNode:end -->


### Set Character Velocity

<!-- ProtofluxNode:start -->
| Set Character Velocity | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | float3 | Velocity |
| input | CharacterController | Character |
| Root/Physics | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.SetCharacterVelocity |  |
<!-- ProtofluxNode:end -->


