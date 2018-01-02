# IndexedDB サンプル

色々書き換えて IndexedDB のお試しをするためのひな形サンプルプロジェクトです。

## 動作確認方法

まずは以下のコマンドで必要なパッケージをインストールします。

    npm install

次に以下のコマンドでコンパイルします。

    npm run build

コンパイルが正常に終わったら index.html をブラウザで開いてください。

結果は画面ではなく、コンソールにログとして出力されます。ブラウザのコンソール機能を使用して、結果を確認してください。

初期状態では以下の通りにログが出力されます。

| ログ内容 | 説明 |
| ------ | ---- |
| Cleaned | データベースを削除しました。 |
| Created | データベースを作成しました。<br>データベースの名前は exampledb です。<br>合わせて example ストアを作成しています。 |
| Added key: key1, value: value1 | example ストアにデータ { key: "key1", value: "value1" } を追加しました。 |
| Get key: key1, value: value1 | example ストアからデータ { key: "key1", value: "value1" } を取得しました。 |
