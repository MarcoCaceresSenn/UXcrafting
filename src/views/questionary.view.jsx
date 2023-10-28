// QuestionaryPage.jsx
import React, { useState } from 'react';
import QuestionCardComponent from '../component/question-form-component/question.form.component';

export default function QuestionaryView() {
  const questions = [
    'Pregunta 1',
    'Pregunta 2',
    'Pregunta 3',
    'Pregunta 4',
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [prevAnswer, setPrevAnswer] = useState('');

  const handleNextQuestion = (answer) => {
    if (!answer) {
      alert('Debes seleccionar una respuesta.');
      return;
    }

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setPrevAnswer(answer);
    } else {
      console.log('Respuestas finales:', updatedAnswers);
    }

    setAnswers(updatedAnswers);
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setPrevAnswer(answers[currentQuestion - 1]);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {currentQuestion < questions.length && (
        <QuestionCardComponent
          question={questions[currentQuestion]}
          onNext={handleNextQuestion}
          onPrev={handlePrevQuestion}
          isLastQuestion={currentQuestion === questions.length - 1}
          prevAnswer={prevAnswer}
        />
      )}
    </div>
  );
}
