import { PostContext } from '@/contexts/PostContext'
import React, { useContext } from 'react'

export const FooterComponent = () => {

    const postContext = useContext(PostContext);

    return (
        <footer>
            Total de Posts: {postContext?.posts.length}
        </footer>
    )
}
