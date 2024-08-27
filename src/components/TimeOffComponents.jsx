import React from 'react'

const TimeOffComponents = (props) => {
    return (
        <div className='flex justify-between items-center font-bold py-3 text-xs'>
            <div className='flex justify-center items-center gap-2'>
                {props.icons}
                <p className='text-sm text-gray'>{props.date} <span className='text-gray2 text-xs'>{props.content}</span></p>
            </div>
            <h2 className={`text-xs px-2 py-1 rounded-full font-semibold text-gray ${props.color}`}>{props.heading}</h2>
        </div>
    )
}

export default TimeOffComponents