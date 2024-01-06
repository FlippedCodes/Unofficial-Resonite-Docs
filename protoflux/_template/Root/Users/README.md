<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Users

### Get Active User

<!-- ProtofluxNode:start -->
| Get Active User | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUser |  |
<!-- ProtofluxNode:end -->


### Get Active User Self

<!-- ProtofluxNode:start -->
| Get Active User Self | Type | Label |
| --- | ---- | ----- |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserSelf |  |
<!-- ProtofluxNode:end -->


### Host User

<!-- ProtofluxNode:start -->
| Host User | Type | Label |
| --- | ---- | ----- |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.HostUser |  |
<!-- ProtofluxNode:end -->


### Local User

<!-- ProtofluxNode:start -->
| Local User | Type | Label |
| --- | ---- | ----- |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUser |  |
<!-- ProtofluxNode:end -->


### Local User Root

<!-- ProtofluxNode:start -->
| Local User Root | Type | Label |
| --- | ---- | ----- |
| output | UserRoot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserRoot |  |
<!-- ProtofluxNode:end -->


### Local User Slot

<!-- ProtofluxNode:start -->
| Local User Slot | Type | Label |
| --- | ---- | ----- |
| output | Slot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSlot |  |
<!-- ProtofluxNode:end -->


### Local User Space

<!-- ProtofluxNode:start -->
| Local User Space | Type | Label |
| --- | ---- | ----- |
| output | Slot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSpace |  |
<!-- ProtofluxNode:end -->


### Set User Scale

<!-- ProtofluxNode:start -->
| Set User Scale | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnScaleChangeStart |
| input | UserRoot | UserRoot |
| output | Continuation | OnAnimationFinished |
| input | Single | Scale |
| input | Single | AnimationTime |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.SetUserScale |  |
<!-- ProtofluxNode:end -->


### User From ID

<!-- ProtofluxNode:start -->
| User From ID | Type | Label |
| --- | ---- | ----- |
| input | String | UserId |
| output | User | * |
| input | String | MachineId |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromID |  |
<!-- ProtofluxNode:end -->


### User From Username

<!-- ProtofluxNode:start -->
| User From Username | Type | Label |
| --- | ---- | ----- |
| input | String | Username |
| output | User | * |
| input | Boolean | IgnoreCase |
| input | Boolean | AllowPartialMatch |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromUsername |  |
<!-- ProtofluxNode:end -->


### User Machine ID

<!-- ProtofluxNode:start -->
| User Machine ID | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | String | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserMachineID |  |
<!-- ProtofluxNode:end -->


### User Root Slot

<!-- ProtofluxNode:start -->
| User Root Slot | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Slot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserRootSlot |  |
<!-- ProtofluxNode:end -->


### User User ID

<!-- ProtofluxNode:start -->
| User User ID | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | String | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserID |  |
<!-- ProtofluxNode:end -->


### User User Root

<!-- ProtofluxNode:start -->
| User User Root | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | UserRoot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserRoot |  |
<!-- ProtofluxNode:end -->


### User Username

<!-- ProtofluxNode:start -->
| User Username | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | String | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUsername |  |
<!-- ProtofluxNode:end -->


