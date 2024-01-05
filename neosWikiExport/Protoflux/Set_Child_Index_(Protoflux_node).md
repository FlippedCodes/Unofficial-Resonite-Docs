<languages></languages> <translate>

The **Set Child Index** node sets the index of the input `Instance` slot
under it's parent to the input `Index` when an impulse is received at
`Set`.

## Usage

The `Index` input value defaults to 0.

The `OnSet` output fires an impulse when the index of the `Instance`
slot is successfully set. Impulses are not fired if there is no valid
`Instance` input or the `Index` value is less than 0.

This node works by changing the OrderOffset values for the `Instance`
slot and all others with indices less than or equal to the `Index` input
value. Slot order will not change apart from moving the `Instance` input
slot, however any previously set custom OrderOffset values for slots
with indices less than or equal to the `Index` input value may be
changed. OrderOffset values for slots with indices greater than the
input `Index` will be unchanged.

For more precise control of slot OrderOffset values use [Set Slot Order
Offset](Set_Slot_Order_Offset_(Protoflux_node) "wikilink")

## Examples

## Node Menu

</translate>

[Set Child Index](Category:Protoflux{{#translation:}} "wikilink") [Set
Child Index](Category:Protoflux:Slots{{#translation:}} "wikilink")