FROM node:12
WORKDIR /app
ADD app /app
RUN cd /app && npm install
EXPOSE 3000
CMD npm start
