<languages></languages> <translate>

## Intoduction

The **ValueUserOverride\`1** Component allows for the driving of a value
for each user listed in `_overrides`

## Usage

## Behavior

The `_overrides` bag contains a list of users and their associated
values - whenever the local user matches a user entry in the bag, the
associated value is driven to `Target`. Otherwise, `Target` is driven to
the value in `Default`

`CreateOverrideOnWrite` allows for new users and values to be added to
the bag when the driven value in `Target` is directly or indirectly
changed by that user. If it is not enabled, the value in `Target` is not
changeable.

Attempting to write to or otherwise cause a discrete entry to a driven
field is known as Hooking it. Any Hook to the `Target` value is
intercepted by the **ValueUserOverride\`1** Component and will change
the modifying user's entry in the `_overrides` bag. If there is no entry
for the user and if `CreateOverrideOnWrite` is enabled, it will create
an entry using the set value.

## Examples

-   [ValueUserOverride for Local World
    State](https://www.youtube.com/watch?v=aER4oQ9FwSE) by
    [ProbablePrime](User:ProbablePrime "wikilink")

## Related Components

</translate>

[Category:Generics{{#translation:}}](Category:Generics{{#translation:}} "wikilink")
[ValueUserOverride\`1
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[ValueUserOverride\`1
(Component){{#translation:}}](Category:Components:Transform:Drivers{{#translation:}} "wikilink")