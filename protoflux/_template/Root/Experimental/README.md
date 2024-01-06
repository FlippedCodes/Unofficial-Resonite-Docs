<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Experimental

### Test Feature Upgrade

<!-- ProtofluxNode:start -->
| Test Feature Upgrade | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| Root/Experimental | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Debugging.TestFeatureUpgrade |  |
<!-- ProtofluxNode:end -->


### Write Text To File

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


