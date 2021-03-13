function buildHtml(value){
  const html =
   `<div class="user-area" id="user-area">
      <div class="user-item">
        <div class="user-msg">
          <p>${value}</p>
        </div>
      </div>
    </div>`
  return html;
}
const formElement = document.getElementById('chat-button');
formElement.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const html = buildHtml(data);
  const element = document.querySelector('#chat-input');
  const value = element.value;
  const parentElement = document.querySelector('#chat-area');
  parentElement.append(html);
  console.log(userArea);
}