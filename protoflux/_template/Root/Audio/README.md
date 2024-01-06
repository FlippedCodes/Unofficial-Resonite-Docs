<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Audio

### Play One Shot

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShot -->
<!-- ProtofluxNode:start -->
| Play One Shot | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | OnStartedPlaying |
| input | IAssetProvider_1 | Clip |
| output | AudioOutput | Audio |
| input | Single | Volume |
| input | Single | Speed |
| input | Boolean | Spatialize |
| input | Single | SpatialBlend |
| input | float3 | Point |
| input | Slot | Root |
| input | Boolean | ParentUnderRoot |
| input | Int32 | Priority |
| input | Single | Doppler |
| input | Single | MinDistance |
| input | Single | MaxDistance |
| input | AudioRolloffMode | Rolloff |
| input | AudioDistanceSpace | DistanceSpace |
| input | Single | MinScale |
| input | Single | MaxScale |
| input | AudioTypeGroup | Group |
| input | Boolean | LocalOnly |
| Root/Audio | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShot |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShot -->


### Play One Shot And Wait

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShotAndWait -->
<!-- ProtofluxNode:start -->
| Play One Shot And Wait | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnStartedPlaying |
| input | IAssetProvider_1 | Clip |
| output | Continuation | OnFinishedPlaying |
| input | Single | Volume |
| output | AudioOutput | Audio |
| input | Single | Speed |
| input | Boolean | Spatialize |
| input | Single | SpatialBlend |
| input | float3 | Point |
| input | Slot | Root |
| input | Boolean | ParentUnderRoot |
| input | Int32 | Priority |
| input | Single | Doppler |
| input | Single | MinDistance |
| input | Single | MaxDistance |
| input | AudioRolloffMode | Rolloff |
| input | AudioDistanceSpace | DistanceSpace |
| input | Single | MinScale |
| input | Single | MaxScale |
| input | AudioTypeGroup | Group |
| input | Boolean | LocalOnly |
| Root/Audio | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShotAndWait |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Audio.PlayOneShotAndWait -->


