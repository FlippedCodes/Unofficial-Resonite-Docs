# Cloud Variables

Cloud Variables are variables that persist across worlds.  
They rely on paths and user/group ownership.

Cloud Variables have two parts:

- Definition - Meta configuration of the variable; name, type, permissions, default
- Values - Actual value, stored per-user

## Default values

There is some defaults to keep in mind when working with Cloud Variables:

- If no default for the variable is given, the value returned is the one for [this the type of the variable in C#](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/default-values)
- Read/Write permissions will default on `variable_owner`
- List permission will default on `variable_owner`

## Working with Cloud Variables

### Definition

To define a Cloud Variable, you will need some information such as:

- A path/name; for instance `foo.bar`
- A type (bool, string:<maxlength; maximum is 8192; default is 256>, float, floatq, doubleq, color, datetime, timespan, short, int, uint, long, ulong, byte, double, decimal)
- [Permissions](#permissions)
- A default (optional)

You can register Cloud Variables on both users and groups. Using a group has the advantage of having higher limits (8192 for a group vs 256 for a user) and additional permissions.

Creating Cloud Variables is actually really easy through commands sent to the Resonite Bot:

#### Users

- `/createUserVar <path>` - Creates a Cloud Variable with the given path
- `/setUserVarType <path> <type>` - Sets the type of the variable
- `/setUserVarDefaultValue <path> <value>` - Sets the default value of the variable
- `/setUserVarPerms <path> <action> <permission>` - Sets the [permissions](#permissions) of the variable

It is possible to do everything in one go using `/createUserVar <path> <type> <default> <read perms> <write perms> <list perms>`.

#### Groups

- `/createGroupVar <path>` - Creates a Cloud Variable with the given path
- `/setGroupVarType <path> <type>` - Sets the type of the variable
- `/setGroupVarDefaultValue <path> <value>` - Sets the default value of the variable
- `/setGroupVarPerms <path> <action> <permission>` - Sets the [permissions](#permissions) of the variable

It is possible to do everything in one go using `/createGroupVar <path> <type> <default> <read perms> <write perms> <list perms>`.

### Permissions

#### Action

| Action | Description                       |
| ------ | --------------------------------- |
| read   | Read values of a cloud variable   |
| write  | Writes values of a cloud variable |
| list   | List all the values of a variable |
| all    | All the permissions above         |

#### Group/Type permissions

##### Common

| Type                         | Description                                                                                  | Locations              | Limitations                                                              |
| ---------------------------- | -------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------ |
| anyone                       | Anyone can read/write the values. Recommended for reading public information but not writing | Everywhere             | Cannot be used with write and list definitions on user owned definitions |
| definition_owner_only        | Only the user/group who defined the variable can read/write their own value                  | Userspace/Safe context | None                                                                     |
| definition_owner_only_unsafe | Only the user/group who defined the variable can read/write their own value                  | Everywhere             | None                                                                     |
| variable_owner               | Only the user who owns the variable value can read/write their own value                     | Userspace/Safe context | Cannot be used for list                                                  |
| variable_owner_unsafe        | Only the user who owns the variable value can read/write their own value                     | Everywhere             | Cannot be used for list                                                  |

##### User

| Type                                  | Description | Locations              | Limitations             |
| ------------------------------------- | ----------- | ---------------------- | ----------------------- |
| definition_owner_only_contacts        | ?           | Userspace/Safe context | Cannot be used for list |
| definition_owner_only_contacts_unsafe | ?           | Everywhere             | Cannot be used for list |
| variable_owner_only_contacts          | ?           | Userspace/Safe context | Cannot be used for list |
| variable_owner_only_contacts          | ?           | Everywhere             | Cannot be used for list |

##### Group

| Type                    | Description                                               | Locations              | Limitations |
| ----------------------- | --------------------------------------------------------- | ---------------------- | ----------- |
| definition_owner        | Only the group who defined the variable can read/write it | Userspace/Safe context | None        |
| definition_owner_unsafe | Only the group who defined the variable can read/write it | Everywhere             | None        |

##### The List permission

Due to the list permission being limited, here is the only type it can accept:

- anyone - Only for group-based definitions
- definition_owner
- definition_owner_unsafe

### Reading values

#### Users

- `/getUserVar <path>` - Gets the definition of the variable (type, perms, default value)
- `/getUserVarValue <owner> <path> <target user>` - Gets a user's variable value
- `/listUserVars <user>` - Lists variable definitions of a user, requires the list permission

#### Groups

- `/getGroupVar <group> <path>` - Gets the definition of the variable (type, perms, default, value)
- `/getGroupVarValue <group> <path> <target user>` - Get a user's variable value
- `/listGroupVars <group>` - Lists variable definitions of a group, requires the list permission

#### Components

On the component side, there is a bunch available in `Cloud`->`Variables` to interact with Cloud Variables.  
To read values from them, you can use:

- `ActiveUserCloudField<T>` - Will get a Cloud Variable value for the current local user and drive a value from it
- `ActiveUserCloudValueVariable<T>` - Will get a Cloud Variable value for the current local user and put the value in a readable field instead
- `CloudValueField<T>` - Gets a value from a Cloud Variable and drive a field from it while being able to specify any user
- `CloudValueVariable<T>` - Gets a value from a Cloud Variable and display it in a readable field while being able to specify any user
- `CloudValueVariableDriver<T>` - Gets a value from a Cloud Variable and drives a field from it while giving the option to override the user manually

#### Protoflu(x)

In Protoflu(x), it is pretty simple, you will need to head to `Variables`->`Cloud` and use either a `ReadObjectCloudVariable<T>` or a `ReadValueCloudVariable<T>`, the difference between the two being some types like strings are object and others like booleans are basic values.

Both take the same arguments in:

- Impulse - To trigger the read
- Path - string
- VariableOwnerId - string

And will return:

- OnRequest - Pulses when triggering the read
- OnDone - Pulses when the value is read successfully
- OnFail - Pulses when the value has failed reading
- Value - The value out of the Cloud Variable

### Writing values

#### Users

- `/setUserVarValue <user> <path> <target user> <value>` - Sets an individual's value

#### Groups

- `/setGroupVarValue <group> <path> <target user> <value>`

#### Setting complex values

Complex values can be set in text like the following:

- Use quote marks: "
- For float3, try: `[1; 0; 1]`
- For colours try: `[1; 0; 0; 1]`

#### Protoflu(x)

In Protoflu(x), you can find the appropriate write variables in `Variables`->`Cloud` and use either `WriteObjectCloudVariable<T>` or `WriteValueCloudVariable<T>`, the difference being the same as with the reading Flux nodes.

Both will take the same arguments in:

- Impulse - To set the value
- Path - string
- VariableOwnerId - string
- Value

And will return:

- OnRequest - Impulse
- OnDone - Impulse
- OnFail - Impulse

### Deleting Definitions

Deleting definitions is really simple via commands:

- `/deleteUserVar <path>`
- `/deleteGroupVar <path>`

## Other applications

### Headlesses

You can use Cloud Variables to control multiple aspects of a headless session:

- Roles
- Allowing/Denying entry to the session
- Provide a custom join denial reason

See [the headless specific configuration page](/wiki/resonite/headless#worlds) to see how to configure those.  
Keep in mind using group Cloud Variables will give you more control.

#### Roles

To set roles via Cloud Variables, you need to keep a few things in mind:

- The data type must be a string
- It is recommended to use the definition_owner permission as others could allow users to override their own permission
- If no value is set, other methods to determine the role will be used

Example:

`G-Awa.headlessValues.roles`

| ownerid | value   |
| ------- | ------- |
| U-j4    | Admin   |
| U-awa   | Builder |

#### Access

##### Allowing users

Before setting up the variable, keep those points in mind:

- The variable type must be a boolean
  - If true, the user will be able to join
  - If false or no value, the user won't be able to join
- This is equivalent to sending an invite to the user
- They can join regardless of user slots available
- They can join even if the session is private (they will need a link for that)

Example setup:

`G-Awa.headlessvalues.userAccess`

| ownerid | value |
| ------- | ----- |
| U-j4    | true  |
| U-awa   | false |

##### Denying users

It is setup the exact same way as the Allowing users variable, with a few differences:

- True now signifies user cannot join the session
- **This takes precedence over everything else**

Example:

`G-Awa.headlessValues.userDenied`

| ownerid | value | description    |
| ------- | ----- | -------------- |
| U-j4    | false | Access allowed |
| U-awa   | true  | Access denied  |

##### Join control

Again, setup exactly the same way as the Allowing users variable, this one is checked right before a user joins but doesn't overrides any other checks.

For instance:

`G-Awa.headlessValue.userControl`

| ownerid | value |
| ------- | ----- |
| U-j4    | true  |
| U-awa   | false |

##### Deny messages

When using `requiredUserJoinCloudVariable`, you can use the `requiredUserJoinCloudVariableDenyMessage` configuration key to set a deny message.  
It can be useful for whitelisted sessions or events.
