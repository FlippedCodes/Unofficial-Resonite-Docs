<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Variables/Cloud

### Read Cloud Variable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.ReadValueCloudVariable`1 -->
<!-- ProtofluxNode:start -->
| Read Cloud Variable  | Type                                                                          | Label           |
| -------------------- | ----------------------------------------------------------------------------- | --------------- |
| input                | AsyncOperation                                                                | *               |
| output               | AsyncCall                                                                     | OnRequest       |
| input                | String                                                                        | Path            |
| output               | Continuation                                                                  | OnDone          |
| input                | String                                                                        | VariableOwnerId |
| output               | Continuation                                                                  | OnFail          |
| output               | T                                                                             | Value           |
| Root/Variables/Cloud | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.ReadValueCloudVariable`1 |                 |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.ReadValueCloudVariable`1 -->


### Write Cloud Variable

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.WriteValueCloudVariable`1 -->
<!-- ProtofluxNode:start -->
| Write Cloud Variable | Type                                                                           | Label           |
| -------------------- | ------------------------------------------------------------------------------ | --------------- |
| input                | AsyncOperation                                                                 | *               |
| output               | AsyncCall                                                                      | OnRequest       |
| input                | String                                                                         | Path            |
| output               | Continuation                                                                   | OnDone          |
| input                | String                                                                         | VariableOwnerId |
| output               | Continuation                                                                   | OnFail          |
| input                | T                                                                              | Value           |
| Root/Variables/Cloud | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.WriteValueCloudVariable`1 |                 |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.WriteValueCloudVariable`1 -->


