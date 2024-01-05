<languages></languages> <translate>

The **Attach Sprite** node creates a StaticTexture2D component on the
`Target` slot and fills the component's URL field with the input `URL`.
A SpriteProvider component is also created whose Texture field is filled
with a reference to the newly created StaticTexture2D component.

## Usage

If the `GetExisting` input is True this will not produce components
which are exact duplicates of existing ones currently under the slot
(i.e. the existing component's URL field is identical to the node's
`URL` input). The input `URL` should be for a 2D image asset.

The newly attached SpriteProvider component is available from the
`AttachedProvider` output for the duration of the impulse chain started
by `OnAttached`.

## Examples

## Node Menu

</translate> }}

[Attach Sprite](Category:Protoflux{{#translation:}} "wikilink") [Attach
Sprite](Category:Protoflux:Assets{{#translation:}} "wikilink")