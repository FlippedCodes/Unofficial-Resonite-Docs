<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Interaction/UI

### Clear Focus

<!-- ProtofluxNode:start -->
| Clear Focus | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.ClearFocus |  |
<!-- ProtofluxNode:end -->


### Defocus Focusable

<!-- ProtofluxNode:start -->
| Defocus Focusable | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IFocusable | Target |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.DefocusFocusable |  |
<!-- ProtofluxNode:end -->


### Focus Focusable

<!-- ProtofluxNode:start -->
| Focus Focusable | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IFocusable | Target |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.FocusFocusable |  |
<!-- ProtofluxNode:end -->


### Has Local Focus

<!-- ProtofluxNode:start -->
| Has Local Focus | Type | Label |
| --- | ---- | ----- |
| input | IFocusable | Target |
| output | Boolean | * |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.Focusing.HasLocalFocus |  |
<!-- ProtofluxNode:end -->


### Text Editor Events

<!-- ProtofluxNode:start -->
| Text Editor Events | Type | Label |
| --- | ---- | ----- |
| output | Call | EditingStarted |
| output | Call | EditingChanged |
| output | Call | EditingFinished |
| output | Call | SubmitPressed |
| Root/Interaction/UI | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.TextEditorEvents |  |
<!-- ProtofluxNode:end -->


