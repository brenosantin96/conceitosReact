import React from 'react'

type PropsPost = {
    id: number;
    title: string;
    body: string;
    deletePost: (id: number) => void
}

export const Post = ({ id, title, body, deletePost }: PropsPost) => {


       return (
        <div className='my-2'>
            <div className='flex justify-between'>
                <div className='text-2xl'>
                    {id}
                </div>
                <div className='text-2xl text-right pr-3 cursor-pointer' onClick={() => deletePost(id)}>
                    X
                </div>
            </div>
            <div className='border border-black p-2 mb-2'>
                <div className='text-2xl'>
                    {title}
                </div>
                <div className='text-lg mt-2'>
                    {body}
                </div>
            </div>
        </div>
    )
}
