<languages></languages> 3개의 단일 데이터를 한개의 복합 데이터 타입으로
만들어줍니다. 입력에 연결되지 않은 항목은 각 자료형별로 가지고 있는
기본값이 할당됩니다.

## 입력인자 & 반환값

|               |        |                                                     |
|---------------|--------|-----------------------------------------------------|
| 자료형 대표색 | 인자명 | 자료형                                              |
|               | x      | 비 복합형 데이터(끝에 2,3,4가 붙은 자료형이 아닌것) |
|               | y      | 비 복합형 데이터(끝에 2,3,4가 붙은 자료형이 아닌것) |
|               | z      | 비 복합형 데이터(끝에 2,3,4가 붙은 자료형이 아닌것) |

입력인자(Input parameters)

|               |        |        |
|---------------|--------|--------|
| 자료형 대표색 | 인자명 | 자료형 |
|               | \*     | \*3    |

반환값

<figure>
<img src="Protoflux.Operator.Pack_xyz.jpg" title="Protoflux.Operator.Pack_xyz.jpg" width="160" alt="Protoflux.Operator.Pack_xyz.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.Pack_xyz.jpg</figcaption>
</figure>

## 사용방법

복합형3 자료형을 만들어줍니다. 단, 입력측 데이터는 모두 동일한 자료형을
가져야 합니다.

## 예제

본 예제에 쓰인 Float3는 주로 객체의 위치나 배율등을 설정하기 위해
사용됩니다. 3개의 float 타입 데이터를 한개의 정보(float3)로 묶어줍니다.
유니티로 치면 Vector3에 해당하고, C언어에서 3개의 float 변수가 있는
structure를 만드는 것이라 생각하시면 됩니다.

<figure>
<img src="Protoflux.Operator.Pack_xyz.example.jpg" title="Protoflux.Operator.Pack_xyz.example.jpg" width="300" alt="Protoflux.Operator.Pack_xyz.example.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.Pack_xyz.example.jpg</figcaption>
</figure>

<figure>
<img src="Protoflux.Operator.Pack_xyz.example.jpg" title="Protoflux.Operator.Pack_xyz.example.jpg" width="300" alt="Protoflux.Operator.Pack_xyz.example.jpg" /><figcaption aria-hidden="true">Protoflux.Operator.Pack_xyz.example.jpg</figcaption>
</figure>

## 노드 메뉴(Node Menu)

[Pack xyz](Category:Protoflux{{#translation:}} "wikilink") [Pack
xyz](Category:Protoflux:Operators{{#translation:}} "wikilink")