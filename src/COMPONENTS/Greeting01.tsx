import { format, isAfter, isBefore, isEqual, setHours, startOfDay } from 'date-fns';
import React, { useEffect, useState } from 'react'

export const Greeting01 = () => {

  const [timeText, setTimeText] = useState("");
  const [timeDate, setTimeDate] = useState<Date>(new Date());

  useEffect(() => {
    let currentDate = new Date();
    let texto = format(currentDate, "HH:mm")
    console.log(texto)
    console.log(currentDate)
    setTimeDate(currentDate);
    setTimeText(texto);
  }, [])


  const morningStart = setHours(startOfDay(new Date()), 12); // 12:00pm
  const afternoonStart = setHours(startOfDay(new Date()), 19); // 7:00pm

  return (
    <div className='w-full h-screen bg-gradient-to-r from-sky-500 to-indigo-500'>

      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className='text-8xl font-sans text-white font-semiboldbold'>{timeText}</div>
        {(isBefore(timeDate, morningStart) || isEqual(timeDate, morningStart)) && (
          <h3 className='text-5xl font-sans text-white font-semiboldbold'>Bom dia</h3>
        )}

        {(isAfter(timeDate, morningStart) && isBefore(timeDate, afternoonStart)) && (
          <h3 className='text-5xl font-sans text-white font-semiboldbold'>Boa tarde</h3>
        )}
        {(isAfter(timeDate, afternoonStart) || isEqual(timeDate, afternoonStart)) && (
          <h3 className='text-5xl font-sans text-white font-semiboldbold'>Boa noite</h3>
        )}

      </div>

    </div>
  )

}

export default Greeting01;
