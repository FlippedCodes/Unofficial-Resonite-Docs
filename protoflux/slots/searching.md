# Searching

<!-- panels:start -->
<!-- div:title-panel -->
## Find Child By Name

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/Searching/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.FindChildByName ':include')

<!-- div:left-panel -->
The **Find Child By Name** node attempts to find a slot which is a child of the `Instance` input slot which has a name matching the input `Name`.

### Usage

The default for `Instance` is *null*, which will not match anything.

The default for `Name` is *null*, which will not match anything.

The `MatchSubstring` input determines whether slots whose names contain the input `Name` will be considered valid matches. True by default.

The `SearchDepth` input determines how many levels of the slot hierarchy the node will search for child slots. A depth of 0 searches only the `Instance` slot's direct children. A positive depth searches only that many levels of children below the direct children. A negative depth searches through all children without limit. 0 by default.

The `IgnoreCase` input determines whether slot names which do not exactly match the upper/lower case of the `Name` input will be considered valid. True by default.

The `FoundChild` output is the first slot found whose name matches the input `Name`. Output is *null* if no valid match is found.

The search proceeds first from the `Instance` input slot's direct children (in increasing index order), then to the next level or children if allowed by the `SearchDepth` input, and so on. A `SearchDepth` of 0 (default) searches only the `Instance` input slot's direct children, a depth of 1 allows searching of the `Instance` slot's children's children etc. A `SearchDepth` value of -1 allows searching to unlimited depth.

> [!Note]
> Finding slots using this node is more demanding than simply getting a child slot via its index using [Get Child (Protoflux node)](Get_Child_(Protoflux_node) "wikilink"), so consider whether it is absolutely required.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Find Child By Tag

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/Searching/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.FindChildByTag ':include')

<!-- div:left-panel -->
The **Find Child By Tag** node attempts to find a child slot of the `Instance` input slot with a tag matching the input `Tag`.

### Usage

The `SearchDepth` input determines how many levels of the slot hierarchy the node will search for child slots. 0 by default (i.e. searches only the `Instance` slot's direct children).

The `FoundChild` is the first slot found whose tag exactly matches the input `Tag`. Output is *null* if no valid match is found.

The search proceeds from the `Instance` input slot's direct children (in increasing index order) to deeper levels if allowed by the `SearchDepth` input. A `SearchDepth` of 0 (default) searches only the `Instance` input slot's direct children, a depth of 1 allows searching of the `Instance` slot's children's children etc. A `SearchDepth` value of -1 allows searching to unlimited depth.

> [!Note]
> Finding slots using this node is more demanding than simply getting a child slot via its index using [Get Child (Protoflux node)](Get_Child_(Protoflux_node) "wikilink"), so consider whether it is absolutely required.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Find Parent By Name

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/Searching/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.FindParentByName ':include')

<!-- div:left-panel -->
The **Find Parent By Name** node attempts to find a slot which is a parent of the `Instance` input slot which has a name matching the input `Name`.

### Usage

The `MatchSubstring` input determines whether slots whose names contain the input `Name` will be considered valid matches. True by default.

The `SearchDepth` input determines how many levels of the slot hierarchy the node will search for parent slots. 0 by default (i.e. searches only the `Instance` slot's direct parent).

The `IgnoreCase` input determines whether slot names which do not exactly match the upper/lower case of the `Name` input will be considered valid. True by default.

The `FoundParent` output is the first slot found whose name matches the input `Name`. Output is *null* if no valid match is found.

The search proceeds from the `Instance` input slot's direct parent to higher levels if allowed by the `SearchDepth` input. A `SearchDepth` of 0 (default) searches only the `Instance` input slot's direct parent, a depth of 1 allows searching of the `Instance` slot's parent's parent etc. A `SearchDepth` value of -1 allows searching to unlimited depth.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Find Parent By Tag

<!-- div:right-panel -->
[Node](-/protoflux/_template/nodes/Root/Slots/Searching/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.FindParentByTag ':include')

<!-- div:left-panel -->
The **Find Parent By Tag** node attempts to find a parent slot of the `Instance` input slot with a tag matching the input `Tag`.

### Usage

The `FoundParent` is the first slot found whose tag exactly matches the input `Tag`. Output is *null* if no valid match is found.

The search proceeds from the `Instance` input slot's direct parent to higher levels if allowed by the `SearchDepth` input. A `SearchDepth` of 0 (default) searches only the `Instance` input slot's direct parent, a depth of 1 allows searching of the `Instance` slot's parent's parent etc. A `SearchDepth` value of -1 allows searching to unlimited depth.
<!-- panels:end -->