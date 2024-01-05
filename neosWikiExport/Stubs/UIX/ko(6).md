<languages/>UIX라 함은 네오스의 UI 시스템을 의미하는 용어입니다. UIX는
**[유니티 UI](https://docs.unity3d.com/Manual/com.unity.ugui.html)**와
유사하게, 평면의 사용자 인터페이스를 생성할 수 있도록 해줍니다. 이
기능은 대시 메뉴와 인스펙터를 구현하는 근간이 됩니다.

사용 가능한 UIX 데모는 *UIX Canvas*가 있으며, 이는 **[Developer
Tooltip](Developer_Tooltip "wikilink")**을 통해 생성해 볼 수 있습니다.
툴 장착 후 컨텍스트 메뉴에서 *새로 만들기* 선택 후 *오브젝트* 항목
내에서 *UIX Canvas*를 선택합니다. *UIX Canvas*는 레이아웃, 이미지, 버튼,
슬라이더 등의 예제를 제공합니다.

# 기본개념

## Canvases

UI는 root에 속한 **[Canvas](Canvas_(Component) "wikilink")**를 필요로
합니다. Canvas는 UI의 크기를 정의하지요.

## RectTransforms

UI를 적용할 모든 슬롯은
**[RectTransform](RectTransform_(Component) "wikilink")** 구성요소를
가지고 있어야 합니다. UI 구성요소를 슬롯에 추가하면 RectTransforms가
자동으로 추가 되므로 보통은 직접 추가하실 필요는 없습니다.
RectTransform은 정해진 범위 내에서 사용할 영역의 경계를 결정합니다. --
그래서 RectTransform의 배치정보는 0,0과 1,1을 기본값으로 가집니다.

## Layouts

RectTransform을 이용하여 수동으로 UI을 배치할 수 있으나, 종종 자동으로
배치되는게 필요할 경우(예, 가상키보드, 커스텀UI 등)가 있습니다. Layout
구성요소들은 하위 슬롯의 RectTransforms을 재정의 하므로, 자식의
RectTransforms의 속성들을 무시할 수 있습니다. 예를 들자면
HorizontalLayout같은 컴포넌트는 하위 슬롯의 요소들을 수평으로 배치할려고
하지요.

**경고**: 레이아웃은 소속된 자식슬롯을 기반으로 하여, 위치나 크기 정보를
계산합니다. 자식슬롯을 수정, 추가, 삭제하면 배치정보 같은것을 재계산해야
합니다. 하지만 이때 예상치 못한 결과가 도출될수도 있는데, 이 경우
작업중인 오브젝트 전체나 레이아웃을 복제하고 문제가 발생된 원본을
삭제하는 방식으로 문제를 해결하실 수 있습니다.

레이아웃에 속한 자식 슬롯이 정렬되는 순서는 각 자식 슬롯의 OrderOffset
속성을 수정하여 변경할 수 있습니다. 기본값은 0 이며, 수정하다가 동일한
순번을 지정하는 경우에는 내부적인 임의의 처리과정을 통해 자동으로 정렬될
것입니다.

다시 말하자면, 만약 자식 슬롯들의 OrderOffset 속성값을 변경할 경우
레이아웃이 재계산되어 경고에 고지한 작업을 수행해야 할 수 있습니다.

## Graphics

정확히는 **화면에 보여지는 것**을 의미합니다. UI는 한개 이상의 Graphics
구성요소들로 이루어집니다. **[Image](Image_(Component) "wikilink")**
범주에 속하는 하위 구성요소로는 재질등을 표현하기 위한 머티리얼, 모양을
정의하기 위한 스프라이트 그리고 문자열을 출력하기 위한
**[Text](Text_(Component) "wikilink")** 구성요소 등이 있습니다. 또한, UI
요소의 일부를 숨기기 위한 **[Mask](Mask_(Component) "wikilink")**
컴포넌트도 있습니다.

## Interaction

**[Button](Button_(Component) "wikilink")** 구성요소는 지시선으로
가리킬때 발생되는 Hovering과 터치나 클릭으로 반응하는 Pressing을
이용하여, 사용자 정의의 기능을 수행할 수 있고,
**[Slider](Slider_(Component) "wikilink")**또한 버튼과 비슷하게
작동하지만 자식 요소의 RectTransform 구성요소를 제어하여 스크롤링을
처리할 수 있습니다.

# 만드는 방법

## 텅 빈 Canvas

1.  **[데브툴팁](Developer_Tooltip "wikilink")**을 사용하여 **새로
    만들기** > **빈 오브젝트** 선택
2.  인스펙터에서 **Attach Component** > **UIX** >
    **[Canvas](Canvas "wikilink")**.
3.  슬롯의 X, Y, Z의 Scale 값을 모두 0.001로 설정하여 적당한 크기로
    재조정합니다.
4.  Canvas 구성요소의 속성 중 Size의 X, Y값을 픽셀단위로 입력하여,
    원하는 크기로 만듭니다.
5.  다음으로, 같은 슬롯에 **Attach Component** > **UIX** >
    **Graphics** > **[Image](Image_(Component) "wikilink")** 구성요소를
    추가하고, Tint 속성값을 조정하여 기본 바탕색상을 설정할 수 있습니다.
6.  적용할 머티리얼을 만들기 위해, 또다시 데브툴팁을 장착하고, **새로
    만들기** > **머티리얼(Materials)** > **UI** > **UI Unlit**을
    선택합니다.
7.  해당 머티리얼 속성 중 ZWrite값을 On으로 지정하고, OffsetFactor와
    OffsetUnits 속성값은 1로 할당합니다. (이 설정은, 여러개의 UI 객체가
    중첩되어 있을때 발생하는 블리드쓰루 문제를 해결해 줍니다.)
8.  생성된 머티리얼을 집어서, 새로 만들었던 Image 구성요소의 Material
    속성에 적용합니다.
9.  또한, Canvas를 집을수 있도록 하기 위해 **Attach Component** >
    **Transform** > **Interaction** >
    **[Grabbable](Grabbable_(Component) "wikilink")**를 사용하는 것을
    추천드립니다..

이제 Canvas위에 표시할 요소들을 추가하고 사용할 준비가 끝났습니다.

**[ProbablePrime](User:ProbablePrime "wikilink")**의 공개폴더에서
**Tutorials** \> **UIX**에 상기한 절차가 모두 진행된 CanvasTemplate을
찾아볼 수 있습니다. UIX 개발을 위한 기반으로 사용하실 수 있을겁니다.

## 버튼

1.  Canvas(Layout이든 뭐든) 구성요소가 지정된 슬롯 아래에 새로운 슬롯을
    추가합니다. 방금 추가한 슬롯을 앞으로 버튼이라고 칭하겠습니다.
2.  방금 추가한 슬롯에서 **Attach Component** > **UIX** > **Graphics** >
    **[Image](Image_(Component) "wikilink")**를 선택하여 추가합니다.
    여기서 이미지 색조(Tint 속성)를 변경하여 버튼의 기본 색상을 선택할
    수 있습니다.
3.  또 다른 구성요소인 **RectTransform**의 AnchorMin와 AnchorMax로
    버튼의 크기를 결정합니다. 이것을 설정하면 부모 슬롯의
    RectTransform을 기준으로, 버튼의 크기와 위치를 정의할 수 있습니다.
    -   AnchorMin (x,y) 속성은 좌측 하단의 좌표를 지정합니다. 0이 0%고
        1이 100% 입니다.
    -   AnchorMax (x,y) 속성은 우측 상단의 좌표를 지정합니다.
        마찬가지로, 0이 0%고 1이 100%입니다.
    -   예를들어, 상하좌우로 5%의 여백을 두고 싶다면, AnchorMin과
        AnchorMax의 값을 각각 X:0.05, Y:0.05와 X: 0.95, Y:0.95로
        지정하는 식입니다.
4.  마찬가지로 동일한 슬롯에서 **Attach Component** > **UIX** >
    **Interaction** > **[Button](Button_(Component) "wikilink")**을
    클릭합니다. 이미지의 Tint값에 따라 Button 구성요소의 상태별 색상이
    자동으로 결정됩니다. (변경가능)
5.  이제 버튼에 문자열을 추가하겠습니다.
    1.  버튼 슬롯에 새로운 자식 슬롯을 하나 생성합니다. 이것은 앞으로
        텍스트라고 칭하겠습니다.
    2.  텍스트 슬롯에서 **Attach Component** > **UIX** > **Graphics** >
        **[Text](Text_(Component) "wikilink")**을 차례대로 더블클릭하여
        구성요소를 추가 합니다.
    3.  추가되 구성요소에 원하는 글자들을 입력하세요.
    4.  하위에 속한 속성들도 수정합니다. 특히, font size는 기본값이
        생각보다 클 수 있으므로, 아주 작게 설정해보세요.
6.  이제 버튼 슬롯의 Button 구성요소의 인터페이스를 로직스 팁으로
    추출하여, **[Button
    Events](Button_Events_(Protoflux_node) "wikilink")** 노드 node에
    연계하여 사용하실 수 있습니다.


문자열 대신 아이콘 이미지를 사용하실 수 도 있습니다.

1.  버튼 슬롯에 **Attach Component** > **Assets** >
    **[SpriteProvider](SpriteProvider_(Component) "wikilink")**
    구성요소를 추가합니다.
2.  원하는 이미지를 SpriteProvider 구성요소의 Texture 속성에 적용합니다.
3.  SpriteProvider 구성요소를 집어, 버튼 슬롯에 있는 Image 구성요소의
    Sprite 속성에 적용합니다.
4.  Image 구성요소에서 Tint값을 조정합니다.
5.  배경화면을 꾸미기 위해, 버튼을 다른 슬롯의 부모로 설정하실 수
    있습니다.

**[ProbablePrime](User:ProbablePrime "wikilink")**의 공개폴더 내 **UI
Stuff** \> **Icons** \> **Shapes**에서 아이콘으로 사용 가능한 이미지들을
발견하실 수 있습니다.

## 글에 스크롤 기능 추가하기

1.  Canvas(또는 레이아웃이나 뭐든)에 새로운 슬롯을 추가합니다. 새로
    추가된 이 슬롯을 마스크라고 부르겠습니다.
2.  마스크 슬롯을 더블클릭으로 선택한 뒤, **Attach Component** >
    **UIX** > **[Mask](Mask_(Component) "wikilink")** 구성요소를 추가
    합니다. 이것은 자식 슬롯의 RectTransform 경계밖에 출력되는 그래픽
    요소들을 안보이게 가려줍니다.
3.  또한, **Attach Component** > **UIX** > **Graphics** >
    **[Image](Image_(Component) "wikilink")** 구성요소도 추가해 줍니다.
4.  Mask 구성요소에서 ShowMaskGraphic 속성을 활성화시킵니다.
5.  마스크에 새로운 슬롯을 추가합니다. 이 슬롯을 스크롤렉트 라고
    부르겠습니다.
6.  스크롤렉트에서 **Attach Component** > **UIX** > **Interaction** >
    **[ScrollRect](ScrollRect_(Component) "wikilink")** 구성요소를
    추가합니다.
7.  또한, **Attach Component** > **UIX** > **Layout** >
    **[ContentSizeFitter](ContentSizeFitter_(Component) "wikilink")**
    구성요소도 추가 해 주세요.
8.  ContentSizeFitter의 VerticalFit 속성값을 MinSize로 설정하세요.
9.  스크롤렉트에 **Attach Component** > **UIX** > **Layout** >
    **[VerticalLayout](VerticalLayout_(Component) "wikilink")**
    컴포넌트도 추가 해 줍니다..
10. 스크롤렉트에 새로운 슬롯을 추가합니다. 이것은 컨텐츠라고
    칭하겠습니다.
11. 컨텐츠 슬롯을 선택하고, **Attach Component** > **UIX** >
    **Graphics** > **[Text](Text_(Component) "wikilink")**를 추가합니다.
12. **Text**에는 Contents라는 속성이 있습니다. 이곳에 원하는 글을 입력
    또는 복사&붙여넣기 합니다.
13. Text 구성요소 내에서 Size 속성은 Autosize로 하시고, Alignment 계열
    속성 및 Color 속성을 원하는대로 지정하세요.

## 간단한 수직 레이아웃

1.  Canvas(레이아웃 또는 기타등등)에 새로운 슬롯을 추가합니다. 새롭게
    추가한 슬롯은 레이아웃으로 칭하겠습니다.
2.  레이아웃에 **Attach Component** > **UIX** > **Graphics** >
    **[Image](Image_(Component) "wikilink")** 구성요소를 추가하고, Tint
    속성을 조정합니다.
3.  또한, 레이아웃에 **Attach Component** > **UIX** > **Layout** >
    **[VerticalLayout](VerticalLayout_(Component) "wikilink")**
    구성요소를 추가합니다.
4.  방금 추가한 구성요소인 VerticalLayout의 Padding과 Spacing 속성값을
    4로 설정합니다.
5.  레이아웃에 새로운 슬롯을 추가합니다. 이를 엘리먼트 라고
    칭하겠습니다.
6.  엘리먼트를 더블클릭하고 **Attach Component** > **UIX** >
    **Graphics** > **[Image](Image_(Component) "wikilink")** 구성요소를
    추가하고, Tint값을 잘 구별되게 조정해 주세요.
7.  엘리먼트를 몇개 복제하여, 레이아웃의 자식 슬롯을 늘려둡니다.
8.  위의 **경고**를 주의하세요. Canvas를 복제하여 레이아웃의 크기를
    재계산해야 할수도 있습니다.
9.  각각의 엘리먼트에
    **[LayoutElement](LayoutElement_(Component) "wikilink")** 구성요소를
    추가하여, 부모 슬롯인 레이아웃이 자식 슬롯의 너비와 높이를 계산할 수
    있도록 관련정보를 제공할 수 있습니다.

# 자습서

[ProbablePrime씨의](User:ProbablePrime "wikilink") UIX 시리즈:

1.  [Canvas와 Rectangles](https://www.youtube.com/watch?v=cLtD7uWrduI)
2.  [머티리얼, 버튼,
    텍스트](https://www.youtube.com/watch?v=lCGfFJYOj3o)
3.  [스크롤링](https://www.youtube.com/watch?v=cTcOdVw1cEQ)
4.  [이미지와 스프라이트](https://www.youtube.com/watch?v=FUUSjTwhvHk)
5.  [마스킹 이미지 & nine
    slices](https://www.youtube.com/watch?v=WPL776reVFw)
6.  [체크박스](https://www.youtube.com/watch?v=B2G708bnBeM)
7.  [진행상태바](https://www.youtube.com/watch?v=wwvyTqjC5Q0)
8.  [텍스트 필드](https://www.youtube.com/watch?v=ReERNLr-CJo)
9.  [슬라이더](https://www.youtube.com/watch?v=kqF4vF_iYPU)
10. [레이아웃](https://www.youtube.com/watch?v=1-FF9IolGZw)
11. [Common UI interactions 및
    UIX](https://www.youtube.com/watch?v=rkTmciUYJlY)
12. [슬라이딩 형식 또는 UI를 위한
    AxisMultiViewportScanner](https://www.youtube.com/watch?v=kbASFui7YWk)
13. [페싯 만들기](https://www.youtube.com/watch?v=qxJzTZGyeqw)

<youtube>cLtD7uWrduI</youtube>