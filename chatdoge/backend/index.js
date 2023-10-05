const apiKey = ""
const serverless = require('serverless-http');
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
var cors = require('cors')
const app = express()

const configuration = new Configuration({
    apiKey: apiKey,
  });
const openai = new OpenAIApi(configuration);

//CORS 이슈 해결
let corsOptions = {
    origin: 'https://chat-daeyong.pages.dev',
    credentials: true
}
app.use(cors(corsOptions));

//POST 요청 받을 수 있게 만듬
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// POST method route
app.post('/fortuneTell', async function (req, res) {
    let { myDateTime, userMessages, assistantMessages} = req.body

    let todayDateTime = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    let messages = [
        {role: "system", content: "당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다."},
        {role: "user", content: "당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다."},
        {role: "assistant", content: "안녕하세요! 저는 챗도지입니다. 운세와 점성술에 관한 질문이 있으신가요? 어떤 것이든 물어보세요, 최선을 다해 답변해 드리겠습니다."},
        {role: "user", content: `저의 생년월일과 태어난 시간은 ${myDateTime}입니다. 오늘은 ${todayDateTime}입니다.`},
        {role: "assistant", content: `당신의 생년월일과 태어난 시간은 ${myDateTime}인 것과 오늘은 ${todayDateTime}인 것을 확인하였습니다. 운세에 대해서 어떤 것이든 물어보세요!`},
    ]

    while (userMessages.length != 0 || assistantMessages.length != 0) {
        if (userMessages.length != 0) {
            messages.push(
                JSON.parse('{"role": "user", "content": "'+String(userMessages.shift()).replace(/\n/g,"")+'"}')
            )
        }
        if (assistantMessages.length != 0) {
            messages.push(
                JSON.parse('{"role": "assistant", "content": "'+String(assistantMessages.shift()).replace(/\n/g,"")+'"}')
            )
        }
    }

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages
    });
    let fortune = completion.data.choices[0].message['content']

    res.json({"assistant": fortune});
});

module.exports.handler = serverless(app);

// app.listen(3000)





var products = [
    { id: 0, img: "./image/1.png", price: 7000, title: "나무에 달린 딸기" },
    { id: 1, img: "./image/2.png", price: 8000, title: "톰과 체리" },
    { id: 2, img: "./image/3.png", price: 6000, title: "닐라닐라 바닐라" },
    { id: 3, img: "./image/4.png", price: 6000, title: "꾸덕꾸덕 황치즈" },
    { id: 4, img: "./image/5.png", price: 6000, title: "바나나킥 갈아넣은 바나나" },
    { id: 5, img: "./image/6.png", price: 6000, title: "아메리카노 말고 바닐라라떼" },
    { id: 6, img: "./image/7.png", price: 6000, title: "요거트" },
    { id: 7, img: "./image/8.png", price: 6000, title: "녹차마루" },
    {id: 8, img: "./image/9.png", price: 6000, title: "누룽지"},
    {id: 9, img: "./image/10.png", price: 6000, title: "캐러멜 많이 주세요"},
    {id: 10, img: "./image/11.png", price: 6000, title: "진짜 초코"},
    {id: 11, img: "./image/12.png", price: 6000, title: "상큼 터지는 레몬"},
    {id: 12, img: "./image/13.png", price: 6000, title: "홍시 맛이 나서.."},
    {id: 13, img: "./image/14.png", price: 6000, title: "초코시럽 많이 주세요"},
    {id: 14, img: "./image/15.png", price: 6000, title: "콕콕콕 체리콕~"},
    {id: 15, img: "./image/16.png", price: 6000, title: "깨 떨어지는"},
    {id: 16, img: "./image/17.png", price: 6000, title: "바닐라에 뿌려진 초코"},
    {id: 17, img: "./image/18.png", price: 6000, title: "겨자맛"}
];