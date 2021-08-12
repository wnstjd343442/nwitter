const quotes = [
    {
       quote: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라.",
       author: "빌립보서 4장 13절"
    },
    {
        quote: "눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리로다.",
        author: "시편 126편 5절"
    },
    {
        quote: "살면서 실수할 수는 있지만, 실수를 통해 교훈을 얻으면 그것은 과정일 뿐 실수가 아니다.<br>하지만 실수에서 더 나아가지 못한다면 그것이 실패.",
        author: "리사 수"
    },
    {
        quote: "The people who are crazy enough to think they can change the world are the ones who do.<br>세상을 바꿀수 있다고 생각하는 제대로 정신나간 사람들이 세상을 변화시킨다.",
        author: "스티븐 잡스"
    },
    {
        quote: "2. 두려워하지 말라. 내가 너와 함께 함이라. 놀라지 말라. 나는 네 하나님이 됨이라. 내가 너를 굳세게 하리라. 참으로 너를 도와 주리라. 참으로 나의 의로운 오른손으로 너를 붙들리라.",
        author: "이사야 41장 10절"
    },
    {
        quote: "한 가지 최고의 조언은 어떻게 더 잘 해낼 수 있는지 끊임없이 생각하고 스스로에게 계속 질문을 던지세요.",
        author: "일론 머스크"
    }
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
