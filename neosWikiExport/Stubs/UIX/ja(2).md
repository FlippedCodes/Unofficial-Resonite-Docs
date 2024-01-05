<languages/>UIXはResoniteのUIシステムです。これにより、2次元のユーザーインターフェイスを作成でき、概念的には[Unity
UI](https://docs.unity3d.com/Manual/com.unity.ugui.html)システムに似ています。ダッシュメニューとシーンインスペクターを支えています。

便利なUIXサンプルの*UIXCanvas*は、[DevToolTipでオブジェクトから生成できます](DeveloperTooltip/ja "wikilink")。
レイアウト、画像、ボタン、およびスライダーの例を表示します。

# コンセプト

## キャンバス(Canvas)

UIには、ルートに[Canvasが必要です](Canvas_(Component) "wikilink")。Canvasは、UIのサイズを定義します。

## RectTransforms

UIに関係するすべてのスロットには、[RectTransformが必要です](RectTransform_(Component) "wikilink")。RectTransformsは、他のUIコンポーネントを追加すると自動的に追加されます。RectTransformは、使用可能な合計スペースの一部として表されるUI要素の境界を決定します。デフォルトのRectTransformには、アンカーに0,0と1,1が設定されています。

## レイアウト

RectTransformsを調整することで要素を手動で配置できますが、多くの場合、これを自動的に処理する必要があります。レイアウトは、スロットの子のRectTransformsをオーバーライドします。たとえば、HorizontalLayoutは、子を水平に配置しようとします。

*'警告*': レイアウトは、子自身に基づいて子の位置とサイズを計算します。
子を変更、追加、または削除しても期待どおりの結果が得られない場合は、強制的に再計算する必要があります。
現在これを行う唯一の方法は、オブジェクト全体（またはレイアウトだけ？）を複製し、元のオブジェクトを削除することです。

レイアウトは子の順序に依存し、インスペクタで子をドラッグすることはできないため、子のOrderOffsetプロパティを指定する必要があります。
通常、これらは0ですが、これを変更すると、OrderOffsetを増やすことによって子が順序付けられ、OrderOffsetが等しい子は、事実上ランダムなプロセスによって順序付けられます。

この場合も、子のOrderOffsetを変更すると、レイアウトを再計算する必要があり、上記の警告が発生する可能性があります。

## グラフィック

実際に物を表示するには、UIに1つ以上のグラフィックコンポーネントが必要です。[Image](Image_(Component) "wikilink")
は要素を塗りつぶし、オプションでマテリアル（外観を定義するため）とスプライト（形状を定義するため）を取ります。その他の要素には、テキストを表示する
[Textと子UI要素の一部を非表示にする](Text_(Component) "wikilink")[Maskがあります](Mask_(Component) "wikilink")。

## インタラクション

インタラクションコンポーネントは入力を可能にします。
[Buttonは](Button_(Component) "wikilink")、ホバリングとプレスに視覚的に応答し、スロット（および子スロット）で他のコンポーネントをトリガーします。[Sliderも同様に機能しますが](Slider_(Component) "wikilink")、子要素のRectTransformを制御して移動することもできます。

# レシピ

## Empty canvas

1.  [Developer
    Tooltipを使用して](Developer_Tooltip "wikilink")、新規作成 >
    EmptyObjectを選択します。
2.  そのオブジェクトで、Attach Component > UIX >
    [Canvasを選択します](Canvas "wikilink")。
3.  オブジェクトをより適切なサイズにするために、すべての軸でオブジェクトのスケールを0.001に変更します。
4.  次に、キャンバスのサイズxおよびy（ピクセル単位）を好みに合わせて変更できます。
5.  次に、同じEmptyObjectで、Attach Component > UIX > Graphics >
    [Imageを選択します](Image_(Component) "wikilink")。画像の色合いを変更して、キャンバスの基本色を変更できます。
6.  再び[Developer
    Tooltipを使用して](Developer_Tooltip "wikilink")、新規作成 >
    マテリアル > UI > UI Unlit を選択します。
7.  マテリアルのZWriteプロパティをOnに変更し、OffsetFactorプロパティとOffsetUnitsプロパティを1に変更します。
8.  マテリアルスフィアをつかみ、EmptyObjectのImage
    Materialスロットをクリックしてロードします。これにより、異なるUIXオブジェクトを重ねて配置すると、異なるUIXオブジェクトが互いに表面滲みする"表面滲み"効果が修正されます。
9.  キャンバスをグラブ可能にすることもできます（Attach Component >
    Transform > Interaction >
    [Grabbable](Grabbable_(Component) "wikilink")）。

キャンバスに表示する子を追加できるようになりました。

[ProbablePrimeのパブリックフォルダー](User:ProbablePrime "wikilink")
Tutorials \> UIX
には、上記のすべての手順を既に実行したCanvasTemplateが含まれています。
単に1つをスポーンして、そこから始めます。

## ボタン

1.  子をキャンバス（またはレイアウトなど）に追加し、それをButtonと呼びます。
2.  そのオブジェクトで、Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink")。画像の色合いを変更して、ボタンの基本色を変更できます。
3.  RectTransformのAnchorMin /
    Maxを変更して、ボタンの周囲に境界線を追加します。これにより、子がどこにいて、どのようにスケーリングするかが親に効果的に伝えられます。
    -   AnchorMin（x、y）は、子が収まる親キャンバス上の長方形の左下隅で、0から1の範囲です。（0,0）は親の左下です。
    -   AnchorMax（x、y）は、子が収まる親キャンバス上の長方形の右上隅で、0から1の範囲です。（1,1）は親の右上です。
    -   たとえば、親のサイズの5％の小さな境界線を追加すると、AnchorMinは（0.05,0.05）（つまり、0,0 +
        5％）になり、AnchorMaxは（0.95,0.95）（つまり、1,1）になります。マイナス5％）。
4.  Attach Component > UIX > Interaction >
    [Button](Button_(Component) "wikilink")。画像の色合いに基づいて、ボタンは通常、ハイライト、プレス、および無効の状態の色を自動的に塗りつぶします。
5.  ボタンにテキストを追加できます：
    1.  ボタンの子オブジェクトを作成し、それをTextと呼びます。
    2.  その子で、Attach Component > UIX > Graphics >
        [Text](Text_(Component) "wikilink")
    3.  テキストを必要なものに変更します。
    4.  フォントサイズを変更し、自動サイズを設定し、配置を希望どおりに変更します。
6.  [Button
    Eventsノードを作成し](Button_Events_(Protoflux_node) "wikilink")、ボタンインターフェイスカードをドラッグしてボタンイベントノードに接続することで、ボタンをProtofluxに接続できます。

ボタンにアイコンを付けることもできます。

1.  Buttonオブジェクトで、Attach Component > Assets >
    [SpriteProvider](SpriteProvider_(Component) "wikilink")　をアタッチします。
2.  選択した画像をSpriteProviderのTextureプロパティにドロップします。
3.  SpriteProviderを取得し、ボタンの画像のSpriteプロパティにドロップします。
4.  画像のTintプロパティを使用して、アイコンに色を付けます。
5.  ボタンを画像付きの別のオブジェクトにペアレント化して、背景を設定できます。

[ProbablePrimeのパブリックフォルダーの](User:ProbablePrime "wikilink")
UI Stuff \> Icons \> Shapes には、使用できるアイコンが多数あります。

## スクロール可能なテキスト

1.  子をキャンバス（またはレイアウトなど）に追加し、それをマスクと呼びます。
2.  そのオブジェクトで、Attach Component > UIX >
    [Mask](Mask_(Component) "wikilink")。これにより、RectTransformの外側をさまよう子のグラフィカル要素が事実上非表示になります。
3.  同じオブジェクトで、Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink")。
4.  マスクのShowMaskGraphicプロパティをオンにします。
5.  Maskオブジェクトに子を追加し、それをScrollRectと呼びます。
6.  そのオブジェクトで、Attach Component > UIX > Interaction >
    [ScrollRect](ScrollRect_(Component) "wikilink")。
7.  同じオブジェクトで、Attach Component > UIX > Layout >
    [ContentSizeFitter](ContentSizeFitter_(Component) "wikilink")。
8.  ContentSizeFitterのVerticalFitプロパティをMinSizeに設定します。
9.  同じオブジェクトで、Attach Component > UIX > Layout >
    [VerticalLayout](VerticalLayout_(Component) "wikilink")。
10. ScrollRectオブジェクトに子を追加し、それをContentと呼びます。
11. そのオブジェクトで、Attach Component > UIX > Graphics >
    [Text](Text_(Component) "wikilink")。
12. テキストを必要なものに変更します。通常、ファイルから取得する長いテキストの場合、コンピューターからテキストファイルをインポートし、結果を調べて、テキストコンポーネント（object >
    ScrollRect >
    Content）に移動し、テキストコンポーネントのContentプロパティをグラブしてオブジェクトのコンテンツにドラッグします。テキストコンテンツ。
13. フォントサイズを変更し、autosizeを設定し、配置を希望どおりに変更します。
14. フォントの色をマスク画像の色に対して表示される色に変更してください！

## シンプルな縦型レイアウト

1.  子をキャンバス（またはレイアウトなど）に追加し、それをレイアウトと呼びます。
2.  そのオブジェクトで、Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink")。
    このオブジェクトを子オブジェクトと区別するような色合いに設定します。
3.  また、そのオブジェクトで、Attach Component > UIX > Layout >
    [VerticalLayout](VerticalLayout_(Component) "wikilink")。
4.  VerticalLayoutのすべてのPaddingプロパティとSpacingプロパティを4に変更します。
5.  Layoutの子を追加し、それをElementと呼びます。
6.  そのオブジェクトで、Attach Component > UIX > Graphics >
    [Image](Image_(Component) "wikilink")。
    このオブジェクトをレイアウトオブジェクトと区別するような色合いに設定します。
7.  このオブジェクトを数回複製します。
    それらはすべてLayoutの子になります。
8.  上記の警告に注意し、レイアウトを再計算するためにキャンバスを複製する必要がある場合があります。
9.  各要素に[LayoutElementを追加できます](LayoutElement_(Component) "wikilink")。
    これは、幅と高さの計算方法を親レイアウトに指示します。

# チュートリアル

[ProbablePrimeのUIXの解説動](User:ProbablePrime "wikilink"):

1.  [キャンバスと長方形](https://www.youtube.com/watch?v=cLtD7uWrduI)
2.  [マテリアル、ボタン、テキスト](https://www.youtube.com/watch?v=lCGfFJYOj3o)
3.  [テキストのスクロール](https://www.youtube.com/watch?v=cTcOdVw1cEQ)
4.  [画像とスプライト](https://www.youtube.com/watch?v=FUUSjTwhvHk)
5.  [マスキング画像と9つのスライス](https://www.youtube.com/watch?v=WPL776reVFw)
6.  [チェックボックス](https://www.youtube.com/watch?v=B2G708bnBeM)
7.  [プログレスバー](https://www.youtube.com/watch?v=wwvyTqjC5Q0)
8.  [テキストフィールド](https://www.youtube.com/watch?v=ReERNLr-CJo)
9.  [スライダー](https://www.youtube.com/watch?v=kqF4vF_iYPU)
10. [レイアウト](https://www.youtube.com/watch?v=1-FF9IolGZw)
11. [一般的なUIインタラクションとUIX](https://www.youtube.com/watch?v=rkTmciUYJlY)
12. [スライドフォームまたはUI用のAxisMultiViewportScanner](https://www.youtube.com/watch?v=kbASFui7YWk)
13. [ファセットの作成](https://www.youtube.com/watch?v=qxJzTZGyeqw)

<youtube>cLtD7uWrduI</youtube>