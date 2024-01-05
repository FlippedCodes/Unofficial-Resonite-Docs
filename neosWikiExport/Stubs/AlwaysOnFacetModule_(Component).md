<languages></languages> <translate>

## Intoduction

## Usage

## Behavior

This component only applies to [Facets](Facets "wikilink").

When a [facet](facet "wikilink") is installed in a
[dashboard](dashboard "wikilink"), all of the children of a slot
containing a AlwaysOnFacetModule are reparented to a
[slot](slot "wikilink") outside of the dashboard. This slot is active
when the [dashboard](dashboard "wikilink") is closed, otherwise the
facet is inactive due to being under an inactive
[slot](slot "wikilink").

Do not manually modify the _targets list, as it is managed during the
normal lifetime of the component. Manually modifying the list may cause
unexpected behavior.

This will change the hierarchy of the [facet](facet "wikilink"), if you
rely on your facet using [dynamic
variables](dynamic_variables "wikilink") they may disconnect due to
reparenting (many parts of facets are re-parented, be warned).

Avoid putting this above the [UIX elements](UIX_elements "wikilink") of
the [facet](facet "wikilink"), as it will reparent them and they will no
longer show up or may break the canvas.

## Examples

For creating a taco facet that reports live taco statistics from a
websocket, and plays an audio clip when a new taco deal is available. In
this example the websocket and audio output are active sensitive, and
will not work when the dashboard is closed without an
AlwaysOnFacetModule.

` Taco Facet`
`   Canvas - (Having the same name helps when debugging)`
`     Background and Taco pictures`
`   Logic - (with AlwaysOnFacetModule)`
`     Taco Facet Logic - (Having the same name helps when debugging)`
`       Protoflux, websockets, audio, and other active sensitive content`

When installed, the facet is pulled apart into the following, the exact
hierarchy is prone to change but this is the general structure.

` Dashboard Root`
`   AlwaysOnFacetRoot`
`     Taco Facet Logic`
`   DashOffset`
`     ...Many other slots, some of which go inactive when the dashboard is closed...`
`       Facets`
`         Taco Facet`
`           Canvas`
`             Background and Taco pictures`

## Related Components

</translate>

[Facet
(Component){{#translation:}}](Category:Components:Radiant_UI{{#translation:}} "wikilink")
[AlwaysOnFacetModule(Component){{#translation:}}](Category:Components:Radiant_UI:Utility{{#translation:}} "wikilink")