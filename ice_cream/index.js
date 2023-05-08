$(document).ready(function () {
    $('#loading').hide();
  });
  
  function chatGPT() {
    const api_key = "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"  // <- API KEY 입력
    const keywords = document.getElementById('keywords').value
    $('#loading').show();
  //
    let iceCreamFlavor;
    let messages = [
      { role: 'system', content: "너는 세계 최고의 아이스크림 전문가이자 맛 감별사야. 최선을 다해서 답변해 드리겠습니다.원하시는 맛의 종류를 알려주세요." },
      { role: "assistant", content: `저는 ${'keywords'} 맛에 대해서 알고 싶어요.`},
      { role: 'user', content: keywords + "you will answer the question You are the world's best ice cream expert and icecream lover. When answering a question about ice cream, start with the recommended ice cream flavor is __ 그리고 절대 너에 대해서 설명하지마. 그리고 너는 질문에 대해서 아이스크림 맛에 대한 그 맛에대한 아이스크림 제품 4가지를 추천해주고 가격도 지정해줘. Please write down where the product is and fill in the price for the ice cream unconditionally and ask for it based on Korea standards. Answer me in Korean no matter what, and lastly, never explain yourself." },
  
    ]
  
    const data = {
      model: 'gpt-3.5-turbo',
      temperature: 1,
      n: 2,
      max_tokens: 250,
  
      messages: messages,
    }
  
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
  
      document.getElementById('keywords').value = ''
    });
  
  
  
  }
  
  
  