import React, { useState } from 'react'

type Props = {
    rate: number
}

const Rating01 = ({ rate }: Props) => {

    if (rate > 5) {
        rate = 5
    }

    if (rate <= 0) {
        rate = 0
    }

    const emojis = ["", "☹️", "🙁", "😐", "🙂", "😄"];
    const rateInt = Math.floor(rate);

    const stars = `${emojis[rateInt]}`.repeat(rateInt) + "😶".repeat(5 - rateInt);

    const [formattedRate, setFormattedRate] = useState(rate.toFixed(1));

    return (
        <div className='w-screen h-screen flex text-5xl text-white justify-center items-center'>
            <div className='bg-gray-700 p-2'>{formattedRate}</div>
            <div className='ml-3'>
                {stars}
            </div>
        </div>
    )
}

export default Rating01
