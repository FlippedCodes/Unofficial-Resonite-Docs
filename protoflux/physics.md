# Physics

<!-- panels:start -->
<!-- div:title-panel -->
## Apply Character Force

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.ApplyCharacterForce ':include')

<!-- div:left-panel -->
The **Apply Character Force** node changes the linear velocity of the input `Character` [CharacterController (Component)](CharacterController_(Component) "wikilink") proportional to the input `Force` when an impulse is received at `Apply`.

### Usage

The `IgnoreMass` input determines whether the Mass field on any associated collider (must be on the same Slot as the `Character` and must have Type `CharacterController`) is taken into account when calculating the resulting velocity. If False, the MassScaling Enum value on the `Character` will also be taken into account and the effective mass value scaled by the `Character` Slot's global scale. Default is False.

The `OnDone` output fires an impulse when the velocity of the input `CharacterController` has been changed as a result of an impulse received at `Apply`. No impulse will be fired if there is no valid `CharacterController` input.

If `IgnoreMass` is False, the change in velocity of the `CharacterController` is the input `Force` multiplied by the local user's frame update time divided by the CharacterCollider's effective mass. If `IgnoreMass` is True, the change in velocity of the `CharacterController` is the input `Force` multiplied by the local user's frame update time.

Note that for the input `CharacterController` to be affected, the impulse received at `Apply` must be owned by the `SimulatingUser` set in the referenced CharacterController component.
<!-- For an explanation, see [Frooxius' comment on GitHub](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3197#issuecomment-944923044) -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Apply Character Impulse

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.ApplyCharacterImpulse ':include')

<!-- div:left-panel -->
The **Apply Character Impulse** node changes the linear velocity of the input `Character` [CharacterController (Component)](CharacterController_(Component) "wikilink") proportional to the value of the input `Impulse` when an impulse is received at `Apply`.

### Usage

The `IgnoreMass` input determines whether the Mass field on any associated collider (must be on the same Slot as the `Character` and must have Type `CharacterController`) is taken into account when calculating the resulting velocity. If true, the MassScaling Enum value on the `Character` will also be taken into account and the effective mass value scaled by the `Character` Slot's global scale. Default is False.

The `OnDone` output fires an impulse when the velocity of the input `CharacterController` has been changed as a result of an impulse received at `Apply`. No impulse will be fired if there is no valid `CharacterController` input.

If `IgnoreMass` is False, the change in velocity of the `Character` is the input `Impulse` divided by the CharacterCollider's effective mass. If `IgnoreMass` is True, the change in velocity of the `Character` is the input `Impulse`.

Note that for the input `CharacterController` to be affected, the impulse received at `Apply` must be owned by the `SimulatingUser` set in the referenced CharacterController component.
<!-- For an explanation, see [Frooxius' comment on GitHub](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3197#issuecomment-944923044) -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## As Character Controller

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.AsCharacterController ':include')

<!-- div:left-panel -->
The **As Character Controller** node attempts to output the [CharacterController (Component)](CharacterController_(Component) "wikilink") associated with the input `Collider`.

### Usage

Output is *null* unless the input is a valid character collider.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Character Controller User

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterControllerUser ':include')

<!-- div:left-panel -->
The **Character Controller User** node attempts to output the user referenced in the SimulatingUser field of the input `CharacterController`.

### Usage

Output is *null* unless a valid user reference is available.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Character Gravity

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterGravity ':include')

<!-- div:left-panel -->
The **Character Gravity** node outputs the `Gravity` vector for the input `Character` [CharacterController (Component)](CharacterController_(Component) "wikilink").

### Usage

The `Gravity` output provides the current Gravity value.

The `ActualGravity` output provides the Gravity value from the previous update.

Default values are \[0;0;0\] for both outputs if there is no valid input `CharacterController`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Character Ground Collider

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterGroundCollider ':include')

<!-- div:left-panel -->
The **Character Ground Collider** node outputs a reference to the collider the user of the input `Character` [CharacterController (Component)](CharacterController_(Component) "wikilink") is standing on.

### Usage

Output is *null* if there is no valid input or the relevant user is not standing on a surface.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Character Linear Velocity

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Physics/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Physics.CharacterLinearVelocity ':include')

<!-- div:left-panel -->
The **Character Linear Velocity** node outputs the linear velocity of the input `Character` [CharacterController (Component)](CharacterController_(Component) "wikilink") in global coordinate space.
<!-- panels:end -->

#### Page end
