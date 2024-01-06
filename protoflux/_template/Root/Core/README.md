<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Core

### Async Call

<!-- ProtofluxNode:start -->
| Async Call | Type | Label |
| --- | ---- | ----- |
| output | AsyncCall | Target |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalAsyncCall\`1 |  |
<!-- ProtofluxNode:end -->


### Call

<!-- ProtofluxNode:start -->
| Call | Type | Label |
| --- | ---- | ----- |
| output | Call | Target |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalCall\`1 |  |
<!-- ProtofluxNode:end -->


### Box

<!-- ProtofluxNode:start -->
| Box | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| output | Object | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.Box\`1 |  |
<!-- ProtofluxNode:end -->


### Call Relay

<!-- ProtofluxNode:start -->
| Call Relay | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Call | OnTriggered |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.CallRelay |  |
<!-- ProtofluxNode:end -->


### Constant

<!-- ProtofluxNode:start -->
| Constant | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueConstant\`1 |  |
<!-- ProtofluxNode:end -->


### Continuation Relay

<!-- ProtofluxNode:start -->
| Continuation Relay | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ContinuationRelay |  |
<!-- ProtofluxNode:end -->


### Display

<!-- ProtofluxNode:start -->
| Display | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalValueDisplay\`2 |  |
<!-- ProtofluxNode:end -->


### Eval Point

<!-- ProtofluxNode:start -->
| Eval Point | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueEvaluationPoint\`1 |  |
<!-- ProtofluxNode:end -->


### Filter Input

<!-- ProtofluxNode:start -->
| Filter Input | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInputWithFilter\`2 |  |
<!-- ProtofluxNode:end -->


### Global To Output

<!-- ProtofluxNode:start -->
| Global To Output | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.GlobalToValueOutput\`1 |  |
<!-- ProtofluxNode:end -->


### Input

<!-- ProtofluxNode:start -->
| Input | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInput\`2 |  |
<!-- ProtofluxNode:end -->


### Ref To Output

<!-- ProtofluxNode:start -->
| Ref To Output | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ReferenceToOutput\`1 |  |
<!-- ProtofluxNode:end -->


### Relay

<!-- ProtofluxNode:start -->
| Relay | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueRelay\`1 |  |
<!-- ProtofluxNode:end -->


### Unbox

<!-- ProtofluxNode:start -->
| Unbox | Type | Label |
| --- | ---- | ----- |
| input | Object | Input |
| output | T | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.Unbox\`1 |  |
<!-- ProtofluxNode:end -->


### Write Global

<!-- ProtofluxNode:start -->
| Write Global | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnWritten |
| input | T | Value |
| output | Continuation | OnFail |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.WriteValueToGlobal\`2 |  |
<!-- ProtofluxNode:end -->


### Changeable Source

<!-- ProtofluxNode:start -->
| Changeable Source | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ElementSource\`1 |  |
<!-- ProtofluxNode:end -->


### Field Hook

<!-- ProtofluxNode:start -->
| Field Hook | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | StartDrive |
| output | Continuation | OnStartDrive |
| input | SyncOperation | StopDrive |
| output | Continuation | OnStopDrive |
| input | IField_1 | Target |
| output | Call | OnHook |
| input | T | Source |
| output | Boolean | IsDriving |
| output | T | HookedValue |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ValueFieldHook\`1 |  |
<!-- ProtofluxNode:end -->


### Display

<!-- ProtofluxNode:start -->
| Display | Type | Label |
| --- | ---- | ----- |
| input | T | Input |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueDisplay\`1 |  |
<!-- ProtofluxNode:end -->


### Ref As Variable

<!-- ProtofluxNode:start -->
| Ref As Variable | Type | Label |
| --- | ---- | ----- |
| input | ISyncRef_1 | Reference |
| output | IVariable_2 | * |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ReferenceInterfaceAsVariable\`1 |  |
<!-- ProtofluxNode:end -->


### Ref Source

<!-- ProtofluxNode:start -->
| Ref Source | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ReferenceSource\`1 |  |
<!-- ProtofluxNode:end -->


### Source

<!-- ProtofluxNode:start -->
| Source | Type | Label |
| --- | ---- | ----- |
| output | T | * |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ValueSource\`1 |  |
<!-- ProtofluxNode:end -->


### Field As Variable\`1

<!-- ProtofluxNode:start -->
| Field As Variable\`1 | Type | Label |
| --- | ---- | ----- |
| input | IValue_1 | Field |
| output | IVariable_2 | * |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.FieldAsVariable\`1 |  |
<!-- ProtofluxNode:end -->


### Link

<!-- ProtofluxNode:start -->
| Link | Type | Label |
| --- | ---- | ----- |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.Link |  |
<!-- ProtofluxNode:end -->


### Object Field Drive\`1

<!-- ProtofluxNode:start -->
| Object Field Drive\`1 | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ObjectFieldDrive\`1 |  |
<!-- ProtofluxNode:end -->


### Pulse Display

<!-- ProtofluxNode:start -->
| Pulse Display | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalImpulseDisplay\`1 |  |
<!-- ProtofluxNode:end -->


### Reference Drive\`1

<!-- ProtofluxNode:start -->
| Reference Drive\`1 | Type | Label |
| --- | ---- | ----- |
| input | T | Target |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ReferenceDrive\`1 |  |
<!-- ProtofluxNode:end -->


### User Ref As Variable

<!-- ProtofluxNode:start -->
| User Ref As Variable | Type | Label |
| --- | ---- | ----- |
| input | UserRef | UserRef |
| output | IVariable_2 | * |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.UserRefAsVariable |  |
<!-- ProtofluxNode:end -->


### Value Field Drive\`1

<!-- ProtofluxNode:start -->
| Value Field Drive\`1 | Type | Label |
| --- | ---- | ----- |
| input | T | Value |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ValueFieldDrive\`1 |  |
<!-- ProtofluxNode:end -->


