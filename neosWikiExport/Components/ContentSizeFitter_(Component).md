<languages></languages> <translate>

## Intoduction

The **ContentSizeFitter** resizes the slots's
[RectTransform](RectTransform_(Component) "wikilink") to fit the minimum
or preferred size of its other *layout* components in width or height.
In effect, it kind of shrink-wraps its contents.

Note that this does not include its children slots, and only works on
slots that have a layout component. For working with children, the
parent with the ContentSizeFitter needs to also have a
[HorizontalLayout](HorizontalLayout_(Component) "wikilink"),
[VerticalLayout](VerticalLayout_(Component) "wikilink"), or
[GridLayout](GridLayout_(Component) "wikilink") component.
[LayoutElement](LayoutElement_(Component) "wikilink") is also a layout
component, as is [Text](Text_(Component) "wikilink") and
[Image](Image_(Component) "wikilink").

## Usage

Fit modes are:

-   Disabled: Don't perform any resizing.
-   MinSize: Resize to the minimum size of the content.
-   PreferredSize: Resize to the preferred size of the content.

## Behavior

The ContentSizeFitter functions as a layout controller that controls the
size of its own layout component. The size is determined by the minimum
or preferred sizes provided by layout components its own slot. Such
layout components can be Image or Text components, VerticalLayout,
HorizontalLayout, or a LayoutElement component.

## Examples

In this example, we'll "shrink-wrap" the example from the
[VerticalLayout](VerticalLayout_(Component) "wikilink") page. We do this
by adding a ContentSizeFitter to the slot with the VerticalLayout, and
setting its HorizontalFit mode to PreferredSize. Since the preferred
width of the vertical layout is simply the maximum of its children's
preferred widths plus the left and right spacing, the vertical layout
shrinks horizontally to equal that preference:

<figure>
<img src="Content_Size_Fitter_Example_1_Horizontal_Result.jpeg" title="Content_Size_Fitter_Example_1_Horizontal_Result.jpeg" width="800" alt="Content_Size_Fitter_Example_1_Horizontal_Result.jpeg" /><figcaption aria-hidden="true">Content_Size_Fitter_Example_1_Horizontal_Result.jpeg</figcaption>
</figure>

If, however, we now also attempt to shrink-wrap vertically by setting
the ContentSizeFitter's VerticalFit to PreferredSize, we end up with no
colored boxes. This is because the children have their preferred heights
set to -1, and that means the heights will simply be set to zero.

<figure>
<img src="Content_Size_Fitter_Example_1_Vertical_Result_with_no_preferred_height.jpeg" title="Content_Size_Fitter_Example_1_Vertical_Result_with_no_preferred_height.jpeg" width="800" alt="Content_Size_Fitter_Example_1_Vertical_Result_with_no_preferred_height.jpeg" /><figcaption aria-hidden="true">Content_Size_Fitter_Example_1_Vertical_Result_with_no_preferred_height.jpeg</figcaption>
</figure>

We can fix this by assigning each child's LayoutElement a preferred
height. For example:

<figure>
<img src="Content_Size_Fitter_Example_1_Vertical_Result_with_preferred_height.jpeg" title="Content_Size_Fitter_Example_1_Vertical_Result_with_preferred_height.jpeg" width="800" alt="Content_Size_Fitter_Example_1_Vertical_Result_with_preferred_height.jpeg" /><figcaption aria-hidden="true">Content_Size_Fitter_Example_1_Vertical_Result_with_preferred_height.jpeg</figcaption>
</figure>

## Related Components

</translate>

[ContentSizeFitter
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink")
[ContentSizeFitter
(Component){{#translation:}}](Category:Components:UIX:Layout{{#translation:}} "wikilink")