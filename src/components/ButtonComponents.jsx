import React from 'react'
import {
    Button
} from '@nextui-org/react'

const ButtonComponents = (props) => {
    return (
        <Button size="sm" className='bg-white border-1 border-gray2 font-bold'>{props.content}</Button>
    )
}

export default ButtonComponents