<languages></languages> <translate>

The **Raw Data Tooltip Events** node fires impulses when various events
(e.g. button presses) affecting the input `RawDataTooltip` occur.

## Usage

The `Equipped` output fires an impulse whenever the referenced
`RawDataTooltip` becomes equipped.

The `Dequipped` output fires an impulse whenever the referenced
`RawDataTooltip` becomes dequipped.

The `ToolUpdate` output fires an impulse every frame while the
referenced `RawDataTooltip` is equipped.

The `PrimaryPressed` output fires an impulse whenever the equipping user
presses the primary fire button on the controller corresponding to the
hand where the `RawDataTooltip` is equipped.

The `PrimaryHeld` output fires an impulse every frame while the
equipping user holds the primary fire button pressed on the controller
corresponding to the hand where the `RawDataTooltip` is equipped.

The `PrimaryReleased` output fires an impulse whenever the equipping
user releases the primary fire button on the controller corresponding to
the hand where the `RawDataTooltip` is equipped.

The `SecondaryPressed` output fires an impulse whenever the equipping
user presses the secondary fire button on the controller corresponding
to the hand where the `RawDataTooltip` is equipped.

The `SecondaryHeld` output fires an impulse every frame while the
equipping user holds the secondary fire button pressed on the controller
corresponding to the hand where the `RawDataTooltip` is equipped.

The `SecondaryReleased` output fires an impulse whenever the equipping
user releases the secondary fire button on the controller corresponding
to the hand where the `RawDataTooltip` is equipped.

This node is essential for making custom tooltips as Protoflux can be
made to run based on a user's interactions with the tool. Impulses fired
from this node are owned by the user interacting with the
`RawDataTooltip`.

## Examples

-   [Resonite VR: BasicTooltip with
    RayCastOne](https://www.youtube.com/watch?v=FwNwneCtav0) by
    [ProbablePrime](User:ProbablePrime "wikilink")

## Node Menu

</translate>

[Raw Data Tooltip
Events](Category:Protoflux{{#translation:}} "wikilink") [Raw Data
Tooltip Events](Category:Protoflux:Tools{{#translation:}} "wikilink")