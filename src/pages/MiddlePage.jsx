import React from 'react'
import UserComponents from '../components/UserComponents'
import { CiSearch } from "react-icons/ci"
import { IoIosNotifications } from "react-icons/io"
import {
    Card,
    CardBody,
    CardHeader,
    AvatarGroup,
    Avatar,
    Button,
    Divider
} from '@nextui-org/react'
import { IoMdTime, IoIosTime, IoMdCloseCircle  } from "react-icons/io"
import { FaCheckCircle, FaMinusCircle, FaPencilAlt } from "react-icons/fa"
import { MdComputer, MdAutoGraph } from "react-icons/md"
import { RiFlashlightLine } from "react-icons/ri"
import { CiCalendar } from "react-icons/ci";
import { FaRegNoteSticky } from "react-icons/fa6";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'

import {
    Doughnut
} from 'react-chartjs-2'
import SpanComponents from '../components/SpanComponents'
import ButtonComponents from '../components/ButtonComponents'
import TimeOffComponents from '../components/TimeOffComponents'
import NotesComponents from '../components/NotesComponents'

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const MiddlePage = () => {
    const data = {
        labels: [],
        datasets: [
            {
                label: 'out of 20',
                data: [16],
                backgroundColor: ['purple'],
                borderColor: ['purple'],
                circumference: 180,
                rotation: 270
            }
        ]
    }

    const options = {

    }
    return (
        <div>
            <div className="flex items-center justify-between w-full">
                <UserComponents
                    name="Melto.SM"
                    content="Welcome back to Synergy"
                />
                <div className='flex gap-2 text-xl'>
                    <CiSearch />
                    <IoIosNotifications />
                </div>
            </div>
            <div className='w-full gap-2 h-[100vh] sm:flex'>
                <div className='flex flex-col gap-4 sm:w-[50%]'>
                    <div>
                        <Card>
                            <CardHeader className='flex justify-between'>
                                <div className='flex justify-center items-center gap-2'>
                                    <IoMdTime />
                                    <SpanComponents
                                        content='Time Off'
                                    />
                                </div>
                                <ButtonComponents
                                    content="See All"
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <div className="circle-container">
                                    <div className="semi-item">
                                        <div className="semi-total" style={{ "--total": 80, "--fill": '#7e22ce' }}>
                                            16
                                        </div>
                                        <div className="semi-mark">
                                            <h3>Out of 20</h3>
                                        </div>
                                    </div>
                                </div>
                                <Divider className='my-2' />
                                <TimeOffComponents
                                    icons={<IoIosTime className='text-red' />}
                                    date="Aug 11, 2023"
                                    content="(Sick)"
                                    heading="Pending"
                                    color="bg-amber"
                                />
                                <Divider />
                                <TimeOffComponents
                                    icons={<FaCheckCircle className='text-lime' />}
                                    date="Jun 15, 2023"
                                    content="(Annual)"
                                    heading="Confirmed"
                                    color="bg-green"
                                />
                                <Divider />
                                <TimeOffComponents
                                    icons={<IoMdCloseCircle className='text-red' />}
                                    date="Jun 24, 2023"
                                    content="(Casual)"
                                    heading="Rejected"
                                    color="bg-red3"
                                />
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader className='flex justify-between'>
                                <div className='flex justify-center items-center gap-2'>
                                    <MdComputer />
                                    <SpanComponents
                                        content='Status Tracker'
                                    />
                                </div>
                                <ButtonComponents
                                    content="See All"
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <h2 className='font-bold text-gray2 text-xs py-2'>Absent</h2>
                                <div className='flex justify-between items-center'>
                                    <UserComponents
                                        name="James Brown"
                                        content="Replaced by Laura Peraz"
                                    />
                                    <div className='flex items-center justify-between gap-1 bg-gray4 text-sm px-2 py-1 rounded-md font-bold'>
                                        <p><FaMinusCircle /></p>
                                        <span className='text-xs'>Absent</span>
                                    </div>
                                </div>
                            </CardBody>
                            <Divider />
                            <CardBody>
                                <h2 className='font-bold text-gray2 text-xs pb-2'>Away</h2>
                                <div className='flex flex-col gap-4 text-xs'>
                                    <div className='flex justify-between items-center'>
                                        <UserComponents
                                            name="Arthur Taylor"
                                            content="Synergy"
                                        />
                                        <div className='flex items-center justify-between gap-1 bg-rose text-sm px-2 py-1 rounded-md font-bold'>
                                            <p><IoIosTime /></p>
                                            <span className='text-xs'>25m</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <UserComponents
                                            name="Shopia Williams"
                                            content="Apex"
                                        />
                                        <div className='flex items-center justify-between gap-1 bg-rose text-sm px-2 py-1 rounded-md font-bold'>
                                            <p><IoIosTime /></p>
                                            <span className='text-xs'>12m</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <UserComponents
                                            name="Emma Wright"
                                            content="Pulse"
                                        />
                                        <div className='flex items-center justify-between gap-1 bg-rose text-sm px-2 py-1 rounded-md font-bold'>
                                            <p><IoIosTime /></p>
                                            <span className='text-xs'>8m</span>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className='sm:w-[50%]'>
                    <div>
                        <Card>
                            <CardHeader className='flex justify-between'>
                                <div className='flex justify-center items-center gap-2'>
                                    <RiFlashlightLine />
                                    <SpanComponents
                                        content='Current Project'
                                    />
                                </div>
                                <ButtonComponents
                                    content="See All"
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <div className='mb-1'>
                                    <h2 className='font-bold text-gray2 text-xs pb-2'>Project Name</h2>
                                    <div className='flex items-center text-sm gap-2 font-bold'>
                                        <div className='flex items-center gap-1'>
                                            <MdAutoGraph />
                                            <p className="font-semibold">Monday App Design</p>
                                        </div>
                                        <div className='flex justify-center items-center bg-red3 px-2 py-1 rounded-full'>
                                            <IoIosTime />
                                            <p className='text-gray text-xs font-semibold'>In Progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='font-bold text-gray2 text-xs pb-2'>Project Manager</h2>
                                            <UserComponents
                                                name="Laura P."
                                            />
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-gray2 text-xs pb-2'>Design Lead</h2>
                                        <UserComponents
                                            name="Arthur G."
                                        />
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <h2 className='font-bold text-gray2 text-xs pb-2'>Team</h2>
                                    <AvatarGroup isBordered max={8} total={2} size='sm'>
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                                    </AvatarGroup>
                                </div>
                                <div className='my-2'>
                                    <h2 className='font-bold text-gray2 text-xs pb-2'>Timeline</h2>
                                    <div className='flex items-center gap-2'>
                                        <CiCalendar />
                                        <p className='font-semibold text-sm'>12/10/2022 - 01/04/2023</p>
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <h2 className='font-bold text-gray2 text-xs pb-2'>Description</h2>
                                    <div className='flex items-center gap-2'>
                                        <FaPencilAlt />
                                        <p className='font-semibold text-sm'>Mobile and desktop app design</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardHeader className='flex justify-between'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaRegNoteSticky />
                                    <SpanComponents
                                        content='Notes'
                                    />
                                </div>
                                <ButtonComponents
                                    content="See All"
                                />
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <NotesComponents
                                    title="Text Inputs for Design System"
                                    content="Lorem ipsum dolor sit amet consectetur"
                                    day="Today"
                                    todo="To-do"
                                    date="Aug 02"
                                    icon={<FaCheckCircle className='text-lime text-xl' />}
                                    calendarIcon={<CiCalendar />}
                                />
                                <Divider />
                                <NotesComponents
                                    title="Meeting with Authur Taylor"
                                    content="Lorem ipsum dolor sit amet consectetur"
                                    day="Today"
                                    todo="To-do"
                                    date="Aug 02"
                                    icon={<FaCheckCircle className='text-lime text-xl' />}
                                    calendarIcon={<CiCalendar />}
                                />
                                <Divider />
                                <NotesComponents
                                    title="Check Natural and State color"
                                    content="Lorem ipsum dolor sit amet consectetur"
                                    day="Today"
                                    todo="To-do"
                                    date="Aug 02"
                                    icon={<FaCheckCircle className='text-lime text-xl' />}
                                    calendarIcon={<CiCalendar />}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddlePage