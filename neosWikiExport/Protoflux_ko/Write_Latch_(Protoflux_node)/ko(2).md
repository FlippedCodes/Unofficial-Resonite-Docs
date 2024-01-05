<languages></languages>

이 노드는 `Set` 또는 `Reset` 중 Impulse가 들어오는 곳에 따라 입력측의
`SetValue` 또는 `ResetValue`의 값을 출력인 `Target`로 전달합니다.

## 사용방법

이 노드는 처음 꺼내면, 입력측 `Value`는 dummy 자료형(자료형이 정해지지
않은 상태를 의미)을 가집니다. 입력에 사용 가능한 데이터를 연결하면
자료형이 결정됩니다. 입력 자료형이 경정되면 출력측 `Target`의 자료형도
동일하게 지정됩니다.

`Set`에 impulse가 들어오면, `OnSet`에 연결된 입력값을 `Target`에 쓰고
`OnSet`으로 impulse를 전송합니다.

`Reset`에 impulse가 들어오면, `OnReset`에 연결된 입력값을 `Target`에
쓰고 `OnReset`으로 impulse를 전송합니다.

이 노드는 Variable 노드, 구성요소의 필드등의 값을 변경합니다. 이렇게
값이 변경되면 세션내 다른 사용자들에게 변경된 정보가 동기화 됩니다. 값의
변경 정보가 동기화 되는것은 매 업데이트시 이루어지므로, 업데이트 주기가
오기 전에 값이 여러번 변경될 경우 마지막 값만 적용되어 동기화됩니다.
부가적으로, 업데이트 주기가 오기 전 값이 여러번 변경되더라도 마지막으로
동기화된 값과 업데이트 직전 동기화 대기중인 값이 같을 경우 이 값은
동기화되지 않습니다.(ex. 1(직전 동기화된 값) -> 2(업데이트 주기가 오기전
변경된 값) -> 3(업데이트 주기가 오기전 변경된 값) -> 1(동기화 대기상태인
값)인 경우, 결국 동일한 값이므로 동기화 절차를 수행하지 않습니다). 이런
동기화 절차를 수행하므로 매 업데이트마다 값을 계속 변경하는 것은
불필요한 트래픽을 유발하므로, 특정한 규칙성을 가진 값의 변경은
**[드라이브](drive "wikilink")** 노드들을 이용하는것을 추천합니다.
**[참고정보](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2590#issuecomment-874788205).**

Generally, with a Write/Write Latch node, one can only write to
component or slot fields which are value-typed (e.g. bools, ints,
strings, floats), whereas reference-typed fields (e.g. slot, user,
IAssetProvider<AudioClip> etc.) require [Write
Ref](Write_Ref_(Protoflux_node) "wikilink"). However, it *is* possible
to write to reference-typed Protoflux variable nodes using a Write/Write
Latch node where it *isn't* possible to do so with Write Ref. It is also
possible to write to reference-typed fields using Write/Write Latch if
the input `SetValue` and `ResetValue` are RefIDs, rather than reference
datatypes - it is generally not recommended to work with raw RefIDs
though.

## 예제

아래의 두 이미지는 동일한 기능을 수행하지만 로직스의 구성이 다른 예를
보여 줍니다.[Write](Write_(Protoflux_node) "wikilink") 노드 2개를
이용하여 유사하게 만들어진 것입니다. 입력과 출력이 정확히 일치하지
않다는 점은 인지하고 봐 주시면 됩니다.

<figure>
<img src="Protoflux.Actions.WriteLatch.Example.jpg" title="Protoflux.Actions.WriteLatch.Example.jpg" width="600" alt="Protoflux.Actions.WriteLatch.Example.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.WriteLatch.Example.jpg</figcaption>
</figure>

<figure>
<img src="Protoflux.Actions.Write.imp_WriteLatch.jpg" title="Protoflux.Actions.Write.imp_WriteLatch.jpg" width="600" alt="Protoflux.Actions.Write.imp_WriteLatch.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Write.imp_WriteLatch.jpg</figcaption>
</figure>

## 노드 메뉴(Node Menu)

}}

[Write Latch](Category:Protoflux{{#translation:}} "wikilink") [Write
Latch](Category:Protoflux:Actions{{#translation:}} "wikilink")