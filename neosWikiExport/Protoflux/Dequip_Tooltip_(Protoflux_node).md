
<!-- Dequip Tool? -->

<languages></languages> <translate> The **Dequip Tooltip** node dequips
any equipped tooltip from the specified User's hand according to the
Node enum input.

## Inputs & Outputs

|       |        |                |
|-------|--------|----------------|
| Color | Label  | Type           |
|       | Dequip | Impulse        |
|       | User   | User           |
|       | Node   | ControllerNode |

Inputs

|       |             |         |
|-------|-------------|---------|
| Color | Label       | Type    |
|       | OnDequipped | Impulse |

Outputs

## Usage

This dequips any tooltip, whether equipped by a simple grip or fully
equipped (e.g. through the radial context menu Equip button), from the
hand specified by the Node input ('Unknown' by default, which does
nothing).

OnDequipped only fires and impulse if a tooltip is actually de-equipped
as a result of an impulse at Dequip.

NOTE: The incoming impulse must originate from the user who you are
requesting to de-equip the tooltip from. If another user fires the
impulse it will not work.

## Examples

## Node Menu

</translate>

[Dequip Tooltip](Category:Protoflux{{#translation:}} "wikilink") [Dequip
Tooltip](Category:Protoflux:Tools{{#translation:}} "wikilink")