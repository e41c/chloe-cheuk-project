import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout';
import HeroLayout from './layouts/HeroLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <MainLayout>
        <HeroLayout />
       </MainLayout>
      </div>
    </>
  )
}

export default App
