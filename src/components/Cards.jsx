import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    AvatarGroup,
    Button
} from '@nextui-org/react'
import { RiArrowDropDownLine } from "react-icons/ri"

const Cards = (props) => {
    return (
        <div>
            <Card className={`w-full bg-gradient-to-b ${props.color1} ${props.color2} p-0 m-o`}>
                <div className='flex justify-between items-center px-4 py-2'>
                    <div>
                        <h1 className='font-semibold text-sm'>{props.name}</h1>
                        <p className='font-bold text-xs text-gray'>{props.time}</p>
                    </div>
                    <Button
                        isIconOnly
                        size="sm"
                        startContent={<RiArrowDropDownLine className='text-3xl' />}
                        className='bg-white border-1 border-gray2 rounded-full'
                    />
                </div>
                <div className='px-4 py-1'>
                    <AvatarGroup isBordered max={3} size='sm'>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                </div>
                <div className='flex justify-between items-center px-4 py-[0.35em]'>
                    <p className='text-xs font-semibold'>{props.content}</p>
                    <Button
                        size="sm"
                        className='bg-transparent border-1 border-black rounded-full text-black font-bold uppercase'
                    >
                        {props.button}
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default Cards