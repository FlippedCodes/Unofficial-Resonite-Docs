<languages></languages> <translate> The **ActiveUserCloudField\`1**
Component binds to the [field](IField`1 "wikilink") specified by
`Target`. If `IsLinkedToCloud` is true, it will write the value of the
[cloud variable](Cloud_Variables "wikilink") defined by `Path` for the
[active user](Active_User "wikilink") of the slot it is attached to.

## Fields

## Usage

For this component to function, the [cloud variable
permissions](Cloud_Variables#Permissions "wikilink") must be set to
something suitably permissive for it to function properly.

-   If the variable should update on the cloud when a user interacts
    with the object in some way, **Write Permissions** should be set to
    one of the following:
    -   variable_owner_unsafe
    -   variable_owner_only_contacts_unsafe <sup>1</sup>
    -   Anyone <sup>2</sup>

<!-- -->

-   If the variable should update on the cloud when a user interacts
    with the object in some way, **Read Permissions** should be set to
    one of the following:
    -   variable_owner_unsafe
    -   variable_owner_only_contacts_unsafe <sup>3</sup>
    -   Anyone <sup>4</sup>

<sub>1. This permission results in only contacts of the variable owner
being able to change a value. It also allows contacts to change each
others values, which may not be desired.
2. This permission is only valid for group variable definitions, and
allows anyone to write the value of anyone else, which might have
unintended consequences.
3. This permission results in only contacts of the variable owner being
able to read a value, however the value is read by the active user and
synced normally to everyone else in a session, making this detail
irrelevant.
4. This permission is only valid for group variable definitions, and
allows anyone to read the value of anyone else, however the value is
read by the active user and synced normally to everyone else in a
session, making this detail irrelevant.</sub>

## Examples

## Related Components

</translate>

[Category:ComponentStubs](Category:ComponentStubs "wikilink")
[Category:Generics{{#translation:}}](Category:Generics{{#translation:}} "wikilink")
[Active User Cloud
Field\`1](Category:Components{{#translation:}} "wikilink") [Active User
Cloud
Field\`1](Category:Components:Cloud:Variables{{#translation:}} "wikilink")