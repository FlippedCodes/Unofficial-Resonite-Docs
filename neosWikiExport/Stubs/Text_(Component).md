<languages></languages> <translate>

## Introduction

This component displays text inside of a UIX canvas. It also supports
[text formatting](Text_Formatting "wikilink").

## Usage

## Examples

Here we start with a parent that has a
[VerticalLayout](VerticalLayout_(Component) "wikilink") component with
ForceExpandWidth and ForceExpandHeight set.

<figure>
<img src="Text_layout_example_vertical_layout_parent.jpeg" title="Text_layout_example_vertical_layout_parent.jpeg" width="800" alt="Text_layout_example_vertical_layout_parent.jpeg" /><figcaption aria-hidden="true">Text_layout_example_vertical_layout_parent.jpeg</figcaption>
</figure>

The first child contains text, with no
[LayoutElement](LayoutElement_(Component) "wikilink").

<figure>
<img src="Text_layout_example_text_child.jpeg" title="Text_layout_example_text_child.jpeg" width="800" alt="Text_layout_example_text_child.jpeg" /><figcaption aria-hidden="true">Text_layout_example_text_child.jpeg</figcaption>
</figure>

The second child is an [Image](Image_(Component) "wikilink") with a
[LayoutElement](LayoutElement_(Component) "wikilink") set to its
defaults.

<figure>
<img src="20210515151449_1.jpg" title="20210515151449_1.jpg" width="800" alt="20210515151449_1.jpg" /><figcaption aria-hidden="true">20210515151449_1.jpg</figcaption>
</figure>

As we see, rather than having equally-weighted children, the image child
is squashed. In part this is because the image child has no preferred
height, but also the text seems to have a preferred height that includes
some empty space underneath it.

Setting various values in the LayoutElement of the image child does
expand that child. For example, setting its FlexibleHeight to 1 or its
PreferredHeight to 100.

## Related Components

</translate>

[Text
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink") [Text
(Component){{#translation:}}](Category:Components:UIX:Graphics{{#translation:}} "wikilink")