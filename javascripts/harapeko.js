const harapekoChat = [
  'お腹すいた！腹ペコ度を０〜５で教えて！！',
  'ブレスケア噛んでおこうか',
  '美味しいコーヒー飲みに行こう！',
  'デザートは別腹♪',
  'うどんを食べに行こう！きつね！！',
  'お！これはカレー日和だね！！！',
  'はらぺこだ！餃子にビールにラーメンも食べたい(^^)',
  '腹ペコ度を０〜５の数字で教えてね！',
  [['レッツゴー！！'],['わくわく😊'],['食べることは生きること！']]
];

function buildHarapekoHtml(harapekoValue){
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
  return harapekoHtml;
}

function buildUserHtml(userValue){
  const userHtml =
     `<div class="user-area" id="user-area">
        <div class="user-item">
          <div class="user-msg">
            <p>${userValue}</p>
          </div>
        </div>
      </div>`
  return userHtml;
}

const parentElement = document.querySelector('#chat-area');

setTimeout(() =>{
  parentElement.insertAdjacentHTML('beforeend', buildHarapekoHtml(harapekoChat[0])); 
}, 500);

const formElement = document.getElementById('chat-button');
let chatCount = 0;
formElement.addEventListener('click', userSubmit);

function userSubmit(event) {
  event.preventDefault();
  const element = document.querySelector('#chat-input');
  const userValue = element.value;
  if (userValue ==""){
    return false;
  } else {
    parentElement.insertAdjacentHTML('beforeend', buildUserHtml(userValue)); 
    element.value = '';
  }
  switch(chatCount){
    case 0:
      harapekoSubmit(userValue);
      break;
    default:
      nextSubmit();
      break;
  }
}

function harapekoSubmit(userValue){
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
  if(harapekoValue < harapekoChat[7]){
    chatCount++;
  }
  setTimeout(() =>{
    parentElement.insertAdjacentHTML('beforeend', buildHarapekoHtml(harapekoValue)); 
  }, 700);
}

function nextSubmit() {
  setTimeout(() =>{
    parentElement.insertAdjacentHTML('beforeend', buildHarapekoHtml(harapekoChat[8][Math.floor(Math.random() * harapekoChat[8].length)])); 
  }, 700);
}

// 検討すること
const observer = new MutationObserver((render) => {
  scrollToBottom();
});

observer.observe(parentElement, {
  childList: true,
});

function scrollToBottom(){
  parentElement.scrollTop = parentElement.scrollHeight;
};






