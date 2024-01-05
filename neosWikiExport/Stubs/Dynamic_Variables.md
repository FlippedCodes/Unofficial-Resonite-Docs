<languages/><translate>

# Overview

**Dynamic variables** allow you to read and write data by name. This
makes it easy to manage data in large systems; every bit of data is
clearly labeled, and you can break data into multiple **spaces** to keep
your systems separate.=

# Naming Restrictions

When using Dynamic Variables there are some restrictions and limitations
on naming both spaces and variables within those spaces.

Space and Variable Names **cannot contain**:

-   Any symbols
    -   As defined by C#'s
        [Char.IsSymbol](https://docs.microsoft.com/en-us/dotnet/api/system.char.issymbol?view=net-5.0)
-   Any Punctuation / Whitespace
    -   As defined in C#
        [Char.IsPunctuation](https://docs.microsoft.com/en-us/dotnet/api/system.char.ispunctuation?view=net-5.0)
        and C#
        [Char.IsWhiteSpace](https://docs.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-5.0)
-   **Except** for period (.), underscore (_) and space ( ).

# Usage

Optionally, the name can be prefixed by the name of a **space**,
terminated by a /, to choose a specific variable space to use. This is
useful to distinguish between unrelated systems that all use dynamic
variables.

Some valid names include:

-   Health -- no space defined, named Health
-   World/Color -- named Color, in the World space
-   MyCoolSystem/Score -- named Score, in the MyCoolSystem space

## Spaces

Dynamic variables can live anywhere in or under the slot containing a
[DynamicVariableSpace](DynamicVariableSpace_(Component) "wikilink")
component.

So, a variable space on the world root can be used from anywhere, whilst
a variable space on your avatar can be used from anything stored in your
avatar.

## Variables

The simplest way to use dynamic variables is to use the
[DynamicValueVariable<T>](DynamicValueVariable%601_(Component) "wikilink")
and
[DynamicReferenceVariable<T>](DynamicReferenceVariable%601_(Component) "wikilink")
components. These are for value (int, float, String, etc.) and reference
(Slot, User, etc.) types, respectively.

These components store a value or reference directly. If two variable
components have the same name, then they will have identical contents.

## Fields

If you want to use an existing field or reference as the contents of a
dynamic variable, you can use the
[DynamicField<T>](DynamicField%601_(Component) "wikilink") or
[DynamicReference<T>](DynamicReference%601_(Component) "wikilink")
components. Instead of storing something directly, they point at a field
that contains a value or reference type, respectively.

(TODO: clarify value vs. reference types; I think this isn't fully
correct)

## Drivers

You can use the contents of a dynamic variable to drive a field or
reference, using the
[DynamicValueVariableDriver<T>](DynamicValueVariableDriver%601_(Component) "wikilink")
and
[DynamicReferenceVariableDriver<T>](DynamicReferenceVariableDriver%601_(Component) "wikilink")
components.

## Unlisted types

When creating a dynamic variable component, you will be given a list of
"common types". If the type you seek is not in that list, you will have
to enter it by hand. See [Complex Types in
Components](Complex_Types_in_Components "wikilink").

## Warning

Creating, duplicating, or moving a dynamic variable requires Resonite to
**bind** that variable to its space. This usually takes a small amount
of time, before which the dynamic variable can appear to be present, but
not be readable or writable. Therefore, if you create a dynamic variable
using the [Create Dynamic
Variable](Create_Dynamic_Variable`1_(Protoflux_node) "wikilink") or
[Write Or Create Dynamic
Variable](Write_Or_Create_Dynamic_Variable`1_(Protoflux_node) "wikilink")
Protoflux node, or cause it to be duplicated using the [Duplicate
Slot](Duplicate_Slot_(Protoflux_node) "wikilink") Protoflux node, or
cause it to be moved using the [Set
Parent](Set_Parent_(Protoflux_node) "wikilink") Protoflux node, you may
find it necessary to add an [Updates
Delay](Updates_Delay_(Protoflux_node) "wikilink") or [Updates Delay With
Value](Updates_Delay_With_Value_(Protoflux_node) "wikilink") Protoflux
node afterwards in order to ensure the dynamic variables have been bound
by the time you use them. A delay of 1 to 3 updates usually suffices.
</translate>

[Category:Protoflux Tutorials](Category:Protoflux_Tutorials "wikilink")