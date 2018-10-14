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

socket.on('newLocationMessage', function(message){
  let li = $('<li></li>');
  let a = $('<a target="_blank">My Current Location</a>');
  a.attr('href', message.url);
  li.append(a);

  $('#messages').append(li);
  $('[name=message]').val('');
});

$('#message-form').on('submit', function(e){
  e.preventDefault();

  const messageTextbox = $('[name=message]');

  socket.emit('createMessage', {
    from: "User",
    text: messageTextbox.val()
  }, function(){
    messageTextbox.val('');
  });
});


var sendLocation = $('#send-location');

sendLocation.on('click', function(e){
  if(!navigator.geolocation){
    return alert('geo location is not supported by the browser');
  }

  sendLocation.attr('disabled', 'disabled').text('sending location...');

  navigator.geolocation.getCurrentPosition(function(position){
    sendLocation.removeAttr('disabled').text('send location');
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, function(){
    sendLocation.removeAttr('disabled').text('send location');
    alert('unable to fetch location');
  });
});