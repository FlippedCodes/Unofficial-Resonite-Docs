<languages></languages> <translate>

The **Websocket Connect** node allows the User specified in
`HandlingUser` to connect to a websocket endpoint, as defined by
`Client`

## Usage

This node must be used in conjunction with other
[WebSocket](:Category:Protoflux:_WebSocket "wikilink") nodes to
establish communication with an endpoint, which is defined by a
[Websocket Client component](WebsocketClient_(Component) "wikilink")
that is passed to the `Client` input.

The `OnConnectStart` impulse signifies that the `Client` has started the
connection process - it does \*not\* mean that the client has
successfully connected.

Connection success/fail events are provided by the [Websocket Connection
Events Node](Websocket_Connection_Events_(Protoflux_node) "wikilink")

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Websocket
Connect](Category:Protoflux{{#translation:}} "wikilink") [Websocket
Connect](Category:Protoflux:Network:Websocket{{#translation:}} "wikilink")