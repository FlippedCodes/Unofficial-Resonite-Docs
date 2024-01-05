<languages/>

# 개요

**동적변수**를 사용하면 변수명을 이용하여 데이터를 읽고 쓰기가
가능합니다. 따라서 대규모 시스템의 데이터를 쉽게 관리 할 수 있습니다.
모든 데이터는 식별자가 지정되어 있으며, 데이터들을 각기 다른
**Space(네임스페이스)**으로 분할하여 사용할 수 있습니다.

# 변수명의 제약조건

동적변수 사용시 필요한 변수명은 몇가지 제약 조건과 한계점등이
존재합니다.

공간 및 변수명에 **포함될 수 없는** 것:

-   기호
    -   C#에 정의되어 있는
        것[Char.IsSymbol](https://docs.microsoft.com/en-us/dotnet/api/system.char.issymbol?view=net-5.0)
-   모든 구두점과 빈공백
    -   C#에 정의되어 있는
        것[Char.IsPunctuation](https://docs.microsoft.com/en-us/dotnet/api/system.char.ispunctuation?view=net-5.0)
        and C#
        [Char.IsWhiteSpace](https://docs.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-5.0)
-   예외 : 마침표(.), 밑줄(_), 공백( )

# 사용방법

동적변수의 명칭은 딱히 제한이 없으나, 몇가지 예외(C#에서 정의된 밑줄,
마침표, 띄어쓰기)를 제외한 나머지 문양이나 기호 및 공백문자등은 사용하실
수 없습니다. 동적 변수임을 구분하거나 또는 특정 범주로 분할하기 위해 /로
끝나는 명칭(예. 네임스페이스나 카테고리)을 부여하는것을 추천합니다.
선택사항으로 변수명 앞쪽에 각 공간(변수 가 유효한 범위)을 구분하기 위한
기호로 / 를 사용할 수 있습니다. (ex. mynamespace/variablename)

유효한 명칭:

-   Health -- 네임스페이스는 없는 그냥 Health 변수
-   World/Color -- World라는 네임스페이스에 속한 Color라는 이름을 가진
    변수
-   MyCoolSystem/Score -- MyCoolSystem이라는 네임스페이스에 속한
    Score라는 이름을 가진 변수

## 영역/구역(예. 네임스페이스나 카테고리)

동적변수는
**[DynamicVariableSpace](DynamicVariableSpace_(Component) "wikilink")**
구성요소를 포함하는 슬롯이나 그 아래 어디에나있을 수 있습니다.

따라서 루트노드의 변수는 어디에서나 접근 가능한 전역변수가 됩니다. 만약
아바타에 변수가 선언되어 있다면, 그 변수는 아바타 내에서만 사용할 수
있습니다.

## 변수

동적변수를 사용하는 가장 간단한 방법은 값(int, float, String 등)을
이용하는 [DynamicValueVariable
<T>과](DynamicValueVariable_%_601_(Component) "wikilink") 참조(객체 :
Slot, User 등)를 이용하는 [DynamicReferenceVariable
<T>](DynamicReferenceVariable_%_601_(Component) "wikilink") 구성요소를
사용하는 것입니다.

이러한 구성요소는 값이나 참조 정보를 직접 가지고 있게 되어, 두 개의 변수
구성요소가 변수명만 동일하다면 가지고있는 내용도 동일하게 됩니다.

## 속성

구성요소의 값필드나 참조필드를 동적변수로 사용하려면 **[DynamicField
<T>](DynamicField_%_601_(Component) "wikilink")** 또는
**[DynamicReference
<T >](DynamicReference_%_601_(Component) "wikilink")** 를 이용하세요.
DynamicField는 값필드를, DynamicReference는 참조필드를 이용할 경우
사용됩니다.

(TODO: clarify value vs. reference types; I think this isn't fully
correct)

## 드라이버(선형 데이터 필드)

구성요소 내 필드중 슬라이더가 장착된 유형의 필드를 참조하는데 사용할 수
있습니다. 마찬가지로 값 유형은
**[DynamicValueVariableDriver<T>](DynamicValueVariableDriver%601_(Component) "wikilink")**를
사용하고, 참조형은
**[DynamicReferenceVariableDriver<T>](DynamicReferenceVariableDriver%601_(Component) "wikilink")**
구성요소를 사용합니다.

## 구성요소 자료형<T> 목록에 없는 자료형

동적변수 구성요소 생성시 일반적인 "공통 자료형(Common types)"를 이용하실
수 있습니다. 만약 목록에 없는 자료형의 경우 직접 입력하여 지정하셔야
합니다. 자세한 것은 **[구성요소의
복합자료형](Complex_Types_in_Components/ko "wikilink")** 문서를 참조해
주세요.

## 경고

동적변수의 생성, 복제, 이동은 변수를 지정된 Space에 **바인딩** 되어야
합니다. 시각적으로는 동적 변수가 이미 있는것처럼 보이지만, 실제로
내부에서는 이를 수행하는데 약간의 시간이 소요됩니다. 그래서, 해당 작업이
완료될때까지 읽거나 쓰기가 불가합니다.

따라서, **[Create Dynamic
Variable](Create_Dynamic_Variable`1_(Protoflux_node) "wikilink")**,
**[Write Or Create Dynamic
Variable](Write_Or_Create_Dynamic_Variable`1_(Protoflux_node) "wikilink")**,
**[Duplicate Slot](Duplicate_Slot_(Protoflux_node) "wikilink")**, **[Set
Parent](Set_Parent_(Protoflux_node) "wikilink")**를 이용한 작업은 1\~3
프레임 정도의 지연이 발생되므로 **[Updates
Delay](Updates_Delay_(Protoflux_node) "wikilink")**, **[Updates Delay
With Value](Updates_Delay_With_Value_(Protoflux_node) "wikilink")**
노드등과 함께 사용하세요.

[Category:Protoflux Tutorials](Category:Protoflux_Tutorials "wikilink")