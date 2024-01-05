<languages></languages> <translate> The **Open World** node starts a new
session for the world corresponding to the URL input.

## Inputs & Outputs

|       |                  |               |
|-------|------------------|---------------|
| Color | Label            | Type          |
|       | Open             | Impulse       |
|       | URL              | Uri           |
|       | Relation         | WorldRelation |
|       | GetExisting      | Boolean       |
|       | LoadingIndicator | Boolean       |
|       | AutoFocus        | Boolean       |
|       | MakePrivate      | Boolean       |

Inputs

|       |              |         |
|-------|--------------|---------|
| Color | Label        | Type    |
|       | OnOpenStart  | Impulse |
|       | OnOpenDone   | Impulse |
|       | OnWorldReady | Impulse |
|       | OnOpenFail   | Impulse |
|       | SessionURL   | Uri     |
|       | SessionId    | String  |

Outputs

## Usage

When an impulse is received at the Open input this node starts a new
session of the world corresponding to the input URL. The correct form of
URL is that found under the URL field of a world orb WorldOrb component.
If successful, the opened world will be focused for the user unless
AutoFocus is False (True by default). A new session will be started,
even if the user is already present in a session of that world, if
GetExisting is False (True by default). The usual loading indicator will
show while the world loads unless LoadingIndicator is False (True by
default). If MakePrivate is True the world access level is set to
private (i.e. only invited users can join) (False by default). If the
enum WorldRelation input is 'Replace' the newly opened world will be
focused for the user and the old world will be closed without saving if
they have the priviledges to do so - this will override AutoFocus =
False - and it only closes the old world if you are not the host.

When the OnWorldReady impulse fires, the SessionURL and SessionId
outputs provide their respective values only for the duration of time
taken for any impulse chain initiated by OnWorldReady to complete.

## Examples

## Node Menu

</translate>

[Open World](Category:Protoflux{{#translation:}} "wikilink") [Open
World](Category:Protoflux:World{{#translation:}} "wikilink")