<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Interaction

### Button Events

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ButtonEvents -->
<!-- ProtofluxNode:start -->
| Button Events | Type | Label |
| --- | ---- | ----- |
| output | Call | Pressed |
| output | Call | Pressing |
| output | Call | Released |
| output | Call | HoverEnter |
| output | Call | HoverStay |
| output | Call | HoverLeave |
| output | Component | Source |
| output | float3 | GlobalPoint |
| output | float2 | LocalPoint |
| output | float2 | NormalizedPoint |
| reference | IButton | Button |
| Root/Interaction | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ButtonEvents |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ButtonEvents -->


### Close Context Menu

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.CloseContextMenu -->
<!-- ProtofluxNode:start -->
| Close Context Menu | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IWorldElement | Summoner |
| Root/Interaction | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.CloseContextMenu |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.CloseContextMenu -->


### Is Context Menu Open

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsContextMenuOpen -->
<!-- ProtofluxNode:start -->
| Is Context Menu Open | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Boolean | * |
| Root/Interaction | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsContextMenuOpen |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsContextMenuOpen -->


### Touchable Events

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TouchableEvents -->
<!-- ProtofluxNode:start -->
| Touchable Events | Type | Label |
| --- | ---- | ----- |
| output | Call | OnEvent |
| output | EventState | Hover |
| output | EventState | Touch |
| output | float3 | Point |
| output | float3 | Tip |
| output | TouchType | Type |
| output | Component | Source |
| reference | TouchEventRelay | EventSource |
| Root/Interaction | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TouchableEvents |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TouchableEvents -->


