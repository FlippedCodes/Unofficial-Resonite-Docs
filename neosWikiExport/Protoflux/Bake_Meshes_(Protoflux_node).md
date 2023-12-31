<languages></languages> <translate>

The **Bake Meshes** node creates a new single mesh as a combination of
all meshes under the `Root` input slot's hierarchy. Specific behaviour
depends significantly on the input values, see
[Usage](#Usage "wikilink").

## Usage

When an impulse is received at `Bake`, and with all default bool inputs,
this node creates a new slot whose name is the name of the original
`Root` input slot with " - Baked" appended. This slot contains
[`MeshRenderer`](MeshRenderer "wikilink"),
[`Grabbable`](Grabbable "wikilink"), and
[`MeshCollider`](MeshCollider "wikilink") components. The `MeshRenderer`
and `MeshCollider` components' Mesh field is filled with a reference to
the newly baked mesh. This is a combination of all meshes previously
referenced by enabled `MeshRenderer`/`SkinnedMeshRenderer` components
under any active slots under the input `Root` slot's hierarchy. The
`MeshRenderer` component contains references to the materials previously
present on the individual meshes; if these are subsequently changed, the
changes only affect the part of the baked mesh which was originally
affected by the changed material.

If the `IncludeInactive` input is True (False by default) the baked mesh
will also include any meshes on inactive slots under the input Root
slot's hierarchy. Inactive meshes will be visible in the final baked
mesh.

If the `Undoable` input is True (False by default), the baking event can
be undone using the Undo button on the radial context menu.

If the `DestroyOriginal` input is False (True by default) the original
`Root` input slot (and all of its children) is not destroyed after
baking.

It is recommended to take care with the `Undoable` and `DestroyOriginal`
options, *by default this node will destroy the </code>Root</code> slot,
along with its children, in an event which cannot be undone!*. It is
also important to consider the number of triangles which the eventual
baked mesh will contain - MeshColliders for high-poly meshes can impose
a significant performance cost.

## Examples

## Node Menu

</translate>

}}

[Bake Meshes](Category:Protoflux{{#translation:}} "wikilink") [Bake
Meshs](Category:Protoflux:Assets{{#translation:}} "wikilink")