import { Photo } from '@/types/Photo';
import React from 'react'

type Props = {
    photo: Photo;
    onClick: () => void;
}

const PhotoItem = ({ photo, onClick }: Props) => {
    return (
        <div onClick={onClick} className='cursor-pointer hover:opacity-80'>
            <img src={photo.url} alt="" className='w-full' />
        </div>
    )
}

export default PhotoItem