<languages></languages>

## Intoduction

The **SkinnedMeshRenderer** component is used for rendering
animated/dynamic 3D meshes in the world, and applying materials to that
mesh.

## Usage

## Behavior

While it *can* be used for rendering static meshes, it is **not
recommended** as there is a slight performance penalty for using
SkinnedMeshRenderer, even if the animation features aren't used — Please
try to use [MeshRenderer](MeshRenderer_(Component) "wikilink") where
possible.

### Special Functions

| Custom UI Elements                               |
|--------------------------------------------------|
| Name                                             |
| Split into separate meshes by material           |
| Merge submeshes with same material               |
| Separate parts of mesh unaffected by blendshapes |
| Strip empty blendshapes                          |
| Strip empty bones                                |
| Visualize bone bounding boxes                    |
| Visualize approximate merged bone sphere bounds  |
| Remove bone bounding box visuals                 |
|                                                  |

## Examples

## Related Components

[SkinnedMeshRenderer
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[SkinnedMeshRenderer
(Component){{#translation:}}](Category:Components:Rendering{{#translation:}} "wikilink")