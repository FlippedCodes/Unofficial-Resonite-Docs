# Actions

<!-- panels:start -->
<!-- div:title-panel -->
## Dynamic Impulse Receiver With Data

<!-- div:right-panel -->
> [!Warning]
> This article has been imported from the NeosVR wiki page on ``Dynamic Impulse Receiver With Value`1'``. In Resonite you can find the node under the name displayed here, but have to pick between ``Dynamic Impulse Receiver With Value`1`` and ``Dynamic Impulse Receiver With Object`1`` - depending on which kind of data you want to pass along.

[Node](./_template/nodes/Root/Flow/README.md#ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseReceiverWithValue`1 ':include')
</br>

[Node](./_template/nodes/Root/Flow/Async/README.md#ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseReceiverWithValue`1 ':include')

<!-- div:left-panel -->
The **Dynamic Impulse Receiver With Data** node fires an impulse
whenever a [Dynamic Impulse Trigger With
Value\`1](Dynamic_Impulse_Trigger_With_Value`1_(Protoflux_node) "wikilink")
is triggered and the receiver node is present under the trigger's
`TargetHierarchy`. This will only occur if the `Tag` string inputs of
the trigger and receiver are identical. The `Value` output by the
receiver node is equal to the `Value` input of the trigger node at the
moment it was triggered.

### Usage

Note that the tag system for dynamic impulse triggers / receivers is
completely unrelated to slot tag properties. This node will only respond
to Dynamic Impulse Trigger With Value\`1 nodes with identical `Value`
datatypes - it ignores dynamic impulses from [Dynamic Impulse
Trigger](Dynamic_Impulse_Trigger_(Protoflux_node) "wikilink") nodes or
Dynamic Impulse Trigger With Value\`1 nodes with different `Value`
datatypes. The output `Value` is only equal to the `Value` input from
the trigger for the duration of the impulse chain started from the
receiver `Impulse` output.

When spawning this node from the node browser there is a selection of
possible datatypes for this node. See this tutorial by ProbablePrime for
how to create receiver nodes for other data types.
[Youtube Video](https://www.youtube-nocookie.com/embed/3j4FGONxfWk?si=Ka-aOglyqIXwZgMC ':include :type=iframe')

### Example

[Youtube Video](https://www.youtube-nocookie.com/embed/6A0GQ4iABfY?si=a3Iody0kgSq88IdD ':include :type=iframe')
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Dynamic Impulse Trigger With Data`1

<!-- div:right-panel -->
> [!Warning]
> This article has been imported from the NeosVR wiki page on ``Dynamic Impulse Trigger With Value`1``. In Resonite you can find the node under the name displayed here, but have to pick between ``Dynamic Impulse Trigger With Value`1`` and ``Dynamic Impulse Trigger With Object`1`` - depending on which kind of data you want to pass along.

[Node](./_template/nodes/Root/Flow/README.md#ProtoFlux.Runtimes.Execution.Nodes.Actions.DynamicImpulseTriggerWithValue`1 ':include')
</br>

[Node](./_template/nodes/Root/Flow/Async/README.md#ProtoFlux.Runtimes.Execution.Nodes.Actions.AsyncDynamicImpulseTriggerWithValue`1 ':include')

<!-- div:left-panel -->
The Dynamic Impulse Trigger With Data\`1 node sends a dynamic
impulse when an impulse is received at `Run` which triggers any [Dynamic
Impulse
Receiver](Dynamic_Impulse_Receiver_With_Value`1_(Protoflux_node) "wikilink")
nodes (with the same `Value` datatype) present under the input
`TargetHierarchy` whose `Tag` input matches that on the Dynamic Impulse
Trigger With Value\`1.

### Usage

The `ExcludeDisabled` input determines whether [Dynamic Impulse Receiver
With
Value\`1](Dynamic_Impulse_Receiver_With_Value`1_(Protoflux_node) "wikilink")
nodes present on inactive slots will be triggered. Default is False,
meaning that all valid receivers may be triggered.

The `OnTriggered` output fires an impulse after any impulse chains
triggered from Dynamic Impulse Receiver With Value\`1 nodes have
completed. This continues the impulse chain which arrived at `Run`

Note that the tag system for dynamic impulse triggers / receivers is
completely unrelated to slot tag properties. When an impulse is received
at `Run`, this node starts a descending search for any [Dynamic Impulse
Receiver With
Value\`1](Dynamic_Impulse_Receiver_With_Value`1_(Protoflux_node) "wikilink")
nodes present under the `TargetHierarchy` whose `Value` datatype matches
that of the trigger. All such receiver nodes with `Tag` inputs matching
the trigger `Tag` will fire an impulse. Note that [Dynamic Impulse
Receiver](Dynamic_Impulse_Receiver_(Protoflux_node) "wikilink") nodes
will be ignored. The hierarchy search is highly efficient, however it is
best to set the input `TargetHierarchy` as close to the intended target
node as possible to minimize performance costs.
[Youtube Video](https://www.youtube-nocookie.com/embed/6A0GQ4iABfY?si=OeIyXLVnU6kLAPbs ':include :type=iframe')
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Fire On True

<!-- div:right-panel -->
[Node](./_template/nodes/Root/Flow/README.md#ProtoFlux.Runtimes.Execution.Nodes.Actions.FireOnTrue ':include')

<!-- div:left-panel -->
The **Fire On True** node fires a single impulse whenever the input
`Condition` becomes True.

### Usage

After an impulse has been fired, the `Condition` must first be reset to
False before any additional impulses can be fired.

It is recommended to specify a user at `OnlyForUser` to ensure that the
user for whom the impulse fires is predictable.

### Multiple Impulses

This node will only fire one impulse in the event that `Condition`
becomes True multiple times within a single impulse chain. Similarly
this node will not fire an impulse if the `Condition` becomes True and
then reset to False within a single impulse chain.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Fire While True

<!-- div:right-panel -->
[Node](./_template/nodes/Root/Flow/README.md#ProtoFlux.Runtimes.Execution.Nodes.Actions.FireWhileTrue ':include')

<!-- div:left-panel -->
The **Fire While True** node fires an impulse every frame while the
input `Condition` is True.

### Usage

The `FiringUser` input determines for which users impulses will fire: if
a valid user value is present, impulses will only fire for that user. If
no FiringUser is provided, or [Local
User](Local_User_(Protoflux_node) "wikilink") is used, impulses will
fire for all users. If an explicit *null* value provided, no impulses
will fire at all.

It is recommended to specify the `FiringUser` to minimize redundant
impulses and to keep behavior predictable.
<!-- panels:end -->

#### Page end
