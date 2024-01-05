<languages></languages>

PBS Metallic is a
[physically-based](https://en.wikipedia.org/wiki/Physically_based_rendering)
material that uses a special Metallic-Roughness (MR) map to store data
about the metallicity and roughness of an object. It is based on the
Unity 5 Standard PBR Setup.

For information about the maps and their properties read on!

## Usage

## Behaviour

### Metallic Maps

This Material type uses a Metallic Map for determining:

-   Metallic Levels
-   Smoothness

This information is packed into different channels within the Metallic
Map using the following pattern:

-   **R(Red Channel)**: Metallic
    -   The Red Channel determines how metallic a material is.
    -   Metals are usually 1 in this channel and non-metals are 0
    -   When choosing Metallic values, do remember that items in the
        real world aren't perfect. Imperfections and randomness is good!
        Avoid choosing values that are 0(Non-Metallic) or 1(Maximum
        Metallic)
-   **Alpha**: Smoothness
    -   High Alpha means High Smoothness
    -   Low Alpha is Low Smoothness

Resonite uses the Unity Standard Shader Maps for this Material, for more
information please see [this
guide](https://docs.unity3d.com/Manual/StandardShaderMaterialCharts.html)
for more information.

### Other Maps

**TODO**

Unity declares Green : Occlusion and Height as interchangeable and
usable for both slots

<https://forum.unity.com/threads/standard-shader-metallic-texture-packing.314283/>

R: Metalness

G: Occlusion/Height

A: Smoothness

## Examples

## Further Reading

You may be interested in the following other pages:

-   [PBS Specular](PBS_Specular "wikilink") - Documentation on Resonite'
    PBS Specular Material. This is often paired or compared to PBS
    Metallic.

[PBS_Metallic
(Component){{#translation:}}](Category:Components{{#translation:}} "wikilink")
[PBS_Metallic
(Component){{#translation:}}](Category:Components:Assets:Materials{{#translation:}} "wikilink")
[Category:Materials:PBS](Category:Materials:PBS "wikilink")