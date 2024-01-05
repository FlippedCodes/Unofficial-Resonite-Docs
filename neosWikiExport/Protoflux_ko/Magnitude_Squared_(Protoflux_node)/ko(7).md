<languages></languages> 부모객체로부터 멀고 가까움을 가늠할 수 있는
Float 자료형의 값을 확인할 수 있습니다.

## 입력인자 & 반환값

|               |                            |            |
|---------------|----------------------------|------------|
| 자료형 대표색 | 인자명                     | 자료형     |
|               | Float type(Will be update) | Float type |

입력인자(Input parameters)

|               |            |                                                                         |
|---------------|------------|-------------------------------------------------------------------------|
| 자료형 대표색 | 인자명     | 자료형                                                                  |
|               | \* (Float) | [Float](Float_(Protoflux_node)_(Variables){{#translation:}} "wikilink") |

반환값

<figure>
<img src="Protoflux.Operator.MagSqr.jpg" title="Protoflux.Operator.MagSqr.jpg" width="300" alt="Protoflux.Operator.MagSqr.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.MagSqr.jpg</figcaption>
</figure>

## 사용방법

부모객체로부터 떨어진 정도를 구합니다. 루트(√) 연산을 거치기 전의 값을
반환하므로, 많은 양의 객체간 거리 판별 시 유사한 기능을 하는 다른 두
가지 노드(Magnitude(\|V\|), Distance)에 비해 시스템 자원이 덜
소비됩니다. 이 노드는 단순히 거리의 멀고 가까움만을 판별하는 용도로
추천됩니다. 만약, 정확한 거리가 필요한 경우 결과에 루트 연산을
수행하시거나 앞서 설명한 유사 노드를 사용해 주시기 바랍니다.

반환값 해석은 수치값이 크면 클수록 먼 거리임을 의미하지만, Float 1.0이
1M(Meter)를 의미하지는 않습니다.

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