const user = {
    name: 'Hedy Lamarr',
    imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

export const UserProfile = () => {

    const { name, imageURL, imageSize } = user;

    return (
    <>
        <h4>{name}</h4>
        <img className='avatar' src={imageURL} alt="" style={{width: imageSize, height: imageSize}} />
    </>
    )
} 