<languages></languages> <translate>

## Introduction

The **VerticalLayout** component is used to layout child objects in a
column.

The order of the objects depends on each child's OrderOffset property.
Normally these are 0, but if you change it, the children will be ordered
by increasing OrderOffset, with children of equal OrderOffset being
ordered by some effectively random process.

## Usage

## Behavior

The VerticalLayout component places its child layout elements on top of
each other. Their heights are determined by their respective minimum,
preferred, and flexible heights according to the following model:

1.  The minimum heights of all the child layout elements are added
    together and the spacing between them plus the top and bottom
    padding is added as well. The result is the minimum height of the
    VerticalLayout.
2.  The preferred heights of all the child layout elements are added
    together and the spacing between them plus the top and bottom
    padding is added as well. The result is the preferred height of the
    VerticalLayout.
3.  If the VerticalLayout is at its minimum height or smaller, all the
    child layout elements will also have their minimum height.
4.  The closer the VerticalLayout is to its preferred height, the closer
    each child layout element will also get to their preferred height.
5.  If the VerticalLayout is taller than its preferred height, it will
    distribute the extra available space proportionally to the child
    layout elements according to their respective flexible heights.

For minimum, preferred, and flexible heights of child slots, use
[LayoutElement](LayoutElement_(Component) "wikilink").

### Padding and spacing

![<File:Verticallayout>
padding.png](Verticallayout_padding.png "File:Verticallayout padding.png")

## Examples

This example shows a VerticalLayout with two children. Each child is
just an [Image](Image_(Component) "wikilink"), with the first child
being red and the second being green. Note that since Images have no
minimum or preferred size, the VerticalLayout's ForceExpandWidth and
ForceExpandHeight properties must be set, otherwise the children will
simply have a width or height of zero. The VerticalLayout is as big as
its parent allows.

VerticalLayout in the inspector:

<figure>
<img src="Vertical_Layout_Example_1_Layout.jpeg" title="Vertical_Layout_Example_1_Layout.jpeg" width="800" alt="Vertical_Layout_Example_1_Layout.jpeg" /><figcaption aria-hidden="true">Vertical_Layout_Example_1_Layout.jpeg</figcaption>
</figure>

The first child in the inspector:

<figure>
<img src="Vertical_Layout_Example_1_Child.jpeg" title="Vertical_Layout_Example_1_Child.jpeg" width="800" alt="Vertical_Layout_Example_1_Child.jpeg" /><figcaption aria-hidden="true">Vertical_Layout_Example_1_Child.jpeg</figcaption>
</figure>

The result:

<figure>
<img src="Vertical_Layout_Example_1_Result.jpeg" title="Vertical_Layout_Example_1_Result.jpeg" width="800" alt="Vertical_Layout_Example_1_Result.jpeg" /><figcaption aria-hidden="true">Vertical_Layout_Example_1_Result.jpeg</figcaption>
</figure>

If we add LayoutElements to each child, we can affect the sizes. Here,
we add a LayoutElement to the first child, setting its FlexibleHeight to
2, and also to the second child, setting its FlexibleHeight to 1:

<figure>
<img src="Vertical_Layout_Example_1_Child_with_Layout_Element.jpeg" title="Vertical_Layout_Example_1_Child_with_Layout_Element.jpeg" width="800" alt="Vertical_Layout_Example_1_Child_with_Layout_Element.jpeg" /><figcaption aria-hidden="true">Vertical_Layout_Example_1_Child_with_Layout_Element.jpeg</figcaption>
</figure>

The result shows that the child heights are proportional, 2 to 1:

<figure>
<img src="Vertical_Layout_Example_1_Result_with_Layout_Element.jpeg" title="Vertical_Layout_Example_1_Result_with_Layout_Element.jpeg" width="800" alt="Vertical_Layout_Example_1_Result_with_Layout_Element.jpeg" /><figcaption aria-hidden="true">Vertical_Layout_Example_1_Result_with_Layout_Element.jpeg</figcaption>
</figure>

By specifying a preferred width for each child and turning off
ForceExpandWidth on the VerticalLayout, we can have each child stick to
its preferred width. Here, we set the first child's preferred width to
100 and the second child's preferred width to 50:

<figure>
<img src="Vertical_Layout_Example_1_Result_with_Layout_Element_and_Preferred_Width.jpeg" title="Vertical_Layout_Example_1_Result_with_Layout_Element_and_Preferred_Width.jpeg" width="800" alt="Vertical_Layout_Example_1_Result_with_Layout_Element_and_Preferred_Width.jpeg" /><figcaption aria-hidden="true">Vertical_Layout_Example_1_Result_with_Layout_Element_and_Preferred_Width.jpeg</figcaption>
</figure>

## Related Components

</translate>

[VerticalLayout
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink")
[VerticalLayout
(Component){{#translation:}}](Category:Components:UIX:Layout{{#translation:}} "wikilink")