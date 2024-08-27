import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    AvatarGroup,
    Input,
    Button,
    Tabs,
    Calendar,
    Tab
} from '@nextui-org/react'
import {
    FaCalendarCheck,
    FaPlus
} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiMessages } from "react-icons/ti"
import { MdHolidayVillage, MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight  } from "react-icons/md"
import SpanComponents from '../components/SpanComponents';
import Cards from '../components/Cards'

const RightPage = () => {
    return (
        <div className='h-[100vh] flex flex-col gap-2'>
            <div className='flex justify-between items-center gap-2 mb-1'>
                <Button startContent={<FaCalendarCheck />} className='bg-white border-1 border-gray'>Schedule</Button>
                <Button startContent={<FaPlus />} className='bg-purple text-white'>Create a Request</Button>
            </div>
            <div>
                <Card>
                    <CardHeader className='flex justify-between items-center'>
                        <div className="flex justify-center items-center gap-2">
                            <FaCalendarCheck />
                            <SpanComponents
                                content='Schedule'
                            />
                        </div>
                        <div className='right-heading'>
                            <Button size="sm" variant="ghost" color="default" className='font-semibold'>See All</Button>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <div className='mb-1 flex flex-col gap-3'>
                            <div className='flex justify-between items-center bg-gray4 rounded-md'>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    startContent={<MdOutlineKeyboardArrowLeft className='text-2xl' />}
                                ></Button>
                                <p className='font-semibold text-sm'>Aug, 2023</p>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    startContent={<MdKeyboardArrowRight className='text-2xl' />}
                                ></Button>
                            </div>
                            <div className='flex justify-between items-center'>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    startContent={<MdOutlineKeyboardArrowLeft className='text-2xl' />}
                                ></Button>
                                <div className='flex justify-between items-center gap-6'>
                                    <div className='flex justify-center items-center font-bold flex-col'>
                                        <p className="font-bold text-gray2 text-xs">Fri</p>
                                        <span>31</span>
                                    </div>
                                    <div className='flex justify-center items-center font-bold flex-col'>
                                        <p className="font-bold text-gray2 text-xs">Sat</p>
                                        <span>01</span>
                                    </div>
                                    <div className='flex justify-center items-center font-bold flex-col bg-purple text-white px-2 py-1 rounded-lg'>
                                        <p className="font-bold text-white text-xs">Sun</p>
                                        <span>02</span>
                                    </div>
                                    <div className='flex justify-center items-center font-bold flex-col'>
                                        <p className="font-bold text-gray2 text-xs">Mon</p>
                                        <span>03</span>
                                    </div>
                                    <div className='flex justify-center items-center font-bold flex-col'>
                                        <p className="font-bold text-gray2 text-xs">Tue</p>
                                        <span>04</span>
                                    </div>
                                </div>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    startContent={<MdKeyboardArrowRight className='text-2xl' />}
                                ></Button>
                            </div>
                        </div>
                        <div className='my-2'>
                            <Input
                                isClearable
                                radius="xs"
                                startContent={
                                    <CiSearch />
                                }
                                placeholder='Search...'
                            />
                        </div>
                        <div>
                            <Tabs variant="underlined" aria-label="Tabs variants" className='font-bold'>
                                <Tab
                                    title={
                                        <div className='flex justify-center items-center gap-2'>
                                            <TiMessages />
                                            <span>Meetings</span>
                                        </div>
                                    }
                                >
                                    <div className='flex flex-col gap-3'>
                                        <Cards
                                            name="Meeting with James Brown"
                                            time="8:00 to 8:45 (UTC)"
                                            content="On Google Meet"
                                            button="Marketing"
                                            color1="from-red2"
                                            color2="to-red3"
                                        />
                                        <Cards
                                            name="Meeting with Laura"
                                            time="8:00 to 8:45 (UTC)"
                                            content="On Zoom"
                                            button="Product Manager"
                                            color1="from-green"
                                            color2="to-green2"
                                        />
                                        <Cards
                                            name="Meeting with Arthur Taylor"
                                            time="8:00 to 8:45 (UTC)"
                                            content="On Stack"
                                            button="Partnership"
                                            color1="from-purple2"
                                            color2="to-purple3"
                                        />
                                    </div>
                                </Tab>
                                <Tab
                                    title={
                                        <div className='flex justify-center items-center gap-2'>
                                            <FaCalendarCheck />
                                            <span>Events</span>
                                        </div>
                                    }
                                >
                                    <div>
                                        <div className='flex flex-col gap-3'>
                                            <Cards
                                                name="Meeting with James Brown"
                                                time="8:00 to 8:45 (UTC)"
                                                content="On Google Meet"
                                                button="Marketing"
                                                color1="from-red2"
                                                color2="to-red3"
                                            />
                                            <Cards
                                                name="Meeting with Laura"
                                                time="8:00 to 8:45 (UTC)"
                                                content="On Zoom"
                                                button="Product Manager"
                                                color1="from-green"
                                                color2="to-green2"
                                            />
                                            <Cards
                                                name="Meeting with Arthur Taylor"
                                                time="8:00 to 8:45 (UTC)"
                                                content="On Stack"
                                                button="Partnership"
                                                color1="from-purple2"
                                                color2="to-purple3"
                                            />
                                        </div>
                                    </div>
                                </Tab>
                                <Tab
                                    title={
                                        <div className='flex justify-center items-center gap-2'>
                                            <MdHolidayVillage />
                                            <span>Holidays</span>
                                        </div>
                                    }
                                >
                                    <div>
                                        <div className='flex flex-col gap-3'>
                                            <Cards
                                                name="Meeting with James Brown"
                                                time="8:00 to 8:45 (UTC)"
                                                content="On Google Meet"
                                                button="Marketing"
                                                color1="from-red2"
                                                color2="to-red3"
                                            />
                                            <Cards
                                                name="Meeting with Laura"
                                                time="8:00 to 8:45 (UTC)"
                                                content="On Zoom"
                                                button="Product Manager"
                                                color1="from-green"
                                                color2="to-green2"
                                            />
                                            <Cards
                                                name="Meeting with Arthur Taylor"
                                                time="8:00 to 8:45 (UTC)"
                                                content="On Stack"
                                                button="Partnership"
                                                color1="from-purple2"
                                                color2="to-purple3"
                                            />
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default RightPage