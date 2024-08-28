import React from 'react'

const NotesComponents = (props) => {
    return (
        <div className='mb-2'>
            <div className='flex items-center text-sm gap-2 py-1'>
                {props.icon}
                <div>
                    <p className={`font-semibold text-sm ${props.disabled === 'true' ? 'text-gray2' : 'text-black'}`}>{props.title}</p>
                    <p className={`text-xs font-semibold ${props.disabled === 'true' ? 'text-gray2' : 'text-gray'}`}>{props.content}</p>
                </div>
            </div>
            <div className='flex justify-between items-center px-6 py-2'>
                <div className='flex items-center gap-1'>
                    <p className={`text-xs px-2 py-1 font-semibold rounded-full ${props.disabled === 'true' ? 'bg-gray5 text-gray2' : 'bg-red2 text-black'}`}>{props.day}</p>
                    <p className={`text-xs px-2 py-1 font-semibold rounded-full ${props.disabled === 'true' ? 'bg-gray5 text-gray2' : 'bg-red2 text-black'}`}>{props.todo}</p>
                </div>
                <div className='flex items-center gap-1'>
                    {props.calenderIcon}
                    <p className={`font-semibold text-xs ${props.disabled === 'true' ? 'text-gray4' : 'text-gray'}`}>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default NotesComponents