const harapekoChat = [
  'お腹すいた！腹ペコ度を０〜５で教えて！！',
  'ブレスケア噛んでおこうか',
  '美味しいコーヒー飲みに行こう！',
  'デザートは別腹♪',
  'うどんが食べたいなあ、、、',
  'お！これはカレー日和だね！！！',
  'はらぺこだ！餃子にビールにラーメンも食べたい(^^)',
  '０〜５の数字で教えてね！',
  [['レッツゴー！！'],['わくわく😊'],['食べることは生きること！']]
];



const parentElement = document.querySelector('#chat-area');

setTimeout(() =>{
  const harapekoHtml =
     `<div class="harapeko-area" id="harapeko-area">
        <div class="harapeko-items">
          <div class="harapeko-icon">
            <i class="fas fa-hamburger"></i>
          </div>
          <div class="harapeko-msg">
            <p>${harapekoChat[0]}</p>
          </div>
        </div>
      </div>`
  parentElement.insertAdjacentHTML('beforeend', harapekoHtml); 
}, 500);

var chatCount = 0;


const formElement = document.getElementById('chat-button');


if(chatCount == 0){
  formElement.addEventListener('click', handleSubmit);
  chatCount++;
} else {
  formElement.addEventListener('click', afterSubmit);
}

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
    parentElement.insertAdjacentHTML('beforeend', userHtml); 
    element.value = '';
  }
  switch(userValue){
    case '0':
    case '０':
      harapekoValue = harapekoChat[1];
      break;
    case '1':
    case '１':
      harapekoValue = harapekoChat[2];
      break;
    case '2':
    case '２':
      harapekoValue = harapekoChat[3];
      break;
    case '3':
    case '３':
      harapekoValue = harapekoChat[4];
      break;
    case '4':
    case '４':
      harapekoValue = harapekoChat[5];
      break;
    case '5':
    case '５':
      harapekoValue = harapekoChat[6];
      break;
    default:
      harapekoValue = harapekoChat[7];
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
  setTimeout(() =>{
    parentElement.insertAdjacentHTML('beforeend', harapekoHtml); 
  }, 700);
}

function afterSubmit(event) {
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
    parentElement.insertAdjacentHTML('beforeend', userHtml); 
    element.value = '';
  }
  const harapekoHtml =
   `<div class="harapeko-area" id="harapeko-area">
      <div class="harapeko-items">
        <div class="harapeko-icon">
          <i class="fas fa-hamburger"></i>
        </div>
        <div class="harapeko-msg">
          <p>${harapekoChat[8][Math.floor(Math.random() * harapekoChat[8].length)]}</p>
        </div>
      </div>
    </div>`
  setTimeout(() =>{
    parentElement.insertAdjacentHTML('beforeend', harapekoHtml); 
  }, 700);
}
