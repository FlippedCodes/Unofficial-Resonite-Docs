<languages/> Resonite is capable as running as a
[websocket](https://en.wikipedia.org/wiki/WebSocket) client in game by
utilizing the
[WebsocketClient](Special:MyLanguage/WebsocketClient_(Component) "wikilink")
component and the [Websocket](:Category:Protoflux:Websocket "wikilink")
Protoflux nodes. This can lead to a powerful opportunity to [connect
Resonite to other
applications](Special:MyLanguage/Connecting_Resonite_to_Other_Applications "wikilink").

## Basic Information

Check the information on these nodes and components for basic
information about how to use them:

-   [Nodes](:Category:Protoflux:Websocket "wikilink")
-   [The
    Component](Special:MyLanguage/WebsocketClient_(Component) "wikilink")
-   Check the [tutorial from
    ProbablePrime](https://youtu.be/q9dqSebqlW4)

## Requirements

For websockets to work you'll need to ensure:

-   A websocket compatible server
    -   Not a regular Socket Server
    -   Not a Socket.Io Server
    -   Not any other kind of server. Specifically Websockets
-   A computer to run your Websocket Server.
    -   This **can** be the same computer as the one that runs Resonite.
-   Some knowledge of how to program a websocket server.
    -   Most websocket servers are basic and do not include your
        application logic.

## Resonite Limitations

-   Resonite can only send and receive text based messages.
    -   Do not send Binary data!

## Checklist

If websockets are not working in your world please check the following:

-   Is your address correct?
    -   It must be an address that Resonite and your computer can reach.
    -   Localhost or 127.0.0.1 are ok if you're referring to your local
        computer.
-   Is the port correct?
    -   You can run a Websocket server on any port.
-   Does your address start with [`ws://`](ws://) or [`wss://`](wss://)?
    -   It must **NOT** start with [`http://`](http://) or
        [`https://`](https://)
-   Is your websocket server running?
    -   It must be running to connect successfully.
-   Is the "User" property set to the person running the websocket
    server?
    -   Websocket connections run as a specified user. If this is
        incorrect they might not connect correctly.
-   Have you denied the webhost in Resonite?
    -   Navigate to the home screen of your dash.
    -   In the bottom right corner click on Debug.
    -   Then in the window that appears click the "Web Hosts" tab.
    -   Check for any line in the window that shows the address that
        you're trying to use.
    -   If it says "Denied" click "Remove Setting" next to it and make
        sure to "Allow" it when the request access dialog appears.

## Suitable Servers

Here are some suitable servers to get you started:

-   Node.js
    -   Regular Node.js's Http Module can do this.
    -   [ws](https://www.npmjs.com/package/ws) on NPM
-   Python
    -   [Websockets](https://pypi.org/project/websockets/) on PyPi
-   C#
    -   C# has [native websocket support in
        .Net](https://docs.microsoft.com/en-us/dotnet/api/system.net.websockets.websocket?view=net-5.0)
    -   There's also
        [websocket-sharp](https://github.com/sta/websocket-sharp)

[Category:Troubleshooting](Category:Troubleshooting "wikilink")