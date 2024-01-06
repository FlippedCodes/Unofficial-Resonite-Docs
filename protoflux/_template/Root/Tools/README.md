<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Tools

### Dequip Tool

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.DequipTool -->
<!-- ProtofluxNode:start -->
| Dequip Tool | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnDequipped |
| input | User | User |
| output | Continuation | OnDequipFail |
| input | Chirality | Side |
| input | Boolean | PopOff |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.DequipTool |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.DequipTool -->


### Equip Tool

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.EquipTool -->
<!-- ProtofluxNode:start -->
| Equip Tool | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnEquipped |
| input | ITool | Tool |
| output | Continuation | OnEquipFail |
| input | User | User |
| input | Chirality | Side |
| input | Boolean | DequipExisting |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.EquipTool |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.EquipTool -->


### Get Raw Data Tool Hit

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetRawDataToolHit -->
<!-- ProtofluxNode:start -->
| Get Raw Data Tool Hit | Type | Label |
| --- | ---- | ----- |
| input | RawDataTool | Tool |
| output | ICollider | HitCollider |
| output | float3 | HitPoint |
| output | float3 | HitNormal |
| output | Single | HitDistance |
| output | Int32 | HitTriangleIndex |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetRawDataToolHit |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetRawDataToolHit -->


### Get Tool

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetTool -->
<!-- ProtofluxNode:start -->
| Get Tool | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | ITool | * |
| input | Chirality | Side |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetTool |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetTool -->


### Has Tool

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.HasTool -->
<!-- ProtofluxNode:start -->
| Has Tool | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Boolean | * |
| input | Chirality | Side |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.HasTool |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.HasTool -->


### Is Tool Equipped

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolEquipped -->
<!-- ProtofluxNode:start -->
| Is Tool Equipped | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Boolean | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolEquipped |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolEquipped -->


### Is Tool In Use

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolInUse -->
<!-- ProtofluxNode:start -->
| Is Tool In Use | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Boolean | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolInUse |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolInUse -->


### Raw Data Tool Events

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.RawDataToolEvents -->
<!-- ProtofluxNode:start -->
| Raw Data Tool Events | Type | Label |
| --- | ---- | ----- |
| output | Call | Equipped |
| output | Call | Dequipped |
| output | Call | ToolUpdate |
| output | Call | PrimaryPressed |
| output | Call | PrimaryHeld |
| output | Call | PrimaryReleased |
| output | Call | SecondaryPressed |
| output | Call | SecondaryHeld |
| output | Call | SecondaryReleased |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.RawDataToolEvents |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.RawDataToolEvents -->


### Tool Equipping Side

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSide -->
<!-- ProtofluxNode:start -->
| Tool Equipping Side | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Chirality | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSide |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSide -->


### Tool Equipping Slot

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSlot -->
<!-- ProtofluxNode:start -->
| Tool Equipping Slot | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Slot | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSlot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSlot -->


### Tool Events

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEvents -->
<!-- ProtofluxNode:start -->
| Tool Events | Type | Label |
| --- | ---- | ----- |
| output | Call | Equipped |
| output | Call | Dequipped |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEvents |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEvents -->


