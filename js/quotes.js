const quotes = [
  {
    quote: "Think like a man of actin and act like man of thought.",
    meaning: "행동하는 사람처럼 생각하고, 생각하는 사람처럼 행동하라.",
  },
  {
    quote:
      "Courage is very important. Like a muscle, it is strengthened by use.",
    meaning: "용기는 대단히 중요하다. 근육과 같이 사용함으로써 강해진다.",
  },
  {
    quote:
      "Life is the art of drawing sufficient conclusions from insufficient premises.",
    meaning: "인생이란 불충분한 전제로부터 충분한 결론을 끌어내는 기술이다",
  },
  {
    quote: "By doubting we come at the truth.",
    meaning: "의심함으로써 우리는 진리에 도달한다",
  },
  {
    quote:
      "A man that hath no virtue in himself, ever envieth virtue in others.",
    meaning: "자기에게 덕이 없는 자는 타인의 덕을 시기한다.",
  },
  {
    quote: "When money speaks, the truth keeps silent.",
    meaning: "돈이 말할 때는 진실은 입을 다문다.",
  },
  {
    quote: "Better the last smile than the first laughter.",
    meaning: "처음의 큰 웃음보다 마지막의 미소가 더 좋다.",
  },
  {
    quote:
      "In the morning of life, work; in the midday, give counsel; in the evening, pray.",
    meaning: "인생의 아침에는 일을 하고, 낮에는 충고하며, 저녁에는 기도하라.",
  },
  {
    quote: "Painless poverty is better than embittered wealth.",
    meaning: "고통 없는 빈곤이 괴로운 부보다 낫다.",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const meaning = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
meaning.innerText = todayQuote.meaning;
