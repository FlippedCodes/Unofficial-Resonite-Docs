<languages></languages>
boolスイッチで入力データからフィルタリングします。

## Inputs & Outputs

|       |         |              |                                                               |
|-------|---------|--------------|---------------------------------------------------------------|
| Color | Label   | Default type | Usable types                                                  |
|       | OnTrue  | float2       | float2, float3, float4, int2, int3, int4, uint2, uint3, unit4 |
|       | OnFalse | float2       | float2, float3, float4, int2, int3, int4, uint2, uint3, unit4 |
|       | Mask    | bool2        | bool2, bool3, bool4                                           |

Inputs

|       |            |                                            |
|-------|------------|--------------------------------------------|
| Color | Label      | Type                                       |
|       | \* (float) | Follow input(OnTrue or OnFalse) data types |

Outputs

<figure>
<img src="Protoflux.Operator.Mask.jpg" title="Protoflux.Operator.Mask.jpg" width="300" alt="Protoflux.Operator.Mask.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.Mask.jpg</figcaption>
</figure>

## 使用方法

Bool(ブーリアン:
True/False)型の入力スイッチで出力を行います。スイッチが全て "True
"に設定されている場合、出力データは最初の入力パラメータと同じになります。

## 一例

<img src="Protoflux.Operator.Mask.Example.jpg" title="fig:Protoflux.Operator.Mask.Example.jpg" width="500" alt="Protoflux.Operator.Mask.Example.jpg" />
\[1,2\]がTrue側、\[3,4\]がFalse側です。一番上のスイッチはTrueです。つまり、True側からトップデータ(1)を取得していることになります。また、下のスイッチをFalseにすると、False側から下のデータ(4)を取得することになります。

## Node Menu

[Mask](Category:Protoflux{{#translation:}} "wikilink")
[Mask](Category:Protoflux:Operators{{#translation:}} "wikilink")