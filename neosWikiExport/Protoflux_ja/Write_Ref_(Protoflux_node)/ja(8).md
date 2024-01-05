<languages></languages>

**Write
Ref**ノードは、`Write`にインパルスを入力すると、参照された`Target`へ`Reference`を上書きします。

## 使用方法

ノードブラウザから生成されたとき、`Target`入力は一般的なIWorldElementデータ型を持っています。`Target`に入力を接続する前に、まず`Reference`出力をターゲットフィールドに接続し、必要なデータ型にノードを上書きすることが推奨されます。これは、どのような参照型もIWorldElementにキャストできるためで、それは一般的には意図したターゲットフィールドのデータ型ではありません。

`OnDone`出力は、`Write`にインパルスが入力された後に`Reference`ターゲット値が正常に上書きされた場合、または`Reference`ターゲット値が、書き込もうとした変数をフックできるシステム(例えば[ReferenceCopyコンポーネント](ReferenceCopy_(Component) "wikilink"))
によってドライブされていた場合にインパルスを出力します。このインパルスは`Write`に到達したインパルスの連鎖を継続させます。

`OnFail`出力は、`Reference`ターゲット値が設定できなかった場合、例えば、`Reference`ターゲット値が書き込まれた値のフックを許さない別のソースからドライブされている場合、または有効な`Reference`ターゲットが存在しない場合に、インパルスを出力します。このインパルスは`Write`に到達したインパルスの連鎖を継続します。

Write
RefノードでComponentフィールドの値などを変更すると、データモデルが変更され、セッション内の他のユーザーにも同期されます。変更は更新の最後にのみ同期されるため、1
つのクライアントで同じターゲットに対して複数の書き込みが行われた場合、最終的な値のみが送信されることに注意してください。さらに、値が更新の開始時に持っていた値にリセットされた場合、変更はブロードキャストされません。この同期処理により、不要なネットワークトラフィックを避けるため、絶対に必要な場合を除き、ターゲットへの書き込みを非常に定期的に（例：アップデートのたびに）行うことは望ましくありません。[ソース](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2590#issuecomment-874788205)を参照してください。

一般的に、参照型であるコンポーネントやスロットフィールド（例：スロット、ユーザー、IAssetProvider<AudioClip>など）には、Write
Refを使って書き込むべきです。しかし、参照型 Protoflux 変数ノードに Write
Ref ノードを使用して書き込むことは「できません」が、
[Write](Write_(Protoflux_node)/ja "wikilink")/[Write
Latchを使って書き込むことは](Write_Latch_(Protoflux_node)/ja "wikilink")「できます」。入力が参照データ型ではなく
RefID である場合、Write/Write Latch
を使用して参照型フィールドに書き込むことも可能です。しかし、一般的に生のRefIDで作業することは推奨されません。正しいデータ型でWrite
Refを使用する方がよいでしょう。

## Examples

<figure>
<img src="Protoflux.Actions.WriteRef.Example.jpg" title="Protoflux.Actions.WriteRef.Example.jpg" width="900" alt="Protoflux.Actions.WriteRef.Example.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.WriteRef.Example.jpg</figcaption>
</figure>

## ノードメニュー

[Write Ref](Category:Protoflux{{#translation:}} "wikilink") [Write
Ref](Category:Protoflux:Actions{{#translation:}} "wikilink") [Write
Ref](Category:Protoflux:References{{#translation:}} "wikilink")