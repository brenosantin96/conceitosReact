"use client"

import { QuestionComponent } from '@/COMPONENTS/QuestionComponent'
import { DataQuestions } from '@/data/DataQuestions'
import { Question } from '@/types/Question'
import React, { useState } from 'react'

const Quiz = () => {

    const [questions, setQuestions] = useState<Question[]>(DataQuestions);


    return (
        <div className='bg-blue-500 h-screen flex justify-center items-center'>
            <div className='bg-white rounded-md h-1/2 w-72 sm:w-96 md:w-1/2  flex flex-col items-center'>
                <div className='mt-1 w-full border-b text-left pl-2 py-2 text-lg font-bold'>Fantastico Quiz</div>
                <QuestionComponent questions={questions} />
            </div>
        </div>
    )
}

export default Quiz