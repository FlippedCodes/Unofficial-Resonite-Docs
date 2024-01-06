<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Network

### Escape Uri Data String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.EscapeUriDataString -->
<!-- ProtofluxNode:start -->
| Escape Uri Data String | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.EscapeUriDataString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.EscapeUriDataString -->


### Is Host Access Allowed

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.IsHostAccessAllowed -->
<!-- ProtofluxNode:start -->
| Is Host Access Allowed | Type | Label |
| --- | ---- | ----- |
| input | String | Host |
| output | Boolean | * |
| input | Int32 | Port |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.IsHostAccessAllowed |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.IsHostAccessAllowed -->


### Request Host Access

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.RequestHostAccess -->
<!-- ProtofluxNode:start -->
| Request Host Access | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | Continuation | OnGranted |
| input | String | Host |
| output | Continuation | OnDenied |
| input | Int32 | Port |
| output | Continuation | OnIgnored |
| input | String | Reason |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.RequestHostAccess |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.RequestHostAccess -->


### GET String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.GET_String -->
<!-- ProtofluxNode:start -->
| GET String | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnSent |
| input | Uri | URL |
| output | Continuation | OnResponse |
| output | Continuation | OnError |
| output | Continuation | OnDenied |
| output | HttpStatusCode | StatusCode |
| output | String | Content |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.GET_String |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.GET_String -->


### POST String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.POST_String -->
<!-- ProtofluxNode:start -->
| POST String | Type | Label |
| --- | ---- | ----- |
| input | AsyncOperation | * |
| output | AsyncCall | OnSent |
| input | Uri | URL |
| output | Continuation | OnResponse |
| input | String | String |
| output | Continuation | OnError |
| input | String | MediaType |
| output | Continuation | OnDenied |
| output | HttpStatusCode | StatusCode |
| output | String | Content |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.POST_String |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Network.POST_String -->


### String To Absolute URI

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.StringToAbsoluteURI -->
<!-- ProtofluxNode:start -->
| String To Absolute URI | Type | Label |
| --- | ---- | ----- |
| input | String | Input |
| output | Uri | * |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.StringToAbsoluteURI |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.StringToAbsoluteURI -->


### Unescape Uri Data String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.UnescapeUriDataString -->
<!-- ProtofluxNode:start -->
| Unescape Uri Data String | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Network | ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.UnescapeUriDataString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Utility.Uris.UnescapeUriDataString -->


