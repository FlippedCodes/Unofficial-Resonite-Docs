Enums(Enumerated Types) are Value Types which define a list of
constants. These constants are mapped inside an Enum to an underlying
numerical value. For example a simple Enum might be the days of the
week:

-   Monday - 0
-   Tuesday - 1
-   Wednesday - 2
-   Thursday - 3
-   Friday - 4
-   Saturday - 5
-   Sunday - 6

Enums are useful when you want a defined set of behaviour for a system
to follow or when you want two components of a system to speak a common
language.

In Resonite you will mostly come across Enums when you are dealing with
certain Protoflux nodes or Components which have sets of predefined
behaviour which can be altered or changed by changing a value of an
Enum.

For example, In the [Tween Node](Tween_(Protoflux_node) "wikilink"),
there is an input called [CurvePreset](CurvePreset "wikilink") which
defines the type of Curve a Tween operation follows. By altering this
Enum, you can change usually how smooth a Tween operation is.

[Category:Types](Category:Types "wikilink")