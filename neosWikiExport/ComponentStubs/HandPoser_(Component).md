<languages></languages> <translate>

## Intoduction

This component modifies the rotation of the fingers of an avatar's hand
based on a pose source. The HandPoser works with whatever data is
avilable, either precise finger tracking like a LeapMotion, or course
grained like a vive wand, where grip and trigger affect the main finger
positions.

The HandPoser is made of five duplicate finger objects, each of which
contains four duplicate bone objects. Each bone object contains a
Coordinate Compensation, Root, OrigionalRotation, and RotationDrive. The
below chart is difficult to read for this reason, but read it as: the
same four fields, duplicated four times (one for each bone), duplicated
five times (one for each finger).

Due to this pattern, the intermediate bone of the thumb should never be
bound as a human thumb does not have an intermediate bone.

## Usage

## Behavior

This component forcibly assigns the rotation of each bound finger to a
particular bone relative to the palm. As an example of this, if you only
assign a Distal bone, that bone will spin 270 degrees starting pointing
forwards, curling to point out the direction of the palm, back towards
the wrist, then pointing out the back of the hand.

It is often easiest to make changes to this component following this
procedure:

1.  Have the avatar be unequipped
2.  Clear every RotationDrive field
3.  Assign the Root field of each bone in the hand to be driven, this
    list will not be complete and some roots will be null.
4.  Press InitializeHand at the bottom of the component (Note: This
    button only works once, to reset the button select another slot,
    then select the slot with the component again).
5.  Re-Equip the avatar and see if the hands initialized successfully.
6.  If a bone did not bind correctly, repeat.

## Examples

A few common problems can occur with an avatar's hands, here are common
solutions.

### Fingertips Through the Palm

Some avatars have very long fingertips (distal bones), but the human
hand is structured to have very short fingertips. For these avatars if
the hand is fully closed the fingertips (or clawtips) may poke through
the back of the avatars hands. To resolve this

One known fix for this is to follow the steps outlined in Behavior, but
assign every Distal bone to the Intermediate slot (leaving the
Indermediate unbound). This will result in the distal bones curling down
to lay flat against the palm, instead of curling all theway through the
hand.

### Hook Index Finger

This is where the rest of the hand bones accept the index finger bend at
the base of the palm, instead of the knuckle. The index finger
metacarpal doesn't bend at all though, leading to a 'hooked' appearance
when the hand is closed.

<figure>
<img src="Hook_Index_Finger_Example_1.png" title="Hook_Index_Finger_Example_1.png" width="300" alt="Hook_Index_Finger_Example_1.png" /><figcaption aria-hidden="true">Hook_Index_Finger_Example_1.png</figcaption>
</figure>

There are two main fixes here, if the avatar isn't fully imported then
re-import with the thumb parented to the palm bone instead of the index
metacarpal. Otherwise do the following:

1.  Reparent the thumb metacarpal to the palm in the inspector (This may
    not be needed, investigation is needed).
2.  Reassign the root fields for the entire hand following the procedure
    outlined in Behavior, the bindings will be incorrect.

This issue was introduced with an attempted fix of a binding issue with
this hand armature style in
<https://github.com/Resonite-Metaverse/ResonitePublic/issues/1222>

### Extra Finger Spread

Some avatars may end up with much more splayed fingers when inhabited by
a user, the current proposed solution is to not bind the metacarpal
bones (More investigation is needed into this solution).

### Hand curls to look like cat claws

The first digit of the finger isn't curling when the hand is closed,
making the hand look like a cat claw.

[<file:HandPoserComponent-CatClawHandCurl.jpg>](file:HandPoserComponent-CatClawHandCurl.jpg "wikilink")

This is caused by the avatar's hand having more bones than Resonite
expects, and the first bone in the hand is bound to the metacarpal, it
needs to be bound to proximal instead, moving each corresponding bone
one position down the finger. The thumb is likely not affected by this.

## Related Components

[AvatarHandDataAsigner
(Component)](AvatarHandDataAsigner_(Component) "wikilink")

</translate>

[HandPoser
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink") [HandPoser
(Component){{#translation:}}](Category:Components:Users:Common_Avatar_System:Fingers{{#translation:}} "wikilink")