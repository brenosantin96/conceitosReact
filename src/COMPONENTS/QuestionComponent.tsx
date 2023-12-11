import { Question } from '@/types/Question'
import React from 'react'

type Props = {
    questions: Question[];
}

export const QuestionComponent = ({ questions }: Props) => {
    return (

        <>
            {questions &&
                questions.map((item) => (
                    <div key={item.id}>

                        {item.actualQuestion === true &&
                            <>
                                <div className='text-lg font-semibold p-3 lg:mt-2 lg:mb-4'>{`${item.id}. ${item.question}`}</div>
                                <div className='border-b pb-3'>
                                    {item.options.map((item, index) => (
                                        <div key={index} className='border border-indigo-400 bg-indigo-100 mx-2 p-2 mb-2 md:mb-3 rounded-md'>{item.optionText}</div>
                                    ))}
                                </div>
                                <div className='text-center mt-4'>
                                    1 de {questions.length} perguntas
                                </div>
                            </>
                        }

                    </div>
                ))
            }

        </>
    )
}
