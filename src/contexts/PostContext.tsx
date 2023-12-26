import { PostActions, postReducer } from "@/reducers/postReducer";
import { Post } from "@/types/Post";
import { list } from "postcss";
import { Dispatch, ReactNode, createContext, useReducer, useState } from "react";

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostActions>;

    //addPost: (title: string, text: string) => void
    //removePost: (id: number) => void
}

export const PostContext = createContext<PostContextType | null>(null);


type PropsPostContextProvider = {
    children: ReactNode
}


export const PostContextProvider = ({ children }: PropsPostContextProvider) => {

    const [posts, dispatch] = useReducer(postReducer, []);


    /* const addPost = (title: string, text: string) => {

        dispatch({
            type: 'add',
            payload: { title, body: text }
        })
 
    }

    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: { id }
        })

    } */

    return (
        <PostContext.Provider value={{ posts, dispatch }} >
            {children}
        </PostContext.Provider>
    )


}