import { Question } from '@/types/Question'
import React, { useEffect, useState } from 'react'

type Props = {
    question: Question;
    count: number;
    onAnswer: (key: number) => void
}

export const QuestionComponent2 = ({ question, count, onAnswer }: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

    const handleSelectedAnswer = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
            onAnswer(key)
        }
    }

    useEffect(() => {
        console.log(selectedAnswer)
    }, [selectedAnswer])

    return (
        <div>
            <div className='text-xl text-left font-semibold my-2 ml-2'>{`${count}. ${question.question}`}</div>
            {question.options.map((item, key) => (
                <div key={key}>
                    <div
                        onClick={() => handleSelectedAnswer(key)}
                        className={
                            `p-2 mx-2 border border-blue-200 bg-blue-100 rounded-md my-3
                            
                            ${selectedAnswer && selectedAnswer === question.correctAnswer && "border-green-200 bg-green-100"}
                            ${selectedAnswer && selectedAnswer !== question.correctAnswer && "border-red-200 bg-red-100"}
                            
                            `
                        }>

                        {item.optionText}</div>
                </div>
            ))}
        </div>
    )
}
