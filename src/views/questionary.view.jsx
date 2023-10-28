import React, { useState } from 'react';
import QuestionCardComponent from '../component/question-form-component/question.form.component';

export default function QuestionaryView() {
    const questions = [
        '¿Tienes conocimiento de?',
        '¿Manejas conocimiento de?',
        '¿Conoces acerca de?',
        '¿Te interesa?',
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
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
            // Aquí puedes enviar las respuestas a donde desees
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
        <div>
            <div>
                <h4 className="text-center text-title-color mt-5">Personaliza tu experiencia respondiendo las siguientes preguntas</h4>
            </div>
            <div className="d-flex justify-content-center mt-5 vh-100">
                {currentQuestion < questions.length && (
                    <QuestionCardComponent
                        question={questions[currentQuestion]}
                        questionNumber={`Pregunta ${currentQuestion + 1}`}
                        onNext={handleNextQuestion}
                        onPrev={handlePrevQuestion}
                        isLastQuestion={currentQuestion === questions.length - 1}
                        prevAnswer={prevAnswer}
                    />
                )}
            </div>
        </div>
    );
}
