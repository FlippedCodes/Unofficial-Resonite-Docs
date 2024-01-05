<languages></languages> <translate>

The **HPReverb Controller** provides more controller data than the
[Standard Controller (Protoflux
node)](Standard_Controller_(Protoflux_node) "wikilink") specifically for
second generation Windows Mixed Reality (WMR) controllers compatible
with the HP Reverb G2 headset.

## Usage

The `IsActive` output indicates whether the `User` is using 2nd
generation WMR controllers.

The `BatteryLevel` output provides the estimated remaining battery
charge. The value is in the range 0 to 1 with precision to two decimal
places.

The `IsBatteryCharging` output is intended to indicate whether the
controller is currently charging. This output cannot be used as 2nd
generation WMR controllers use replacable batteries and therefore cannot
be charged while in use.

The `AppMenu` output

The `ButtonYB` output

The `ButtonXA` output

The `Grip` output indicates how far the grip/grab button is pressed.

The `GripTouch` output

The `GripClick` output indicates whether the grip/grab button is fully
pressed.

The `Joystick` output indicates the current position of the joystick. X
and Y values are in the range -1 to 1. X indicates left/right location,
Y indicates forward/back. The resting joystick position is \[0,0\].

The `JoystickClick` output indicates whether the joystick is pressed
down.

The `Trigger` output indicates how far the trigger button is pressed
down. This corresponds to the button labelled Primary on the graphic
below. The value is in the range 0 to 1 with 1 being reached somewhat
before the button is fully pressed.

The `TriggerClick` output is indicates whether the trigger button is
pressed to the point of registering as a button click. This is reached
somewhat before the button is fully pressed.

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [HPReverb
Controller](Category:Protoflux{{#translation:}} "wikilink") [HPReverb
Controller](Category:Protoflux:Input_Devices:Controllers{{#translation:}} "wikilink")