<languages></languages> <translate>

## Introduction

The **HorizontalLayout** component is used to layout child objects in a
row.

The order of the objects depends on each child's OrderOffset property.
Normally these are 0, but if you change it, the children will be ordered
by increasing OrderOffset, with children of equal OrderOffset being
ordered by some effectively random process.

## Usage

## Behavior

The HorizontalLayout component places its child layout elements next to
each other, side by side. Their widths are determined by their
respective minimum, preferred, and flexible widths according to the
following model:

1.  The minimum widths of all the child layout elements are added
    together and the spacing between them is added as well. The result
    is the minimum width of the HorizontalLayout.
2.  The preferred widths of all the child layout elements are added
    together and the spacing between them is added as well. The result
    is the preferred width of the HorizontalLayout.
3.  If the HorizontalLayout is at its minimum width or smaller, all the
    child layout elements will also have their minimum width.
4.  The closer the HorizontalLayout is to its preferred width, the
    closer each child layout element will also get to their preferred
    width.
5.  If the HorizontalLayout is wider than its preferred width, it will
    distribute the extra available space proportionally to the child
    layout elements according to their respective flexible widths.

For minimum, preferred, and flexible heights of child slots, use
[LayoutElement](LayoutElement_(Component) "wikilink").

## Examples

## Related Components

</translate>

[HorizontalLayout
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[Category:ComponentStubs](Category:ComponentStubs "wikilink")
[HorizontalLayout
(Component){{#translation:}}](Category:Components:UIX:Layout{{#translation:}} "wikilink")