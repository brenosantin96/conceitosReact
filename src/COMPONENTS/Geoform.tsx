import React from 'react'
import Square from './Square'
import Circle from './Circle'

const Geoform = () => {
    return (
        <div className=''>
            <h3 className='text-2xl font-bold'>Formas geométricas</h3>

            <div className='flex  border border-black m-2 p-2'>
                <Square />
                <Circle />

            </div>
        </div>
    )
}

export default Geoform