# CED-UEC-QA-CHATBOT(DEMO)
CED-TAが作成した電気通信大学のQAチャットボットです。  
電気通信大学に関する質問ができます。  
<img width="265" alt="image" src="https://github.com/akitomonam/QA-CHATBOT-UEC-CED/assets/72239675/b4528294-b673-4253-be82-9ca0f40c8bbf">
# 動作確認済み環境
Windows11
# 使い方
実行するためには以下の準備が必要です。
- VOICEVOXのインストールと起動
- Anacondaのインストールと環境構築
- プログラムの入手
- QA参照ファイルの作成
- API KEYの取得
## VOICEVOX(音声合成)
[リンク](https://voicevox.hiroshiba.jp/)からファイルをダウンロードしてインストール後、起動する。  
## Anaconda
以下のリンクからAnacondaを入手してインストールまで済ませる。  
https://www.anaconda.com/download  
Anacondaで環境を構築する。  
```
conda create -n uec-ced-qa-chatbot python=3.9
conda activate uec-ced-qa-chatbot
```
## プログラムを入手の入手
```
git clone https://github.com/akitomonam/QA-CHATBOT-UEC-CED.git
```
フォルダに移動する。
```
cd QA-CHATBOT-UEC-CED
```
必要なライブラリをインストールする。
```
pip install -r requirements4anaconda.txt
```
## QA参照ファイルの作成
web_api/dataフォルダ内に.txtファイルを作成する。（作成済み）  
この.txtファイルに様々な情報を書き込む。
実行時はこれらのファイルを読み込み、それを元にして回答を作成する。
## API KEYの取得
[OpenAIウェブサイト](https://openai.com/)からAPIキーを取得して、
[config.json](config.json)に書き込む。※参考：[config.sample.json](config.sample.json)
## 実行
以下のようにプログラムを実行するとGUIが立ち上がり音声認識で質問できる。  
システムは音声合成によって回答する。
```
cd web_api
python qa_chatbot_uec_ced_simple_gui_thread.py
```
## 注意
初回実行時は以下を実行する。
```
cd web_api
python qa_chatbot_uec_ced.py --reindex
```
# 備考
作成者:佐藤明智(CED-TA)  
日付:2023/05/29
