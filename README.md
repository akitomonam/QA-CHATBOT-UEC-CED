# CED-UEC-QA-CHATBOT
CED-TAが作成した電気通信大学のQAチャットボットです。
# 使い方
## 準備
### 環境準備
本プログラムはDockerを用いて環境構築しています。  
実行確認済み環境
```
Docker version 23.0.5, build bc4487a
Docker Compose version v2.17.3
```
### テキストファイルの作成
dataフォルダに.txtファイルを作成する
この.txtファイルに様々な情報を書き込む。
実行時はこれらのファイルを読み込み、それを元にして回答を作成する。
### API KEYの取得
[OpenAIサイト](https://openai.com/)からAPIキーを取得して、
[config.json](config.json)に書き込む。
## 実行
```
docker compose up -d # コンテナの起動
docker compose exec main bash
```
以下、コンテナ内で実行
```
python qa_chatbot_uec_ced.py --reindex # ドキュメント更新時
# python qa_chatbot_uec_ced.py # ドキュメントの更新がない場合
```
# 作成者
佐藤明智(CED-TA)