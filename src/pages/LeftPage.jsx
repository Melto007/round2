import React from 'react'
import {
    Divider,
    Card
} from '@nextui-org/react'
import UserComponents from '../components/UserComponents'
import { IoMdArrowDropdown } from "react-icons/io"
import { MdOutlineDashboard, MdNavigateNext, MdOutlineTimer } from "react-icons/md";
import { CiCalendar } from "react-icons/ci"
import { GoProjectSymlink } from "react-icons/go";
import { FaUsers } from "react-icons/fa"
import { GrNotes } from "react-icons/gr"
import { FaRegFaceGrinStars } from "react-icons/fa6"
import { IoDocumentSharp } from "react-icons/io5"
import { CiSettings } from "react-icons/ci";
import { FcSupport } from "react-icons/fc"

import { BsDot } from "react-icons/bs"

const LeftPage = () => {

    const mainMenu = [
        {
            id: 1,
            icon: <MdOutlineDashboard />,
            content: 'Dashboard',
            class: 'text-black bg-gray5'
        },
        {
            id: 2,
            icon: <CiCalendar />,
            content: 'Calendar',
            class: 'text-gray'
        },
        {
            id: 3,
            icon: <MdOutlineTimer />,
            content: 'Time Off',
            class: 'text-gray'
        },
        {
            id: 4,
            icon: <GoProjectSymlink />,
            content: 'Projects',
            class: 'text-gray'
        },
        {
            id: 5,
            icon: <FaUsers />,
            content: 'Team',
            class: 'text-gray'
        },
        {
            id: 6,
            icon: <GrNotes />,
            content: 'Notes',
            class: 'text-gray'
        },
        {
            id: 7,
            icon: <FaRegFaceGrinStars />,
            content: 'Benefits',
            class: 'text-gray'
        },
        {
            id: 8,
            icon: <IoDocumentSharp />,
            content: 'Documents',
            class: 'text-gray'
        }
    ]


    const favMenu = [
        {
            id: 1,
            name: 'Synergy Team',
            icon: <BsDot />,
            count: 1,
            color: 'text-red'
        },
        {
            id: 2,
            name: 'Monday Redesign',
            icon: <BsDot />,
            count: 2,
            color: 'text-purple'
        },
        {
            id: 3,
            name: 'Udemy Courses',
            icon: <BsDot />,
            count: 3,
            color: 'text-pink'
        }
    ]
    return (
        <div className='flex flex-col justify-between h-[100vh] px-2 border-r-1 border-gray3'>
            <div className='flex-2 h-[100vh]'>
                <div className='flex justify-between items-center'>
                    <UserComponents
                        name="Melto.SM"
                        content="HR Management"
                    />
                    <button  aria-label="dropdown" className='bg-transparent border-1 border-stone-300 rounded-lg'>
                        <IoMdArrowDropdown className='text-xl'/>
                    </button>
                </div>
                <Divider className='my-2'/>

                {/* Main  */}
                <div className='h-[78vh]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-gray2 font-bold uppercase text-xs px-2 py-1'>Main</h1>
                        {mainMenu.map((item, index)=> (
                            <a href='/' key={index}>
                                <div className={`flex justify-between items-center px-2 py-1 rounded-lg font-semibold text-sm ${item.class}`}>
                                    <div className='flex items-center justify-center gap-2'>
                                        <span className={`${item.class && 'text-purple'}`}>{item.icon}</span>
                                        <h2>{item.content}</h2>
                                    </div>
                                    <MdNavigateNext />
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-gray2 font-bold uppercase text-xs px-2'>Favorites</h1>
                        {favMenu.map((item, index) => (
                            <a href='/' key={index}>
                                <div className='flex justify-between items-center py-1 rounded-lg font-bold text-gray text-md'>
                                    <div className='flex items-center justify-center'>
                                        <span className={`text-4xl p-0 ${item.color}`}>{item.icon}</span>
                                        <h6 className='text-sm'>{item.name}</h6>
                                    </div>
                                    <button className='border-1 border-gray px-2 py-1 rounded-lg text-xs'>
                                        {item.count}
                                    </button>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className='flex-1  flex flex-col gap-3 justify-between'>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 items-center'>
                        <CiSettings />
                        <span className='font-bold text-sm text-gray'>Settings</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FcSupport />
                        <span className='font-bold text-sm text-gray'>Support</span>
                    </div>
                </div>
                <Divider className='my-2'/>
                <div>
                    <div className='flex justify-between items-center'>
                        <UserComponents
                            name="Melto.SM"
                            content="meltosm8@gmail.com"
                        />
                        <MdNavigateNext />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPage