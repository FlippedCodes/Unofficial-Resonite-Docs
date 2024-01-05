<languages></languages> <translate>

**KnobControl** takes the local rotation of its slot around a specified
axis and applies it proportionally to a floating point value.

## Fields

## Usage

As the local rotation of this component's slot changes, the knob's value
is updated according to how much it has rotated about the
*RotationAxis*. The amount the value changes is determined by the change
in rotation (measured in fractions of a full rotation, so for example a
change of one degree would be 1/360), multiplied by the *Rate*.

Note that the value field is not driven. This means it is synced to all
users, and can be written to at any time.

This component is most useful when coupled with a
[Joint](Joint_(Component) "wikilink") to restrict the slot's rotation to
be only around the rotation axis.

## Examples

## Related Components

</translate>

[Category:ComponentStubs](Category:ComponentStubs "wikilink") [Knob
Control](Category:Components{{#translation:}} "wikilink") [Knob
Control](Category:Components:Transform:Interaction{{#translation:}} "wikilink")