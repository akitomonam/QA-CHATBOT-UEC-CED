# CED-UEC-QA-CHATBOT(DEMO)
CED-TAが作成した電気通信大学のQAチャットボットです。  
電気通信大学に関する質問ができます。
# 動作確認済み環境
Windows11
# 使い方
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
pip install -r requirements.txt
```
## QA参照ファイルの作成
dataフォルダ内に.txtファイルを作成する。（作成済み）  
この.txtファイルに様々な情報を書き込む。
実行時はこれらのファイルを読み込み、それを元にして回答を作成する。
## API KEYの取得
[OpenAIウェブサイト](https://openai.com/)からAPIキーを取得して、
[config.json](config.json)に書き込む。※参考：[config.sample.json](config.sample.json)
## 実行
以下のようにプログラムを実行するとGUIが立ち上がり音声認識で質問できる。  
システムは音声合成によって回答する。
```
cd src
python qa_chatbot_uec_ced_simple_gui_thread.py
```
# 備考
作成者:佐藤明智(CED-TA)  
日付:2023/05/29