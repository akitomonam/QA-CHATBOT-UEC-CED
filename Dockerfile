FROM python:3.8

RUN apt-get update

RUN mkdir -p /dialog
COPY requirements4docker.txt /dialog
WORKDIR /dialog

RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN python -m pip install -r requirements4docker.txt