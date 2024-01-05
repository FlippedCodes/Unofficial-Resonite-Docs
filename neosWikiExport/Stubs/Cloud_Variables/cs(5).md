<languages/>

<div class="mw-translate-fuzzy">

# Co jsou cloudové proměnné?

Cloudové proměnné jsou proměnné, které se zachovávají mezi světy.
Fungují podobným způsobem jako [Dynamické
proměnné](Dynamic_Variables "wikilink"), ale namísto závislosti na
parentování nebo hierarchii světa, závisí na cestách a jejich
vlastnictví skupinou/uživatelem. Můžete si je představit podobně jako
nastavení nebo konfigurační soubory pro vaši oblíbenou hru. Cloudové
proměnné jsou však živější, protože jsou synchronizovány mezi relacemi,
světy a dokonce i Resonite dashem.

</div>
<div class="mw-translate-fuzzy">

Cloudové proměnné se skládajíé ze dvou částí:

-   Definice - Nastavení a konfigurace
-   Hodnoty - Skutečné hodnoty

</div>

## Definice cloudové proměnné

<div class="mw-translate-fuzzy">

Definice cloudové proměnné se skládá ze 4 částí:

-   Cesty/názvu - např. AwesomeGadget.Version nebo
    PartyWorld.highQualityLights
-   [Datový typ](#Podporovan.E9.20datov.E9.20typy "wikilink")
-   [Oprávnění](#Opr.E1vn.u011Bn.ED "wikilink")
-   Výchozí hodnota

</div>
<div class="mw-translate-fuzzy">

Definice mohou být registrovány oproti uživateli nebo skupině.
Registrace definice oproti skupině má některé benefity, jako například:

-   Vyšší [limity](#Limity "wikilink")
-   Více [možností oprávnění](#Opr.E1vn.u011Bn.ED "wikilink")

</div>

### Default Values

When [creating a definition](#Creating_Definitions "wikilink"), you
supply data and configuration in a series of stages with each command.
Just in case you forget or omit a command here are the default values
for various properties of a definition:

-   Read and Write permissions will default to **variable_owner**
-   List permissions will default to **definition_owner**
-   If no default value is specified, Resonite will return the default
    value for this data type as [defined in
    C#](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/default-values).

## Hodnoty cloudových proměnných

Každá definice cloudové proměnné může mít více hodnot, každá hodnota je
vázána na individuálního uživatele Resoniteu nebo skupinu. Hodnota
obsahuje pouze hodnotu proměnné, a nemá žádné detaily o definici. Můžete
si to představit jako tabulku se dvěma sloupci - ID vlastníka a Hodnota.

<div class="mw-translate-fuzzy">

Na příklad, definice clodové proměnné byla vytvořena s datovým typem
string a jménem "Favourite Fruit". Pak si dokážete představit, že její
hodnoty budou vypadat takto:

| Favorite Fruit    |
|-------------------|
| Variable Owner ID |
| U-Frooxius        |
| U-Nexulan         |
| U-Shifty          |
| U-ProbablePrime   |
| U-Vegasx          |
| G-MyGroup         |
|                   |

</div>

Poslední řádek ukazuje hodnotu pro specifickou skupinu. Toto je možné
pouze pro cloudové proměnné které patří skupině.

ID vlastníků proměnných (ID uživatelů nebo skupin) s mezerami musí být
napsány s pomlčkami. Příklad: Skupina "My Group" bude napsána jako
"G-My-Group". Vždy pořádně zkontrolujte vaše ID uživatele a ID skupiny -
mouhou se výrazně lišit od zobrazeného jména uživatele/skupiny.

<div class="mw-translate-fuzzy">

## Používání cloudových proměnných

Před použitím musí být cloudové proměnné vytvořeny a registrovány. Toto
lze provést pomocí [zasílání
příkazů](#Seznam.20p.u0159.EDkaz.u016F.20pro.20cloudov.E9.20prom.u011Bnn.E9 "wikilink")
různých typů [Resonite botovi](Resonite_Bot/cs "wikilink"). Tyto příkazy
vytvářejí a registrují [Definice cloudových
proměnných](#Definice.20cloudov.E9.20prom.u011Bnn.E9 "wikilink") v
Resoniteu. Po registraci mohou být hodnoty cloudových proměnných čteny,
zapisovány a manipulovány oproti této definici pomocí
[Protofluxu](#Protoflux_nody "wikilink") a
[Komponent](#Komponenty "wikilink").

</div>

# Poznámky k používání/Varování

<div class="mw-translate-fuzzy">

-   Cloudové proměnné nelze aktuálně mazat.
-   Definice proměnných jsou silně ukládány do mezipaměti a jejich
    aktualizace bude obvykle trvat několik minut. Doporučuje se je plně
    nastavit předem.
-   Čtení a zápisy jsou bufferovány, dávkovány a cacheovány, a chvíli
    zabere jejich projevení.
-   Aktuální limitací systému cloudových proměnných je skutečnost, že
    nejsou synchronizovány v reálném čase napříč relacemi, pokud neběží
    pod stejným hostitelem.Pokud provozujete více světů/relací na jednom
    headless serveru (nebo vašem počítači), změny cloudových proměnných
    se budou synchronizovat mezi těmito relacemi v reálném čase.
-   Pokud stejný svět hostují rozdílní uživatelé, změny v jednom světě
    nebudou okamžitě odraženy ve druhém, a znovu načtení zabere pár
    minut. Aktuální plán je přidat synchronizaci v reálném čase v
    takovýchto případech pomocí integrace SignalR do naší cloudové
    infrastruktury, což pomůže cloudu lépe se vypořádat s ostatními
    věcmi, jako jsou aktivní relace nebo také systém zpráv. Ale to
    zabere ještě dost práce.
-   Aktuální limity, oprávnění a jiné aspekty se mohou změnit.
-   Měnit datové typy je možné, avšak již uložené hodnoty nejsou změnou
    zasaženy.

</div>
<div class="mw-translate-fuzzy">

## Limity

Cloudové proměnné sice nezabírají žádné uložiště, avšak mají limity.
Tyto limity platí pouze pro definice proměnných, a ne pro jejich
hodnoty. Záležíc na konfiguraci, ruzní uživatelé mohou mít rozdílné
hodnoty. Např. Pro proměnou barvy: Sam má červenou, Sally má černou, Tom
má modrou.

</div>
<div class="mw-translate-fuzzy">

| Typ limitu | Limit |
|------------|-------|
| Uživatelé  | 256   |
| Skupiny    | 8192  |

</div>

These limits only apply to created [variable
definitions](#Cloud_Variable_Definition "wikilink") and not to
[values](#Cloud_Variable_Values "wikilink") stored within them. For
example a [variable definition](#Cloud_Variable_Definition "wikilink")
of "U-ProbablePrime.FavoriteColor" can still have an unlimited number of
[values](#Cloud_Variable_Values "wikilink") for it for each user's
favourite color.

### Rate limits

When reading/writing from Cloud Variables the following limits are in
place:

#### Protoflux

With Protoflux, as the read or write is triggered by an impulse the
read/write operation occurs immediately at the time the nodes receive
the impulse.

Due to this the Read/Write process can be performed up to 30 times a
minute.

#### Components

Cloud variable components operates on a schedule, periodically
refreshing the values in both directions. These values are not that fast
right now but with further enhancements to [our
SignalR](https://github.com/Resonite-Metaverse/ResonitePublic/projects/5#card-61035251)
use. These values will update more promptly. Currently:

-   Reads occur every 5 minutes
-   Writes will be delayed(buffered) and sent every 30 seconds
    -   If the value on the component changes more frequently then the
        most recently set value at the time of the write will be sent to
        the cloud.

## Update Rates

Please read the section above [Limits](#Limits "wikilink").

<div class="mw-translate-fuzzy">

# Podporované datové typy

Při tvorbě cloudové proměnné je třeba určit platný datový typ.
Podporované datové typy jsou vypsány níže, avšak obecně veškeré
primitvní datové typy jsou podporovány. Referenční datové typy nejsou
podporovány, jelikož reference fungují vždy jen v jednom definovaném
světě/relaci.

<div style="column-count:3;-moz-column-count:3;-webkit-column-count:3;max-width:50%;">

-   bool
    -   bool2
    -   bool3
    -   bool4
-   string
    -   string:<max_length>
    -   Ve výchozím stavu má string maximální délku 256 znaků. Maximální
        délku lze navýšit až na 8192 znaků, pokud syntaxe použijete
        `string:`<max_length> syntax pro zadání vyšších limitů.
-   float
    -   float2
    -   float3
    -   float4
    -   float2x2
    -   float3x3
    -   float4x4
-   floatQ - pište jako floatq při definici
-   doubleQ - pište jako doubleq při definici
-   color
-   datetime
-   timespan
-   short
    -   ushort
-   int
    -   int2
    -   int3
    -   int4
-   uint
    -   uint2
    -   uint3
    -   uint4
-   long
    -   long2
    -   long3
    -   long4
-   ulong
    -   ulong2
    -   ulong3
    -   ulong4
-   byte
    -   sbyte
-   double
    -   double2
    -   double3
    -   double4
    -   double2x2
    -   double3x3
    -   double4x4
-   decimal

</div>
</div>

### Enums

You can now also use Enum types, the cloud variable definition must be
set to string to sync properly. Once created you can use
[Protoflux](#Protoflux_nodes "wikilink") &
[Components](#Components "wikilink") with their DataTypes set to the
Enum you wish to use. For example `CloudValueField`<ShadowType>.

**More datatypes may be supported in the future.**

# Permissions

Cloud variable permissions are composed of two parts:

-   Action Permission - The type of action that a Permission Group can
    carry out.
-   Group/Type Permission - A group or classification of user.

When reading and deciding on a permission set do remember that in
**most** cases, each user has their own value for a cloud variable.

As an example in the following command:
`/setUserVarPerms test.color read,write,list anyone`. The actions are
"read, write and list" and the permission type/group is "anyone".

## Action Permission

| Action Permission | Description                                             |
|-------------------|---------------------------------------------------------|
| `read`            | Grants the ability to read values of a cloud variable.  |
| `write`           | Grants the ability to write values of a cloud variable. |
| `list`            | Grants the ability to list all values or a variable.    |
| `all`             | Grants all above permissions at once.                   |

You can also specify multiple permissions at once, separated by a comma
so for example
`/setUserVarPerms test.color read,write,list variable_owner` would set
the read,write and list permissions on the `test.color` variable to
`variable_owner`.

## Group/Type Permission

### Common Definition Permissions

These permissions, can be used with both User and Group owned
definitions.

<table>
<thead>
<tr class="header">
<th><p>Permission Type</p></th>
<th><p>Description</p></th>
<th><p>Locations</p></th>
<th><p>Limitations</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><code>anyone</code></p></td>
<td><p>Anyone can read/write this variable's values. This is recommend for reading public variables but not recommend for writes as anyone can change anyone's value.</p></td>
<td><p>Everywhere.</p></td>
<td><p>- Cannot be used with <strong>write</strong> permissions on User owned definitions.<br />
- Cannot be used with <strong>list</strong> permission on User owned definition.</p></td>
</tr>
<tr class="even">
<td><p><code>definition_owner_only</code></p></td>
<td><p>Only the User/Group who defined the variable can read/write their own <strong>singular value</strong>. Useful for announcement/version control systems.</p></td>
<td><p>Userspace/safe contexts only.</p></td>
<td><p>None.</p></td>
</tr>
<tr class="odd">
<td><p><code>definition_owner_only_unsafe</code></p></td>
<td><p>Only the User/Group who defined the variable can read/write their own <strong>singular value</strong>. Useful for announcement/version control systems.</p></td>
<td><p>Everywhere.</p></td>
<td><p>None.</p></td>
</tr>
<tr class="even">
<td><p><code>variable_owner</code></p></td>
<td><p>Only the user who owns the variable value can write/read their <strong>own value</strong>. In this case the definition owner cannot read/write values for other people.</p></td>
<td><p>Userspace/safe contexts only.</p></td>
<td><p>Cannot be used for list permissions</p></td>
</tr>
<tr class="odd">
<td><p><code>variable_owner_unsafe</code></p></td>
<td><p>Only the user who owns the variable value can write/read their <strong>own value</strong>. In this case the definition owner cannot read/write values for other people.</p></td>
<td><p>Everywhere.</p></td>
<td><p>Cannot be used for list permissions</p></td>
</tr>
</tbody>
</table>

### User Definition Permissions

These permissions, can only be used with User owned definitions.

| Permission Type                         | Description | Locations                     | Limitations                         |
|-----------------------------------------|-------------|-------------------------------|-------------------------------------|
| `definition_owner_only_contacts`        | TODO        | Userspace/safe contexts only. | Cannot be used for list permissions |
| `definition_owner_only_contacts_unsafe` | TODO        | Everywhere.                   | Cannot be used for list permissions |
| `variable_owner_only_contacts`          | TODO        | Userspace/safe contexts only. | Cannot be used for list permissions |
| `variable_owner_only_contacts_unsafe`   | TODO        | Everywhere                    | Cannot be used for list permissions |

### Group Definition Permissions

These permissions, can only be used with Group owned definitions.

| Permission Type           | Description                                                | Locations                     | Limitations |
|---------------------------|------------------------------------------------------------|-------------------------------|-------------|
| `definition_owner`        | Only the group who defined the variable can read/write it. | Userspace/safe contexts only. | None.       |
| `definition_owner_unsafe` | Only the group who defined the variable can read/write it. | Everywhere.                   | None.       |

### List Permissions

Due to the "list" permission having very limited valid permissions it is
easier to list what permissions are allowed for list:

-   anyone - Only on *'group* based definitions.
-   definition_owner
-   definition_owner_unsafe

### Safe Contexts

In most cases within Resonite, anyone can observe or even manipulate
what you're doing. These are **unsafe** contexts. When in places such as
Userspace,where the Resonite Dash is located, no one can see or modify
what you're doing. This is a safe context.

# Cloud Variable Commands

To create, update and modify Cloud Variables you will need to use
commands. These commands can be sent to the "Resonite Bot" within
Resonite, you'll be able to find it in your contacts section.

For each commands if you see Brackets`()` round an argument then it is
optional. Otherwise it is **required**.

## Creating Definitions

### User Definitions

-   `/createUserVar `<path> - Creates a variable definition with the
    given path.
-   `/setUserVarType `<path>` `<type> - Sets the variable definition's
    [Data type](#Supported_Datatypes "wikilink").
-   `/setUserVarDefaultValue `<path>` `<value> - Sets the default value
    for a definition.
-   `/setUserVarPerms `<path>` `<action permission>` `<permission type> -
    Sets the [Permissions](#Permissions "wikilink") for a definition.

There is also a command which can create a definition in one go:
<code>/createUserVar <path> <type>

<default value>

<read perms> <write perms> <list perms></code>.

### Group Definitions

-   `/createGroupVar `<group>` `<path> - Creates a variable definition
    with the given path.
-   `/setGroupVarType `<group>` `<path>` `<type> - Sets the variable
    definition's [Data type](#Supported_Datatypes "wikilink").
-   `/setGroupVarDefaultValue `<group>` `<path>` `<value> - Sets the
    default value for a definition.
-   `/setGroupVarPerms `<group>` `<path>` `<action permission>` `<permission type> -
    Sets the [Permissions](#Permissions "wikilink") for a definition.

There is also a command which can create a definition in one go: <code>
/createGroupVar <group> <path> <type>

<default value>

<read perms> <write perms> <list perms></code>.

### Recommendations

Generally, we recommend using the command which creates the entire
definition in one go, this ensures you do not forget any steps or parts
which can cause the variable to not be usable.

## Reading Values

For reading values using Protoflux / Components [see this later
section](#Working_with_cloud_variables "wikilink").

### User Values

-   `/getUserVar `<path> - Gets the definition for a variable (type,
    perms, default value)
-   `/getUserVarValue `<definition_owner>` `<path>` `<target user> -
    Gets a user's value for a definition. Example:
    `/getUserVarValue U-ProbablePrime testing.bool U-ProbablePrime`
    would get Prime's value for their variable testing.bool
-   `/listUserVars (`<user>`)` - Lists variable definitions of a user
    (default: yours). Requires `list` permission.

### Group Values

-   `/getGroupVar `<group>` `<path> - Gets the definition for a variable
    (type, perms, default value)
-   `/getGroupVarValue `<group>` `<path>` (`<target user>`)` - Gets a
    user's (default: yours) value for a definition.
-   `/listGroupVars `<group> - Lists variable definitions of a group.
    Requires `list` permission.

## Writing Values

When setting/writing a value, ensure that your permissions are set
correctly.

For writing values using Protoflux / Components [see this later
section](#Working_with_cloud_variables "wikilink").

### Writing Values with User owned Definitions

`/setUserVarValue (`<user>`) `<path>` (`<target user>`) `<value> - Sets
an individual user's value for a definition.

For example:
`/setUserVarValue U-ProbablePrime testing.bool U-Frooxius true` would
set the value of `testing.bool` to true for Frooxius' value of
ProbablePrime's definition.

### Writing Values with Group owned Definitions

`/setGroupVarValue `<group>` `<path>` (`<target user>`) `<value> - Sets
an individual user's value for a definition.

For example: `/setUserVarValue G-Cheese testing.bool U-Frooxius true`
would set the value of `testing.bool` to true for Frooxius' value of the
Group Cheese's definition.

### Setting Complex Values

For complex values, you may struggle to know what to enter for this
command. Here are some examples which may help:

-   For complex strings, surround the value in quote marks("). E.g. "My
    Cool Value".
-   For float3 try `[1; 0; 1]`
-   For colors try `[1; 0; 0; 1]`

## Deleting Definitions

You can delete definitions using the following commands:

-   `/deleteUserVar `<path> for User variables.
-   `/deleteGroupVar `<group>` `<path> for Group variables.

This command deletes both the definition and **all** values linked to
that definition. It also takes a while(around 30 minutes) for this
command to fully execute as it needs to clear values, caches and other
systems of the definition and values.

-

# Definition Examples

## User Boolean

Create a `User` variable of type `boolean` that anyone could read and
the owner (each user for their own copy) could write from User and World
space:

`/createUserVar testing.enabled`
`/setUserVarType testing.enabled bool`
`/setUserVarPerms testing.enabled read anyone`
`/setUserVarPerms testing.enabled write variable_owner_unsafe`

### User Color

Create a `User` variable of `color` type that only the owner could write
from Userspace and read from everywhere:

`/createUserVar testing.myColor`
`/setUserVarType testing.myColor color`
`/setUserVarPerms testing.myColor read variable_owner_unsafe`
`/setUserVarPerms testing.myColor write variable_owner`

### Group Boolean

Create a `Group` variable of `boolean` type that only the owner could
read, write and list from everywhere:

`/createGroupVar MyGroup testing.enabled`
`/setGroupVarType MyGroup testing.enabled bool`
`/setGroupVarPerms MyGroup testing.enabled read,write,list variable_owner_unsafe`

# Working with cloud variables

## Components

[ActiveUserCloudField\`1
(Component)](ActiveUserCloudField`1_(Component) "wikilink") - Like
CloudValueField, but overrides OwnerId with Local User.

[ActiveUserCloudValueVariable\`1
(Component)](ActiveUserCloudValueVariable`1_(Component) "wikilink") -
Like CloudValueVariable, but overrides OwnerId with Local User.

[CloudValueField\`1
(Component)](CloudValueField`1_(Component) "wikilink") - Uses target
field to store the value, otherwise similar to CloudValueVariable.

[CloudValueVariable\`1
(Component)](CloudValueVariable`1_(Component) "wikilink") - Represents
the Cloud Variable, can set OwnerId manually.

[CloudValueVariableDriver\`1
(Component)](CloudValueVariableDriver`1_(Component) "wikilink") - Drives
target field with the value of the specified Cloud Variable. Overrides
OwnerId with Local User.

## Protoflux nodes

[Write Cloud Variable\`1 (Protoflux
node)](Write_Cloud_Variable`1_(Protoflux_node) "wikilink") - On impulse,
writes the specified Cloud Variable for specified owner.

[Read Cloud Variable\`1 (Protoflux
node)](Read_Cloud_Variable`1_(Protoflux_node) "wikilink") - On impulse,
reads the specified Cloud Variable for specified owner.

## Headless Sessions and Auto-Startup World Options

Cloud variables can be used with [Headless Server configuration
files](Headless_Client/Server "wikilink") and [Start-up Configuration
Files](Startup_Config_File "wikilink") in a number of ways:

-   Configuring roles in a session.
-   Allowing/Denying users from joining/accessing sessions.
-   Provide custom denial messages for why a user is denied access to
    your sessions.

These options are **NOT available in the UI within Resonite** and
require advanced setup from outside of the game.

We recommend using a **Group variable** for these setups, due to the
permission requirements. You can potentially get away with an
appropriately configured User variable but Group variables will give you
the most control.

To set these up, you need to add the described parameters below, to your
configuration JSON files.

### Roles

To configure roles using cloud variables, add a `roleCloudVariable`
parameter to your world start-up/headless session configuration. It's
value should be the full path of the cloud variable you want to use. The
session will then use the Cloud Variable to determine which role the
user has.

When doing this you need to keep in mind a few things:

1.  The variable data type must be a string.
2.  It is **strongly** recommended that you use the `definition_owner`
    permission group for this variable. Other permission groups may
    allow users to override their roles.
3.  If no value is set for the variable and a user, the other methods
    for determining the role will be used.

An example setup would be:

| G-Cheese.awesomeHeadless.userRoles |
|------------------------------------|
| Variable Owner ID                  |
| U-Frooxius                         |
| U-Nexulan                          |
| U-Shifty                           |
| U-ProbablePrime                    |
| U-Vegasx                           |

With the corresponding JSON property which needs to be added being:
`"roleCloudVariable": "G-Cheese.awesomeHeadless.userRoles"`

### Access

There are a few variables and settings which can control access to
headless sessions.

#### Allowing User's Access

To configure access to a headless session, using cloud variables add a
`allowUserCloudVariable` parameter to your world start-up/headless
session configuration. It's value should be the full path of the cloud
variable you want to use. The session will then use the Cloud Variable
to provide access to the session.

This option take **precedence over all other checks**, including regular
session settings such as max users and visibility.

When doing this you need to keep in mind a few things:

1.  The variable data type must be a bool.
    1.  If it is set to true, the user will be allowed to join the
        session.
    2.  If it is set to false, or a value is not present, the other
        methods for determining access will be used.
2.  If its value is true, the server will allow access to the user.
3.  This is the equivalent of sending an invite to the user.
4.  Users can join regardless of the MaxUsers setting.
5.  Users can join even if the session is private. They will need a link
    to the session though.

An example setup would be:

| G-Cheese.awesomeHeadless.userAccess |
|-------------------------------------|
| Variable Owner ID                   |
| U-Frooxius                          |
| U-Nexulan                           |
| U-BadGuy                            |

With the corresponding JSON property which needs to be added being:
`"allowUserCloudVariable": "G-Cheese.awesomeHeadless.accessControl"`

#### Denying User's Access

In a similar manner to `allowUserCloudVariable`, you can use
`denyUserCloudVariable` to deny a user access to your world
start-up/headless session configuration. Follow the guide above for
allowing access but use `denyUserCloudVariable` instead. When a value
for a user is `true`, they will be denied access.

When true, this option take **precedence over all other checks**,
including regular session settings such as Max Users and Visibility.

An example setup would be:

| G-Cheese.awesomeHeadless.userAccess |
|-------------------------------------|
| Variable Owner ID                   |
| U-Frooxius                          |
| U-Nexulan                           |
| U-BadGuy                            |

With the corresponding JSON property which needs to be added being:
`"denyUserCloudVariable": "G-Cheese.awesomeHeadless.userAccess"`

#### Joining Control

In addition to the above options, you also have the option to use
`requiredUserJoinCloudVariable`. When this option is added to your world
start-up/headless session configuration, its value for a user will be
checked when they join. If it is true then the user will be allowed to
join. If it is false then they will not be allowed to join.

Do note that this option does **NOT** take precedence over other session
checks. Even if this value is set to true, if the session is full(At its
maximum user count) the user will not be allowed in.

An example setup would be:

| G-Cheese.awesomeHeadless.userAccess |
|-------------------------------------|
| Variable Owner ID                   |
| U-Frooxius                          |
| U-Nexulan                           |
| U-BadGuy                            |

With the corresponding JSON property which needs to be added being:
`"requiredUserJoinCloudVariable": "G-Cheese.awesomeHeadless.userAccess"`

##### Deny Messages

**When using `requiredUserJoinCloudVariable`**, with your headless. You
can use a second configuration element in the configuration file,
`requiredUserJoinCloudVariableDenyMessage`.

This allows you to specify a **single** message that is sent to users
who are restricted from joining due to their value being absent or
false, in the variable defined in `requiredUserJoinCloudVariable`.

You must use, `requiredUserJoinCloudVariable` for this to work as they
are linked together. These systems cannot be combined with other Cloud
Variable or other access controls.

These options may be confusing at first but it is useful for controlling
session access, **without** bypassing regular checks such as visibility
and Max User Counts. We often see it uses for things like events which
require registration such as conventions.

# Additional Reading

For additional reading, please check the following sources:

-   [Resonite Weekly
    update](https://steamcommunity.com/games/Resonite/announcements/detail/3037092063869109014) -
    This update introduces the feature and provides usage examples and a
    lot of additional information.
-   [Initial Release of Cloud
    Variables.](https://store.steampowered.com/news/app/740250?emclan=103582791462101905&emgid=3037092063865754153)
-   [First batch of improvements to Cloud
    Variables.](https://store.steampowered.com/news/app/740250?emclan=103582791462101905&emgid=3037092063869444509)
-   [Second batch of improvements to Cloud
    Variables.](https://store.steampowered.com/news/app/740250?emclan=103582791462101905&emgid=3037092063872780203)
-   [Information about definition_owner and User
    Definitions](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2139)

# Default Cloud Variables

Resonite has a few Cloud Variables that are used internally or
automatically set up for a user. These are as follows:

| Variable                                | Description                                             |
|-----------------------------------------|---------------------------------------------------------|
| `G-Resonite.CustomUserColor`            | Stores the color for the user's default headset avatar. |
| `G-Resonite.common_avatar.current`      | Stores the user's favourited avatar.                    |
| `G-Resonite.cloud_home.current`         | Stores the user's favourited cloud home.                |
| `G-Resonite.virtual_keyboard.current`   | Stores the user's favourited keyboard.                  |
| `G-Resonite.interactive_camera.current` | Stores the user's favourited camera.                    |