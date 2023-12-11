"use client"

import { Photo } from '@/types/Photo'
import React, { useState } from 'react'
import { photosData } from '../../data/DataGallery';
import PhotoItem from '@/COMPONENTS/PhotoItem';
import { Modal } from '@/COMPONENTS/Modal';

const Gallery = () => {

    const [photos, setPhotos] = useState<Photo[]>(photosData);
    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState("");


    const openModalImage = (idImage: number) => {
        const photo = photos.find((item) => item.id === idImage);

        if (photo) {
            setImageOfModal(photo.url)
            setShowModal(true);
        }

        setShowModal(true);
    }

    const closeModalImage = () => {
        setShowModal(false);
    }


    return (
        <div className='mx-2 w-screen h-screen'>
            <header className='flex justify-center my-10'>
                <h1 className='text-3xl font-bold'>Fotos Intergaláticas</h1>
            </header>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {photos.map((item) => (
                    <PhotoItem key={item.id} photo={item} onClick={() => openModalImage(item.id)} />
                ))}
            </div>

            {showModal &&

                <Modal image={imageOfModal} closeModal={closeModalImage} />

            }

        </div>
    )
}

export default Gallery