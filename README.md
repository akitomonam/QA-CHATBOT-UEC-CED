# CED-UEC-QA-CHATBOT(DEMO)
CED-TAが作成した電気通信大学のQAチャットボットです。  
電気通信大学に関する質問ができます。  
<img width="354" alt="image" src="https://github.com/akitomonam/QA-CHATBOT-UEC-CED/assets/72239675/071de589-b109-4190-99ba-e039e28a3bfd">

# 使い方
## Dockerの用意
docker desktopアプリをダウンロードしてインストールしてください．
その後，起動してください．
## QA参照ファイルの作成
web_api/dataフォルダ内に.txtファイルを作成する。（作成済み）  
この.txtファイルに様々な情報を書き込む。
実行時はこれらのファイルを読み込み、それを元にして回答を作成する。
## API KEYの取得
[OpenAIウェブサイト](https://openai.com/)からAPIキーを取得して、
[config.json](config.json)に書き込む。※参考：[config.sample.json](config.sample.json)
## システム起動
```
docker compose up -d
```
# 備考
作成者:佐藤明智(CED-TA)  
日付:2023/07/24