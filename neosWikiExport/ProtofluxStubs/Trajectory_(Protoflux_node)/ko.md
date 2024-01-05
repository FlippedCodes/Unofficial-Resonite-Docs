<languages></languages>

입력된 변수에 대한 궤적의 위치값을 추적하는 기능을 제공합니다. 투사체의
포물선 이동을 시뮬레이션 하는데 사용하실 수 있습니다.

## 사용방법

출력의 `position`은 입력측 `Time`에 기반한 위치정보를 반환합니다.
위치값은 Time이 같더라도 다른 인자에 의해 변경될 수 있습니다.

입력측 `gravity`는 투사체가 영향을 받을 중력값을 지정합니다. 예를들어,
지구의 중력을 시뮬레이션 한다면 수직방향인 y축의 값을 음수로 지정하여
(X:0, Y:-9.81, Z:0)과 같이 설정해 볼 수 있습니다.

`Initial Velocity`는 초기 속도를 지정합니다. 이는 `Time`값이 0일때부터
가지는 속도값이 됩니다.

`Drag`는 공기저항을 의미합니다. 주의하실 점은 저항을 무시하고자 0을
입력하게 되면 계산이 중단되므로, 0보다는 큰 값(예. 0.000001)을 지정해야
한다는 것 입니다.

## 예제

## 노드 메뉴(Node Menu)

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink")
[Trajectory](Category:Protoflux{{#translation:}} "wikilink")
[Trajectory](Category:Protoflux:Math:Physics{{#translation:}} "wikilink")