<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Users

### Get Active User

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUser -->
<!-- ProtofluxNode:start -->
| Get Active User | Type | Label |
| --- | ---- | ----- |
| input | Slot | Instance |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUser |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUser -->


### Get Active User Self

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserSelf -->
<!-- ProtofluxNode:start -->
| Get Active User Self | Type | Label |
| --- | ---- | ----- |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserSelf |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Slots.GetActiveUserSelf -->


### Host User

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.HostUser -->
<!-- ProtofluxNode:start -->
| Host User | Type | Label |
| --- | ---- | ----- |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.HostUser |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.HostUser -->


### Local User

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUser -->
<!-- ProtofluxNode:start -->
| Local User | Type | Label |
| --- | ---- | ----- |
| output | User | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUser |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUser -->


### Local User Root

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserRoot -->
<!-- ProtofluxNode:start -->
| Local User Root | Type | Label |
| --- | ---- | ----- |
| output | UserRoot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserRoot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserRoot -->


### Local User Slot

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSlot -->
<!-- ProtofluxNode:start -->
| Local User Slot | Type | Label |
| --- | ---- | ----- |
| output | Slot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSlot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSlot -->


### Local User Space

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSpace -->
<!-- ProtofluxNode:start -->
| Local User Space | Type | Label |
| --- | ---- | ----- |
| output | Slot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSpace |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.LocalUserSpace -->


### Set User Scale

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.SetUserScale -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.SetUserScale -->


### User From ID

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromID -->
<!-- ProtofluxNode:start -->
| User From ID | Type | Label |
| --- | ---- | ----- |
| input | String | UserId |
| output | User | * |
| input | String | MachineId |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromID |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromID -->


### User From Username

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromUsername -->
<!-- ProtofluxNode:start -->
| User From Username | Type | Label |
| --- | ---- | ----- |
| input | String | Username |
| output | User | * |
| input | Boolean | IgnoreCase |
| input | Boolean | AllowPartialMatch |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromUsername |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserFromUsername -->


### User Machine ID

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserMachineID -->
<!-- ProtofluxNode:start -->
| User Machine ID | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | String | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserMachineID |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserMachineID -->


### User Root Slot

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserRootSlot -->
<!-- ProtofluxNode:start -->
| User Root Slot | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | Slot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserRootSlot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserRootSlot -->


### User User ID

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserID -->
<!-- ProtofluxNode:start -->
| User User ID | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | String | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserID |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserID -->


### User User Root

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserRoot -->
<!-- ProtofluxNode:start -->
| User User Root | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | UserRoot | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserRoot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUserRoot -->


### User Username

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUsername -->
<!-- ProtofluxNode:start -->
| User Username | Type | Label |
| --- | ---- | ----- |
| input | User | User |
| output | String | * |
| Root/Users | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUsername |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Users.UserUsername -->


