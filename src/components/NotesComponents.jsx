import React from 'react'

const NotesComponents = (props) => {
    return (
        <div className='mb-2'>
            <div className='flex items-center text-sm gap-2 py-1'>
                {props.icon}
                <div>
                    <p className='font-semibold text-sm'>{props.title}</p>
                    <p className='text-gray text-xs font-semibold'>{props.content}</p>
                </div>
            </div>
            <div className='flex justify-between items-center px-6 py-2'>
                <div className='flex items-center gap-1'>
                    <p className='text-black text-xs bg-red2 px-2 py-1 font-semibold rounded-full'>{props.day}</p>
                    <p className='text-black text-xs bg-red2 px-2 py-1 font-semibold rounded-full'>{props.todo}</p>
                </div>
                <div className='flex items-center gap-1'>
                    {props.calenderIcon}
                    <p className='text-gray font-semibold text-xs'>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default NotesComponents