"use client"

import { QuestionComponent } from '@/COMPONENTS/QuestionComponent'
import { QuestionComponent2 } from '@/COMPONENTS/QuestionComponent2'
import { Results } from '@/COMPONENTS/Results'
import { DataQuestions } from '@/data/DataQuestions'
import { Question } from '@/types/Question'
import React, { useState } from 'react'

const Quiz = () => {

    const [answers, setAnswers] = useState<number[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState<Question[]>(DataQuestions);
    const [showResult, setShowResult] = useState(false);


    const loadNextQuestion = () => {
        if (questions[currentQuestion + 1]) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    }

    const handleAnswered = (answer: number) => {
        setAnswers([...answers, answer]);
        loadNextQuestion();
    }

    const handleRestartButton = () => {
        setAnswers([]);
        setCurrentQuestion(0);
        setShowResult(false);
    }

    return (
        <div className='w-full bg-blue-500 h-screen flex justify-center items-center'>
            <div className='bg-white rounded-md h-1/2 w-72 sm:w-96 md:w-1/2 max-w-lg flex flex-col items-center'>
                <div className='mt-1 w-full border-b text-left pl-2 py-2 text-lg font-bold'>Fantastico Quiz</div>
                {!showResult &&
                    <QuestionComponent count={currentQuestion + 1} question={questions[currentQuestion]} onAnswer={handleAnswered} />
                }
                {showResult &&
                    <Results questions={questions} answers={answers} />
                }
                <div className='p-5 border-t w-full border-gray-300 text-center'>
                    {!showResult &&
                        `
                        ${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? "" : "s"}
                        `
                    }
                    {showResult &&
                       <button onClick={handleRestartButton} className='px-3 py-2 rounded-md bg-blue-800 text-white'>Reiniciar Quiz</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Quiz