<languages></languages>

<div class="mw-translate-fuzzy">

**Anchor
Events**ノードでは、アンカーに入ったたユーザのロコモーションデータを取得することができます。

</div>

## 入力と出力

|     |        |                                                         |
|-----|--------|---------------------------------------------------------|
| 色  | ラベル | 型                                                      |
|     | Anchor | [AvatarAnchor](:Category:Types:AvatarAnchor "wikilink") |

Inputs

|     |                  |                                             |
|-----|------------------|---------------------------------------------|
| 色  | ラベル           | 型                                          |
|     | LocomotionUpdate | [Impulse](:Protoflux:Impulses "wikilink")   |
|     | HasPrimary       | [Boolean](:Category:Types:Bool "wikilink")  |
|     | HasSecondary     | [Boolean](:Category:Types:Bool "wikilink")  |
|     | PrimaryAxis      | [Float2](:Category:Types:Float2 "wikilink") |
|     | SecondaryAxis    | [Float2](:Category:Types:Float2 "wikilink") |
|     | PrimaryAction    | [Boolean](:Category:Types:Bool "wikilink")  |
|     | SecondaryAction  | [Boolean](:Category:Types:Bool "wikilink")  |

Outputs

## 使用方法

LocomotionUpdateは、いずれかの値が更新されるたびに発火するインパルスです。
また、アンカーにいるユーザーの入力を返します。

## 例

## ノードメニュー

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink")
[Category:Protoflux{{#translation:}}](Category:Protoflux{{#translation:}} "wikilink")
[Category:Protoflux:Avatar:Anchors{{#translation:}}](Category:Protoflux:Avatar:Anchors{{#translation:}} "wikilink")