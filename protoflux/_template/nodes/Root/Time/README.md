<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Time

### 1/d T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedDeltaTime -->
<!-- ProtofluxNode:start -->
| 1/d T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedDeltaTime |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedDeltaTime -->


### D T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.DeltaTime -->
<!-- ProtofluxNode:start -->
| D T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.DeltaTime |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.DeltaTime -->


### Elapsed Time

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.ElapsedTimeFloat -->
<!-- ProtofluxNode:start -->
| Elapsed Time | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | Reset |
| output | Continuation | OnReset |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.ElapsedTimeFloat |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.ElapsedTimeFloat -->


### ÷d T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.DivDeltaTime`1 -->
<!-- ProtofluxNode:start -->
| ÷d T | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | T | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.DivDeltaTime`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.DivDeltaTime`1 -->


### *d T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.MulDeltaTime`1 -->
<!-- ProtofluxNode:start -->
| *d T | Type | Label |
| --- | ---- | ----- |
| input | T | A |
| output | T | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.MulDeltaTime`1 |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Operators.MulDeltaTime`1 -->


### From Unix Milliseconds

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixMilliseconds -->
<!-- ProtofluxNode:start -->
| From Unix Milliseconds | Type | Label |
| --- | ---- | ----- |
| input | Int64 | UnixMiliseconds |
| output | DateTime | * |
| input | Boolean | IsLocal |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixMilliseconds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixMilliseconds -->


### From Unix Seconds

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixSeconds -->
<!-- ProtofluxNode:start -->
| From Unix Seconds | Type | Label |
| --- | ---- | ----- |
| input | Int64 | UnixSeconds |
| output | DateTime | * |
| input | Boolean | IsLocal |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixSeconds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.FromUnixSeconds -->


### Smooth 1/d T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedSmoothDeltaTime -->
<!-- ProtofluxNode:start -->
| Smooth 1/d T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedSmoothDeltaTime |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.InvertedSmoothDeltaTime -->


### Smooth D T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.SmoothDeltaTime -->
<!-- ProtofluxNode:start -->
| Smooth D T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.SmoothDeltaTime |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.SmoothDeltaTime -->


### Stopwatch

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.Stopwatch -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.Stopwatch -->


### T

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeFloat -->
<!-- ProtofluxNode:start -->
| T | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeFloat |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeFloat -->


### T (double)

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeDouble -->
<!-- ProtofluxNode:start -->
| T (double) | Type | Label |
| --- | ---- | ----- |
| output | Double | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeDouble |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeDouble -->


### T*10

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime10Float -->
<!-- ProtofluxNode:start -->
| T*10 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime10Float |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime10Float -->


### T*2

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime2Float -->
<!-- ProtofluxNode:start -->
| T*2 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime2Float |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTime2Float -->


### T/10

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeTenthFloat -->
<!-- ProtofluxNode:start -->
| T/10 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeTenthFloat |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeTenthFloat -->


### T/2

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeHalfFloat -->
<!-- ProtofluxNode:start -->
| T/2 | Type | Label |
| --- | ---- | ----- |
| output | Single | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeHalfFloat |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Time.WorldTimeHalfFloat -->


### To Local Time

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToLocalTime -->
<!-- ProtofluxNode:start -->
| To Local Time | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | DateTime | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToLocalTime |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToLocalTime -->


### To Universal Time

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUniversalTime -->
<!-- ProtofluxNode:start -->
| To Universal Time | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | DateTime | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUniversalTime |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUniversalTime -->


### To Unix Milliseconds

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixMilliseconds -->
<!-- ProtofluxNode:start -->
| To Unix Milliseconds | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | Int64 | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixMilliseconds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixMilliseconds -->


### To Unix Seconds

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixSeconds -->
<!-- ProtofluxNode:start -->
| To Unix Seconds | Type | Label |
| --- | ---- | ----- |
| input | DateTime | DateTime |
| output | Int64 | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixSeconds |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.ToUnixSeconds -->


### Utc Now

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.UtcNow -->
<!-- ProtofluxNode:start -->
| Utc Now | Type | Label |
| --- | ---- | ----- |
| output | DateTime | * |
| Root/Time | ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.UtcNow |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.TimeAndDate.UtcNow -->


