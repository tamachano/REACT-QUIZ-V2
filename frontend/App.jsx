import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { ROUTES } from './const';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import { useEffect } from 'react';

function App() {

  const location = useLocation(); // ← 追加！

  useEffect(() => {
    localStorage.removeItem('quizState');
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage key={location.pathname} />} />
      <Route path={ROUTES.QUIZ} element={<QuizPage key={location.pathname} />} />
      <Route path={ROUTES.RESULT} element={<ResultPage key={location.pathname} />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

