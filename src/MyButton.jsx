
export const MyButton = (props) => {
    const { count, setCount } = props;  // Aquí desestructuramos 'count' y 'setCount' de 'props'

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
      <button onClick={handleClick} className='btn'>Clicked {count} times</button>
    );
}