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
                        {props.icon && <span className="ml-1 text-skyblue">{props.icon}</span>}
                    </div>
                }
                description={(
                    <Link href='/' size="sm" isExternal className='text-xs font-bold text-gray-500'>
                        {props.content}
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