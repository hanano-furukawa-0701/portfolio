const formElement = document.getElementById('chat-button');
formElement.addEventListener('click', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const element = document.querySelector('#chat-input');
  const userValue = element.value;
  if (userValue ==""){
    return false;
  } else {
    const userHtml =
     `<div class="user-area" id="user-area">
        <div class="user-item">
          <div class="user-msg">
            <p>${userValue}</p>
          </div>
        </div>
      </div>`
    const parentElement = document.querySelector('#chat-area');
    parentElement.insertAdjacentHTML('beforeend', userHtml); 
    element.value = '';
  }

  switch(userValue){
    case '0':
    case '０':
      harapekoValue = 'ブレスケア噛んでおこうか';
      break;
    case '1':
    case '１':
      harapekoValue = '美味しいコーヒー飲みに行こう！';
      break;
    case '2':
    case '２':
      harapekoValue = 'デザートは別腹♪';
      break;
    case '3':
    case '３':
      harapekoValue = 'うどんが食べたいなあ、、、';
      break;
    case '4':
    case '４':
      harapekoValue = 'お！これはカレー日和だね！！！';
      break;
    case '5':
    case '５':
      harapekoValue = 'はらぺこだ！餃子にビールにラーメンも食べたい(^^)';
      break;
    default:
      harapekoValue = '０〜５の数字で教えてね！'
      break;
  }
  const harapekoHtml =
     `<div class="harapeko-area" id="harapeko-area">
        <div class="harapeko-items">
          <div class="harapeko-icon">
            <i class="fas fa-hamburger"></i>
          </div>
          <div class="harapeko-msg">
            <p>${harapekoValue}</p>
          </div>
        </div>
      </div>`
   const parentElement = document.querySelector('#chat-area');
   setTimeout(() =>{
     parentElement.insertAdjacentHTML('beforeend', harapekoHtml); 
   }, 700);
}