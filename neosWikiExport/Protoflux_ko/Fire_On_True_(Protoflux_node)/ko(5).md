<languages></languages>

이 노드는 입력측 Condition이 False였던 상태에서 True가 되면, 출력측에
임펄스를 발생시킵니다.

## 사용방법

노드에서 임펄스가 나가는 조건은 입력 `Condition`이 False 였던 상태에서
True가 되었을때 이므로, 계속 사용해야 한다면 임펄스 발생후 Condition을
False로 초기화 하세요.

이 노드의 두 번째 입력인 `OnlyForUser`는 `Condition`가 True일때, 이를
발생시키는 사용자를 지정하기위해 사용됩니다. 다음을 참조해 주세요.:

-   임펄스를 `OnlyForUser`에 지정된 사용자로부터 발생시킵니다.

<!-- -->

-   `OnlyForUser`가 지정되지 않은 경우, 2가지 방식으로 처리 되는데
    노드가 아바타 내의 자식으로 포함되어 있는 경우 아바타의 사용자가
    자동으로 할당되고, 사용중인 아바타가 아닌 다른 오브젝트인 경우 세션
    내 모든 사용자로 지정됩니다.

<!-- -->

-   로컬 사용자에 대해 사용하는 경우, [Local User(로직스
    노드)를](Local_User_(Protoflux_node)/ko "wikilink") `OnlyForUser`에
    연결하는 대신, [Local Fire On True(로직스
    노드)를](Local_Fire_On_True_(Protoflux_node)/ko "wikilink")
    이용하세요.

종종 동작을 수행한 플레이어에게만 어떠한 효과가 나와야 한다던가 하는
이유등으로 임펄스를 발생시킨 플레이어를 정확히 식별해야 하는 경우가
있습니다. 이럴때는 `OnlyForUser`에 사용자 정보를 할당하여 사용하는것이
좋습니다.

### Multiple Impulses

This node will only fire one impulse in the event that `Condition`
becomes True multiple times within a single impulse chain. Similarly
this node will not fire an impulse if the `Condition` becomes True and
then reset to False within a single impulse chain.

## 예제

## 노드 메뉴(Node Menu)

[Fire On True](Category:Protoflux{{#translation:}} "wikilink") [Fire On
True](Category:Protoflux:Flow{{#translation:}} "wikilink")