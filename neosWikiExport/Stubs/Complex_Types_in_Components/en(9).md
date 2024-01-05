<languages/>Some [components](components "wikilink") require you to
specify a type when you create them. They can be identified by the <T>
at the end of their name -- e.g. `ValueField`<T>.

# Selecting a type from the list

When you attach one of these components, a menu will appear to ask for
what type you want. In many cases, a list of commonly-used types will be
shown. If you see the type you'd like to use, just select it from the
list:

![<File:SelectGenericType.jpg>](SelectGenericType.jpg "File:SelectGenericType.jpg")

# Manually Specifying a Type

If the type you need is not listed, you can enter the type's name into
the field at the top of the window:

![<File:TypeType.jpg>](TypeType.jpg "File:TypeType.jpg")

You'll usually need simple types, such as:

-   Slot
-   User

The *Invalid Type* label will change to the final type of the component
when you enter a valid type.

![<File:TypeSlot.jpg>](TypeSlot.jpg "File:TypeSlot.jpg")

# Specifying Complex Types

Sometimes, you will need to use a type that takes another type, just
like how the component itself needs you to pick a type. These are
**generic** types, and will have a grave (\`) at the end of their names,
followed by the number of types they want (usually just one).

For example, `` IAssetProvider`1 `` is the type for many Assets you
might use. What it is a reference *to* depends on its type parameter. If
it is a reference to a Material, then it will appear in the inspector as
`SyncRef`<Material>, and be typed out as
`` IAssetProvider`1[FrooxEngine.Material] ``.

![<File:TypeMaterial.jpg>](TypeMaterial.jpg "File:TypeMaterial.jpg")

# Common Complex Types

The syntax for doing this is unusual, so here are some commonly used
type strings.

To get a grave (\`), depending on your keyboard, either look for the key
containing \`\~ and press it, or press shift on your keyboard - in that
case, the Esc key should become a \`

## Assets

-   Materials - `` IAssetProvider`1[FrooxEngine.Material] ``
-   Textures - `` IAssetProvider`1[FrooxEngine.ITexture] ``
-   `` IAssetProvider`1[FrooxEngine.ITexture2D] ``
-   AudioClip - `` IAssetProvider`1[FrooxEngine.AudioClip] ``
-   Mesh - `` IAssetProvider`1[FrooxEngine.Mesh] ``

## Public Class Members

Sometimes a C# class may have classes or Enums etc inside it. Referring
to these in the text input box is challenging to remember but not
impossible. To do this use a `+`. This can be a little hard to explain
without an example so here are a few examples:

-   The style of the outline on Xiexe's Toon Material can be created
    using: `FrooxEngine.XiexeToonMaterial+OutlineStyle`
-   An individual `AvatarExpression` within the `ExpressionDriver` can
    be created using `FrooxEngine.ExpressionDriver+AvatarExpression`

# Background

Generic types can be customized to work with many other types. This is
how `ValueField`<T> components are constructed: you specify the type
that it will hold, such as bool, float3, or String. The game doesn't
need to keep a separate copy of *every kind of ValueField* lying around!

Type parameters are provided in a pair of square brackets. They are
comma separated, in the rare situation where you have more than one
generic type.

Type parameters sometimes need to be *qualified*, meaning that you need
to specify where they come from. This is why the above examples have a
prefix of *FrooxEngine*. This is not the case for all types, which is
why the prefix is not used before `` IAssetProvider`1 ``. You can
usually try without *FrooxEngine.* and then if it does not work, it can
be added.

Some types need additional qualification. For example, float3 is
provided by BaseX, but the game will not be able to find it by default.
Thus, you will have to write it out like this:

`[[BaseX.float3,BaseX|BaseX.float3,BaseX]]`

Note the additional set of square brackets.

## Further reading

You can read this note for information on the technical background of
this pattern:
[Frooxius_Notes#Complex_Types_within_Components_.2F_Protoflux](Frooxius_Notes#Complex_Types_within_Components_.2F_Protoflux "wikilink")