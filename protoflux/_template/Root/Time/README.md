<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Time

### 1/d T

<!-- ProtofluxNode:start -->
| 1/d T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedDeltaTime |  |
<!-- ProtofluxNode:end -->


### D T

<!-- ProtofluxNode:start -->
| D T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.DeltaTime |  |
<!-- ProtofluxNode:end -->


### Elapsed Time

<!-- ProtofluxNode:start -->
| Elapsed Time | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Reset |
| output | Continuation | OnReset |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.ElapsedTimeFloat |  |
<!-- ProtofluxNode:end -->


### ÷d T

<!-- ProtofluxNode:start -->
| ÷d T | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | T | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.DivDeltaTime\`1 |  |
<!-- ProtofluxNode:end -->


### *d T

<!-- ProtofluxNode:start -->
| *d T | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | T | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.MulDeltaTime\`1 |  |
<!-- ProtofluxNode:end -->


### From Unix Milliseconds

<!-- ProtofluxNode:start -->
| From Unix Milliseconds | Type | Label |
| --- | ---- | ----- |
| input | Int64 | UnixMiliseconds |
| output | DateTime | * |
| input | Boolean | IsLocal |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixMilliseconds |  |
<!-- ProtofluxNode:end -->


### From Unix Seconds

<!-- ProtofluxNode:start -->
| From Unix Seconds | Type | Label |
| --- | ---- | ----- |
| input | Int64 | UnixSeconds |
| output | DateTime | * |
| input | Boolean | IsLocal |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixSeconds |  |
<!-- ProtofluxNode:end -->


### Smooth 1/d T

<!-- ProtofluxNode:start -->
| Smooth 1/d T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedSmoothDeltaTime |  |
<!-- ProtofluxNode:end -->


### Smooth D T

<!-- ProtofluxNode:start -->
| Smooth D T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.SmoothDeltaTime |  |
<!-- ProtofluxNode:end -->


### Stopwatch

<!-- ProtofluxNode:start -->
| Stopwatch | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Start |
| output | Continuation | OnStart |
| input | SyncOperation | Stop |
| output | Continuation | OnStop |
| input | SyncOperation | Reset |
| output | Continuation | OnReset |
| output | Single | Time |
| output | Boolean | IsRunning |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.Stopwatch |  |
<!-- ProtofluxNode:end -->


### T

<!-- ProtofluxNode:start -->
| T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeFloat |  |
<!-- ProtofluxNode:end -->


### T (double)

<!-- ProtofluxNode:start -->
| T (double) | Type | Label |
| --- | ---- | ----- |
| output | Double | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeDouble |  |
<!-- ProtofluxNode:end -->


### T*10

<!-- ProtofluxNode:start -->
| T*10 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime10Float |  |
<!-- ProtofluxNode:end -->


### T*2

<!-- ProtofluxNode:start -->
| T*2 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime2Float |  |
<!-- ProtofluxNode:end -->


### T/10

<!-- ProtofluxNode:start -->
| T/10 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeTenthFloat |  |
<!-- ProtofluxNode:end -->


### T/2

<!-- ProtofluxNode:start -->
| T/2 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeHalfFloat |  |
<!-- ProtofluxNode:end -->


### To Local Time

<!-- ProtofluxNode:start -->
| To Local Time | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | DateTime | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToLocalTime |  |
<!-- ProtofluxNode:end -->


### To Universal Time

<!-- ProtofluxNode:start -->
| To Universal Time | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | DateTime | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUniversalTime |  |
<!-- ProtofluxNode:end -->


### To Unix Milliseconds

<!-- ProtofluxNode:start -->
| To Unix Milliseconds | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | Int64 | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixMilliseconds |  |
<!-- ProtofluxNode:end -->


### To Unix Seconds

<!-- ProtofluxNode:start -->
| To Unix Seconds | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | Int64 | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixSeconds |  |
<!-- ProtofluxNode:end -->


### Utc Now

<!-- ProtofluxNode:start -->
| Utc Now | Type | Label |
| --- | ---- | ----- |
| output | DateTime | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.UtcNow |  |
<!-- ProtofluxNode:end -->


