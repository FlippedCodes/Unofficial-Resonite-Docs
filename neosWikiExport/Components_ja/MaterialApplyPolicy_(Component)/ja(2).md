<languages></languages>

## Fields

## 使い方

<https://misskey.Resonite.love/notes/9b5wh5huc1> より

`SkinnedMeshRenderer/MeshRendererと同じSlotについている場合、MaterialTipを使ってマテリアルを適用できる機構に制限をつけるやつです。  `
`CanApplyを無効にするとMaterialTipを使用して適用できなくなります。`

## 例

<li>

SkinnedMeshRenderer
に入れてアバターのマテリアルを変更されないようにこのコンポーネントを追加し、CanApplyをfalseに設定。

</li>
<li>

MeshRenderer
に入れて小物のマテリアルについて特定の場所が明示的に変更できるようにCanApplyをtrueに設定。

</li>

## 関係するコンポーネント

<li>

[MeshRenderer](MeshRenderer_(Component)/ja "wikilink")

</li>
<li>

[SkinnedMeshRenderer](SkinnedMeshRenderer_(Component)/ja "wikilink")

</li>

[Category:ComponentStubs](Category:ComponentStubs "wikilink") [Material
Apply Policy](Category:Components{{#translation:}} "wikilink") [Material
Apply
Policy](Category:Components:Assets:Tagging{{#translation:}} "wikilink")