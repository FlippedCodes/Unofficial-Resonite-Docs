<languages></languages> <translate> The **Equip Tooltip** node equips
the input Tooltip on the input User's hand, specified by the Node input.

## Inputs & Outputs

|       |                |                |
|-------|----------------|----------------|
| Color | Label          | Type           |
|       | Equip          | Impulse        |
|       | User           | User           |
|       | Node           | ControllerNode |
|       | Tooltip        | ITooltip       |
|       | DequipExisting | Boolean        |

Inputs

|       |            |         |
|-------|------------|---------|
| Color | Label      | Type    |
|       | OnEquipped | Impulse |

Outputs

## Usage

The Node input is 'Unknown' by default which does nothing. If
DequipExisting is True (False by default) any equipped tooltip on the
hand specified by Node will be deqipped before the input Tooltip is
equipped. The OnEquipped output only fires an impulse if a tooltip is
successfully equipped as a result of receiving an impulse at Equip.

## Examples

## Node Menu

</translate>

[Equip Tooltip](Category:Protoflux{{#translation:}} "wikilink") [Equip
Tooltip](Category:Protoflux:Tools{{#translation:}} "wikilink")