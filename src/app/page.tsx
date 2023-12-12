"use client"

import { QuestionComponent } from '@/COMPONENTS/QuestionComponent'
import { QuestionComponent2 } from '@/COMPONENTS/QuestionComponent2'
import { DataQuestions } from '@/data/DataQuestions'
import { Question } from '@/types/Question'
import React, { useState } from 'react'

const Quiz = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState<Question[]>(DataQuestions);


    const handleAnswered = () => {

    }

    return (
        <div className='bg-blue-500 h-screen flex justify-center items-center'>
            <div className='bg-white rounded-md h-1/2 w-72 sm:w-96 md:w-1/2 max-w-lg flex flex-col items-center'>
                <div className='mt-1 w-full border-b text-left pl-2 py-2 text-lg font-bold'>Fantastico Quiz</div>
                <QuestionComponent2 count={0} question={questions[0]} onAnswer={handleAnswered} />
                <div>{currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? "" : "s"}</div>
            </div>
        </div>
    )
}

export default Quiz