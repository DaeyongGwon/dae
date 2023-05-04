$(document).ready(function () {
  $('#loading').hide();
});

function chatGPT() {
  const api_key = "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"  // <- API KEY 입력
  const keywords = document.getElementById('keywords').value
  $('#loading').show();

  const messages = [
    { role: 'system', content: 'You are a helpful assistant.' },
    // { role: 'user', content: keywords + "Please answer as much as you can about . Because you are the best, there is nothing to get stuck on. Please do not explain in detail no matter what. You are the world's greatest ice cream lover. To answer your question, just give me 5 types of ice cream and don't explain, And please answer in Korean" },
    { role: 'user', content: keywords + "you will answer the question You are the world's best ice cream expert and lover. When answering a question about ice cream, start with the recommended ice cream flavor is __ and never give an explanation. And it introduces 4 ice cream products that currently exist for the flavor of ice cream. Please write down where the product is and fill in the price for the ice cream unconditionally and ask for it based on Korea standards. Answer me in Korean no matter what, and lastly, never explain yourself." },
  ]

  const data = {
    model: 'gpt-3.5-turbo',
    temperature: 1,
    n: 2,
    max_tokens: 250,
    
    stop: '</s>',
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


