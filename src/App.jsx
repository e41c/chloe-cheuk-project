import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Statement from './components/Statement';
import Footer from './components/Footer';
import MainLayout from './layouts/MainLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <MainLayout>
        <div>Home Page</div>
       </MainLayout>
      </div>
    </>
  )
}

export default App
