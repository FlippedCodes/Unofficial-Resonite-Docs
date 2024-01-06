<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Locomotion

### Get Active Locomotion Module

<!-- ProtofluxNode:start -->
| Get Active Locomotion Module | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | ILocomotionModule | * |
| Root/Locomotion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Locomotion.GetActiveLocomotionModule |  |
<!-- ProtofluxNode:end -->


### Install Locomotion Modules

<!-- ProtofluxNode:start -->
| Install Locomotion Modules | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | ModulesRoot |
| input | User | TargetUser |
| input | Boolean | ClearExisting |
| Root/Locomotion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Locomotion.InstallLocomotionModules |  |
<!-- ProtofluxNode:end -->


### Switch Locomotion Module

<!-- ProtofluxNode:start -->
| Switch Locomotion Module | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnSwitched |
| input | User | TargetUser |
| output | Continuation | OnNotFound |
| input | String | ModuleName |
| input | Boolean | ExactMatch |
| Root/Locomotion | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Locomotion.SwitchLocomotionModule |  |
<!-- ProtofluxNode:end -->


