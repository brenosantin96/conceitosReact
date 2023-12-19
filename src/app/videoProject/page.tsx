"use client"

import VideoPlayer from '@/COMPONENTS/VideoPlayer';
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {

    const [playing, setPlaying] = useState(false);
    

    return (
        <div>
            <div className='border border-white p-3 mb-4'>
                <p className='text-2xl mb-3 text-blue-400'>
                    {playing ? "RODANDO" : "PAUSADO"}
                </p>
                <button onClick={() => setPlaying(!playing)} className='p-2 bg-blue-700 text-white rounded-md'>Play/Pause</button>
            </div>

            <VideoPlayer src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
                isPlaying={playing}
            />

        </div>
    )
}

export default Page