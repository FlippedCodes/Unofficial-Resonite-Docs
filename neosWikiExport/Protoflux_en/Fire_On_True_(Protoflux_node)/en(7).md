<languages></languages>

The **Fire On True** node fires a single impulse whenever the input
`Condition` becomes True.

## Usage

After an impulse has been fired, the `Condition` must first be reset to
False before any additional impulses can be fired.

It is recommended to specify a user at `OnlyForUser` to ensure that the
user for whom the impulse fires is predictable.

### Multiple Impulses

This node will only fire one impulse in the event that `Condition`
becomes True multiple times within a single impulse chain. Similarly
this node will not fire an impulse if the `Condition` becomes True and
then reset to False within a single impulse chain.

## Examples

## Node Menu

[Fire On True](Category:Protoflux{{#translation:}} "wikilink") [Fire On
True](Category:Protoflux:Flow{{#translation:}} "wikilink")