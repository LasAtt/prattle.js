module.exports = (io, db) =>{
  return (socket) => {
    socket.on('message:new', (message) => {
      console.log('message');
      db.get('messages').insert(message).then((res) => {
          io.sockets.emit('message:new', res);
      });
    });

    socket.on('username:set', (username) => {
      console.log(username)
    })
  };
};
