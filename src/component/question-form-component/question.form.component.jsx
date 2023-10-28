import React, { useState } from 'react';
import './question.form.component.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function QuestionCardComponent({ questionNumber, question, onNext, onPrev, isLastQuestion, prevAnswer }) {
    const [answer, setAnswer] = useState('');

    const handleAnswer = (value) => {
        setAnswer(value);
    };

    return (
        <div>
            <div className="form-content">
                <div className="card-body">
                    <div>
                        <h3 className="question-title">{questionNumber}</h3>
                        <p className='question'>{question}</p>
                    </div>
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
                    <div className='text-center mt-3 mx-auto'>
                        {onPrev && (
                            <button className="btn btn-secondary " onClick={onPrev}>
                                Anterior
                            </button>
                        )}
                        <button
                            className="btn btn-primary "
                            onClick={() => onNext(answer)}
                        >
                            {isLastQuestion ? 'Finalizar' : 'Siguiente'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}