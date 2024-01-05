<languages/>マテリアルは、Resoniteでビジュアルをレンダリングするために使用される[アセットです](Asset/ja "wikilink")。マテリアルのタイプとそのプロパティによって、オブジェクトの外観と、シーン内の照明との相互作用が決まります。

マテリアルは、**マテリアルオーブ**と呼ばれる物理オブジェクトとして表示され、[MaterialTipにロードしたり](Material_Gun "wikilink")、インスペクターにドロップしたり、さまざまな[仮想デバイスに配置したりできます](Virtual_Device "wikilink")。マテリアルオーブは視覚的な表現にすぎず、マテリアルが機能するために必要ではありません。

各マテリアルは他のコンポーネントと同じように機能しますが、基礎となるシェーダーによって駆動されます。各マテリアルには、一意のシェーダーと変更可能なプロパティのリストが含まれています。
マテリアルのプロパティを編集することで、Resonite内のオブジェクトの見た目を変更できます。Resoniteには、以下にリストされている多種多様なマテリアルタイプがあります。

## カスタムマテリアル/シェーダー

Resoniteは現在、カスタムシェーダーをサポートしていません。これはResoniteのロードマップにあり、[githubで確認](https://github.com/Frooxius/ResonitePublic/projects/1#card-35344852)できます。カスタムシェーダーを待っている間に、ComponentsとProtofluxと組み合わせると多くの視覚効果を実現できるResoniteの既存のシェーダーを試してみてください。

## マテリアル資料

ほとんどのセットアップでは、Resoniteはコミュニティから要求されたいくつかのカスタムシェーダーとともに多くの標準シェーダーを使用します。何らかのドキュメントが必要な場合は、これを使用すると、よりカスタムのレンダラーが具体化されるまで理想的です。
<https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/shading-model.html>

### マテリアル固有の情報

-   [カラースプラットマテリアル](Color_Splat_Materials/ja "wikilink") -
    カラースプラットマテリアルの仕組みと使用方法に関する情報。
-   [チャンネルパッキング](Channel_Packing/ja "wikilink") -
    マテリアル内でチャネルパッキングがどのように機能するかに関する一般情報。

## 新しいマテリアルの作成

<youtube><https://www.youtube.com/watch?v=WhkoJaPk9AU></youtube>

## マテリアル一覧

使用できるマテリアル一覧は[:Category:Materialsで確認できます](:Category:Materials "wikilink")。