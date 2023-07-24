import { TextField , Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { Card } from '@mui/material';
import superagent from 'superagent'

// Query型定義
type Mora = {
    text: string
    consonant: string
    consonant_length: number
    vowel: string
    vowel_length: number
    pitch: number
  }
  
  type Query = {
    accent_phrases: {
        moras: Mora[]
        accent: number
        pause_mora: Mora
    }
    speedScale: number
    pitchScale: number
    intonationScale: number
    volumeScale: number
    prePhonemeLength: number
    postPhonemeLength: number
    outputSamplingRate: number
    outputStereo: boolean
    kana: string
  }

export default function QAWindow() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState<string>('');
    const [loading, setLoading] = useState(false);

    // 文字列からQueryを作り出す
    const createQuery = async (str_ans: string) => {
        const res = await superagent
        .post('http://localhost:50021/audio_query')
        .query({ speaker: 1, text: str_ans })

        if (!res) return
        return res.body as Query;
    }

    // Queryから合成音声を作り出す
    const createVoice = async (query: Query) => {
        const res = await superagent
        .post('http://localhost:50021/synthesis')
        .query({ speaker: 1 })
        .send(query)
        .responseType('blob')

        if (!res) return

        return res.body as Blob;
    }

    // 音声再生
    const playAudio = (voice:Blob) => {
        if (voice) {
        const audio = new Audio(window.URL.createObjectURL(voice));
        audio.addEventListener('canplay', () => {
            audio.play();
        });
        }
    }

    const handleClick = async () => {
        // 読み込み中の状態をセットする
        setAnswer('');
        setLoading(true);
        // 質問を送信する
        const url = `http://127.0.0.1:12344/question?question_sentence=${question}`;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        fetch(url, options)
        .then(response => response.json())
        .then(async (data) => {
            setAnswer(data.ans);
            // Queryを作成する
            const query = await createQuery(data.ans);
            // 合成音声を作成する
            if (!query) return;
            // 合成音声を作成する
            const voice = await createVoice(query);
            // 音声を再生する
            if (!voice) return;
            playAudio(voice);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false)); // ローディング状態を解除する
    };
    const handleMakeIndex = () => {
        setLoading(true);
        const url = `http://127.0.0.1:12344/makeindex`;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => setAnswer('エラーが発生しました。'))
        .finally(() => setLoading(false)); // ローディング状態を解除する
    };
    return (
        <>
            <TextField
                fullWidth
                label="電気通信大学に関する質問をしてください"
                multiline
                maxRows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                />
            <div>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleClick}>
                送信
            </Button>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleMakeIndex}>
                文書のインデックスを再作成
            </Button>
            </div>
             {/* ローディング状態がtrueの場合には、<CircularProgress />を表示する */}
            {loading ? (
                <CircularProgress />
            ) : (
                <Card variant="outlined">
                {answer}
                </Card>
            )}
        </>
    );
}