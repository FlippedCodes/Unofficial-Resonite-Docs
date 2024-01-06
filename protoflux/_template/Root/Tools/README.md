<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Tools

### Dequip Tool

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


### Equip Tool

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


### Get Raw Data Tool Hit

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


### Get Tool

<!-- ProtofluxNode:start -->
| Get Tool | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | ITool | * |
| input | Chirality | Side |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.GetTool |  |
<!-- ProtofluxNode:end -->


### Has Tool

<!-- ProtofluxNode:start -->
| Has Tool | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Boolean | * |
| input | Chirality | Side |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.HasTool |  |
<!-- ProtofluxNode:end -->


### Is Tool Equipped

<!-- ProtofluxNode:start -->
| Is Tool Equipped | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Boolean | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolEquipped |  |
<!-- ProtofluxNode:end -->


### Is Tool In Use

<!-- ProtofluxNode:start -->
| Is Tool In Use | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Boolean | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.IsToolInUse |  |
<!-- ProtofluxNode:end -->


### Raw Data Tool Events

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


### Tool Equipping Side

<!-- ProtofluxNode:start -->
| Tool Equipping Side | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Chirality | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSide |  |
<!-- ProtofluxNode:end -->


### Tool Equipping Slot

<!-- ProtofluxNode:start -->
| Tool Equipping Slot | Type | Label |
| --- | ---- | ----- |
| input | ITool | Tool |
| output | Slot | * |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEquippingSlot |  |
<!-- ProtofluxNode:end -->


### Tool Events

<!-- ProtofluxNode:start -->
| Tool Events | Type | Label |
| --- | ---- | ----- |
| output | Call | Equipped |
| output | Call | Dequipped |
| Root/Tools | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Tools.ToolEvents |  |
<!-- ProtofluxNode:end -->


