In order to detect when a character is on the ground to drive some
action further down the line here is how you can do this in two
different ways.

We are going to take the example of driving a Shape Key change, in this
case, this shape key controls the wings of the avatar. When the avatar
is on the ground, the wings will retract, when it is flying (or jumping)
they will expand.

## Protoflux Based

To do this in Protoflux we need to extract the component panel for the
VRIK component situated at the Root of the avatar. In this monster of a
component, find the *CurrentOnGround* value. This value is True if the
feet collide with a ground object, and false if they don't. Then we need
to convert this Bool to a Float between 0-1, we can use the *0 1* node.
We also want to smooth this transition so that the shape key goes
smoothly from 0 to 1, so we use a *Smooth Lerp* node, and we plug in a
speed. Finally, we plug this value onto the Shape Key driver node that
we extract from the object we need to drive.

The final setup will look like this:

![caption](_GroundCollisionDetectionProtoflux.png "caption")

## Component based

But we don't need any Protoflux to do this, and we can instead used
components. First create a new empty (or place them in an object inside
your character) and parent this empty under your character (you can also
reset it's transform so that it's centered with your character and isn't
flying around.

Then we will need three components: - ValueCopy<bool> so that we can
copy the state of *CurrentOnGround* to the next component -
BooleanValueDriver<float> which we use to convert the bool to a float
between 0 and 1 - SmoothValue<float> which takes the converted float and
outputs the smooth lerp onto the shape key.

The base setup looks like this.

![caption](_GroundCollisionDetectionComponentBaseState.png "caption")

Then you need to plug the different elements in as follows:

![caption](_GroundCollisionDetectionComponentExplainer.png "caption")

And it should look something like this at the end:

![caption](_GroundCollisionDetectionComponentFinal.png "caption")

[Category:Tutorials](Category:Tutorials "wikilink")
[Category:Tutorials:Avatar](Category:Tutorials:Avatar "wikilink")