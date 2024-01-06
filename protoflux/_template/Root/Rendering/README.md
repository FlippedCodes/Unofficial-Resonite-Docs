<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Rendering

### Bake Reflection Probe

<!-- ProtofluxNode:start -->
| Bake Reflection Probe | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnBakeStart |
| input | ReflectionProbe | Probe |
| output | Continuation | OnBakeFail |
| output | Continuation | OnBakeComplete |
| output | Uri | BakedCubemapURL |
| Root/Rendering | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Rendering.BakeReflectionProbe |  |
<!-- ProtofluxNode:end -->


### Bake Reflection Probes

<!-- ProtofluxNode:start -->
| Bake Reflection Probes | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnBakeBatchStart |
| input | Slot | Root |
| output | AsyncCall | OnBeforeProbeBake |
| input | Boolean | BakeInactive |
| output | AsyncCall | OnProbeBaked |
| input | String | FilterWithTag |
| output | Continuation | OnBakeBatchFinished |
| input | Single | DelayBeforeBake |
| output | ReflectionProbe | Probe |
| output | Int32 | ProbeIndex |
| output | Int32 | ProbeCount |
| Root/Rendering | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Rendering.BakeReflectionProbes |  |
<!-- ProtofluxNode:end -->


### Flash Highlight Hierarchy

<!-- ProtofluxNode:start -->
| Flash Highlight Hierarchy | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | Slot | HierarchyRoot |
| output | Slot | FlashRoot |
| input | Boolean | ExcludeColliders |
| input | Boolean | ExcludeMeshes |
| input | Boolean | ExcludeDisabled |
| input | Boolean | TrackPosition |
| input | Single | Duration |
| input | colorX | Color |
| Root/Rendering | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Rendering.FlashHighlightHierarchy |  |
<!-- ProtofluxNode:end -->


### Render To Texture Asset

<!-- ProtofluxNode:start -->
| Render To Texture Asset | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnRenderStarted |
| input | Camera | Camera |
| output | Continuation | OnRendered |
| input | int2 | Resolution |
| output | Continuation | OnFailed |
| input | String | Format |
| output | Uri | RenderedAssetURL |
| input | Int32 | Quality |
| Root/Rendering | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Rendering.RenderToTextureAsset |  |
<!-- ProtofluxNode:end -->


### Sample Color X

<!-- ProtofluxNode:start -->
| Sample Color X | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnSampleStart |
| input | float3 | Point |
| output | Continuation | OnSampled |
| input | float3 | Direction |
| output | colorX | SampledColor |
| input | Slot | Reference |
| input | Single | NearClip |
| input | Single | FarClip |
| Root/Rendering | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Rendering.SampleColorX |  |
<!-- ProtofluxNode:end -->


