import { useLayoutEffect, useEffect, useState } from "react";
import "./QuizPage.css";

import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import "../Image.css";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answerLogs, setAnswerLogs] = useState([]);
  const navigate = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;
  const [feedback, setFeedback] = useState(null); 
  const [showHint, setShowHint] = useState(false);


  useEffect(() => {
  if (sessionStorage.getItem("resetQuiz") === "1") {
    setQuizIndex(0);
    setAnswerLogs([]);
    sessionStorage.removeItem("resetQuiz");
  }
}, []);

// 問題が変わったらヒントをリセット
useEffect(() => {
  setShowHint(false);
}, [quizIndex]);


  const handleClick = async (clickedIndex) => {
  const currentQuiz = quizData[quizIndex];

  const payload = {
    question: currentQuiz.key,  // ← key を quizData に追加してね！
    userAnswer: currentQuiz.options[clickedIndex]
  };

  try {
    const res = await fetch("api/question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    // ① API返答メッセージを表示
    setFeedback({
      correct: data.correct,
      message: data.message
    });

    // ② answerLogs に正誤だけ追加
    setAnswerLogs(prev => [...prev, data.correct]);

    // 最終問題かどうか判定
    const isLast = quizIndex + 1 === MAX_QUIZ_LEN;
    
    if (!isLast) {
    // ③ もし問題が残っているなら1.5秒後に次へ進む  
      setTimeout(() => {
      setFeedback(null); 
      if (quizIndex + 1 < MAX_QUIZ_LEN) {
        setQuizIndex(prev => prev + 1);
      }
    }, 1500);
   } else {
      // 最終問題 → 3秒後に結果へ遷移！
      setTimeout(() => {
        const correctNum = [...answerLogs, data.correct].filter(Boolean).length;
        navigate(ROUTES.RESULT, {
          state: {
            maxQuizLen: MAX_QUIZ_LEN,
            correctNumLen: correctNum
          }
        });
      }, 3000); // ← 3秒後に遷移
    }
  } catch (err) {
    console.error("API error:", err);
  }
};

  return (
    <>
      {quizData[quizIndex] && (
        <>
          <img 
            src={quizData[quizIndex].image} 
            alt={`Quiz ${quizIndex + 1}`} 
            className={"quiz-image"}
          />
          <Display>{`Q${quizIndex + 1}. ${quizData[quizIndex].question}`}</Display>
          {/* ヒントボタン↓ */}
          <div className="hint-wrapper">
          <button className="hint-btn" onClick={() => setShowHint(true)}>
            💡 ヒントを見たい！
          </button>


          {showHint && (
            <p className="hint">
               ヒント: {quizData[quizIndex].hint}
            </p>
          )}
          </div>


          {feedback && (
            <div className={`feedback ${feedback.correct ? "correct" : "wrong"}`}>
              {feedback.message}
            </div>
          )}
            {/*↑ ヒントボタン */}
          {quizData[quizIndex].options.map((option, index) => (
            
            <Button key={`option-${index}`} onClick={() => handleClick(index)}>
              {option}
            </Button>
          ))}
        </>
      )}
    </>
  );
}
