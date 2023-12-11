import React from 'react'

const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: "long" }).format(new Date());
}

export const Person = () => {


    const data = {
        name: "Elon Musk",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
        roles: ['CEO da Testa', 'CEO SpaceX']
    }

    return (
        <div>
            <h1>{data.name} - {getWeekDay()}</h1>
            <img
                src={data.avatar}
                alt={data.name}
                className='w-40'
            />

            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
                            </ul>

        </div>
    )
}

