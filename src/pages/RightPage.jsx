import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Tabs,
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

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

const getDatesForMonth = (year, month) => {
    const dates = [];
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        dates.push({
            dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
            dayOfMonth: day,
            date: date.toLocaleDateString(),
            year: date.getFullYear(),
            month: date.toLocaleDateString('en-US', { month: 'long' }),
        });
    }
        return dates;
};

const RightPage = () => {
    const [dates, setDates] = React.useState([])
    const swiperRef = React.useRef(null);
    const swiperRef2 = React.useRef(null);

    const [months, setMonths] = React.useState([]);

    React.useEffect(() => {
        const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ];

        setMonths(monthNames);
    }, []);

    function goToPrevious() {
        swiperRef.current.swiper.slidePrev()
    }

    function goToNext() {
        swiperRef.current.swiper.slideNext()
    }

    function goToPrevious2() {
        swiperRef2.current.swiper.slidePrev()
    }

    function goToNext2() {
        swiperRef2.current.swiper.slideNext()
    }

    const [activeCal, setActiveCal] = React.useState(0)

    React.useEffect(() => {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth()

        setDates(getDatesForMonth(year, month))
    }, []);
    console.log(dates)

    return (
        <div className='h-[100vh] flex flex-col gap-2'>
            <div className='flex justify-between items-center gap-2 mb-1'>
                <Button startContent={<FaCalendarCheck />} className='bg-white border-1 border-gray'>Schedule</Button>
                <Button startContent={<FaPlus />} className='bg-purple text-white'>Create a Request</Button>
            </div>
            <div>
                <Card className="w-full max-w-sm mx-auto">
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
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between items-center bg-gray5 rounded-full w-full'>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    onClick={goToPrevious2}
                                    startContent={<MdOutlineKeyboardArrowLeft className='text-2xl' />}
                                ></Button>
                                <Swiper
                                    ref={swiperRef2}
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    loop={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                >
                                    {months.map((item, idx) => (
                                        <SwiperSlide className='flex w-full' key={idx }>
                                            <p className='w-full font-semibold text-sm flex items-center justify-center'>{item}, <span className='ml-1'>2023</span></p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    onClick={goToNext2}
                                    startContent={<MdKeyboardArrowRight className='text-2xl' />}
                                ></Button>
                            </div>
                            <div className='flex justify-center items-center py-1'>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    onClick={goToPrevious}
                                    startContent={<MdOutlineKeyboardArrowLeft className='text-2xl' />}
                                ></Button>
                                <Swiper
                                    ref={swiperRef}
                                    slidesPerView={5}
                                    spaceBetween={10}
                                    loop={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className='w-full flex justify-between items-center px-2'
                                >
                                    {dates.map((date, idx) => (
                                        <SwiperSlide className={`flex justify-center items-center font-bold flex-col cursor-pointer transition-all duration-300 ease-in-out ${activeCal === idx ? 'bg-purple text-white rounded-lg' : 'text-gray2'}`} onClick={() => setActiveCal(idx)} key={idx}
                                        >
                                            <p className={`font-bold text-xs ${activeCal === idx ? 'text-white' : 'text-gray2'}`}>{date.dayOfWeek}</p>
                                            <span className={`text-lg ${activeCal === idx ? 'text-white' : 'text-black'}`}>{date.dayOfMonth}</span>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Button
                                    className='bg-white border-1 border-gray2 rounded-full'
                                    isIconOnly
                                    size="sm"
                                    onClick={goToNext}
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
                                            <TiMessages/>
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