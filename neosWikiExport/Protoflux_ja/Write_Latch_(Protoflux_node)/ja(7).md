<languages></languages>

**Write
Latch**ノードは、`Set`や`Reset`にインパルスを入力すると、参照されている
`Target` 値を入力 `SetValue`や`ResetValue`
でそれぞれ上書きするノードです。

## 使用方法

ノードブラウザから生成されたとき、`SetValue`と`ResetValue`入力はダミーのデータ型を持っています。これは、有効な入力が接続されたときに、入力データ型に一致するようにオーバーロードされます。これら2つの入力の型と、参照されている`Target`の型は一致しなければなりません。

`OnSet`
出力は、`Set`にインパルスを入力した後にインパルスを出力します。これは、有効な`Target`があるかどうか、`Target`が実際に書き込まれたかどうかに関係なく発生します。これは、`Set`に到着したインパルスの連鎖を継続します。

`OnReset`
出力は、`Reset`にインパルスを入力した後にインパルスを出力します。これは有効な`Target`があるかどうか、`Target`に実際に書き込まれたかどうかに関係なく発生します。これは`Reset`に到着したインパルスの連鎖を継続させます。

Write
LatchノードでVariableノードやComponentフィールドなどの値を変更すると、データモデルの変更が行われ、セッション内の他のユーザーと同期されます。このため、1つのクライアントが更新中に同じターゲットに対して複数の書き込みを行った場合、最終的な値のみが送信されることに注意してください。さらに、値が更新の開始時に持っていた値にリセットされた場合、変更はブロードキャストされません。この同期処理のため、絶対に必要な場合を除き、非常に定期的に
(たとえばアップデートのたびに)
値を書き込むことは望ましくありません。不必要なネットワークトラフィックを避けるため、連続的に変化する値には代わりに[ドライブシステムを使用する方が一般的によいでしょう](drive/ja "wikilink")。[ソース](https://github.com/Resonite-Metaverse/ResonitePublic/issues/2590#issuecomment-874788205).

一般的に、Write/Write Latch
ノードでは、コンポーネントまたはスロットのフィールドは値型（bools、ints、string、float
など）のみ書き込み可能ですが、参照型フィールド（スロット、ユーザー、IAssetProvider<AudioClip>
など）は[Write
Refが必要です](Write_Ref_(Protoflux_node)/ja "wikilink")。しかし、参照型
Protoflux 変数ノードに Write/Write Latch
ノードを使用して書き込むことは可能ですが、Write Ref
では不可能です。また、入力の `SetValue` と `ResetValue`
が参照データ型ではなく RefID の場合、Write/Write Latch
を使用して参照型フィールドに書き込むことが可能です - しかし、生の RefID
を扱うことは一般的にお勧めできません。

## 例

これらの 2 つの画像は、1 つの Write Latch ノードや2 つの
[Writeノードを使用した](Write_(Protoflux_node)/ja "wikilink") Protoflux
セットアップを例示しています。`OnFail` インパルス出力の存在と `OnSet` と
`OnReset` と比較した `OnDone` と `OnFail`
の異なる動作は、二つの設定が全く同じではないことに注意してください。

<figure>
<img src="Protoflux.Actions.WriteLatch.Example.jpg" title="Protoflux.Actions.WriteLatch.Example.jpg" width="600" alt="Protoflux.Actions.WriteLatch.Example.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.WriteLatch.Example.jpg</figcaption>
</figure>

<figure>
<img src="Protoflux.Actions.Write.imp_WriteLatch.jpg" title="Protoflux.Actions.Write.imp_WriteLatch.jpg" width="600" alt="Protoflux.Actions.Write.imp_WriteLatch.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Write.imp_WriteLatch.jpg</figcaption>
</figure>

## ノードメニュー

}}

[Write Latch](Category:Protoflux{{#translation:}} "wikilink") [Write
Latch](Category:Protoflux:Actions{{#translation:}} "wikilink")