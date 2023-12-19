import { Question } from '@/types/Question'
import React, { useState } from 'react'

type Props = {
    question: Question;
    count: number;
    onAnswer: (option: number) => void
}

export const QuestionComponent = ({ question, count, onAnswer }: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null);
            }, 1000)
        }
    }

    return (
        <div>
            <div className='px-2 ml-2 my-2 text-lg font-semibold'>{`${count}. ${question.question}`}</div>
            <div>
                {question.options.map((item, key) => (
                    <div key={key}
                        className={`border border-blue-300 mx-2 my-2 rounded-md p-2 bg-blue-100 
                        
                        ${selectedAnswer !== null ? "cursor-auto" : "cursor-pointer hover:opacity-60"}
                        ${selectedAnswer !== null && selectedAnswer === question.correctAnswer && selectedAnswer === key && "bg-green-100 border-green-300"}
                        ${selectedAnswer !== null && selectedAnswer !== question.correctAnswer && selectedAnswer === key && "bg-red-100 border-red-300"}
                        `}
                        onClick={() => checkQuestion(key)}>

                        {item.optionText}

                    </div>
                ))}
            </div>
        </div>

    )
}
