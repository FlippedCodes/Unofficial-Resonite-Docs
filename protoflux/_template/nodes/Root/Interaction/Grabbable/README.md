<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Interaction/Grabbable

### Get User Grabber

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GetUserGrabber -->
<!-- ProtofluxNode:start -->
| Get User Grabber | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Grabber | * |
| input | BodyNode | Node |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GetUserGrabber |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GetUserGrabber -->


### Grabbable Grabber

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbableGrabber -->
<!-- ProtofluxNode:start -->
| Grabbable Grabber | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Grabber | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbableGrabber |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbableGrabber -->


### Grabbable Priority

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbablePriority -->
<!-- ProtofluxNode:start -->
| Grabbable Priority | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Int32 | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbablePriority |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabbablePriority -->


### Grabber Body Node

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabberBodyNode -->
<!-- ProtofluxNode:start -->
| Grabber Body Node | Type | Label |
| --- | ---- | ----- |
| input | Grabber | Grabber |
| output | BodyNode | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabberBodyNode |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.GrabberBodyNode -->


### Is Grabbable Grabbed

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableGrabbed -->
<!-- ProtofluxNode:start -->
| Is Grabbable Grabbed | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Boolean | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableGrabbed |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableGrabbed -->


### Is Grabbable Receivable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableReceivable -->
<!-- ProtofluxNode:start -->
| Is Grabbable Receivable | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Boolean | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableReceivable |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableReceivable -->


### Is Grabbable Scalable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableScalable -->
<!-- ProtofluxNode:start -->
| Is Grabbable Scalable | Type | Label |
| --- | ---- | ----- |
| input | IGrabbable | Grabbable |
| output | Boolean | * |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableScalable |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.IsGrabbableScalable -->


### On Grabbable Grabbed

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableGrabbed -->
<!-- ProtofluxNode:start -->
| On Grabbable Grabbed | Type | Label |
| --- | ---- | ----- |
| output | Call | OnGrabbed |
| reference | IGrabbable | Grabbable |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableGrabbed |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableGrabbed -->


### On Grabbable Receiver Surface Received

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReceiverSurfaceReceived -->
<!-- ProtofluxNode:start -->
| On Grabbable Receiver Surface Received | Type | Label |
| --- | ---- | ----- |
| output | Call | OnReceived |
| output | IGrabbable | ReceivedGrabbable |
| output | Grabber | FromGrabber |
| reference | GrabbableReceiverSurface | Source |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReceiverSurfaceReceived |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReceiverSurfaceReceived -->


### On Grabbable Released

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReleased -->
<!-- ProtofluxNode:start -->
| On Grabbable Released | Type | Label |
| --- | ---- | ----- |
| output | Call | OnReleased |
| reference | IGrabbable | Grabbable |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReleased |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.OnGrabbableReleased -->


### Release All Grabbed

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ReleaseAllGrabbed -->
<!-- ProtofluxNode:start -->
| Release All Grabbed | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | BodyNode | Node |
| input | Boolean | SupressEvents |
| Root/Interaction/Grabbable | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ReleaseAllGrabbed |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Interaction.ReleaseAllGrabbed -->


