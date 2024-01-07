<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Interaction/UI

### Clear Focus

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.ClearFocus -->
<!-- ProtofluxNode:start -->
| Clear Focus | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.ClearFocus |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.ClearFocus -->


### Defocus Focusable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.DefocusFocusable -->
<!-- ProtofluxNode:start -->
| Defocus Focusable | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IFocusable | Target |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.DefocusFocusable |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.DefocusFocusable -->


### Focus Focusable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.FocusFocusable -->
<!-- ProtofluxNode:start -->
| Focus Focusable | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IFocusable | Target |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.FocusFocusable |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.FocusFocusable -->


### Has Local Focus

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.HasLocalFocus -->
<!-- ProtofluxNode:start -->
| Has Local Focus | Type | Label |
| --- | ---- | ----- |
| input | IFocusable | Target |
| output | Boolean | * |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.HasLocalFocus |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.HasLocalFocus -->


### Text Editor Events

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TextEditorEvents -->
<!-- ProtofluxNode:start -->
| Text Editor Events | Type | Label |
| --- | ---- | ----- |
| output | Call | EditingStarted |
| output | Call | EditingChanged |
| output | Call | EditingFinished |
| output | Call | SubmitPressed |
| reference | TextEditor | Editor |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TextEditorEvents |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TextEditorEvents -->


