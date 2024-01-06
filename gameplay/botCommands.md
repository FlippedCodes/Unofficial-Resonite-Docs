---
title: "Resonite Bot"
description: "Resonite Bot commands."
---

# Resonite Bot

The Resonite bot can be found in your contacts list by default and commands can be sent to it to do various things like assign yourself badges or get the headless beta code.  
Note that all those commands are case insensitive.

## Resonite Bot commands

### Basic commands

- `/addHearingImpaired` - Adds the hearing impairment badge
- `/removeHearingImpaired` - Removes the hearing impairment badge
- `/addColorBlind` - Adds the colour-blind badge
- `/removeColorBlind` - Removes the colour-blind badge
- `/addVisuallyImpaired` - adds the visual impairment badge
- `/removeVisuallyImpaired` - Removes the visual impairment badge
- `/addMute` - Adds the mute badge
- `/removeMute` - Removes the mute badge
- `/addPotato` - Adds the potato badge (low end machines)
- `/removePotato` - Removes the potato badge
- `/requestRecordUsageReport` or `/requestRecordUsageJSON` - Sends you an email with what storage is your full inventory using in plaintext or JSON format
- `/deleteRecord <id>` - Deletes the specified record ID
- `/enableLogin2FA` - Enables 2FA on login
- `/disableLogin2FA` - Disables login 2FA
- `/changeUsername <old username> <new username>` - Changes your username (can only be used once every 7 days)
  - If your username contains spaces, use "quotes around it", for instance `/changeusername "old username" "new username"`
- `/serverinfo` - Displays some information about the server like the current uptime, Linux version and runtime version
- `/setPrimaryEmail <email>` | `/addAlternateEmail <email>` - Either changes your main account email or adds a new alternative one (useful if your Patreon email doesn't matches your Resonite one)
- `/requestAccountDeletion` - Will **delete** your Resonite account seven days after running this command
- `/getBenefits` - Will display your current Patreon benefits
- `/echo <message>` - Will make the Resonite Bot reply with your message

### Patreon only

- `/addExitMessage <message>` - Submits an exit message
- `/listExitMessages` - Lists your submitted exit messages
- `/shareStorageWithGroup <group> <amount>` or `/shareStorageWithUser <user> <amount>` - Shares the specified amount of storage with a user or group (requires Patreon tier Builder (73€/month) or more)
- `/set2DBadge <resdb:/// URL>` or `/set3DBadge <record URL>` - Sets your 3D or 2D badge (3D badge limitations are 128 triangles, 256 verts); custom badges have some limitations:
  - 3D badges must be one mesh renderer, one static mesh (up to 128 triangles **or** 256 vertices) and a single texture (auto resized to 128px)
  - Only the following components are allowed on the badge:
    - `StaticTexture2D`
    - `StaticMesh`
    - `StaticShader`
    - `MeshRenderer`
    - `Spinner`
    - `Wiggler`
    - `Panner1D` -> `Panner4D`
    - Materials
- `/clear2DBadge` or `/clear3DBadge` - Removes your set 3D or 2D badge
- `/requestDeleteRecovery <time period> <name search>` - Starts the recovery of a deleted record matching a certain name under a certain time period
- `/headlessCode` - Displays the headless access code (requires Patreon Discoverer (10€/month) or more)

### Group Commands

Groups allow you to share an inventory space with a multitude of users, which can be useful to cooperate on projects.  
Creating a group is available starting at the Trailblazer Patreon tier (20€/month). Some other pledges can allow you to create more groups, for instance, Builder (73€/month) will allow you to create two groups and Crafter (145€/month) three groups.

Groups created on Resonite start without any storage and you will need to use `/shareStorageWithGroup` to allocate some to it.`

- `/createGroup <groupname>` - Create a new group with the specified group name
- `/getGroupInfo <groupname>` - Gets all the info about a group (requires you to be the admin of said group)
- `/addMember <groupname> <username> <quota>` - Adds a player to a group
  - Note: the quota is how many GBs a particular user can access of the full storage of the group. Setting it to `-1` means the member can use as much storage as they want. Groups come with no storage by default, you will need to allocate some with `/shareStorageWithGroup``.
- `/removeMember <groupname> <username>` - Removes a player from a group
- `/setMemberQuota <group> <user> <quota>` - Sets a user's quota
- `/getGroupSpace <group>` - Get how much storage is a group using

### Cloud variables

#### Reading Values

##### Users

[Working with Cloud Variables](../gameplay/advanced/cloudVars.md#readingValuesUsers ':include')

##### Groups

[Working with Cloud Variables](../gameplay/advanced/cloudVars.md#readingValuesGroups ':include')

#### Setting Values

##### Users

[Working with Cloud Variables](../gameplay/advanced/cloudVars.md#settingValuesUsers ':include')

##### Groups

[Working with Cloud Variables](../gameplay/advanced/cloudVars.md#settingValuesGroups ':include')

[Article by J4](../_template/usageTerms/J4Credit.md ':include')
