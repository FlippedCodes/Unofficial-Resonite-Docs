<languages></languages> <translate>

The **Delay** node is used to fire an impulse from `Impulse` after
`Delay` seconds have elapsed following an impulse received at `Trigger`.

## Usage

The `Delay` input sets the number of seconds which must elapse before
the delayed impulse is fired from `Impulse`. The default value is 0
which results in a delay of 1 frame update.

The `OnTrigger` output fires an impulse immediately after an impulse is
received at `Trigger`. This continues the impulse chain which arrived at
`Trigger`.

The delayed impulses do not continue the impulse chain which arrived at
`Trigger` and any temporary values present will have been lost - if a
temporary value must be stored until the delayed impulse is fired use
[Delay With Value](Delay_With_Value_(Protoflux_node) "wikilink"). Each
impulse which arrives at `Trigger` sets up a separate delayed impulse
and multiple can be queued at once with different delay durations. If a
user focuses a different world while they have delayed impulses queued,
the delayed impulses will fire as normal. However, if a user with
delayed impulses leave the world entirely, their delayed impulses will
never fire.

## Examples

## Node Menu

</translate>

[Delay](Category:Protoflux{{#translation:}} "wikilink")
[Delay](Category:Protoflux:Flow{{#translation:}} "wikilink")