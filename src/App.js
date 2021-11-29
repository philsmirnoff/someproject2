import { useState } from 'react';
import Trivia from './components/Trivia';
import './App.css';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);

  const data = [
    {
      id: 1,
      question: "What is a Bitcoin?",
      answers: [
        {
          text: "Penny",
          correct: false,
        },
        {
          text: "Dime",
          correct: false,
        },
        {
          text: "Quater",
          correct: false,
        },
        {
          text: "Cryptocurrency",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question: "The first digital currency that allows users to send and receive money, without the interference of a central bank or government. Instead, a network of thousands of peers is controlling the transactions; a decentralized system.",
      answers: [
        {
          text: "Dogecoin",
          correct: false,
        },
        {
          text: "Litecoin",
          correct: false,
        },
        {
          text: "Bitcoin",
          correct: true,
        },
        {
          text: "Shiba Inu",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Bitcoin was invented by an anonymous person or group named",
      answers: [
        {
          text: "Satoshi Nakamoto",
          correct: true,
        },
        {
          text: "Jack Sparrow",
          correct: false,
        },
        {
          text: "Wolf of Wall Street",
          correct: false,
        },
        {
          text: "Elon Mask",
          correct: false,
        },
      ],
    },
  ];


  const moneyPyramid = [
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
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia
           data={data}
           setStop={setStop}
           questionNumber={questionNumber}
           setQuestionNumber={setQuestionNumber}
           />
        </div>
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
