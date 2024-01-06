<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Network/Websockets

### Websocket Connect

<!-- ProtofluxNode:start -->
| Websocket Connect | Type | Label |
| --- | ---- | ----- |
| input | SyncOperation | * |
| output | Continuation | Next |
| input | WebsocketClient | Client |
| input | Uri | URL |
| input | User | HandlingUser |
| Root/Network/Websockets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.WebsocketConnect |  |
<!-- ProtofluxNode:end -->


### Websocket Connection Events

<!-- ProtofluxNode:start -->
| Websocket Connection Events | Type | Label |
| --- | ---- | ----- |
| output | Call | OnConnected |
| output | Call | OnDisconnected |
| Root/Network/Websockets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.WebsocketConnectionEvents |  |
<!-- ProtofluxNode:end -->


### Websocket Text Message Receiver

<!-- ProtofluxNode:start -->
| Websocket Text Message Receiver | Type | Label |
| --- | ---- | ----- |
| output | Call | OnReceived |
| output | String | Data |
| Root/Network/Websockets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.WebsocketTextMessageReceiver |  |
<!-- ProtofluxNode:end -->


### Websocket Text Message Sender

<!-- ProtofluxNode:start -->
| Websocket Text Message Sender | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnSendStart |
| input | WebsocketClient | Client |
| output | Continuation | OnSent |
| input | String | Data |
| output | Continuation | OnSendError |
| Root/Network/Websockets | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.WebsocketTextMessageSender |  |
<!-- ProtofluxNode:end -->


