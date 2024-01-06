<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Media

### Clip Length

<!-- ProtofluxNode:start -->
| Clip Length | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ClipLengthFloat |  |
<!-- ProtofluxNode:end -->


### Is Looped

<!-- ProtofluxNode:start -->
| Is Looped | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Boolean | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsLooped |  |
<!-- ProtofluxNode:end -->


### Is Playing

<!-- ProtofluxNode:start -->
| Is Playing | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Boolean | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.IsPlaying |  |
<!-- ProtofluxNode:end -->


### Normalized Position

<!-- ProtofluxNode:start -->
| Normalized Position | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.NormalizedPosition |  |
<!-- ProtofluxNode:end -->


### Pause

<!-- ProtofluxNode:start -->
| Pause | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Pause |  |
<!-- ProtofluxNode:end -->


### Play

<!-- ProtofluxNode:start -->
| Play | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Play |  |
<!-- ProtofluxNode:end -->


### Play And Wait

<!-- ProtofluxNode:start -->
| Play And Wait | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnStarted |
| input | IPlayable | Target |
| output | Continuation | OnPlaybackFinished |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.PlayAndWait |  |
<!-- ProtofluxNode:end -->


### Playback Drive

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


### Playback State

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


### Position

<!-- ProtofluxNode:start -->
| Position | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Position |  |
<!-- ProtofluxNode:end -->


### Resume

<!-- ProtofluxNode:start -->
| Resume | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Resume |  |
<!-- ProtofluxNode:end -->


### Set Loop

<!-- ProtofluxNode:start -->
| Set Loop | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Boolean | Loop |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetLoop |  |
<!-- ProtofluxNode:end -->


### Set Normalized Position

<!-- ProtofluxNode:start -->
| Set Normalized Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | NormalizedPosition |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetNormalizedPosition |  |
<!-- ProtofluxNode:end -->


### Set Position

<!-- ProtofluxNode:start -->
| Set Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | Position |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetPosition |  |
<!-- ProtofluxNode:end -->


### Set Speed

<!-- ProtofluxNode:start -->
| Set Speed | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | Speed |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.SetSpeed |  |
<!-- ProtofluxNode:end -->


### Shift Position

<!-- ProtofluxNode:start -->
| Shift Position | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| input | Single | Delta |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.ShiftPosition |  |
<!-- ProtofluxNode:end -->


### Speed

<!-- ProtofluxNode:start -->
| Speed | Type | Label |
| --- | ---- | ----- |
| input | IPlayable | Source |
| output | Single | * |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Speed |  |
<!-- ProtofluxNode:end -->


### Stop

<!-- ProtofluxNode:start -->
| Stop | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Stop |  |
<!-- ProtofluxNode:end -->


### Toggle

<!-- ProtofluxNode:start -->
| Toggle | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | IPlayable | Target |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Toggle |  |
<!-- ProtofluxNode:end -->


### Wait

<!-- ProtofluxNode:start -->
| Wait | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnWaitBegin |
| input | IPlayable | Target |
| output | Continuation | OnPlaybackFinished |
| Root/Media | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Playback.Wait |  |
<!-- ProtofluxNode:end -->


