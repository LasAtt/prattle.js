module.exports = (io, db) =>{
  return (socket) => {
    socket.on('message:new', (message) => {
      db.get('messages').insert(message);
      io.sockets.emit('message:new', message);
    });

    socket.on('username:set', (username) => {
      console.log(username)
    })
  };
};
