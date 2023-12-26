"use client"
import { PostContext } from '@/contexts/PostContext';
import React, { useContext, useEffect, useState } from 'react'

export const Header = () => {

  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");

  const postContext = useContext(PostContext);

  useEffect(() => {
    // Esta função será executada após a renderização
    setInputTitle("");
    setInputBody("");
  }, [postContext]); // Adicione postContext como dependência

  const handleSavePost = (title: string, text: string) => {

    if (postContext) {
      postContext.dispatch({ type: 'add', payload: { title, body: text } });
    }
    return
  }


  return (
    <header className='pt-3 text-center'>
      <h1 className='text-3xl font-semibold'>Lista de Posts</h1>
      <div className='mx-auto flex flex-col justify-center items-center'>
        <div className='my-3 w-full flex flex-col text-left'>
          <label className='text-2xl mr-3' htmlFor="title">Titulo</label>
          <input id='title' className='h-9 rounded-md text-xl w-full' type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
        </div>
        <div className='my-3 w-full flex flex-col text-left'>
          <label className='text-2xl mr-3' htmlFor="body">Texto</label>
          <textarea id='body' className='h-9 rounded-md text-xl w-full' value={inputBody} onChange={(e) => setInputBody(e.target.value)} />
        </div>
        <div className='w-full'>
          <button onClick={() => handleSavePost(inputTitle, inputBody)} className='p-2 mt-2 bg-slate-500 text-white font-semibold rounded-md text-center'>
            Guardar
          </button>
        </div>
      </div>
    </header>
  )
}
