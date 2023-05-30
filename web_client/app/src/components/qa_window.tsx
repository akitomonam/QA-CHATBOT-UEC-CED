import { TextField , Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { Card } from '@mui/material';

export default function QAWindow() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        // 読み込み中の状態をセットする
        setAnswer('');
        setLoading(true);
        // 質問を送信する
        const url = `http://127.0.0.1:8000/question?question_sentence=${question}`;
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        };
        fetch(url, options)
        .then(response => response.json())
        .then(data => setAnswer(data.ans))
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
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleClick}>
                送信
            </Button>
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