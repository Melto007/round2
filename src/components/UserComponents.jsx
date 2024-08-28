import {
    User,
    Link
} from '@nextui-org/react'

const UserComponents = (props) => {
    return (
        <div>
            <User
                name={
                    <div className="flex items-center">
                        {props.name}
                        {
                            props.icon
                            && <span className="ml-1 text-skyblue">{props.icon}</span>

                        }
                        {
                            props.emoji === 'burger' ? (
                                <span className='text-xs ml-[0.1em]'>🍔</span>
                            ) : props.emoji === 'tea' ? (
                                <span className='text-xs ml-[0.1em]'>🍵</span>
                            ) : props.emoji === 'cup' ? (
                                <span className='text-xs ml-[0.1em]'>🥤</span>
                            ) : props.emoji === 'brain' ? (
                                <span className='text-xs ml-[0.1em]'>🧠</span>
                            ) : (
                                ''
                            )
                        }
                    </div>
                }
                description={(
                    <Link href='/' size="sm" isExternal className='text-xs font-bold text-gray-500'>
                        {props.content}
                        {
                            props.text ? (
                                <span className="ml-[0.2em] underline underline-offset-1 text-black">{props.text}</span>
                            ) : props.emoji === 'message' ? (
                                <span className='text-xs ml-[0.1em]'>💬</span>
                            ) : (
                                ''
                            )
                        }
                    </Link>
                )}
                avatarProps={{
                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                }}
                classNames={{
                    name: 'font-bold'
                }}
            />
        </div>
    )
}

export default UserComponents