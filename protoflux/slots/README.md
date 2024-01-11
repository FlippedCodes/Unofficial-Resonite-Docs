# Slots

<!-- panels:start -->
<!-- div:title-panel -->
## Children Count

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.ChildrenCount ':include')

<!-- div:left-panel -->
The **Character Linear Velocity** node outputs the linear velocity of the input `Character` [CharacterController (Component)](CharacterController_(Component) "wikilink") in global coordinate space.

### Usage

Slot indexing in Resonite starts at 0. Child order can be specified by changing the OrderOffset field each slot in the inspector panel or using the [Set Slot Order Offset](Set_Slot_Order_Offset_(Protoflux_node) "wikilink") node.

### Examples

This node is extremely useful for iterating over all child slots of a parent without requiring foreknowledge of how many child slots there will be. Simply connect the output of this node to the `Count` input of a [For](For_(Protoflux_node) "wikilink") node. An operation can then be run for each child slot by using a [Get Child](Get_Child_(Protoflux_node) "wikilink") and providing the For node's `Iteration` output to the Get Child `ChildIndex`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Destroy Slot

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DestroySlot ':include')

<!-- div:left-panel -->
The **Destroy Slot** node deletes the `Instance` input slot (and all
child slots) when an impulse is received at `DoDestroy`.

### Usage

The `PreserveAssets` input determines whether any assets (audio, meshes, images etc.) saved under the `Instance` or child slots will be kept when the deletion occurs. If True, any assets in use by other parts of the world hierarchy will be moved to a child slot under the world's Assets slot. False by default.

The `SendDestroyingEvent` determines whether any [On Destroying](On_Destroying_(Protoflux_node) "wikilink") nodes under the `Instance` slot's hierarchy will be triggered before slots are deleted. True by default.

The `OnDone` output fires an impulse when the `Instance` slot has been successfully destroyed after an impulse was received at `DoDestroy`. No impulse is fired if there is no valid `Instance` input.

### Examples

This node can be used to respawn users if their user root slot is destroyed.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Destroy Slot Children

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DestroySlotChildren ':include')

<!-- div:left-panel -->
The **Destroy Slot Children** node deletes all child slots of the `Instance` input slot when an impulse is received at `DoDestroy`.

### Usage

The `PreserveAssets` input determines whether any assets (audio, meshes,
images etc.) saved under the destroyed slots will be kept when the
deletion occurs. If True, any assets in use by other parts of the world
hierarchy will be moved to a child slot under the world's Assets slot.
False by default.

The `OnDone` output fires an impulse when the `Instance` slot's children
have been successfully destroyed after an impulse was received at
`DoDestroy`. No impulse is be fired if there is no valid `Instance`
input, however an impulse is still fired if a valid `Instance` slot has
no children.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Duplicate Slot

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.DuplicateSlot ':include')

<!-- div:left-panel -->
The **Duplicate Slot** node creates a copy of the `Template` input slot when an impulse is received at `DoDuplicate`.

As usual, precautions related to the duplication and reparenting of dynamic variables apply, as described on the [Dynamic Variables](Dynamic_Variables "wikilink") page.

### Usage

The `OnDuplicated` output fires an impulse when the `Template` slot has been successfully duplicated. No impulse is fired if there is no valid `Template`.

The `Duplicate` output provides the newly created slot. This data is only available for the duration of the impulse chain started from `OnDuplicated`.

The `Duplicate` slot shares the same parent slot as the `Template`.

### Example

This node is commonly used when one wants to spawn an item when an event occurs. Place a template object under an inactive parent slot and duplicate the template. Often one needs to reparent the duplicate immediately using a [Set Parent (Protoflux node)](Set_Parent_(Protoflux_node) "wikilink"). If the Template slot is itself set as active, but it is inactive due to a parent slot being inactive, the duplicate will be active after reparenting under another active slot.
<!-- panels:end -->

#### Page end
