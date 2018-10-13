const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

let app = express();
const port = process.env.PORT || 3000;
const publidDir = path.join(__dirname, '../public');
app.use(express.static(publidDir));

let server = http.createServer(app);

let io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('disconnect', () => {
        console.log('user is disconnected');
    });

    socket.on('createMessage', (newMessage) => {
        console.log('createEmail', newMessage);
    });

    socket.emit('newMessage', {
        from: 'mike@example.com',
        test: 'Hey, what\'s going on',
        createAt: 123
    });
});

server.listen(port, () => {
    console.log(`server is running on ${port}...`);
})

