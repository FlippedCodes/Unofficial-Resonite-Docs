<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Interaction/Grabbable

### Get User Grabber

<!-- ProtofluxNode:start -->
| Get User Grabber | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Grabber | * |
| input | BodyNode | Node |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GetUserGrabber |  |
<!-- ProtofluxNode:end -->


### Grabbable Grabber

<!-- ProtofluxNode:start -->
| Grabbable Grabber | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Grabber | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbableGrabber |  |
<!-- ProtofluxNode:end -->


### Grabbable Priority

<!-- ProtofluxNode:start -->
| Grabbable Priority | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Int32 | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbablePriority |  |
<!-- ProtofluxNode:end -->


### Grabber Body Node

<!-- ProtofluxNode:start -->
| Grabber Body Node | Type | Label |
| --- | ---- | ----- |
| input | Grabber | Grabber |
| output | BodyNode | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabberBodyNode |  |
<!-- ProtofluxNode:end -->


### Is Grabbable Grabbed

<!-- ProtofluxNode:start -->
| Is Grabbable Grabbed | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Boolean | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableGrabbed |  |
<!-- ProtofluxNode:end -->


### Is Grabbable Receivable

<!-- ProtofluxNode:start -->
| Is Grabbable Receivable | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Boolean | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableReceivable |  |
<!-- ProtofluxNode:end -->


### Is Grabbable Scalable

<!-- ProtofluxNode:start -->
| Is Grabbable Scalable | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Boolean | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableScalable |  |
<!-- ProtofluxNode:end -->


### On Grabbable Grabbed

<!-- ProtofluxNode:start -->
| On Grabbable Grabbed | Type | Label |
| --- | ---- | ----- |
| output | Call | OnGrabbed |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableGrabbed |  |
<!-- ProtofluxNode:end -->


### On Grabbable Receiver Surface Received

<!-- ProtofluxNode:start -->
| On Grabbable Receiver Surface Received | Type | Label |
| --- | ---- | ----- |
| output | Call | OnReceived |
| output | IGrabbable | ReceivedGrabbable |
| output | Grabber | FromGrabber |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReceiverSurfaceReceived |  |
<!-- ProtofluxNode:end -->


### On Grabbable Released

<!-- ProtofluxNode:start -->
| On Grabbable Released | Type | Label |
| --- | ---- | ----- |
| output | Call | OnReleased |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReleased |  |
<!-- ProtofluxNode:end -->


### Release All Grabbed

<!-- ProtofluxNode:start -->
| Release All Grabbed | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | BodyNode | Node |
| input | Boolean | SupressEvents |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ReleaseAllGrabbed |  |
<!-- ProtofluxNode:end -->


