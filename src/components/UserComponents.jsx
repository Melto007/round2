import {
    User,
    Link
} from '@nextui-org/react'

const UserComponents = (props) => {
    return (
        <div>
            <User
                name={props.name}
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