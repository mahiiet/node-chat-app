var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);

  let li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`)

  $('#messages').append(li);
  $('[name=message]').val('');
});

socket.emit('createMessage', {
  from: 'frank',
  text: 'Hi'
}, function(data){
  console.log('got it!.', data);
});

$('#message-from').on('submit', function(e){
  e.preventDefault();

  socket.emit('createMessage', {
    from: "User",
    text: $('[name=message]').val()
  }, function(data){
    console.log(data);
  });
})