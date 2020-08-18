const widget = document.querySelector('.chat-widget');
widget.onclick = () => widget.classList.add('chat-widget_active');

const messages = document.querySelector( '.chat-widget__messages' );
const botMessages = [
        'Кто тут?',
        'К сожалению, все операторы сейчас заняты.',
        'Вы у нас ничего не купили. Сделайте заказ.',
      ];

let inputField = document.querySelector('#chat-widget__input');
inputField.addEventListener('keydown', () => {
  if (event.code === 'Enter' && inputField.value != '' && inputField.value != ' ') {
    let messageDate = new Date();
    let messageHours = messageDate.getHours();
    let messageMinutes = messageDate.getMinutes();
    if (messageHours < 10) {
      messageHours = '0' + messageHours;
    }
    if (messageMinutes < 10) {
      messageMinutes = '0' + messageMinutes;
    }
    
    index = Math.floor(Math.random() * botMessages.length);

    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${messageHours}:${messageMinutes}</div>
        <div class="message__text">
          ${inputField.value}
        </div>
      </div>
      <div class="message">
        <div class="message__time">${messageHours}:${messageMinutes}</div>
        <div class="message__text">
          ${botMessages[index]}
        </div>
      </div>
    `;
    inputField.value = '';
  }
})
