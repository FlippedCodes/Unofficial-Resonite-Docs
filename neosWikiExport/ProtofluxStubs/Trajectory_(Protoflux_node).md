<languages></languages> <translate>

The **Trajectory** node solves for the positional displacement of a
projectile according to a set of parameters. This node can be used to
help simulate the parabolic motion of a projectile.

## Usage

The output of the node (Float3 position) is the position the object will
be at relative to the origin at the time that is input at the Time input
(Float time), which takes an input of where in time during the
trajectory arc you want to have the position of

The gravity input (Float3 gravity) will be how fast the position will
move in the direction input at a constant acceleration, generally the
standard being a Float3 of (0, -9.81, 0), which results in normal earth
gravity on the y axis

Initial Velocity (Float3 intialvelocity) will be your velocity you want
it to have at time 0, or when the movement should start

Drag (Float drag) is needed if you want air resistance over time. This
can usually be disregarded by setting the value to near zero, however a
value of 0 will break the calculations so a value greater than 0 has to
be put in

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink")
[Trajectory](Category:Protoflux{{#translation:}} "wikilink")
[Trajectory](Category:Protoflux:Math:Physics{{#translation:}} "wikilink")