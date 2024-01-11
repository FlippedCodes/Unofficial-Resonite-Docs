# Assets

<!-- panels:start -->
<!-- div:title-panel -->
<!-- ## Audio Clip -->

<!-- div:right-panel -->
<!-- you can get the right directory from "allNodes.md" -->
<!-- [Node](-/protoflux/_template/nodes/Root/Assets/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachAudioClip ':include') -->

<!-- div:left-panel -->
<!-- The **Audio Clip** node stores a reference to a an audio file for use with [Play One Shot (Protoflux node)](Play_One_Shot_(Protoflux_node) "wikilink") and [Play One Shot & Wait (Protoflux node)](Play_One_Shot_&_Wait_(Protoflux_node) "wikilink").

### Usage

The easiest way to store a reference to an audio clip with this node is to grab an audio player orb and release while the laser is hovering over the Audio Clip Input node - essentially "drag and drop". If the node has a reference stored it will display the clip name on the node's visual. -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Attach Audio Clip

<!-- div:right-panel -->
<!-- TODO: Import broken -->
<!-- [Node](-/protoflux/_template/nodes/Root/Assets/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachAudioClip ':include') -->

<!-- div:left-panel -->
The **Attach Audio Clip** node creates an AudioClipProvider component on the `Target` slot and fills the component's URL field with the input `URL`.

### Usage

If the `GetExisting` input is True this will not produce components which are exact duplicates of existing ones currently under the slot (i.e. the existing component's URL field is identical to the node's `URL` input).

The newly attached StaticAudioClip component is available from the `AttachedProvider` output for the duration of the impulse chain started by `OnAttached`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Attach Mesh

<!-- div:right-panel -->
<!-- you can get the right directory from "allNodes.md" -->
[Node](-/protoflux/_template/nodes/Root/Assets/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachMesh ':include')

<!-- div:left-panel -->
The **Attach Mesh** node creates a StaticMesh component under the `Target` slot and fills the component's URL field with the input `URL`.

### Usage

If the `GetExisting` input is True this will not produce components which are exact duplicates of existing ones currently under the slot (i.e. the existing component's URL field is identical to the node's `URL` input).

The newly attached StaticMesh component is available from the `AttachedProvider` output for the duration of the impulse chain started by `OnAttached`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Attach Sprite

<!-- div:right-panel -->
<!-- you can get the right directory from "allNodes.md" -->
[Node](-/protoflux/_template/nodes/Root/Assets/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachSprite ':include')

<!-- div:left-panel -->
The **Attach Sprite** node creates a StaticTexture2D component on the `Target` slot and fills the component's URL field with the input `URL`. A SpriteProvider component is also created whose Texture field is filled with a reference to the newly created StaticTexture2D component.

### Usage

If the `GetExisting` input is True this will not produce components which are exact duplicates of existing ones currently under the slot (i.e. the existing component's URL field is identical to the node's `URL` input). The input `URL` should be for a 2D image asset.

The newly attached SpriteProvider component is available from the `AttachedProvider` output for the duration of the impulse chain started by `OnAttached`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Attach Texture 2D

<!-- div:right-panel -->
<!-- you can get the right directory from "allNodes.md" -->
[Node](-/protoflux/_template/nodes/Root/Assets/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.AttachTexture2D ':include')

<!-- div:left-panel -->
The **Attach Texture 2D** node creates a StaticTexture2D component under the `Target` slot and fills the component's URL field with the input `URL`.

### Usage

If the `GetExisting` input is True this will not produce components which are exact duplicates of existing ones currently under the slot (i.e. the existing component's URL field is identical to the node's `URL` input).

The newly attached StaticTexture2D component is available from the `AttachedProvider` output for the duration of the impulse chain started by `OnAttached`.
<!-- panels:end -->

<!-- panels:start -->
<!-- div:title-panel -->
## Bake Meshes

<!-- div:right-panel -->
<!-- you can get the right directory from "allNodes.md" -->
[Node](-/protoflux/_template/nodes/Root/Assets/README.md#ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Assets.BakeMeshes ':include')

<!-- div:left-panel -->
The **Bake Meshes** node creates a new single mesh as a combination of all meshes under the `Root` input slot's hierarchy. Specific behaviour depends significantly on the input values, see
[Usage](#Usage "wikilink").

### Usage

When an impulse is received at `Bake`, and with all default bool inputs, this node creates a new slot whose name is the name of the original `Root` input slot with " - Baked" appended. This slot contains [`MeshRenderer`](MeshRenderer "wikilink"), [`Grabbable`](Grabbable "wikilink"), and [`MeshCollider`](MeshCollider "wikilink") components. The `MeshRenderer` and `MeshCollider` components' Mesh field is filled with a reference to the newly baked mesh. This is a combination of all meshes previously referenced by enabled `MeshRenderer`/`SkinnedMeshRenderer` components under any active slots under the input `Root` slot's hierarchy. The `MeshRenderer` component contains references to the materials previously present on the individual meshes; if these are subsequently changed, the changes only affect the part of the baked mesh which was originally affected by the changed material.

If the `IncludeInactive` input is True (False by default) the baked mesh will also include any meshes on inactive slots under the input Root slot's hierarchy. Inactive meshes will be visible in the final baked mesh.

If the `Undoable` input is True (False by default), the baking event can be undone using the Undo button on the radial context menu.

If the `DestroyOriginal` input is False (True by default) the original `Root` input slot (and all of its children) is not destroyed after baking.

> [!Attention]
> It is recommended to take care with the `Undoable` and `DestroyOriginal` options, by default this node will destroy the `Root` slot, along with its children, in an event which cannot be undone!

It is also important to consider the number of triangles which the eventual baked mesh will contain - MeshColliders for high-poly meshes can impose a significant performance cost.
<!-- panels:end -->

#### Page end
