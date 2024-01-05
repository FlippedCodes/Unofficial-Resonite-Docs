<languages></languages>

**HPReverb Controller**は、HP Reverb
G2ヘッドセットと互換性のある第2世代Windows Mixed
Reality（WMR）コントローラー向けに、[Standard Controller (Protoflux
node)/jaよりも多くのコントローラーデータを提供します](Standard_Controller_(Protoflux_node)/ja "wikilink")。

## 使用方法

`IsActive`出力は、`User`が第2世代WMRコントローラを使用しているかどうかを示すものです。

`BatteryLevel`出力は、バッテリ残量の推定値を出力します。値は0から1の範囲で、小数点以下2桁の精度です。

`IsBatteryCharging`
出力は、コントローラが現在充電中かどうかを示すためのものです。第2世代のWMRコントローラは交換バッテリーを使用しているため、使用中に充電することができないため、この出力は使用できません。

`AppMenu`の出力です。

`ButtonYB`の出力です。

`ButtonXA`の出力です。

`Grip`出力は、グリップ/グラブボタンがどの程度押されたかを示します。

`GripTouch`の出力です。

`GripClick`出力は、グリップ/グラブボタンが完全に押されているかどうかを示します。

`ジョイスティック`出力は、ジョイスティックの現在の位置を示します。XとYの値は-1〜1の範囲で、Xは左右の位置、Yは前後の位置を示します。ジョイスティックの静止位置は\[0,0\]です。

`JoystickClick`出力は、ジョイスティックが押し下げられたかどうかを示します。

`Trigger`出力は、トリガーボタンがどの程度押されたかを示します。これは、Primaryボタンに対応します。値は0から1の範囲で、1はボタンが完全に押される前に到達しています。

`TriggerClick`出力は、トリガーボタンがボタンクリックとして登録されるところまで押されたかどうかを示します。これは、ボタンが完全に押される前に到達しています。

## 例

## ノードメニュー

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [HPReverb
Controller](Category:Protoflux{{#translation:}} "wikilink") [HPReverb
Controller](Category:Protoflux:Input_Devices:Controllers{{#translation:}} "wikilink")