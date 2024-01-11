# Operators

<!-- panels:start -->
<!-- div:title-panel -->
## If

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Flow/README.md#ProtoFlux.Runtimes.Execution.Nodes.If ':include')

<!-- div:left-panel -->
The **If** node fires an impulse from one of two outputs dependent on the `Condition` when an impulse is received at `Run`.

### Usage

Upon receiving an impulse at `Run`, an impulse is fired from `True` if `Condition` is True or from `False` if `Condition` is False. The default `Condition` value is `False`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Delay

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Flow/README.md#ProtoFlux.Runtimes.Execution.Nodes.DelayTimeSpan ':include')

<!-- div:left-panel -->
The **Delay** node is used to fire an impulse from `Impulse` after `Delay` seconds have elapsed following an impulse received at `Trigger`.

### Usage

The `Delay` input sets the number of seconds which must elapse before the delayed impulse is fired from `Impulse`. The default value is 0 which results in a delay of 1 frame update.

The `OnTrigger` output fires an impulse immediately after an impulse is received at `Trigger`. This continues the impulse chain which arrived at `Trigger`.

The delayed impulses do not continue the impulse chain which arrived at `Trigger` and any temporary values present will have been lost - if a temporary value must be stored until the delayed impulse is fired use [Delay With Value](Delay_With_Value_(Protoflux_node) "wikilink"). Each impulse which arrives at `Trigger` sets up a separate delayed impulse and multiple can be queued at once with different delay durations. If a user focuses a different world while they have delayed impulses queued, the delayed impulses will fire as normal. However, if a user with delayed impulses leave the world entirely, their delayed impulses will never fire.
<!-- panels:end -->

#### Page end
