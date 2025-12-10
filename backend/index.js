import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// クイズAPI 正解データ
const correctAnswers = {
  "MouthOfTruth": "ローマ",
  "Venezia": "ベネチア",
  "Firenze": "フィレンツェ",
  "Sicily": "シチリア",
  "TreviFountain": "ローマ",
};


app.post("/api/question", (req, res) => {
    const { question, userAnswer } = req.body;

  if (!question || !userAnswer) {
    return res.status(400).json({
      correct: false,
      message: "question と userAnswer が必要だよ！"
    });
  }

  const correct = correctAnswers[question];
  if (!correct) {
    return res.json({
      correct: false,
      message: "問題が見つからないよ！"
    });
  }

  const isCorrect = userAnswer.trim() === correct;

  res.json({
    correct: isCorrect,
    message: isCorrect
      ? `🎉 正解！ ${correct} だよ！`
      : `❌ 残念！ 正解は「${correct}」だよ！`
  });
});

app.listen(3001, () => {
  console.log("API 起動中：http://localhost:3001");
});
