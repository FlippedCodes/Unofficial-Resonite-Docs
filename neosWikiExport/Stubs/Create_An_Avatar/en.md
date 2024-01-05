<languages/>

## Initial Import

You will need a rigged model file (.fbx, .glb, etc).

To import the model, you have two options:

-   Drag the model file into the game on your computer
-   Navigate to the model file in your dash menu's File Browser, then
    double-click it.

For most avatars, you can select the following import options:

-   3D Model
-   Regular / Avatar
-   Auto Humanoid Scale
-   Import!

An import status indicator will appear; assuming all goes well, the
model should appear in a few seconds. Once it's ready, spawn an Avatar
Creator from your Home tab. You will see a floating headset and hands.
Position the headset on the face, then align it with the align/center
options in the import dialog. Once it's set, position the hands so that
the wrist is in the right place and the rotation is correct (don't worry
as much about size).

Once everything is in place, hit Create to generate your avatar!

You can equip the avatar by clicking on it with your laser. At this
point, you should save your avatar -- see
[Inventory](Inventory "wikilink") for instructions.

## Materials and Textures

Your model may not have imported along with its textures. If this
happens, you will need to add the textures yourself.

Import the textures in the same way that you imported your model,
selecting "Image/Texture" in the prompt.

Spawn a [Developer Tooltip](Developer_Tooltip "wikilink") from the
Essential Tools folder in your inventory, equip it, and select some part
of your avatar with your secondary input. Then, in your context menu,
open an inspector.

You will be inspecting some part of your avatar. Hit the ⇑ button to go
to the root of your avatar, then navigate into CenteredRoot -> RootNode.
Inside, you should see an Armature, plus one or more slots. Select one
of the non-armature slots; you will want the one with a
SkinnedMeshRenderer on the right. The component contains a list of
materials. Click the ↑ arrow next to each material to examine it.

At this point, you can simply grab a texture in one hand and click on an
empty image slot with your free hand to assign a texture. Do this to
assign textures to each of your materials.

Make sure to save your work!