<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/World

### Focus World

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.FocusWorld -->
<!-- ProtofluxNode:start -->
| Focus World | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | OnNotFound |
| input | Uri | URL |
| output | AsyncCall | OnFocused |
| input | IWorldLink | WorldLink |
| input | Boolean | CloseCurrent |
| Root/World | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.FocusWorld |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.FocusWorld -->


### Open World

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.OpenWorld -->
<!-- ProtofluxNode:start -->
| Open World | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnOpenStart |
| input | Uri | URL |
| output | AsyncCall | OnOpenDone |
| input | IWorldLink | WorldLink |
| output | Continuation | OnWorldReady |
| input | WorldRelation | Relation |
| output | Continuation | OnOpenFail |
| input | Boolean | GetExisting |
| output | String | SessionID |
| input | Boolean | LoadingIndicator |
| output | Uri | SessionURL |
| input | Boolean | AutoFocus |
| input | Boolean | MakePrivate |
| Root/World | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.OpenWorld |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.OpenWorld -->


### User Joined

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserJoined -->
<!-- ProtofluxNode:start -->
| User Joined | Type | Label |
| --- | ---- | ----- |
| output | Call | OnJoined |
| output | User | JoinedUser |
| Root/World | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserJoined |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserJoined -->


### User Left

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserLeft -->
<!-- ProtofluxNode:start -->
| User Left | Type | Label |
| --- | ---- | ----- |
| output | Call | OnLeft |
| output | User | LeftUser |
| Root/World | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserLeft |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserLeft -->


### User Spawn

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserSpawn -->
<!-- ProtofluxNode:start -->
| User Spawn | Type | Label |
| --- | ---- | ----- |
| output | Call | OnSpawn |
| output | User | SpawnedUser |
| Root/World | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserSpawn |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.UserSpawn -->


### World Saved

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.WorldSaved -->
<!-- ProtofluxNode:start -->
| World Saved | Type | Label |
| --- | ---- | ----- |
| output | Call | OnSaved |
| Root/World | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.WorldSaved |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.WorldSaved -->


