import requests
import json
from playsound import playsound


class VoiceVoxRequestLocalApi:
    def __init__(self) -> None:
        self.HOSTNAME = 'localhost'
        # コマンド引数分析
        # input_texts = text
        self.speaker = 3
        self.filename = "voicevox_sample"
        self.output_path = "."
        self.file_num_list = []

    def make_sound_file(self, text):
        self.file_num_list = []
        input_texts = text
        # 「 。」で文章を区切り１行ずつ音声合成させる
        texts = input_texts.split('。')

        # 音声合成処理のループ
        for i, text in enumerate(texts):
            # 文字列が空の場合は処理しない
            if text == '':
                continue

            # audio_query (音声合成用のクエリを作成するAPI)
            res1 = requests.post('http://' + self.HOSTNAME + ':50021/audio_query',
                                 params={'text': text, 'speaker': self.speaker})
            # synthesis (音声合成するAPI)
            res2 = requests.post('http://' + self.HOSTNAME + ':50021/synthesis',
                                 params={'speaker': self.speaker}, data=json.dumps(res1.json()))
            # wavファイルに書き込み
            with open(self.output_path + '/' + self.filename + f'_%03d.wav' %i, mode='wb') as f:
                f.write(res2.content)

            self.file_num_list.append(i)
    
    def play_sound_file(self):
        for file_num in self.file_num_list:
            playsound(self.output_path + '/' + self.filename + f'_%03d.wav' %file_num)


if __name__ == "__main__":
    voicevox = VoiceVoxRequestLocalApi()
    voicevox.make_sound_file("うへへ。私はボイスボックスなんだよ。楽しくお話ししようぜ。")
    voicevox.play_sound_file()
