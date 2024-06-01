const wsUrl = 'wss://echo.websocket.org/';


const input = document.querySelector('.input-text');
const btn = document.querySelector('.btn-message');
const chatMessage = document.querySelector('.chat-message');
const btnGeo = document.querySelector('.btn-geo');
const linkGeo = document.querySelector('.link-geo');

let websocket = new WebSocket(wsUrl);




function writeToScreen (message) {
    let pre = document.createElement('p');
    pre.classList.add('chat-crust')
    pre.innerHTML = message;
    chatMessage.appendChild(pre);
}

btn.addEventListener('click', () => {
    const message = input.value;
    writeToScreen('sent:' + message);
    websocket.send(message);

    websocket.onmessage = function(evt) {
        writeToScreen('<span> Ответ:' + evt.data+'</span>')
    }
})


const error = () => {
    chatMessage.textContent = 'Невозможно определить ваше местоположение';
}

const success = (position) => {
    console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  //chatMessage.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
  linkGeo.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  linkGeo.innerHTML = 'Ссылка на карту';
}

btnGeo.addEventListener('click', () => {
    linkGeo.href = '';
    linkGeo.textContent = '';
    
    if (!navigator.geolocation) {
      chatMessage.textContent = 'Geolocation не поддерживается вашим браузером';
    } else {
      linkGeo.textContent = 'Определение местоположения…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  });







