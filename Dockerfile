FROM python:3

WORKDIR /dialogue
COPY requirements.txt /dialogue
RUN apt-get update
RUN pip install --upgrade pip
RUN python -m pip install -r requirements.txt