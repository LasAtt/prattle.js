FROM node:boron

RUN echo Europe/Helsinki > /etc/timezone && dpkg-reconfigure --frontend noninteractive tzdata

ADD	https://api.github.com/repos/serdion/Clarion.js/git/refs/heads/master version.json
RUN	git clone https://github.com/serdion/prattle.js
ADD	config.json prattle.js/
WORKDIR	prattle.js/
RUN	npm install

CMD [ "npm", "build"]
CMD	[ "npm", "start" ]
