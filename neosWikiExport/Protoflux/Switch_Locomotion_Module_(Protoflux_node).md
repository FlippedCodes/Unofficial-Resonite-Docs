<languages></languages> <translate>

The **Switch Locomotion Module** node switches the `TargetUser`'s active
locomotion module to one with a matching `ModuleName` when an impulse is
received at `Switch`.

## Usage

The `TargetUser` input defaults to the local user.

The `ModuleName` input specifies which locomotion module should be
switched to. For the standard locomotion module presets, use the
relevant locale strings:

-   `Locomotion.Noclip.Name`
-   `Locomotion.Teleport.Name`
-   `Locomotion.Fly.Name`
-   `Locomotion.WalkRun.Name`
-   `Locomotion.WalkRunGripping.Name`
-   `Locomotion.ZeroG.Name`
-   `Locomotion.GrabWorld.Name`
-   `Locomotion.Slide.Name`

For custom locomotion modules, use the slot name under which the
relevant component is present. e.g. if you have a customized
PhysicalLocomotion preset on a slot called "Swim" then use `Swim` as the
input string to `ModuleName`.

The `ExactMatch` controls whether only modules with exactly matching
names will be used. Default is False.

The `OnSwitched` output fires an impulse when the `TargetUser`'s
locomotion is successfully switched as a result of an impulse received
at `Switch`. An impulse will be fired as long as a valid match was
detected even if it was the same as the user's already active module.

The `OnNotFound` output fires an impulse if no valid matching locomotion
module can be found when an impulse is received at `Switch`. This may
fire if:

-   the `ModuleName` is *null*, empty or just a string composed of
    whitespace
-   the user has no
    [LocomotionController](LocomotionController_(Component) "wikilink")
    component (users will normally have one of these!)
-   there is no matching locomotion module given the `ModuleName` and
    `ExactMatch` values

Searching for valid locomotion modules is performed on the modules
referenced in the `TargetUser`'s LocomotionController (present on their
user root slot) in ascending index order. If there are two matches, the
one with the lowest index will be used. No impulse will be fired from
either `OnSwitched` or `OnNotFound` if the `TargetUser` input is not
empty, but *null*.

## Examples

## Node Menu

</translate>

[Switch Locomotion
Module](Category:Protoflux{{#translation:}} "wikilink") [Switch
Locomotion
Module](Category:Protoflux:Locomotion{{#translation:}} "wikilink")