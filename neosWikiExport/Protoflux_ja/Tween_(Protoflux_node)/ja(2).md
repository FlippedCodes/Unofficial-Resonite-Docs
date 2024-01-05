<languages></languages>

**Tween**ノードは、インパルスを`Tween`に入力とき、`From`から始まり`To`で終わる`Target`の値を`Duration`秒間で補間するために使用します。

## 使用方法

インパルスを`Tween`に入力すると、[ドライブコンポーネントが作成され](Drive/ja "wikilink")、Durationに設定した期間、参照された`Target`値をドライブします。

`To`の値は、`Duration`の終了時に到達する最終的な値を指定するものです。

`From`の値は、`Duration`の開始時の初期値です。

`Duration` は、`From` から `To`
への遷移にかかる時間を秒単位で指定するものです。デフォルトは1です。

`CurvePreset` は、補間する値の形状を決定します。デフォルトはSmooth。

`OnStarted`出力は、`Tween`に入力されたインパルスにより、`Target`のトゥイーンが始まるとインパルスを出力します。有効な`Target`がない場合、インパルスは出力されません。このインパルスは、`Tween`に到着したインパルスの連鎖を継続させます。

`OnDone`出力は、`Target`のトゥイーンが終了したときにインパルスを出力します。これは`Tween`に到達したインパルスチェーンを継続させません。

`Target`に対するトゥイーン操作は、一度に1つしかアクティブにできないことに注意してください。現在、ターゲット値の変更は、フレームレートやネットワーク遅延によってスムーズに表示されない可能性のある値への連続した書き込みを介して動作します。同様の、潜在的に滑らかな効果は、たとえば
のさまざまな Lerpノードで達成できます。

## 例

<figure>
<img src="Protoflux.Actions.Tween.example.jpg" title="Protoflux.Actions.Tween.example.jpg" width="900" alt="Protoflux.Actions.Tween.example.jpg" /><figcaption aria-hidden="true">Protoflux.Actions.Tween.example.jpg</figcaption>
</figure>

<figure>
<img src="Tween_Protoflux_Example_Number_2.jpeg" title="Tween_Protoflux_Example_Number_2.jpeg" width="900" alt="Tween_Protoflux_Example_Number_2.jpeg" /><figcaption aria-hidden="true">Tween_Protoflux_Example_Number_2.jpeg</figcaption>
</figure>

## ノードメニュー

}}

[Mathカテゴリ](Category:Protoflux:Math/ja "wikilink")
[Tween](Category:Protoflux{{#translation:}} "wikilink")
[Tween](Category:Protoflux:Actions{{#translation:}} "wikilink")