<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Core

### Async Call

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ExternalAsyncCall`1 -->
<!-- ProtofluxNode:start -->
| Async Call | Type                                                   | Label  |
| ---------- | ------------------------------------------------------ | ------ |
| output     | AsyncCall                                              | Target |
| Root/Core  | ProtoFlux.Runtimes.Execution.Nodes.ExternalAsyncCall`1 |        |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ExternalAsyncCall`1 -->


### Call

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ExternalCall`1 -->
<!-- ProtofluxNode:start -->
| Call      | Type                                              | Label  |
| --------- | ------------------------------------------------- | ------ |
| output    | Call                                              | Target |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalCall`1 |        |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ExternalCall`1 -->


### Box

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Box`1 -->
<!-- ProtofluxNode:start -->
| Box       | Type                                     | Label |
| --------- | ---------------------------------------- | ----- |
| input     | T                                        | Input |
| output    | Object                                   | *     |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.Box`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Box`1 -->


### Call Relay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.CallRelay -->
<!-- ProtofluxNode:start -->
| Call Relay | Type                                         | Label       |
| ---------- | -------------------------------------------- | ----------- |
| input      | SyncOperation                                | *           |
| output     | Call                                         | OnTriggered |
| Root/Core  | ProtoFlux.Runtimes.Execution.Nodes.CallRelay |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.CallRelay -->


### Constant

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ValueConstant`1 -->
<!-- ProtofluxNode:start -->
| Constant  | Type                                               | Label |
| --------- | -------------------------------------------------- | ----- |
| output    | T                                                  | *     |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueConstant`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ValueConstant`1 -->


### Continuation Relay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ContinuationRelay -->
<!-- ProtofluxNode:start -->
| Continuation Relay | Type                                                 | Label |
| ------------------ | ---------------------------------------------------- | ----- |
| input              | SyncOperation                                        | *     |
| output             | Continuation                                         | Next  |
| Root/Core          | ProtoFlux.Runtimes.Execution.Nodes.ContinuationRelay |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ContinuationRelay -->


### Display

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ExternalValueDisplay\`2 -->
<!-- ProtofluxNode:start -->
| Display   | Type                                                       | Label |
| --------- | ---------------------------------------------------------- | ----- |
| input     | T                                                          | Input |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalValueDisplay\`2 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ExternalValueDisplay\`2 -->


### Eval Point

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ValueEvaluationPoint`1 -->
<!-- ProtofluxNode:start -->
| Eval Point | Type                                                      | Label |
| ---------- | --------------------------------------------------------- | ----- |
| input      | T                                                         | Input |
| Root/Core  | ProtoFlux.Runtimes.Execution.Nodes.ValueEvaluationPoint`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ValueEvaluationPoint`1 -->


### Filter Input

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInputWithFilter\`2 -->
<!-- ProtofluxNode:start -->
| Filter Input | Type                                                               | Label |
| ------------ | ------------------------------------------------------------------ | ----- |
| output       | T                                                                  | *     |
| Root/Core    | ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInputWithFilter\`2 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInputWithFilter\`2 -->


### Global To Output

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.GlobalToValueOutput`1 -->
<!-- ProtofluxNode:start -->
| Global To Output | Type                                                     | Label |
| ---------------- | -------------------------------------------------------- | ----- |
| output           | T                                                        | *     |
| Root/Core        | ProtoFlux.Runtimes.Execution.Nodes.GlobalToValueOutput`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.GlobalToValueOutput`1 -->


### Input

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInput\`2 -->
<!-- ProtofluxNode:start -->
| Input     | Type                                                     | Label |
| --------- | -------------------------------------------------------- | ----- |
| output    | T                                                        | *     |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInput\`2 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ExternalValueInput\`2 -->


### Ref To Output

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ReferenceToOutput`1 -->
<!-- ProtofluxNode:start -->
| Ref To Output | Type                                                   | Label |
| ------------- | ------------------------------------------------------ | ----- |
| output        | T                                                      | *     |
| Root/Core     | ProtoFlux.Runtimes.Execution.Nodes.ReferenceToOutput`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ReferenceToOutput`1 -->


### Relay

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ValueRelay`1 -->
<!-- ProtofluxNode:start -->
| Relay     | Type                                            | Label |
| --------- | ----------------------------------------------- | ----- |
| input     | T                                               | Input |
| output    | T                                               | *     |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueRelay`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ValueRelay`1 -->


### Unbox

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Unbox`1 -->
<!-- ProtofluxNode:start -->
| Unbox     | Type                                       | Label |
| --------- | ------------------------------------------ | ----- |
| input     | Object                                     | Input |
| output    | T                                          | *     |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.Unbox`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Unbox`1 -->


### Write Global

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.WriteValueToGlobal\`2 -->
<!-- ProtofluxNode:start -->
| Write Global | Type                                                     | Label     |
| ------------ | -------------------------------------------------------- | --------- |
| input        | SyncOperation                                            | *         |
| output       | Continuation                                             | OnWritten |
| input        | T                                                        | Value     |
| output       | Continuation                                             | OnFail    |
| Root/Core    | ProtoFlux.Runtimes.Execution.Nodes.WriteValueToGlobal\`2 |           |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.WriteValueToGlobal\`2 -->


### Changeable Source

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ElementSource`1 -->
<!-- ProtofluxNode:start -->
| Changeable Source | Type                                            | Label |
| ----------------- | ----------------------------------------------- | ----- |
| output            | T                                               | *     |
| Root/Core         | FrooxEngine.ProtoFlux.CoreNodes.ElementSource`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ElementSource`1 -->


### Field Hook

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ValueFieldHook`1 -->
<!-- ProtofluxNode:start -->
| Field Hook | Type                                             | Label        |
| ---------- | ------------------------------------------------ | ------------ |
| input      | SyncOperation                                    | StartDrive   |
| output     | Continuation                                     | OnStartDrive |
| input      | SyncOperation                                    | StopDrive    |
| output     | Continuation                                     | OnStopDrive  |
| input      | IField_1                                         | Target       |
| output     | Call                                             | OnHook       |
| input      | T                                                | Source       |
| output     | Boolean                                          | IsDriving    |
| output     | T                                                | HookedValue  |
| Root/Core  | FrooxEngine.ProtoFlux.CoreNodes.ValueFieldHook`1 |              |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ValueFieldHook`1 -->


### Display

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ValueDisplay`1 -->
<!-- ProtofluxNode:start -->
| Display   | Type                                              | Label |
| --------- | ------------------------------------------------- | ----- |
| input     | T                                                 | Input |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.ValueDisplay`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ValueDisplay`1 -->


### Ref As Variable

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ReferenceInterfaceAsVariable`1 -->
<!-- ProtofluxNode:start -->
| Ref As Variable | Type                                                           | Label     |
| --------------- | -------------------------------------------------------------- | --------- |
| input           | ISyncRef_1                                                     | Reference |
| output          | IVariable_2                                                    | *         |
| Root/Core       | FrooxEngine.ProtoFlux.CoreNodes.ReferenceInterfaceAsVariable`1 |           |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ReferenceInterfaceAsVariable`1 -->


### Ref Source

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ReferenceSource`1 -->
<!-- ProtofluxNode:start -->
| Ref Source | Type                                              | Label |
| ---------- | ------------------------------------------------- | ----- |
| output     | T                                                 | *     |
| Root/Core  | FrooxEngine.ProtoFlux.CoreNodes.ReferenceSource`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ReferenceSource`1 -->


### Source

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ValueSource`1 -->
<!-- ProtofluxNode:start -->
| Source    | Type                                          | Label |
| --------- | --------------------------------------------- | ----- |
| output    | T                                             | *     |
| Root/Core | FrooxEngine.ProtoFlux.CoreNodes.ValueSource`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ValueSource`1 -->


### Field As Variable`1

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.FieldAsVariable`1 -->
<!-- ProtofluxNode:start -->
| Field As Variable`1 | Type                                              | Label |
| ------------------- | ------------------------------------------------- | ----- |
| input               | IValue_1                                          | Field |
| output              | IVariable_2                                       | *     |
| Root/Core           | FrooxEngine.ProtoFlux.CoreNodes.FieldAsVariable`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.FieldAsVariable`1 -->


### Link

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Link -->
<!-- ProtofluxNode:start -->
| Link      | Type                                    | Label |
| --------- | --------------------------------------- | ----- |
| Root/Core | ProtoFlux.Runtimes.Execution.Nodes.Link |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Link -->


### Object Field Drive`1

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ObjectFieldDrive`1 -->
<!-- ProtofluxNode:start -->
| Object Field Drive`1 | Type                                               | Label |
| -------------------- | -------------------------------------------------- | ----- |
| input                | T                                                  | Value |
| Root/Core            | FrooxEngine.ProtoFlux.CoreNodes.ObjectFieldDrive`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ObjectFieldDrive`1 -->


### Pulse Display

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ExternalImpulseDisplay`1 -->
<!-- ProtofluxNode:start -->
| Pulse Display | Type                                                        | Label |
| ------------- | ----------------------------------------------------------- | ----- |
| input         | SyncOperation                                               | *     |
| Root/Core     | ProtoFlux.Runtimes.Execution.Nodes.ExternalImpulseDisplay`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ExternalImpulseDisplay`1 -->


### Reference Drive`1

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ReferenceDrive`1 -->
<!-- ProtofluxNode:start -->
| Reference Drive`1 | Type                                             | Label  |
| ----------------- | ------------------------------------------------ | ------ |
| input             | T                                                | Target |
| Root/Core         | FrooxEngine.ProtoFlux.CoreNodes.ReferenceDrive`1 |        |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ReferenceDrive`1 -->


### User Ref As Variable

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.UserRefAsVariable -->
<!-- ProtofluxNode:start -->
| User Ref As Variable | Type                                              | Label   |
| -------------------- | ------------------------------------------------- | ------- |
| input                | UserRef                                           | UserRef |
| output               | IVariable_2                                       | *       |
| Root/Core            | FrooxEngine.ProtoFlux.CoreNodes.UserRefAsVariable |         |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.UserRefAsVariable -->


### Value Field Drive`1

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.ValueFieldDrive`1 -->
<!-- ProtofluxNode:start -->
| Value Field Drive`1 | Type                                              | Label |
| ------------------- | ------------------------------------------------- | ----- |
| input               | T                                                 | Value |
| Root/Core           | FrooxEngine.ProtoFlux.CoreNodes.ValueFieldDrive`1 |       |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.ValueFieldDrive`1 -->


