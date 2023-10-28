// QuestionCardComponent.jsx
import React, { useState } from 'react';

export default function QuestionCardComponent({ question, onNext, onPrev, isLastQuestion, prevAnswer }) {
    const [answer, setAnswer] = useState(prevAnswer || '');

    const handleAnswer = (value) => {
        setAnswer(value);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card square-card">
                <div className="card-body">
                    <h5 className="card-title">{question}</h5>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="yes"
                            className="form-check-input"
                            value="Yes"
                            checked={answer === 'Yes'}
                            onChange={() => handleAnswer('Yes')}
                        />
                        <label htmlFor="yes" className="form-check-label">
                            Sí
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id="no"
                            className="form-check-input"
                            value="No"
                            checked={answer === 'No'}
                            onChange={() => handleAnswer('No')}
                        />
                        <label htmlFor="no" className="form-check-label">
                            No
                        </label>
                    </div>

                    {onPrev && (
                        <button className="btn btn-secondary ml-2" onClick={onPrev}>
                            Anterior
                        </button>
                    )}
                    <button
                        className="btn btn-primary"
                        onClick={() => onNext(answer)}
                    >
                        {isLastQuestion ? 'Finalizar' : 'Siguiente'}
                    </button>
                </div>
            </div>
        </div>
    );
}
