import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Result from "../components/Result/Result";
import Loading from "../components/Loading/Loading";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [active, setActive] =useState(false);
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen
  const correctNumLen = location.state.correctNumLen

  useEffect(() => {
      setTimeout(()=> setActive(true),3000)
},[])

  return (
    <>
      <Loading active={active} />
      <h1>結果は…</h1>
      <Result maxQuizLen={maxQuizLen} correctNumLen={correctNumLen} />
      <br />
      <Link
  to={ROUTES.QUIZ}
  onClick={() => {
    // ここで state をリセットするイベントを発火
    sessionStorage.setItem("resetQuiz", "1");
  }}
>
  もう一度チャレンジ
</Link>

      <br />
      <br />
      <p><b>イタリアをもっと知りたくなりませんか！？</b></p>
      <a 
        href="https://ifudodo.sakura.ne.jp/Aurora/index.html" 
        target="_blank"
        rel="noopener noreferrer"
      >
        ➡もっと知りたい！（あなたを満足させるイタリア旅行へ🍝）☚
      </a>
    </>
  )
}

