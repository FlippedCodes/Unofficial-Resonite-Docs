<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Security

### Allow Join

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.AllowJoin -->
<!-- ProtofluxNode:start -->
| Allow Join | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | JoinRequestHandle | Handle |
| Root/Security | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.AllowJoin |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.AllowJoin -->


### Assign Role

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.AssignRole -->
<!-- ProtofluxNode:start -->
| Assign Role | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | JoinRequestHandle | Handle |
| input | String | RoleName |
| Root/Security | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.AssignRole |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.AssignRole -->


### Deny Join

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.DenyJoin -->
<!-- ProtofluxNode:start -->
| Deny Join | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | JoinRequestHandle | Handle |
| input | String | DenyReason |
| Root/Security | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.DenyJoin |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.DenyJoin -->


### Verify Join Request

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.VerifyJoinRequest -->
<!-- ProtofluxNode:start -->
| Verify Join Request | Type | Label |
| --- | ---- | ----- |
| output | AsyncCall | Verify |
| output | String | UserId |
| output | String | UserSessionId |
| output | String | MachineId |
| output | String | Username |
| output | HeadOutputDevice | HeadOutputDevice |
| output | Platform | Platform |
| output | Boolean | IsInvited |
| output | Boolean | IsContact |
| output | Boolean | IsInKioskMode |
| output | Boolean | IsSpectatorBanned |
| output | Boolean | IsMuteBanned |
| output | JoinRequestHandle | Handle |
| Root/Security | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.VerifyJoinRequest |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Security.VerifyJoinRequest -->


