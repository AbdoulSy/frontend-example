FROM node:12-slim
WORKDIR /usr/node/frontend
COPY ./context/package.json .
RUN npm i
COPY ./context . 
RUN chmod -R 0777 /usr/node/frontend/dist 
RUN chmod -R 0777 /usr/node/frontend/.cache
USER node
EXPOSE 1234 
CMD npm start


