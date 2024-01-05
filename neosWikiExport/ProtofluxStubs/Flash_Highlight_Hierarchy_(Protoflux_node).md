<languages></languages> <translate>

The **Flash Highlight Hierarchy** node temporarily highlights objects
under the target `HierarchyRoot` when an impulse is received at `Flash`.

## Usage

The `ExcludeColliders` input determines whether collider components are
excluded from being highlighted. Default is false (i.e colliders will be
highlighted).

The `ExcludeMeshes` input determines whether meshes referenced by
[MeshRenderers](MeshRenderer_(Component) "wikilink") or
[SkinnedMeshRenderers](SkinnedMeshRenderer_(Component) "wikilink") are
excluded from being highlighted. Default is false (i.e. meshes will be
highlighted).

The `ExcludeDisabled` input determines whether deactived collider or
renderer components will be excluded from being highlighted. If this
input is true, disabled components (or ones under inactive slot
hierarches) will not be highlighted. Default is false (i.e. everything
will be highlighted).

The `Duration` input controls how long the highlight visual will persist
in seconds. Default is 0.5 seconds.

The `Color` input controls the color of the highlight visual. Default is
white.

The `OnDone` output fires an impulse when the target hierarchy has been
highlighted after an impulse was received at `Flash`. An impulse will be
fired as long as a valid </code>HierarchyRoot</code> is available,
regardless of whether any highlight visual was actually displayed.

The `FlashRoot` output provides the new slot on which the components
required for the highlight visual are placed. This is only available for
the duration of the impulse chain starting from `OnDone`

The highilght visual is produced by spawning a non-persistent slot under
the world root called HighlightFlash. This contains an
OverlapFresnelMaterial and several Tween<color> components. The material
corresponds to the highlight color and the tweens control how the color
changes over the duration of the effect.

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Flash
Highlight Hierarchy](Category:Protoflux{{#translation:}} "wikilink")
[Flash Highlight
Hierarchy](Category:Protoflux:Visualization{{#translation:}} "wikilink")