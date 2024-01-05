<languages/>

# 概要

**ダイナミックバリアブル**を使用すると、名前でデータを読み書きできます。これにより、大規模なシステムでデータを簡単に管理できます。データのすべてのビットは明確にラベル付けされており、データを複数の
**スペース**に分割して、システムを分離しておくことができます。

# 命名制限

ダイナミックバリアブルを使用する場合、スペースとそれらのスペース内のバリアブルの両方の命名にいくつかの制限があります。

スペースと変数名には**使うことはできません**。

-   任意の記号
    -   C#の[Char.IsSymbol](https://docs.microsoft.com/en-us/dotnet/api/system.char.issymbol?view=net-5.0)で定義されているもの。
-   任意の句読点/ホワイトスペース
    -   C#の[Char.IsPunctuation](https://docs.microsoft.com/en-us/dotnet/api/system.char.ispunctuation?view=net-5.0)およびC#の[Char.IsWhiteSpace](https://docs.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-5.0)で定義されています。
-   **ピリオド(.)、アンダーバー(_)、スペース( )は使えます**。

# 使用方法

オプションで、名前の前に
**スペース**の名前を付け、**/**終了して、使用する特定のバリアブルスペースを選択できます。
これは、ダイナミックバリアブルを使用するシステムを区別するのに役立ちます。

使用例:

-   Health -- Healthという名前で、スペースは定義していません
-   World/Color -- Colorという名前で、Worldというスペースを定義
-   MyCoolSystem/Score --
    Scoreという名前で、MyCoolSystemいうスペースを定義

## スペース

ダイナミックバリアブルは、[DynamicVariableSpaceコンポーネントが付いたスロット内やスロットの下のどこにでも存在できます](DynamicVariableSpace_(Component) "wikilink")。

したがって、ワールドルートのDynamicVariableSpaceはどこからでも使用できますが、アバターのDynamicVariableSpaceはアバターに保存されているすべてのものから使用できます。

## バリアブル(Variables)

The simplest way to use dynamic variables is to use the
[DynamicValueVariable<T>](DynamicValueVariable%601_(Component) "wikilink")
and
[DynamicReferenceVariable<T>](DynamicReferenceVariable%601_(Component) "wikilink")
components. These are for value (int, float, String, etc.) and reference
(Slot, User, etc.) types, respectively.
ダイナミックバリアブルを使用する最も簡単な方法は、[DynamicValueVariable<T>や](DynamicValueVariable%601_(Component) "wikilink")[DynamicReferenceVariable<T>コンポーネントを使用することです](DynamicReferenceVariable%601_(Component) "wikilink")。それぞれ値（int、float、Stringなど）と参照（Slot、Userなど）型用です。

これらのコンポーネントは、値や参照を直接格納します。2つのバリアブルコンポーネントの名前が同じである場合、その内容は同じになります。

## フィールド(Fields)

ダイナミックバリアブルの内容として既存のフィールドまたは参照を使用する場合は、[DynamicField<T>や](DynamicField%601_(Component) "wikilink")[DynamicReference<T>コンポーネントを使用できます](DynamicReference%601_(Component) "wikilink")。何かを直接格納する代わりに、値や参照型をそれぞれ含むフィールドを指します。

（TODO：値と参照型を明確にします。これは完全には正しくないと思います）

## ドライバー(Drivers)

[DynamicValueVariableDriver<T>と](DynamicValueVariableDriver%601_(Component) "wikilink")[DynamicReferenceVariableDriver<T>コンポーネントを使用して](DynamicReferenceVariableDriver%601_(Component) "wikilink")、ダイナミックバリアブルの内容を使用してフィールドや参照をドライブできます。

## 一覧にない型

ダイナミックバリアブルコンポーネントを作成しようとすると、"一般的な型"の一覧が表示されます。探している型がそのリストにない場合は、手動で入力する必要があります。[コンポーネントの複合型を参照してください](Complex_Types_in_Components/ja "wikilink")。

## 警告

ダイナミックバリアブルを作成、複製、または移動するには、Resoniteがその変数をその空間に「バインド」する必要があります。
これには通常、少し時間がかかります。その前に、ダイナミックバリアブルが存在しているように見えますが、読み取りや書き込みはできません。
したがって、[Create Dynamic
Variableまたは](Create_Dynamic_Variable`1_(Protoflux_node) "wikilink")[Write
Or Create Dynamic
Variable](Write_Or_Create_Dynamic_Variable`1_(Protoflux_node) "wikilink")
Protofluxノードを使用してダイナミックバリアブルを作成する場合、または[Duplicate
SlotProtofluxノードを使用してダイナミックバリアブルを複製する場合](Duplicate_Slot_(Protoflux_node) "wikilink")、または[Set
Parentノードを使用して移動する場合は](Set_Parent_(Protoflux_node) "wikilink")、
ダイナミックバリアブルがそれらを使用する時間によってバインドされていることを確認するために、後で[Updates
Delayまたは](Updates_Delay_(Protoflux_node) "wikilink")[Updates Delay
With
ValueProtofluxノードを追加する必要があることがわかります](Updates_Delay_With_Value_(Protoflux_node) "wikilink")。
通常、1〜3のアップデートの遅延で十分です。

[Category:Protoflux Tutorials](Category:Protoflux_Tutorials "wikilink")