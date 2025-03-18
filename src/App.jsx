import './App.css'
import { UserProfile } from './UserProfile';

const MyButton = () => {
  return (
    <button className='btn'>I'm a button</button>
  );
}

function App() {

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
      <UserProfile />
    </>
  )
}

export default App
