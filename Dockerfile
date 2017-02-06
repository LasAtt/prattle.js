FROM node:boron

RUN echo Europe/Helsinki > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

ADD	https://api.github.com/repos/serdion/prattle.js/git/refs/heads/master version.json
RUN	git clone https://github.com/serdion/prattle.js
WORKDIR	prattle.js/
RUN	npm install

EXPOSE 3000

CMD [ "npm", "build"]
CMD	[ "npm", "start" ]
