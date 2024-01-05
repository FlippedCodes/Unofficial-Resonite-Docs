<languages></languages> <translate>

## Fields

## Usage

Drives the target's value with the source's value. When using WriteBack,
changes made to the Target are local while editing it. When the user is
done setting it, it writes via a network sync to change the Source
value. If the Source and Target are the same, the value will be
completely local, and no network sync happens when changing the value.
When using the ValueCopy to make fields local like this, joining users
will have the host's value by default.

## Examples

<img src="ValueCopyExample1.png" title="fig:ValueCopyExample1.png" width="512" alt="ValueCopyExample1.png" />
A ValueField<bool>'s Value is being self driven with a WriteBack -
making the Value local, and still changeable. Changes to this value will
be local.

<img src="ValueCopyExample2.png" title="fig:ValueCopyExample2.png" width="512" alt="ValueCopyExample2.png" />
A ValueField<int>'s Value is being driven to be 7 from another
ValueField<int>'s Value. The one in pink is the one being driven.

<img src="ValueCopyExample3.png" title="fig:ValueCopyExample3.png" width="512" alt="ValueCopyExample3.png" />
The Target field is being edited to 4, to write back to the Source
field.

## Related Components

</translate>

[Category:ComponentStubs](Category:ComponentStubs "wikilink")
[Category:Generics{{#translation:}}](Category:Generics{{#translation:}} "wikilink")
[Value Copy\`1](Category:Components{{#translation:}} "wikilink") [Value
Copy\`1](Category:Components:Transform:Drivers{{#translation:}} "wikilink")