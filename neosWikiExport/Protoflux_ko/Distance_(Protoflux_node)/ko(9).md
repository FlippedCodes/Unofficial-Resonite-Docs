<languages></languages> 두개의 객체간 실측거리를 Float 자료형으로
반환합니다. 값이 클수록 객체간 거리가 멀다는 것을 의미합니다.

## 입력인자 & 반환값

|               |        |             |                  |                                       |
|---------------|--------|-------------|------------------|---------------------------------------|
| 자료형 대표색 | 인자명 | 기본 자료형 | 사용 가능 자료형 | 연결 가능 자료형                      |
|               | A      | float2      | float3, float4   | int2, int3, int4, uint2, uint3, uint4 |
|               | B      | float2      | float3, float4   | int2, int3, int4, uint2, uint3, uint4 |

입력인자(Input parameters)

|               |            |                                                                         |
|---------------|------------|-------------------------------------------------------------------------|
| 자료형 대표색 | 인자명     | 자료형                                                                  |
|               | \* (float) | [float](Float_(Protoflux_node)_(Variables){{#translation:}} "wikilink") |

반환값

<figure>
<img src="Protoflux.Operator.Distance.jpg" title="Protoflux.Operator.Distance.jpg" width="300" alt="Protoflux.Operator.Distance.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.Distance.jpg</figcaption>
</figure>

## 사용방법

두 지점사이의 실거리를 구하는 노드인지라 Magnitude(\|V\|) 노드처럼
루트(√) 연산을 거치므로 적당한 수준에서 사용하시기 바랍니다. Float 1.0은
1M(Meter)를 의미합니다.

## 예제

<img src="Protoflux.Operator.Mag&amp;MagSqr&amp;Distance.Example.jpg" title="fig:Protoflux.Operator.Mag&amp;MagSqr&amp;Distance.Example.jpg" width="500" alt="Protoflux.Operator.Mag&amp;MagSqr&amp;Distance.Example.jpg" />
[<nowiki>](Magnitude_Squared_(Protoflux_node){{#translation:}} "wikilink")
노드와
[<nowiki>](Magnitude_(Protoflux_node){{#translation:}} "wikilink") 노드
그리고 [Distance](Distance_(Protoflux_node){{#translation:}} "wikilink")
노드의 차이점을 보여줍니다.

## 노드 메뉴(Node Menu)

[Distance](Category:Protoflux{{#translation:}} "wikilink")
[Distance](Category:Protoflux:Operators{{#translation:}} "wikilink")