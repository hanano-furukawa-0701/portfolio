const formElement = document.getElementById('chat-button');
formElement.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  console.log('ok');
}