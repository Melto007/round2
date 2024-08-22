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
            <Card className={`w-full bg-gradient-to-b from-${props.color1} to-${props.color2} p-0 m-o`}>
                <CardHeader className='flex justify-between items-center p-4'>
                    <div>
                        <h1 className='font-bold text-sm'>{props.name}</h1>
                        <p className='font-bold text-xs text-gray'>{props.time}</p>
                    </div>
                    <Button
                        isIconOnly
                        size="sm"
                        startContent={<RiArrowDropDownLine className='text-3xl' />}
                        className='bg-white border-1 border-gray2 rounded-full'
                    />
                </CardHeader>
                <CardBody className='p-4'>
                    <AvatarGroup isBordered max={3} size='md'>
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                    </AvatarGroup>
                </CardBody>
                <CardFooter className='flex justify-between items-center p-4'>
                    <p className='text-sm font-bold'>{props.content}</p>
                    <Button
                        size="sm"
                        className='bg-transparent border-1 border-black rounded-full text-black font-bold'
                    >
                        {props.button}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Cards