<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Assets

### Attach Audio Clip

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachAudioClip -->
<!-- ProtofluxNode:start -->
| Attach Audio Clip | Type                                                                  | Label            |
| ----------------- | --------------------------------------------------------------------- | ---------------- |
| input             | SyncOperation                                                         | *                |
| output            | Continuation                                                          | Next             |
| input             | Uri                                                                   | URL              |
| output            | StaticAudioClip                                                       | AttachedProvider |
| input             | Slot                                                                  | Target           |
| input             | Boolean                                                               | GetExisting      |
| Root/Assets       | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachAudioClip |                  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachAudioClip -->


### Attach Mesh

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachMesh -->
<!-- ProtofluxNode:start -->
| Attach Mesh | Type                                                             | Label            |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| input       | SyncOperation                                                    | *                |
| output      | Continuation                                                     | Next             |
| input       | Uri                                                              | URL              |
| output      | StaticMesh                                                       | AttachedProvider |
| input       | Slot                                                             | Target           |
| input       | Boolean                                                          | GetExisting      |
| Root/Assets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachMesh |                  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachMesh -->


### Attach Sprite

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachSprite -->
<!-- ProtofluxNode:start -->
| Attach Sprite | Type                                                               | Label            |
| ------------- | ------------------------------------------------------------------ | ---------------- |
| input         | SyncOperation                                                      | *                |
| output        | Continuation                                                       | Next             |
| input         | Uri                                                                | URL              |
| output        | SpriteProvider                                                     | AttachedProvider |
| input         | Slot                                                               | Target           |
| input         | Boolean                                                            | GetExisting      |
| Root/Assets   | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachSprite |                  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachSprite -->


### Attach Texture 2D

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachTexture2D -->
<!-- ProtofluxNode:start -->
| Attach Texture 2D | Type                                                                  | Label            |
| ----------------- | --------------------------------------------------------------------- | ---------------- |
| input             | SyncOperation                                                         | *                |
| output            | Continuation                                                          | Next             |
| input             | Uri                                                                   | URL              |
| output            | StaticTexture2D                                                       | AttachedProvider |
| input             | Slot                                                                  | Target           |
| input             | Boolean                                                               | GetExisting      |
| Root/Assets       | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachTexture2D |                  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachTexture2D -->


### Bake Meshes

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.BakeMeshes -->
<!-- ProtofluxNode:start -->
| Bake Meshes | Type                                                             | Label             |
| ----------- | ---------------------------------------------------------------- | ----------------- |
| input       | AsyncOperation                                                   | *                 |
| output      | AsyncCall                                                        | OnBakeStarted     |
| input       | Slot                                                             | Root              |
| output      | Continuation                                                     | OnBaked           |
| input       | Boolean                                                          | SkinnedMeshMode   |
| output      | Slot                                                             | BakedRoot         |
| input       | Boolean                                                          | IncludeInactive   |
| input       | Boolean                                                          | DestroyOriginal   |
| input       | Slot                                                             | AssetsSlot        |
| input       | ComponentHandling                                                | GrabbableHandling |
| input       | ComponentHandling                                                | ColliderHandling  |
| input       | Boolean                                                          | Undoable          |
| Root/Assets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.BakeMeshes |                   |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.BakeMeshes -->


### Asset Load Progress

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AssetLoadProgress`1 -->
<!-- ProtofluxNode:start -->
| Asset Load Progress | Type                                                                      | Label            |
| ------------------- | ------------------------------------------------------------------------- | ---------------- |
| input               | UsersAssetLoadProgress_1                                                  | Tracker          |
| output              | Nullable_1                                                                | DownloadProgress |
| input               | User                                                                      | User             |
| output              | AssetLoadState                                                            | LoadState        |
| Root/Assets         | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AssetLoadProgress`1 |                  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AssetLoadProgress`1 -->


### Find Animation Track Index

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.FindAnimationTrackIndex -->
<!-- ProtofluxNode:start -->
| Find Animation Track Index | Type                                                                          | Label     |
| -------------------------- | ----------------------------------------------------------------------------- | --------- |
| input                      | Animation                                                                     | Animation |
| output                     | Int32                                                                         | *         |
| input                      | String                                                                        | Node      |
| input                      | String                                                                        | Property  |
| Root/Assets                | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.FindAnimationTrackIndex |           |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.FindAnimationTrackIndex -->


### Get Asset`1

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetAsset`1 -->
<!-- ProtofluxNode:start -->
| Get Asset`1 | Type                                                             | Label    |
| ----------- | ---------------------------------------------------------------- | -------- |
| input       | IAssetProvider_1                                                 | Provider |
| output      | A                                                                | *        |
| Root/Assets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetAsset`1 |          |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetAsset`1 -->


### Get Texture  2D Pixel

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetTexture2D_Pixel -->
<!-- ProtofluxNode:start -->
| Get Texture  2D Pixel | Type                                                                     | Label    |
| --------------------- | ------------------------------------------------------------------------ | -------- |
| input                 | Texture2D                                                                | Texture  |
| output                | colorX                                                                   | *        |
| input                 | int2                                                                     | Position |
| input                 | Int32                                                                    | MipLevel |
| Root/Assets           | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetTexture2D_Pixel |          |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetTexture2D_Pixel -->


### Get Texture  3D Pixel

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetTexture3D_Pixel -->
<!-- ProtofluxNode:start -->
| Get Texture  3D Pixel | Type                                                                     | Label    |
| --------------------- | ------------------------------------------------------------------------ | -------- |
| input                 | Texture3D                                                                | Texture  |
| output                | colorX                                                                   | *        |
| input                 | int3                                                                     | Position |
| input                 | Int32                                                                    | MipLevel |
| Root/Assets           | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetTexture3D_Pixel |          |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.GetTexture3D_Pixel -->


### Sample Object Animation Track`1

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleObjectAnimationTrack`1 -->
<!-- ProtofluxNode:start -->
| Sample Object Animation Track`1 | Type                                                                               | Label      |
| ------------------------------- | ---------------------------------------------------------------------------------- | ---------- |
| input                           | Animation                                                                          | Animation  |
| output                          | T                                                                                  | *          |
| input                           | Int32                                                                              | TrackIndex |
| input                           | Single                                                                             | Time       |
| Root/Assets                     | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleObjectAnimationTrack`1 |            |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleObjectAnimationTrack`1 -->


### Sample Texture  2D UV

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleTexture2D_UV -->
<!-- ProtofluxNode:start -->
| Sample Texture  2D UV | Type                                                                     | Label    |
| --------------------- | ------------------------------------------------------------------------ | -------- |
| input                 | Texture2D                                                                | Texture  |
| output                | colorX                                                                   | *        |
| input                 | float2                                                                   | UV       |
| input                 | WrapMode                                                                 | WrapMode |
| Root/Assets           | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleTexture2D_UV |          |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleTexture2D_UV -->


### Sample Texture  2D UVW

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleTexture3D_UVW -->
<!-- ProtofluxNode:start -->
| Sample Texture  2D UVW | Type                                                                      | Label   |
| ---------------------- | ------------------------------------------------------------------------- | ------- |
| input                  | Texture3D                                                                 | Texture |
| output                 | colorX                                                                    | *       |
| input                  | float3                                                                    | UVW     |
| Root/Assets            | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleTexture3D_UVW |         |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleTexture3D_UVW -->


### Sample Value Animation Track`1

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleValueAnimationTrack`1 -->
<!-- ProtofluxNode:start -->
| Sample Value Animation Track`1 | Type                                                                              | Label      |
| ------------------------------ | --------------------------------------------------------------------------------- | ---------- |
| input                          | Animation                                                                         | Animation  |
| output                         | T                                                                                 | *          |
| input                          | Int32                                                                             | TrackIndex |
| input                          | Single                                                                            | Time       |
| Root/Assets                    | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleValueAnimationTrack`1 |            |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.SampleValueAnimationTrack`1 -->


### Texture  2D Format

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.Texture2D_Format -->
<!-- ProtofluxNode:start -->
| Texture  2D Format | Type                                                                   | Label       |
| ------------------ | ---------------------------------------------------------------------- | ----------- |
| input              | Texture2D                                                              | Texture     |
| output             | int2                                                                   | Size        |
| output             | TextureFormat                                                          | Format      |
| output             | Int32                                                                  | MipMapCount |
| Root/Assets        | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.Texture2D_Format |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.Texture2D_Format -->


### Texture  3D Format

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.Texture3D_Format -->
<!-- ProtofluxNode:start -->
| Texture  3D Format | Type                                                                   | Label       |
| ------------------ | ---------------------------------------------------------------------- | ----------- |
| input              | Texture3D                                                              | Texture     |
| output             | int3                                                                   | Size        |
| output             | TextureFormat                                                          | Format      |
| output             | Int32                                                                  | MipMapCount |
| Root/Assets        | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.Texture3D_Format |             |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.Texture3D_Format -->


