<languages></languages> <translate>

# Fields

# Usage

## Gripping

PhysicalLocomotion has a feature which is unique to it, called Gripping.
This feature allows you to grip other objects in the world in order to
use them to climb or traverse the world. A good analogy is rock climbing
as this is exactly how this feature feels to use. Gripping, only works
when allowed by the world author.

**This feature is commonly called "Climbing" or "Physical Grab/Climbing"
or even "Player Climbing", the official name "Gripping" will be used
throughout this page**.

Additionally, this feature is often confused with "Grabbables" which
refer to any object in Resonite that you can move around in the world by
grabbing it. These features are independent, for a quick way to remember
the difference:

-   Grabbing involves *'moving an object* which you are "Grabbing"
-   Gripping involves **moving you** using an object which you are
    "Gripping"

Or if that doesn't work, its the difference between climbing a ladder
and moving that ladder.

World authors can configure this feature by changing the properties on
the PhysicalLocomotion component. The main property here is "Gripping"
which has the following settings and meanings:

1.  Disabled - Fully prevents any gripping in this world when using this
    locomotion module.
2.  GrippableObjects - Allows gripping on objects that are explicitly
    tagged with a Component that indicates that a Slot or Object can be
    gripped. These components are:
    -   LocomotionGrip - The most common. Used to explicitly signal the
        grippable state of an object.
    -   Gizmos - These are also tagged as "GrippableObjects" but cannot
        be gripped, see [#Gripping
        Process](#Gripping_Process "wikilink") below for more info.
3.  CharacterColliders - Allows gripping on objects that contain
    colliders who's "CharacterCollider" property is enabled
4.  AnyObjects - Allows gripping on anything, including players.

### Gripping Process

When a user attempts to grip in a world, the following steps occur to
determine if there is a successful grip or not.

1.  If gripping is set to Disabled, stop. You can't grip **ever**.
2.  If there is already a grip in progress, as in is this user already
    holding onto another object. Stop. You can only have one active
    grip.
3.  Run a physics operation to get any colliders within the "GripRadius"
    of the user's actively gripping hand.
4.  Filter the returned colliders:
    1.  If the collider's active user is the same as the active user of
        the collider, remove it from the results.
    2.  If gripping is set to AnyObjects, all colliders in the
        "GripRadius" are included.
    3.  If gripping is set to CharacterColliders, colliders who do
        **NOT** have the "CharacterCollider" checkbox enabled are
        removed from the results.
    4.  If gripping is set to GrippableObjects, colliders who do **NOT**
        have a "LocomotionGrip" component on them or within their
        parents are removed from the results.
5.  From the filtered list the **first** collider which passes **ALL**
    the following rules is then "Gripped":
    1.  If the collider has a "LocomotionGrip" component on them or
        within their parents, it must be Enabled.
    2.  The collider must **NOT** be a part of a Gizmo

### Gripping Users

Gripping users is treated the same way as the "Gripping Process" above.
So keep the following items in mind:

-   You cannot manually **opt in** to be grippable by editing your
    avatar **unless the Gripping property on the locomotion is set to
    "GrippableObjects"**, if this is the case add a "LocomotionGrip"
    component to your avatar root and enable it.
-   If you want to **opt out** of being grippable then regardless of the
    world settings, you will need to add a "LocomotionGrip" component to
    your **avatar root AND User Root** and uncheck their Enabled
    properties.

*As saving a modified user root is not possible at the moment, there is
a [bug](https://github.com/Resonite-Metaverse/ResonitePublic/issues/647)
filed, which aims to provide a way to tag your user root. The reason why
you are still grippable even when the LocomotionGrip on your avatar root
is disabled is because there are colliders on your user that are outside
of your avatar root that are compatible with the gripping system.*

# Examples

# Related Components

</translate>

[Category:ComponentStubs](Category:ComponentStubs "wikilink") [Physical
Locomotion](Category:Components{{#translation:}} "wikilink") [Physical
Locomotion](Category:Components:Locomotion:Modules{{#translation:}} "wikilink")