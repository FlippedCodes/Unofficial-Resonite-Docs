# World

<!-- panels:start -->
<!-- div:title-panel -->
## Focus World

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/World/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Worlds.FocusWorld ':include')

<!-- div:left-panel -->
The **Focus World** node focuses the world corresponding to the input URL if it is already open.

### Usage

When an impulse is received at the Focus input, and a valid URL is provided, the user is swapped to the world linked to the URL. This requires that the user have the world open at the time. If the CloseCurrent value is True (False by default) the world that the user leaves is closed after the user changes focus. The current world will only be closed if the user is not host of that world. This can result in loss of unsaved changes! The form of URL required is that found in the URL field of a world orb WorldOrb component.
<!-- panels:end -->
