# Body Nodes

<!-- panels:start -->
<!-- div:title-panel -->
## Body Node Slot

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Avatars/Body%20Nodes/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Avatar.BodyNodeSlot ':include')

<!-- div:left-panel -->
The **Body Node Slot** node outputs the `NodeSlot` slot corresponding to the input `Node` on the avatar of the `Source` user.

### Usage

The `Source` input defaults to the local user - meaning that the `NodeSlot` output would be different on each user's client.

In the case of the default `Node` input, or if there is no corresponding slot for the input on the `Source` user's avatar, the `NodeSlot` output is *null*.
<!-- panels:end -->

#### Page end
