"use client"

import { FooterComponent } from '@/COMPONENTS/FooterComponent';
import { Header } from '@/COMPONENTS/Header';
import { Post } from '@/COMPONENTS/Post';
import { PostContext } from '@/contexts/PostContext';
import React, { useContext, useEffect } from 'react';

const Page = () => {

    const postContext = useContext(PostContext);


    const deletePost = (id: number) => {
        if (postContext) {
            postContext.dispatch({ type: "remove", payload: { id } });
        }
    }

    return (
        <div className='bg-amber-400'>
            <div className='h-screen container mx-auto max-w-3xl '>
                <Header />
                {postContext !== null && postContext.posts.length === 0 &&
                    <h2 className='text-2xl font-semibold text-red-500'>Sem posts a serem exibidos!</h2>
                }
                {postContext !== null && postContext.posts.length > 0 &&
                    postContext.posts.map((postItem) => (
                        <Post key={postItem.id} id={postItem.id} title={postItem.title} body={postItem.body} deletePost={deletePost} />
                    ))
                }
                <FooterComponent />
            </div>
        </div>
    );
};

export default Page;
