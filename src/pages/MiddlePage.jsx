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
                label: 'Poll',
                data: [3, 6],
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
                    <Card>
                        <CardHeader className='flex justify-between'>
                            <div className='flex justify-center items-center gap-2'>
                                <IoMdTime />
                                <span className='font-bold text-sm'>Time Off</span>
                            </div>
                            <Button size="sm" className='bg-white border-1 border-gray2 font-bold'>See All</Button>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <div className='flex justify-center items-center'>
                                <div className='w-[50%]'>
                                    <Doughnut
                                        data={data}
                                        options={options}
                                    >
                                    </Doughnut>
                                </div>
                            </div>
                            <Divider />
                            <div className='flex justify-between items-center font-bold py-2 text-xs'>
                                <div className='flex justify-center items-center gap-2'>
                                    <IoIosTime className='text-red' />
                                    <p className='text-sm'>Aug 11, 2023 <span className='text-gray2 text-xs'>(Sick)</span></p>
                                </div>
                                <h2 className='text-xs bg-amber px-2 py-1 rounded-full text-black'>Pending</h2>
                            </div>
                            <Divider />
                            <div className='flex justify-between items-center font-bold py-2 text-xs'>
                                <div className='flex justify-center items-center gap-2'>
                                    <FaCheckCircle className='text-lime' />
                                    <p className='text-sm'>Jun 15, 2023 <span className='text-gray2 text-xs'>(Annual)</span></p>
                                </div>
                                <h2 className='text-xs bg-green px-2 py-1 rounded-full text-black'>Confirmed</h2>
                            </div>
                            <Divider />
                            <div className='flex justify-between items-center font-bold py-2 text-xs'>
                                <div className='flex justify-center items-center gap-2'>
                                    <IoMdCloseCircle className='text-red' />
                                    <p className='text-sm'>Jun 24, 2023 <span className='text-gray2 text-xs'>(Casual)</span></p>
                                </div>
                                <h2 className='text-xs bg-rose px-2 py-1 rounded-full text-black'>Confirmed</h2>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className='flex justify-between'>
                            <div className='flex justify-center items-center gap-2'>
                                <MdComputer />
                                <span className='font-bold text-sm'>Status Tracker</span>
                            </div>
                            <Button size="sm" className='bg-white border-1 border-gray2 font-bold'>See All</Button>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <h2 className='font-bold text-gray2 text-sm py-2'>Absent</h2>
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
                            <h2 className='font-bold text-gray2 text-sm pb-2'>Away</h2>
                            <div className='flex flex-col gap-4 text-xs'>
                                <div className='flex justify-between items-center'>
                                    <UserComponents
                                        name="James Brown"
                                        content="Replaced by Laura Peraz"
                                    />
                                    <div className='flex items-center justify-between gap-1 bg-rose text-sm px-2 py-1 rounded-md font-bold'>
                                        <p><IoIosTime /></p>
                                        <span className='text-xs'>25m</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <UserComponents
                                        name="James Brown"
                                        content="Replaced by Laura Peraz"
                                    />
                                    <div className='flex items-center justify-between gap-1 bg-rose text-sm px-2 py-1 rounded-md font-bold'>
                                        <p><IoIosTime /></p>
                                        <span className='text-xs'>12m</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <UserComponents
                                        name="James Brown"
                                        content="Replaced by Laura Peraz"
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
                <div className='sm:w-[50%]'>
                    <div>
                        <Card>
                            <CardHeader className='flex justify-between'>
                                <div className='flex justify-center items-center gap-2'>
                                    <RiFlashlightLine />
                                    <span className='font-bold text-sm'>Current Project</span>
                                </div>
                                <Button size="sm" className='bg-white border-1 border-gray2 font-bold'>See All</Button>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <div className='mb-2'>
                                    <h2 className='font-bold text-gray2 text-sm pb-2'>Project Name</h2>
                                    <div className='flex items-center text-sm gap-2 font-bold'>
                                        <div className='flex items-center gap-1'>
                                            <MdAutoGraph />
                                            <p>Monday App Design</p>
                                        </div>
                                        <div className='flex justify-center items-center bg-red3 px-2 py-1 rounded-full'>
                                            <IoIosTime />
                                            <p className='text-gray text-xs'>In Progress</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h2 className='font-bold text-gray2 text-sm pb-2'>Project Manager</h2>
                                            <UserComponents
                                                name="Laura P."
                                            />
                                    </div>
                                    <div>
                                        <h2 className='font-bold text-gray2 text-sm pb-2'>Design Lead</h2>
                                        <UserComponents
                                            name="Arthur G."
                                        />
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <h2 className='font-bold text-gray2 text-sm pb-2'>Team</h2>
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
                                    <h2 className='font-bold text-gray2 text-sm pb-2'>Timeline</h2>
                                    <div className='flex items-center gap-2'>
                                        <CiCalendar />
                                        <p className='font-bold text-sm'>12/10/2022 - 01/04/2023</p>
                                    </div>
                                </div>
                                <div className='my-2'>
                                    <h2 className='font-bold text-gray2 text-sm pb-2'>Description</h2>
                                    <div className='flex items-center gap-2'>
                                        <FaPencilAlt />
                                        <p className='font-bold text-sm'>Mobile and desktop app design</p>
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
                                    <span className='font-bold text-sm'>Notes</span>
                                </div>
                                <Button size="sm" className='bg-white border-1 border-gray2 font-bold'>See All</Button>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <div className='mb-2'>
                                    <div className='flex items-center text-sm gap-2'>
                                        <FaCheckCircle className='text-lime text-xl' />
                                        <div>
                                            <p className='font-bold text-sm'>Text Inputs for Design System</p>
                                            <p className='text-gray text-xs font-bold'>Lorem ipsum dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center px-6 py-2'>
                                        <div className='flex items-center gap-1'>
                                            <p className='text-black text-xs bg-red3 px-2 py-1 rounded-full'>Today</p>
                                            <p className='text-black text-xs bg-red3 px-2 py-1 rounded-full'>To-do</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <CiCalendar />
                                            <p className='text-gray text-xs'>Aug 02</p>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className='mb-2'>
                                    <div className='flex items-center text-sm gap-2'>
                                        <FaCheckCircle className='text-lime text-xl' />
                                        <div>
                                            <p className='font-bold text-sm'>Meeting with Authur Taylor</p>
                                            <p className='text-gray text-xs font-bold'>Lorem ipsum dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center px-6 py-2'>
                                        <div className='flex items-center gap-1'>
                                            <p className='text-black text-xs bg-red3 px-2 py-1 rounded-full'>Today</p>
                                            <p className='text-black text-xs bg-red3 px-2 py-1 rounded-full'>To-do</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <CiCalendar />
                                            <p className='text-gray text-xs'>Aug 02</p>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className='mb-2'>
                                    <div className='flex items-center text-sm gap-2'>
                                        <FaCheckCircle className='text-lime text-xl' />
                                        <div>
                                            <p className='font-bold text-sm'>Check Natural and State color</p>
                                            <p className='text-gray text-xs font-bold'>Lorem ipsum dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center px-6 py-2'>
                                        <div className='flex items-center gap-1'>
                                            <p className='text-black text-xs bg-red3 px-2 py-1 rounded-full'>Today</p>
                                            <p className='text-black text-xs bg-red3 px-2 py-1 rounded-full'>To-do</p>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <CiCalendar />
                                            <p className='text-gray text-xs'>Aug 02</p>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddlePage