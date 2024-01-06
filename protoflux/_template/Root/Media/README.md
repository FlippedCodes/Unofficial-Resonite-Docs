<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Media

### Clip Length

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ClipLengthFloat -->
<!-- ProtofluxNode:start -->
| Clip Length | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ClipLengthFloat |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ClipLengthFloat -->


### Is Looped

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsLooped -->
<!-- ProtofluxNode:start -->
| Is Looped | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Boolean | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsLooped |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsLooped -->


### Is Playing

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsPlaying -->
<!-- ProtofluxNode:start -->
| Is Playing | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Boolean | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsPlaying |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsPlaying -->


### Normalized Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.NormalizedPosition -->
<!-- ProtofluxNode:start -->
| Normalized Position | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.NormalizedPosition |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.NormalizedPosition -->


### Pause

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Pause -->
<!-- ProtofluxNode:start -->
| Pause | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Pause |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Pause -->


### Play

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Play -->
<!-- ProtofluxNode:start -->
| Play | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Play |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Play -->


### Play And Wait

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlayAndWait -->
<!-- ProtofluxNode:start -->
| Play And Wait | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnStarted |
| input | IPlayable | Target |
| output | Continuation | OnPlaybackFinished |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlayAndWait |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlayAndWait -->


### Playback Drive

<!-- embed:start:FrooxEngine.ProtoFlux.CoreNodes.PlaybackDrive -->
<!-- ProtofluxNode:start -->
| Playback Drive | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | StartDrive |
| output | Continuation | OnStartDrive |
| input | SyncOperation | StopDrive |
| output | Continuation | OnStopDrive |
| input | SyncOperation | ForceResync |
| output | Continuation | OnResync |
| input | SyncPlayback | Target |
| output | Boolean | IsDriving |
| input | Single | NormalizedPosition |
| input | Single | MaximumPositionError |
| input | Single | Speed |
| input | Boolean | Play |
| input | Boolean | Loop |
| Root/Media | FrooxEngine.ProtoFlux.CoreNodes.PlaybackDrive |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:FrooxEngine.ProtoFlux.CoreNodes.PlaybackDrive -->


### Playback State

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlaybackState -->
<!-- ProtofluxNode:start -->
| Playback State | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Boolean | IsPlaying |
| output | Boolean | Loop |
| output | Single | Position |
| output | Single | NormalizedPosition |
| output | Single | ClipLength |
| output | Single | Speed |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlaybackState |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlaybackState -->


### Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Position -->
<!-- ProtofluxNode:start -->
| Position | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Position |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Position -->


### Resume

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Resume -->
<!-- ProtofluxNode:start -->
| Resume | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Resume |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Resume -->


### Set Loop

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetLoop -->
<!-- ProtofluxNode:start -->
| Set Loop | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Boolean | Loop |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetLoop |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetLoop -->


### Set Normalized Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetNormalizedPosition -->
<!-- ProtofluxNode:start -->
| Set Normalized Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | NormalizedPosition |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetNormalizedPosition |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetNormalizedPosition -->


### Set Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetPosition -->
<!-- ProtofluxNode:start -->
| Set Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | Position |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetPosition |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetPosition -->


### Set Speed

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetSpeed -->
<!-- ProtofluxNode:start -->
| Set Speed | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | Speed |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetSpeed |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetSpeed -->


### Shift Position

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ShiftPosition -->
<!-- ProtofluxNode:start -->
| Shift Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | Delta |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ShiftPosition |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ShiftPosition -->


### Speed

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Speed -->
<!-- ProtofluxNode:start -->
| Speed | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Speed |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Speed -->


### Stop

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Stop -->
<!-- ProtofluxNode:start -->
| Stop | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Stop |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Stop -->


### Toggle

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Toggle -->
<!-- ProtofluxNode:start -->
| Toggle | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Toggle |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Toggle -->


### Wait

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Wait -->
<!-- ProtofluxNode:start -->
| Wait | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnWaitBegin |
| input | IPlayable | Target |
| output | Continuation | OnPlaybackFinished |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Wait |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Wait -->


