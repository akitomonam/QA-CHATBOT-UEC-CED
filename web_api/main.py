from fastapi import FastAPI


app = FastAPI()


@app.get("/helloworld")
def hello_world():
    return {"Hello": "World"}


@app.get("/question")
def return_answer(question_sentence: str):
    return {"question_sentence": question_sentence}
