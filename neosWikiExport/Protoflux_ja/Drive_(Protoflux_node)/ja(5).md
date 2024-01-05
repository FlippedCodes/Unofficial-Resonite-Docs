<languages></languages>

**Drive**ノードは `StartDrive` でインパルスを受け取ると、入力 `Source`
値で参照されている `DriveTarget`
を[ドライブし始めます](Drive/ja "wikilink")。ドライブは`StopDrive`でインパルスを受信すると停止します。

## 使用方法

ノードブラウザからノードが生成されたとき、`Source`入力は'dummy'のデータ型を持っています。しかし、適切なワイヤが接続されると、ノードは正しい値型に上書きされます。

`StartDrive`入力にインパルスが到着するたびに`OnStartDrive`からインパルスを出力します。これは`StartDrive`に到着したインパルスの連鎖を継続させます。

`StopDrive`入力にインパルスが到達するたびに`OnStopDrive`からインパルスを出力します。これは、`StopDrive`に到着したインパルスの連鎖を継続させます。

`OnHook` は、`DriveTarget` が `Source`
値でドライブされている時に、他のソース（例えば[Writeノードや](Write_(Protoflux_node)/ja "wikilink")
[ButtonValueSetコンポーネント](ButtonValueSet_(Component) "wikilink")）が値を上書きしようとする（しかしできない）とインパルスを出力します。

`IsDriving`出力は、`DriveTarget`を`Source`の値でドライブしている間はTrue、それ以外はFalseです。

`HookedValue` は、`OnHook`
からインパルスが出力されたときに、他のソースが `DriveTarget`
に設定しようとした値を出力します。この値は、`OnHook`からインパルスが出力された瞬間のみ有効です。

`StartDrive`にインパルスを入力すると、ターゲットが既に他のソースによって駆動されているかどうかに関わらず、`Source`値によってドライブされるようになることに注意してください、つまりターゲット値のドライブが上書きされます。

## 例

<figure>
<img src="Protoflux.Actions.Drive.Sample.jpg" title="Protoflux.Actions.Drive.Sample.jpg" width="900" alt="Protoflux.Actions.Drive.Sample.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Drive.Sample.jpg</figcaption>
</figure>

## ノードメニュー

[Drive](Category:Protoflux{{#translation:}} "wikilink")
[Drive](Category:Protoflux{{#translation:}}:Actions{{#translation:}} "wikilink")