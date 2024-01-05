<languages></languages> <translate>

The **Children Count** node outputs the number of slots which are direct
children of the input `Instance` slot.

## Usage

Slot indexing in Resonite starts at 0. Child order can be specified by
changing the OrderOffset field each slot in the inspector panel or using
the [Set Slot Order
Offset](Set_Slot_Order_Offset_(Protoflux_node) "wikilink") node.

## Examples

This node is extremely useful for iterating over all child slots of a
parent without requiring foreknowledge of how many child slots there
will be. Simply connect the output of this node to the `Count` input of
a [For](For_(Protoflux_node) "wikilink") node. An operation can then be
run for each child slot by using a [Get
Child](Get_Child_(Protoflux_node) "wikilink") and providing the For
node's `Iteration` output to the Get Child `ChildIndex`.

## Node Menu

</translate>

[Children Count](Category:Protoflux{{#translation:}} "wikilink")
[Children Count](Category:Protoflux:Slots{{#translation:}} "wikilink")