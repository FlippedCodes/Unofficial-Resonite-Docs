<languages></languages> 대상(예. 부모객체)으로부터의 정확한 거리를 Float
자료형으로 구할 수 있습니다.

## 입력인자 & 반환값

|               |        |             |                                                               |
|---------------|--------|-------------|---------------------------------------------------------------|
| 자료형 대표색 | 인자명 | 기본 자료형 | 사용 가능한 자료형                                            |
|               | A      | float2      | float2, float3, float4, int2, int3, int4, uint2, uint3, uint4 |

입력인자(Input parameters)

|               |            |                                 |
|---------------|------------|---------------------------------|
| 자료형 대표색 | 인자명     | 자료형                          |
|               | \* (float) | 입력인자의 자료형을 따라갑니다. |

반환값

<figure>
<img src="Protoflux.Operator.Mag.jpg" title="Protoflux.Operator.Mag.jpg" width="300" alt="Protoflux.Operator.Mag.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.Mag.jpg</figcaption>
</figure>

## 사용방법

부모객체로 부터 거리를 구합니다. 값이 클수록 먼 거리를 의미하며
부모객체가 최상위 객체인 경우 Float 1.0은 1M(Meter)로 환산됩니다. 만약,
정확한 거리 값이 아니라 멀고 가까움만을 구하고자 한다면 연산 부담이 적은
[<nowiki>](Magnitude_Squared_(Protoflux_node){{#translation:}} "wikilink")
노드를 이용해 주세요.

## 예제

<img src="Protoflux.Operator.Mag&amp;MagSqr&amp;Distance.Example.jpg" title="fig:Protoflux.Operator.Mag&amp;MagSqr&amp;Distance.Example.jpg" width="500" alt="Protoflux.Operator.Mag&amp;MagSqr&amp;Distance.Example.jpg" />
[<nowiki>](Magnitude_Squared_(Protoflux_node){{#translation:}} "wikilink")
노드와
[<nowiki>](Magnitude_(Protoflux_node){{#translation:}} "wikilink") 노드
그리고 [Distance](Distance_(Protoflux_node){{#translation:}} "wikilink")
노드의 차이점을 보여줍니다.

## 노드 메뉴(Node Menu)

[Protoflux{{#translation:}}](Category:Protoflux{{#translation:}} "wikilink")
[Protoflux:Operators{{#translation:}}](Category:Protoflux:Operators{{#translation:}} "wikilink")