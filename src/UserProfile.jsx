const user = {
    name: 'Hedy Lamarr',
    imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

export const UserProfile = () => {
    return (
    <>
        <h4>{user.name}</h4>
        <img className='avatar' src={user.imageURL} alt="" style={{width: user.imageSize, height: user.imageSize}} />
    </>
    )
} 