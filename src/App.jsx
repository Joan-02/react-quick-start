import './App.css'
import { UserProfile } from './UserProfile';
import { ProductList } from './ProductList';
import { MyButton } from './MyButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        <MyButton count={count} setCount={setCount}/>
        <MyButton count={count} setCount={setCount}/>
      </div>
      <UserProfile />
      <ProductList />
    </>
  )
}

export default App
