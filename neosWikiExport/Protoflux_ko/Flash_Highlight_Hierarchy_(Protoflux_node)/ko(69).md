<languages></languages>

**Flash Highlight Hierarchy** 노드는 `Flash`에 임펄스가 가해졌을 때,
목표한 `HierarchyRoot` 물건을 일시적으로 강조 표시합니다(하이라이트
합니다).

## 사용방법

`ExcludeColliders` 입력은 콜라이더 컴포넌트가 강조 표시에서 제외할지를
결정합니다. 기본값은 False입니다(즉, 콜라이더가 강조 표시됩니다).

`ExcludeMeshes` 입력은
[MeshRenderer나](MeshRenderer_(Component) "wikilink")
[SkinnedMeshRenderers에](SkinnedMeshRenderer_(Component) "wikilink")
의해서 참조된 메쉬를 강조 표시에서 제외할지를 결정합니다. 기본값은
False입니다(즉, 메쉬가 강조 표시됩니다).

`ExcludeDisabled` 입력은 비활성화된 콜라이더나 렌더러 컴포넌트를 강조
표시에서 제외할지를 결정합니다. 만약 이 값이 True일 경우, 비활성화된
컴포넌트(혹은 비활성화된 슬롯 계층구조 아래에 있는 것)는 강조 표시되지
않습니다. 기본값은 False입니다(즉, 모두 강조 표시 됩니다).

`Duration` 입력은 강조 효과가 얼마나 지속될지 정합니다. 기본값은
0.5초입니다.

`Color` 입력은 강조 효과의 색을 정합니다. 기본값은 하얀색입니다.

`OnDone` 출력은 대상이 강조 표시된 뒤, 임펄스를 발생시킵니다.
`HierarchyRoot`가 존재할 경우, 실제로 강조 효과가 표시 되었는지 여부와
상관없이 임펄스는 발생합니다.

`FlashRoot` 출력은 강조 효과를 표시하기 위해 생성된 새 슬롯을
반환합니다. `OnDone` 에서부터 시작한 임펄스 연결까지만 해당 슬롯을
사용할 수 있습니다.

강조 효과는 월드 루트 내 일시적으로 생성된 슬롯 HighlightFlash에
표시됩니다. 해당 슬롯은 머티리얼(OverlapFresnelMaterial)과 여러
Tween<color> 컴포넌트를 가지고 있습니다. 머티리얼은 강조 색에 따라
적용되고, tween은 강조 효과 시간 동안 색이 어떻게 바뀌는지를 정합니다.

## 예제

## 노드 메뉴(Node Menu)

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Flash
Highlight Hierarchy](Category:Protoflux{{#translation:}} "wikilink")
[Flash Highlight
Hierarchy](Category:Protoflux:Visualization{{#translation:}} "wikilink")