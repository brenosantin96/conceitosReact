import { Question } from '@/types/Question';
import React from 'react'

type Props = {
    answers: number[];
    questions: Question[];
}

export const Results = ({ answers, questions }: Props) => {
    return (
        <div className='my-3'>
            {questions.map((item, key) => (
                <div key={key} className='mb-3'>
                    <div className='font-bold'>{key + 1}. {item.question}</div>
                    <div>
                        <span>{item.correctAnswer === answers[key] ? "Acertou" : "Errou"} - </span>
                        {item.options[item.correctAnswer].optionText}
                    </div>
                </div>
            ))}
        </div>
    )
}
