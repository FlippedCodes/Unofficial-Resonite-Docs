<languages></languages> <translate>

The **Duplicate Slot** node creates a copy of the `Template` input slot
when an impulse is received at `DoDuplicate`.

As usual, precautions related to the duplication and reparenting of
dynamic variables apply, as described on the [Dynamic
Variables](Dynamic_Variables "wikilink") page.

## Usage

The `OnDuplicated` output fires an impulse when the `Template` slot has
been successfully duplicated. No impulse is fired if there is no valid
`Template`.

The `Duplicate` output provides the newly created slot. This data is
only available for the duration of the impulse chain started from
`OnDuplicated`.

The `Duplicate` slot shares the same parent slot as the `Template`.

## Examples

This node is commonly used when one wants to spawn an item when an event
occurs. Place a template object under an inactive parent slot and
duplicate the template. Often one needs to reparent the duplicate
immediately using a [Set Parent (Protoflux
node)](Set_Parent_(Protoflux_node) "wikilink"). If the Template slot is
itself set as active, but it is inactive due to a parent slot being
inactive, the duplicate will be active after reparenting under another
active slot.

## Node Menu

</translate>

[Duplicate Slot](Category:Protoflux{{#translation:}} "wikilink")
[Duplicate Slot](Category:Protoflux:Slots{{#translation:}} "wikilink")