# static-pack
static-packは、webpack4をベースにした制作環境パッケージです。  
最新のツールや技術を盛り込みつつ、IE11を含む各ブラウザの最新バージョンでの動作を目標にしています。  
使用しているツールや技術などは下記になります。
- dev server → browsersync
- template engine → pug
- post css → stylus + stylint
- javascript → es6 + babel + eslint (jquery less)
- svg-sprite
- bootstrapのreboot.cssをリセットに使用
- css grid layout
- etc...

## 使い方
導入から開発・ビルドまでの説明です。yarn派なのでnpm派の方は適時置き換えてください。

### 導入
npmのパッケージたちをインストールします。コマンドラインでプロジェクトフォルダを選択し、下記を入力します。  
`yarn install`

### 開発モード
開発モードはローカルサーバーが起動しwatchを開始します。  
開発フォルダは`src`フォルダで、`dist`フォルダへビルドします。ローカルサーバーのdocument rootは`dist`フォルダです。  
`yarn dev`

### プロダクションモード
プロダクションモードでは、ローカルサーバーが立ち上がらず、watchもされません。ただwebpackがプロダクションモードでビルドします。プロダクションモードでは、css, jsファイルを圧縮し軽量化します。  
`yarn build`
