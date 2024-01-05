<languages/>UIX is Resonite's UI system. It allows you to create
two-dimensional user interfaces, and is conceptually similar to the
[Unity UI](https://docs.unity3d.com/Manual/com.unity.ugui.html) system.
It underpins the Dash Menu and Scene Inspector.

A useful UIX demo, *UIX Canvas*, can be spawned with the [Developer
Tooltip](Developer_Tooltip "wikilink"), found under the Objects
category. It provides examples of layouts, images, buttons, and sliders.

# Concepts

## Canvases

A UI requires a [Canvas](Canvas_(Component) "wikilink") at its root. The
Canvas defines the size of the UI.

## RectTransforms

Every slot involved in a UI must have a
[RectTransform](RectTransform_(Component) "wikilink") on it.
RectTransforms are automatically added when you attach other UI
components. The RectTransform determines the boundaries of that UI
element, expressed as a fraction of the total space available -- so a
default RectTransform has anchors at 0,0 and 1,1.

## Layouts

Whilst you can manually position elements by adjusting their
RectTransforms, you often want this to be handled automatically. A
layout overrides the RectTransforms of its slot's children. For example,
the HorizontalLayout will try to position its children in a horizontal
line.

**WARNING**: Layouts calculate the positions and sizes of their children
based on the children themselves. If you modify or add or delete a child
and don't get the expected result, you may need to force recalculation.
The only way to do this currently is to duplicate your entire object (or
maybe just the layout?) and delete the original.

Since layouts depend on the order of their children, and you can't drag
children around in the inspector, you must specify a child's OrderOffset
property. Normally these are 0, but if you change it, the children will
be ordered by increasing OrderOffset, with children of equal OrderOffset
being ordered by some effectively random process.

Again, if you change the OrderOffset of a child, your layout will have
to be recalculated, which may run into the above warning.

## Graphics

To actually display things, your UI needs one or more Graphics
components. [Image](Image_(Component) "wikilink") will fill the element,
optionally taking a material (to define its appearance) and sprite (to
define its shape). Other elements include
[Text](Text_(Component) "wikilink"), to display text, and
[Mask](Mask_(Component) "wikilink"), to hide parts of child UI elements.

## Interaction

Interaction components allow for input.
[Button](Button_(Component) "wikilink") will respond visibly to hovering
and pressing, and will trigger other components on the slot (as well as
on child slots). [Slider](Slider_(Component) "wikilink") works
similarly, but can also control a child element's RectTransform to move
it around.

# Recipes

## Empty canvas

1.  Using the [Developer Tooltip](Developer_Tooltip "wikilink"), Create
    New > Empty Object.
2.  In that object, Attach Component > UIX >
    [Canvas](Canvas "wikilink").
3.  Change the Scale of the object to 0.001 on all axes to get the
    object to be a more reasonable size.
4.  You can then change the Canvas's Size x and y (in pixels) to your
    liking.
5.  Next, on the same empty object, Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink"). You can change the image's
    Tint to change the base color of the canvas.
6.  Again using the Developer Tooltip, Create New > Materials > UI > UI
    Unlit.
7.  Change the material's ZWrite property to On, and the OffsetFactor
    and OffsetUnits properties to 1.
8.  Grab the material ball and click on your empty object's Image
    Material slot to load it in. This fixes the "bleed-through" effect
    which would cause different UIX objects to bleed through each other
    if placed on top of each other.
9.  You may also want to make the canvas grabbable (Attach Component >
    Transform > Interaction >
    [Grabbable](Grabbable_(Component) "wikilink")).

You can now add children to be displayed on the canvas.

[ProbablePrime](User:ProbablePrime "wikilink")'s public folder, under
Tutorials \> UIX, contains a CanvasTemplate which has already done all
the above steps for you. Simply spawn one out and start from there.

## A button

1.  Add a child to your canvas (or layout or whatever) and call it
    Button.
2.  In that object, Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink"). You can change the image's
    Tint to change the base color of the button.
3.  Change the RectTransform's AnchorMin/Max to add a border around the
    button. This effectively tells the parent where the child is and how
    to scale it.
    -   AnchorMin (x,y) is the lower left corner of a rectangle on the
        parent canvas that the child should be fit into, ranging from 0
        to 1. (0,0) is the lower left of the parent.
    -   AnchorMax (x,y) is the upper right corner of a rectangle on the
        parent canvas that the child should be fit into, ranging from 0
        to 1. (1,1) is the upper right of the parent.
    -   Adding a small border of, say, 5% of the parent's size, means
        the AnchorMin should be (0.05,0.05) (i.e. 0,0 plus 5%) and
        AnchorMax should be (0.95,0.95) (i.e. 1,1 minus 5%).
4.  Attach Component > UIX > Interaction >
    [Button](Button_(Component) "wikilink"). Based on the image's Tint,
    the button will automatically fill out the colors for its normal,
    highlight, press, and disabled states.
5.  You may add text to the button:
    1.  Create a child object of the button and call it Text.
    2.  On that child, Attach Component > UIX > Graphics >
        [Text](Text_(Component) "wikilink").
    3.  Change the text to what you want.
    4.  Alter the font size, set up autosize, change the alignment to
        what you want.
6.  You can hook the button up to Protoflux by creating a [Button
    Events](Button_Events_(Protoflux_node) "wikilink") node, dragging
    out the Button interface card, and hooking it up to the Button
    Events node.

You can also put an icon on a button.

1.  On the Button object, Attach Component > Assets >
    [SpriteProvider](SpriteProvider_(Component) "wikilink").
2.  Drop your chosen image into the Texture property of the
    SpriteProvider.
3.  Grab the SpriteProvider and drop it into the Sprite property of the
    Button's Image.
4.  Use the Tint property on the Image to color the icon.
5.  You can parent the Button to another object with an Image to set the
    background.

[ProbablePrime](User:ProbablePrime "wikilink")'s public folder, under UI
Stuff \> Icons \> Shapes, has many icons for your use.

## Scrollable text

1.  Add a child to your canvas (or layout or whatever) and call it Mask.
2.  In that object, Attach Component > UIX >
    [Mask](Mask_(Component) "wikilink"). This effectively makes any
    graphical elements from children that wander outside the
    RectTransform invisible.
3.  In the same object, Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink").
4.  Turn on the Mask's ShowMaskGraphic property.
5.  Add a child to the Mask object and call it ScrollRect.
6.  In that object, Attach Component > UIX > Interaction >
    [ScrollRect](ScrollRect_(Component) "wikilink").
7.  In the same object, Attach Component > UIX > Layout >
    [ContentSizeFitter](ContentSizeFitter_(Component) "wikilink").
8.  Set the ContentSizeFitter's VerticalFit property to MinSize.
9.  In the same object, Attach Component > UIX > Layout >
    [VerticalLayout](VerticalLayout_(Component) "wikilink").
10. Add a child to the ScrollRect object and call it Content.
11. In that object, Attach Component > UIX > Graphics >
    [Text](Text_(Component) "wikilink").
12. Change the text to what you want. Typically for long text that you
    get from a file, you would import a text file from your computer,
    inspect the result, navigate to the text component (object >
    ScrollRect > Content), and grab and drag the Text component's
    Content property into your object's Text Content.
13. Alter the font size, set up autosize, change the alignment to what
    you want.
14. Change the font color to something that will show up against the
    mask image color!

## A simple vertical layout

1.  Add a child to your canvas (or layout or whatever) and call it
    Layout.
2.  In that object, Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink"). Set the Tint to something
    that will differentiate this object from child objects.
3.  Also in that object, Attach Component > UIX > Layout >
    [VerticalLayout](VerticalLayout_(Component) "wikilink").
4.  Change all the Padding and the Spacing properties on the
    VerticalLayout to 4.
5.  Add a child of Layout, and call it Element.
6.  In that object, Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink"). Set the Tint to something
    that will differentiate this object from the layout object.
7.  Duplicate this object a few times. They will all be children of
    Layout.
8.  You may need to heed the warning above, and duplicate the canvas to
    get the layout to recalculate.
9.  You can add [LayoutElement](LayoutElement_(Component) "wikilink") to
    each Element. This tells the parent layout how to calculate widths
    and heights.

# Tutorials

[ProbablePrime](User:ProbablePrime "wikilink")'s series on UIX:

1.  [Canvases and
    rectangles](https://www.youtube.com/watch?v=cLtD7uWrduI)
2.  [Materials, buttons, and
    text](https://www.youtube.com/watch?v=lCGfFJYOj3o)
3.  [Text scrolling](https://www.youtube.com/watch?v=cTcOdVw1cEQ)
4.  [Images & sprites](https://www.youtube.com/watch?v=FUUSjTwhvHk)
5.  [Masking images & nine
    slices](https://www.youtube.com/watch?v=WPL776reVFw)
6.  [Checkboxes](https://www.youtube.com/watch?v=B2G708bnBeM)
7.  [Progress bars](https://www.youtube.com/watch?v=wwvyTqjC5Q0)
8.  [Text fields](https://www.youtube.com/watch?v=ReERNLr-CJo)
9.  [Sliders](https://www.youtube.com/watch?v=kqF4vF_iYPU)
10. [Layouts](https://www.youtube.com/watch?v=1-FF9IolGZw)
11. [Common UI interactions &
    UIX](https://www.youtube.com/watch?v=rkTmciUYJlY)
12. [AxisMultiViewportScanner for sliding forms or
    UI](https://www.youtube.com/watch?v=kbASFui7YWk)
13. [Creating a facet](https://www.youtube.com/watch?v=qxJzTZGyeqw)

<youtube>cLtD7uWrduI</youtube>