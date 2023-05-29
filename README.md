# CED-UEC-QA-CHATBOT
CED-TAが作成した電気通信大学のQAチャットボットです。  
電気通信大学に関する質問ができます。
# 使い方
## 準備
### 環境準備
本プログラムはDockerを用いて環境構築しています。  
以下は、実行確認済み環境です。
```
Docker version 23.0.5, build bc4487a
Docker Compose version v2.17.3
```
### テキストファイルの作成
dataフォルダ内に.txtファイルを作成してください。
この.txtファイルに様々な情報を書き込みます。
実行時はこれらのファイルを読み込み、それを元にして回答を作成しています。
### API KEYの取得
[OpenAIウェブサイト](https://openai.com/)からAPIキーを取得して、
[config.json](config.json)に書き込んでください。※参考：[config.sample.json](config.sample.json)
## 実行
```
docker compose up -d # コンテナの起動
docker compose exec main bash # コンテナシェルに入る
```
以下、コンテナ内で実行
```
python qa_chatbot_uec_ced.py --reindex # ドキュメント更新の場合 or 初回動作時
# python qa_chatbot_uec_ced.py # ドキュメントの更新がない場合
```
# 作成者
佐藤明智(CED-TA)