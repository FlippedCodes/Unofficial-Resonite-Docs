<languages></languages> <translate>

## Fields

## Usage

This component must be used in conjunction with the [Websocket Protoflux
nodes](:Category:Protoflux:_WebSocket "wikilink") - it only exists to
store state, and does not function on its own.

`User` should be a user that expects to be hosting the Websocket
connection Assignments should generally be made in the following order,
depending on which one is the most applicable:

-   **The user wearing the avatar containing this Protoflux**
-   **A specifically defined user who is expected to be present for this
    connection to function**
-   The user who spawned the object containing this Protoflux
-   The user who is currently interacting with the object
-   The host of the session

You should not select a user who is not expecting the object to connect
to an external service. It is possible they will deny the connection
(especially if `AccessReason` isn't sufficiently convincing), which will
cause the connection to fail.

`AccessReason` should provide a clear and concise reason for wanting to
connect to the external service - It should include an obvious title or
description of the object that is attempting to establish the
connection, so that the user is aware of what item in the world is
prompting the connection.

The object should have some way of indicating that it did not
successfully connect to the target service, and that it will not
function as intended, if at all.

The websocket times out and disconnects if the remote server does not
send any traffic (including heartbeat messages) at least every 60
seconds, for long running connections be sure to configure the keepalive
interval on the server side.

## Examples

## Related Issues

[<s>#430 - \[Feature Request\] Add WebSocket client Protoflux
node</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/430)

[#985 - Websocket: support binary data
format](https://github.com/Resonite-Metaverse/ResonitePublic/issues/985)

[#1039 - Websocket
disconnect](https://github.com/Resonite-Metaverse/ResonitePublic/issues/1039)

[<s>#1375 - Resonite doesn't connect to outside websocket
properly.</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/1375)

[<s>#1755 - Secure WebSockets fail to
connect</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/1755)

[<s>#2470 - Websocket doesn't disconnect when not
enabled</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2470)

[#2508 - Websockets don't emit last received message if the socket is
closed right after that last
message.](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2508)

[<s>#2618 - WebSockets requiring secure connections (wss://) on headless
clients</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2618)

[<s>#3043 - Additional WebSocket connections on one User to the same
destination are
send-only</s>](https://github.com/Resonite-Metaverse/ResonitePublic/issues/3043)

## Related Components

</translate>

[Category:ComponentStubs](Category:ComponentStubs "wikilink") [Websocket
Client](Category:Components{{#translation:}} "wikilink") [Websocket
Client](Category:Components:Network{{#translation:}} "wikilink")