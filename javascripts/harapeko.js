const formElement = document.getElementById('chat-button');
formElement.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const element = document.querySelector('#chat-input');
  const value = element.value;
  const html =
   `<div class="user-area" id="user-area">
      <div class="user-item">
        <div class="user-msg">
          <p>${value}</p>
        </div>
      </div>
    </div>`
  const parentElement = document.querySelector('#chat-area');
  parentElement.insertAdjacentHTML('beforeend', html); 
  element.value = '';
}