echo starting app...
mongod &
redis-server &
nodemon server/index.js