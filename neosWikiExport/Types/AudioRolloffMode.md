**AudioRolloffMode** is an [Enum](:Category:Enums "wikilink") used in
many audio processing components (such as
[AudioOutput](AudioOutput_(Component) "wikilink")) and Protoflux nodes
and refers to how the audio's volume decreases as you move away from it
spatially.

|       |                  |
|-------|------------------|
| Color | Type             |
|       | AudioRolloffMode |

# Possible Values

| Value       | Description                                                         | Numeric Value |
|-------------|---------------------------------------------------------------------|---------------|
| Logarithmic | As you move away, the audio will roll off with a Logarithmic Curve. | 0             |
| Linear      | As you move away, the audio will roll off with a Linear Curve.      | 1             |

[Category:Enums](Category:Enums "wikilink")
[Category:Types](Category:Types "wikilink")