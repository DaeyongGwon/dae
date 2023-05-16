//
//팝업을 열고 닫는 동작 그 자체를 비동기작업이라 생각하고 코드를 구현해보자
const addItem = (label) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = label;
  ul.appendChild(li);
}

const asyncConfirm = (text) => {
  return new Promise(resolve => {
    const wrapper = document.querySelector('div.popup-box');
    const popup = document.createElement('div');
    popup.classList.add('confirm');
    popup.textContent = text;
    wrapper.appendChild(popup);
    
    const okBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    okBtn.textContent = 'Ok';
    cancelBtn.textContent = 'Cancel';

    popup.appendChild(okBtn);
    popup.appendChild(cancelBtn);

    const onClick = pass => {
      resolve(pass);
      popup.remove();
    };

    okBtn.addEventListener('click', onClick.bind(null, true));
    cancelBtn.addEventListener('click', onClick.bind(null, false));
  })
};

const run = async () => {
  if (await asyncConfirm('추가?')) {
    addItem('💡Item');
  }
}