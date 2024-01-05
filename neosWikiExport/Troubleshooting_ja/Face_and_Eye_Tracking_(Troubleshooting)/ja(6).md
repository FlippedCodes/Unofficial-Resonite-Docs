__TOC__

<languages/>

Resoniteは現在、次のハードウェアで顔と目の追跡をサポートしています。

-   Vive ProEye - アイトラッキング
-   Viveフェイシャルトラッカー - フェイストラッキング
    -   これにはViveヘッドセットは必要ありません。
        ユーザーはさまざまなヘッドセットとテープで成功を収めています。

これらのシステムのいずれかに問題がある場合は、以下の一般的なアドバイスを確認してください。

# ハードウェア

-   すべてが接続されていることを確認してください。不明な場合は、すべてのケーブルを抜いてから再度接続してください。
    緑または青のライトがすべてのアイテムに表示されている必要があります。
-   すべてのケーブルに損傷がなく、擦り切れたり、損傷したり、よじれたりしていないことを確認してください。

Vive Pro
Eye以外のヘッドセットの場合、USB-C-USBアダプターが必要になる場合があります。
これは次のようになります:

<figure>
<img src="USBC_USBAdapter.jpg" title="USBC_USBAdapter.jpg" width="250" alt="USBC_USBAdapter.jpg" /><figcaption aria-hidden="true">USBC_USBAdapter.jpg</figcaption>
</figure>

## フェイシャルトラッカーの取り付け

Viveヘッドセットの以外の場合、ユーザーはいくつかの取り付け方法を共有しています。

-   **テープ** - たくさんのテープとトラッカーが非常によくくっつきます。
    どんなテープでも機能します。
-   **両面ベルクロテープ** - これは取り外し可能な取り付け方法です。
    トラッカーの重量と頭の動きを支えることができるように、頑丈であることを確認してください。
-   3Dプリント
    -   **[シンプルマウント](https://www.thingiverse.com/thing:4798891)** -
        ヘッドセットの底にテープで貼り付けることができるシンプルマウント。
    -   **[フリクションマウント](https://www.thingiverse.com/thing:4806854)** -
        マウントとValveIndexFrunkの間でフリクション/クリップを使用するマウント。頭を激しく動かしすぎると、外れる可能性があります。
    -   **[磁石マウント](https://www.thingiverse.com/thing:4807214)** -
        既存のValveIndex
        FrunkCoverのマグネットを使用してヘッドセットに固定します。
        これには、次の寸法の磁石が必要です：直径1/8
        "x厚さ1/8"。印刷にこだわった。

# ソフトウェア

## ソフトウェアのインストール

顔の追跡と視線の追跡の両方で、HTCの同じソフトウェアが必要です。
ソフトウェアは[HTCウェブサイト](https://www.vive.com/setup/facial-tracker)からダウンロードできます。
ダウンロードしたら、スタートメニューで見つけて実行してください。
インストールして実行すると、次のようなアイコン（タスクバーの右側にあるアイコン）がシステムトレイに配置されます。

<figure>
<img src="SRAnipal_Icon.png" title="SRAnipal_Icon.png" width="100" alt="SRAnipal_Icon.png" /><figcaption aria-hidden="true">SRAnipal_Icon.png</figcaption>
</figure>

このアイコンが表示された場合、通常、追跡は機能します。

## 追跡ステータス

アイコン（ロボット）は、追跡のステータスも伝えます。

-   ロボットの目はアイトラッキングのステータスを示します
-   ロボットの口にはフェイストラッキングの状態が表示されます

目や口の色は、何が起こっているかを示しています。

-   黒はトラッキングが非アクティブであることを意味します
-   オレンジは、トラッキングがアイドル/スタンバイであることを意味します
-   緑は、トラッキングがアクティブであることを意味します

## ウィンドウについて

ロボットアイコンを右クリックすると小さなメニューが表示され、\[バージョン情報\]を選択するとウィンドウが表示されます。
このウィンドウには、次のような追加情報が表示されます。

-   ソフトウェアバージョン
-   アイトラッカーバージョン
-   フェイストラッカーバージョン

アイカメラまたはリップカメラの部分にN/Aが表示されている場合は、ソフトウェアがデバイスを検出できないことを意味します。[ハードウェアのトラブルシューティング手順を確認してください](#ハードウェア "wikilink")。

ソフトウェアの現在のバージョンは、 *'1.3.2.0'*です。

## アイタッキングキャリブレーション

Vive Pro
Eyeは、目をできるだけよく検出するために、時折キャリブレーションが必要です。
これを行う方法については、[HTC Vive Pro Eye
Calibration](https://www.vive.com/us/support/vive-pro-eye/category_howto/calibrating-eye-tracking.html)
を参照してください。

## 追加のソフトウェア/ハードウェアヘルプ

ViveヘッドセットとフェイシャルトラッカーはHTCによって製造されているため、独自のヘルプセクションとサポートシステムがあります。さらなるヘルプについては、HTCのリソースを参照してください。
sections and support systems. Please see their resources for additional
assistance:

-   [フェイシャルトラッカーHTCヘルプ](https://www.vive.com/us/support/facial-tracker/category_howto/tracker.html)
-   [Vive Pro
    EyeHTCヘルプ](https://www.vive.com/us/support/vive-pro-eye/)
-   [HTC
    ViveProアイキャリブレーション](https://www.vive.com/us/support/vive-pro-eye/category_howto/calibrating-eye-tracking.html)

# Resonite

ソフトウェアとハードウェアがセットアップされると、Resoniteを実行できるようになり、すべてが正常に機能するはずです。
Resoniteが起動し、開始時のワールドで実行された後に。

アイトラッキングを使用している場合、ロボットの目は緑色になっているはずです。
フェイシャルトラッカーがある場合、ロボットの口は緑色になっているはずです。

次に、フェイス/アイトラッキング互換のアバターを装備してみてください。
フェイスボットは、Resonite Essentials-> Avatars-> Face and Eye Tracking
Readyにあります。 それは完全な機能を備えています。
装備して目と顔を動かしてみてください。

## Resoniteの問題

Resoniteでトラッキングが機能していない場合。次のことを試してみてください：

-   ロボットアイコンがシステムトレイにあることを確認する
-   Resoniteの再起動
-   コンピュータを再起動
-   `-ForceSRAnipal`を[コマンドライン引数](Command_Line_Arguments/ja#コマンドライン引数の使用方法 "wikilink")
    に追加する

それでも機能しない場合。[いくつかのログを取得](Frequently_Asked_Questions/ja#ログファイルはどこにありますか？ "wikilink")
して、Resonite Discord内の`#❓questions-help`で質問してください。

## シェイプキーとセットアップ

アバターが機能したら、アバターの設定に関するガイドをご覧ください。
(これはまだありません。) TODO：これは書く必要があります。

[Category:Troubleshooting/ja](Category:Troubleshooting/ja "wikilink")