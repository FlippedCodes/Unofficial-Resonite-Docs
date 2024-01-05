<languages/>一部の[コンポーネントでは](components/ja "wikilink")、作成時に型を指定する必要があります。名前の末尾にある<T>で識別できます。例：`ValueField`<T>

# リストから型を選択する

このコンポーネントのいずれかをアタッチすると、メニューが表示され、必要な型を尋ねられます。
多くの場合、一般的に使用されるタイプのリストが表示されます。使用したいタイプが表示されたら、リストから選択してください。

![<File:SelectGenericType.jpg>](SelectGenericType.jpg "File:SelectGenericType.jpg")

# 型を手動で設定する

必要な型がリスト表示されていない場合は、ウィンドウ上部のフィールドに型の名前を入力できます:

![<File:TypeType.jpg>](TypeType.jpg "File:TypeType.jpg")

通常、次のように単純な型が必要になります:

-   Slot
-   User

有効なタイプを入力すると、*Invalid
Type*の表示がコンポーネントの型に変わります。

![<File:TypeSlot.jpg>](TypeSlot.jpg "File:TypeSlot.jpg")

# 複合型の指定

コンポーネント自体が型を選択する必要があるのと同じように、別の型をとる型を使用する必要がある場合があります。
これらは **ジェネリック型**であり、名前の最後にグラーヴェ記号（
\`）があり、その後に必要な型の数（通常は1）が続きます。

たとえば、`` IAssetProvider`1 ``は、使用する可能性のある多くのアセットの型です。それ*への*参照であるものは、その型パラメータに依存します。マテリアルへの参照である場合は、インスペクターに`SyncRef`<Material>として表示され、`` IAssetProvider`1[FrooxEngine.Material] ``として入力されます。

![<File:TypeMaterial.jpg>](TypeMaterial.jpg "File:TypeMaterial.jpg")

# 一般的な複合型

これを行うための構文は珍しいので、一般的に使用される型文字列を次に示します。

グラーヴェ記号（
\`）を入力するには、キーボードのShiftキーを押します。キーボードによっては、shiftキーを押すとEscキーが（
\`）になります。

## アセット

-   マテリアル - `` IAssetProvider`1[FrooxEngine.Material] ``
-   テクスチャ - `` IAssetProvider`1[FrooxEngine.ITexture] ``
-   `` IAssetProvider`1[FrooxEngine.ITexture2D] ``
-   オーディオ - `` IAssetProvider`1[FrooxEngine.AudioClip] ``
-   メッシュ - `` IAssetProvider`1[FrooxEngine.Mesh] ``

## Public Class Members

C#のクラスには、クラスやEnumなどが含まれていることがあります。これらをテキスト入力ボックスで参照することは、覚えるのが大変ですが、不可能ではありません。これを行うには`+`を使用します。例を挙げないと説明が難しいので、いくつかの例を挙げます。

-   XiexeのToon
    Materialのアウトラインのスタイルは、以下の方法で作成できます。：`FrooxEngine.XiexeToonMaterial+OutlineStyle`。
-   `ExpressionDriver`の中の個々の`AvatarExpression`は、`FrooxEngine.ExpressionDriver+AvatarExpression`で作成できます。

# 背景

ジェネリック型は、他の多くの型と連携するようにカスタマイズできます。
これは、`ValueField`<T>コンポーネントの構築方法です。bool、float3、Stringなど、保持する型を指定します。ゲームは、*あらゆる種類のValueField*の個別のコピーを保持する必要はありません。

タイプパラメータは、角括弧のペアで提供されます。
複数のジェネリック型があるまれな状況では、これらはコンマで区切られます。

タイプパラメータは*修飾*する必要がある場合があります。つまり、それらがどこから来ているかを指定する必要があります。
これが、上記の例のプレフィックスが*FrooxEngine*である理由です。これはすべてのタイプに当てはまるわけではないため、`` IAssetProvider`1 ``の前に接頭されていません。
通常は*FrooxEngine.*なしで試すことができますが、機能しない場合は追加します。

一部のタイプには追加の資格が必要です。たとえば、float3はBaseXによって提供されますが、ゲームはデフォルトでそれを見つけることができません。
したがって、次のように書き出す必要があります。：

`[[BaseX.float3,BaseX|BaseX.float3,BaseX]]`

ヒント：角括弧の追加セットに注意してください。

## 参考文献

この型の技術的背景については、この資料を参照してください:
[Frooxius_Notes#Complex_Types_within_Components_.2F_Protoflux](Frooxius_Notes#Complex_Types_within_Components_.2F_Protoflux "wikilink")