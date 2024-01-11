# Users

<!-- panels:start -->
<!-- div:title-panel -->
## Local User

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Users/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUser ':include')

<!-- div:left-panel -->
The **Local User** node outputs a reference to the Local User.

### Usage

The output of this node will necessarily be different dependent on which user owns the impulse chain under which the Local User node's output is checked.

Imagine world session hosted by Alice where Bob is also present.

- A button is connected via Protoflux such that the Local User's Username at time of firing is written to a [String variable](String_(Protoflux_node) "wikilink").
- If either user presses the button, their username will be written to the variable.
- If Alice pushes the button Alice's name is written to the variable.
- If Bob pushes the button Bob's name is written to the variable.
<!-- panels:end -->