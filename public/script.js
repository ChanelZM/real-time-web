(function(){
  var socket = io();
  var form = document.querySelector('form');
  var input = document.querySelector('#m');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    socket.emit('chat message', input.value);
    input.value = '';
    return false;
  });

  socket.on('chat message', function(msg){
    var newElement = document.createElement('li');
    var newMessage = document.createTextNode(msg);
    newElement.appendChild(newMessage);
    document.querySelector('#messages').appendChild(newElement);
  });
})();
