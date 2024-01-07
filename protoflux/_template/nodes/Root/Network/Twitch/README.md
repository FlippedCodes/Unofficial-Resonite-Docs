<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Network/Twitch

### Twitch Chat Message Event

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchChatMessageEvent -->
<!-- ProtofluxNode:start -->
| Twitch Chat Message Event | Type | Label |
| --- | ---- | ----- |
| output | Call | OnMessage |
| output | String | Message |
| output | String | UserId |
| output | String | DisplayName |
| output | color | Color |
| output | Boolean | IsHighlighted |
| output | Boolean | IsSubscriber |
| output | Boolean | IsModerator |
| output | Boolean | IsBroadcaster |
| output | Boolean | IsTurbo |
| output | Boolean | IsVIP |
| output | BadgeColor | CheerBadge |
| output | Int32 | CheerAmount |
| output | Int32 | Bits |
| output | Double | BitsDollars |
| output | Int32 | SubscribedMonthCount |
| output | String | CustomRewardId |
| reference | TwitchInterface | Interface |
| Root/Network/Twitch | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchChatMessageEvent |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchChatMessageEvent -->


### Twitch Follow Event

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchFollowEvent -->
<!-- ProtofluxNode:start -->
| Twitch Follow Event | Type | Label |
| --- | ---- | ----- |
| output | Call | OnFollow |
| output | String | UserId |
| output | String | DisplayName |
| reference | TwitchInterface | Interface |
| Root/Network/Twitch | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchFollowEvent |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchFollowEvent -->


### Twitch Raid Event

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchRaidEvent -->
<!-- ProtofluxNode:start -->
| Twitch Raid Event | Type | Label |
| --- | ---- | ----- |
| output | Call | OnRaid |
| output | String | UserId |
| output | String | DisplayName |
| output | color | Color |
| output | Int32 | ViewerCount |
| output | Boolean | IsSubscriber |
| reference | TwitchInterface | Interface |
| Root/Network/Twitch | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchRaidEvent |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchRaidEvent -->


### Twitch Reward Redeem Event

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchRewardRedeemEvent -->
<!-- ProtofluxNode:start -->
| Twitch Reward Redeem Event | Type | Label |
| --- | ---- | ----- |
| output | Call | OnRedeem |
| output | String | DisplayName |
| output | String | Message |
| output | DateTime | TimeStamp |
| output | String | RewardId |
| output | String | RewardTitle |
| output | String | RewardPrompt |
| output | String | Status |
| output | Int32 | RewardCost |
| reference | TwitchInterface | Interface |
| Root/Network/Twitch | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchRewardRedeemEvent |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchRewardRedeemEvent -->


### Twitch Subscription Event

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchSubscriptionEvent -->
<!-- ProtofluxNode:start -->
| Twitch Subscription Event | Type | Label |
| --- | ---- | ----- |
| output | Call | OnSubscription |
| output | String | UserId |
| output | String | DisplayName |
| output | String | Message |
| output | Int32 | Months |
| output | SubscriptionPlan | Plan |
| output | Boolean | IsResub |
| output | Boolean | IsGifted |
| output | String | GiftedBy |
| output | Boolean | IsAnonymous |
| reference | TwitchInterface | Interface |
| Root/Network/Twitch | ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchSubscriptionEvent |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.FrooxEngine.Cloud.Twitch.TwitchSubscriptionEvent -->


