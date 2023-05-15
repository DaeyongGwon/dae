const flavors = {
  red: [
    { name: '1', desc: '나무에 달린 딸기' ,img: "./image/1.png"},
    { name: '2', desc: '톰과 체리' ,img: "./image/2.png"},
    { name: '15', desc: '콕콕콕 체리톡' ,img: "./image/15.png"},
  ],
  orange: [
    { name: '13', desc: '홍시 맛이 나서...' ,img: "./image/13.png"},
    { name: '3', desc: '꾸덕꾸덕 황치즈' ,img: "./image/3.png"},
  ],
  yellow: [
    { name: '12', desc: '상큼터지는 레몬' ,img: "./image/12.png"},
    { name: '5', desc: '바나나킥 갈아넣은 바나나' ,img: "./image/5.png"},
    { name: '3', desc: '닐라닐라 바닐라', img: "./image/3.png"},
  ],
  green: [
    { name: '8', desc: '녹차마루' ,img: "./image/8.png"},
    { name: '18', desc: '겨자맛' ,img: "./image/18.png"},
  ],
  white: [
    { name: '7', desc: '요거트' ,img: "./image/7.png"},
    { name: '9', desc: '누룽지' ,img: "./image/9.png"},
    { name: '14', desc: '초코시럽 많이 주세요' ,img: "./image/14.png"},
    { name: '16', desc: '깨 떨어지는' ,img: "./image/16.png"},
  ],
  brown: [
    { name: '6', desc: '아메리카노 말고 바닐라 라떼' ,img: "./image/6.png"},
    { name: '10', desc: '캐러멜 많이 주세요' ,img: "./image/10.png"},
    { name: '11', desc: '진짜 초코' ,img: "./image/11.png"},
    { name: '17', desc: '바닐라에 뿌려진 초코' ,img: "./image/17.png"},
  ],
};
function chatGPT() {
  const api_key = "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"  // <- API KEY 입력
  const flavor = document.getElementById('flavor').value
  const keywords = document.getElementById('keywords').value
  console.log(flavor);

  if (!flavors[flavor]) {
    alert('맛을 선택해주세요!')
    return
  }
  let messages = [
    { role: "system", "content" : "You are the owner of the Pistachio ice cream parlor. I will recommend a menu according to the taste you choose."  },
    { role: "assistant", "content" : `<div>${flavors[flavor]}</div>`  },
    console.log(flavors[flavor]),
  ]
s
  flavors[flavor].forEach((item) => {
    // if (item.name.includes(keywords)) {
      console.log(item);
      messages.push({ role: "assistant", "content": `<img src="${item.img}"> ${item.desc}.`})
      messages.push({ role: "assistant", "content": `Recommend 1 from ${flavors}` })
      messages.push({ role: "assistant", "content": `${item.desc} flavor.` })

      console.log(`${item.img}`);
      console.log(`${item.desc}`);
    // }
  })

  const data = {
    model: 'gpt-3.5-turbo',
    temperature: 1,
    n: 2,
    max_tokens: 250,
    messages: messages,
  }

  $('#loading').show();

  $.ajax({
    url: "https://api.openai.com/v1/chat/completions",
    method: 'POST',
    headers: {
      Authorization: "Bearer " + api_key,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(function (response) {
    $('#loading').hide();
    console.log(response)
    let result = document.getElementById('result')
    let pre = document.createElement('pre')

    pre.innerHTML = "\n\n" + response.choices[0].message.content
    result.appendChild(pre)

    document.getElementById('flavor').value = ''
    document.getElementById('keywords').value = ''
  });
}

