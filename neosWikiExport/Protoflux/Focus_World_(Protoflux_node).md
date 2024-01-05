<languages></languages> <translate> The **Focus World** node focuses the
world corresponding to the input URL if it is already open.

## Inputs & Outputs

|       |              |         |
|-------|--------------|---------|
| Color | Label        | Type    |
|       | Focus        | Impulse |
|       | URL          | Uri     |
|       | CloseCurrent | Boolean |

Inputs

|       |          |         |
|-------|----------|---------|
| Color | Label    | Type    |
|       | NotFound | Impulse |
|       | Focused  | Impulse |

Outputs

## Usage

When an impulse is received at the Focus input, and a valid URL is
provided, the user is swapped to the world linked to the URL. This
requires that the user have the world open at the time. If the
CloseCurrent value is True (False by default) the world that the user
leaves is closed after the user changes focus. The current world will
only be closed if the user is not host of that world. This can result in
loss of unsaved changes! The form of URL required is that found in the
URL field of a world orb WorldOrb component.

## Examples

## Node Menu

</translate>

[Focus World](Category:Protoflux{{#translation:}} "wikilink") [Focus
World](Category:Protoflux:World{{#translation:}} "wikilink")