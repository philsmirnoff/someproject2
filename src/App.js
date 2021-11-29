import { useState, useEffect, useMemo } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import './App.css';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  const data = [
    {
      id: 1,
      question: "What is a Bitcoin?",
      answers: [
        {
          text: "A) Penny",
          correct: false,
        },
        {
          text: "B) Dime",
          correct: false,
        },
        {
          text: "C) Quater",
          correct: false,
        },
        {
          text: "D) Cryptocurrency",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "The first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.",
      answers: [
        {
          text: "A) Dogecoin",
          correct: false,
        },
        {
          text: "B) Litecoin",
          correct: false,
        },
        {
          text: "C) Bitcoin",
          correct: true,
        },
        {
          text: "D) Shiba Inu",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Bitcoin was invented by an anonymous person or group named",
      answers: [
        {
          text: "A) Satoshi Nakamoto",
          correct: true,
        },
        {
          text: "B) Jack Sparrow",
          correct: false,
        },
        {
          text: "C) Wolf of Wall Street",
          correct: false,
        },
        {
          text: "D) Elon Mask",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Due to its scarcity, Bitcoin is often nicknamed",
      answers: [
        {
          text: "A) Digital Gas",
          correct: false,
        },
        {
          text: "B) Digital Oil",
          correct: false,
        },
        {
          text: "C) Digital Gold",
          correct: true,
        },
        {
          text: "D) Digital Forest",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "A finite supply of Bitcoin available is",
      answers: [
        {
          text: "A) 1000 bitcoin",
          correct: false,
        },
        {
          text: "B) 10000 bitcoin",
          correct: false,
        },
        {
          text: "C) 1000000 bitcoin",
          correct: false,
        },
        {
          text: "D) 21 million bitcoin",
          correct: true,
        },
      ],
    },
  ];


  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },
    ].reverse(),
 []);

  useEffect(() => {
      questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      <div className="main">
        {stop ? (
           <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
          </div>
        </div>
        <div className="bottom">
          <Trivia
           data={data}
           setStop={setStop}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}
           />
        </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
