<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Variables/Dynamic

### Clear Dynamic Variables

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariables -->
<!-- ProtofluxNode:start -->
| Clear Dynamic Variables | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnNotFound |
| input | Slot | Target |
| output | Continuation | OnCleared |
| input | String | SpaceName |
| output | Int32 | ClearedCount |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariables |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariables -->


### Clear Dynamic Variables Of Type`1

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariablesOfType`1 -->
<!-- ProtofluxNode:start -->
| Clear Dynamic Variables Of Type`1 | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnNotFound |
| input | Slot | Target |
| output | Continuation | OnCleared |
| input | String | SpaceName |
| output | Int32 | ClearedCount |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariablesOfType`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ClearDynamicVariablesOfType`1 -->


### Delete Dynamic Variable`1

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DeleteDynamicVariable`1 -->
<!-- ProtofluxNode:start -->
| Delete Dynamic Variable`1 | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnNotFound |
| input | Slot | Target |
| output | Continuation | OnDeleted |
| input | String | Path |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DeleteDynamicVariable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DeleteDynamicVariable`1 -->


### Create Dyn Var

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.CreateDynamicValueVariable`1 -->
<!-- ProtofluxNode:start -->
| Create Dyn Var | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnNotFound |
| input | Slot | Target |
| output | Continuation | OnCreated |
| input | String | Path |
| output | Continuation | OnAlreadyExists |
| input | Boolean | CreateDirectlyOnTarget |
| output | Continuation | OnFailed |
| input | Boolean | CreateNonPersistent |
| input | T | InitialValue |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.CreateDynamicValueVariable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.CreateDynamicValueVariable`1 -->


### Dyn Var Input

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInput`1 -->
<!-- ProtofluxNode:start -->
| Dyn Var Input | Type | Label |
| --- | ---- | ----- |
| output | T | Value |
| output | Boolean | HasValue |
| reference | String | VariableName |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInput`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInput`1 -->


### Dyn Var Input With Events

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInputWithEvents`1 -->
<!-- ProtofluxNode:start -->
| Dyn Var Input With Events | Type | Label |
| --- | ---- | ----- |
| input | User | DetectingUser |
| output | Call | OnSpaceLinked |
| output | Call | OnSpaceUnlinked |
| output | T | Value |
| output | Boolean | HasValue |
| reference | String | VariableName |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInputWithEvents`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.DynamicVariableValueInputWithEvents`1 -->


### Read Dyn Var

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ReadDynamicValueVariable`1 -->
<!-- ProtofluxNode:start -->
| Read Dyn Var | Type | Label |
| --- | ---- | ----- |
| input | Slot | Source |
| output | Boolean | FoundValue |
| input | String | Path |
| output | T | Value |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ReadDynamicValueVariable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.ReadDynamicValueVariable`1 -->


### Write Dyn Var

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteDynamicValueVariable`1 -->
<!-- ProtofluxNode:start -->
| Write Dyn Var | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnNotFound |
| input | Slot | Target |
| output | Continuation | OnSuccess |
| input | String | Path |
| output | Continuation | OnFailed |
| input | T | Value |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteDynamicValueVariable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteDynamicValueVariable`1 -->


### Write Or Create Dyn Var

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteOrCreateDynamicValueVariable`1 -->
<!-- ProtofluxNode:start -->
| Write Or Create Dyn Var | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnNotFound |
| input | Slot | Target |
| output | Continuation | OnCreated |
| input | String | Path |
| output | Continuation | OnWritten |
| input | Boolean | CreateDirectlyOnTarget |
| output | Continuation | OnFailed |
| input | Boolean | CreateNonPersistent |
| input | T | Value |
| Root/Variables/Dynamic | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteOrCreateDynamicValueVariable`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Variables.WriteOrCreateDynamicValueVariable`1 -->


