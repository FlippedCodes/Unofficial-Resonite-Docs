<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Experimental

### Test Feature Upgrade

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.TestFeatureUpgrade -->
<!-- ProtofluxNode:start -->
| Test Feature Upgrade | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| Root/Experimental | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.TestFeatureUpgrade |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.TestFeatureUpgrade -->


### Write Text To File

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Experimental.WriteTextToFile -->
<!-- ProtofluxNode:start -->
| Write Text To File | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnWriteStarted |
| input | String | String |
| output | Continuation | OnWriteFinished |
| input | String | FilePath |
| output | Continuation | OnWriteFail |
| input | Boolean | Append |
| input | Boolean | NewLine |
| Root/Experimental | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Experimental.WriteTextToFile |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Experimental.WriteTextToFile -->


