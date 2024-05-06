import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Statement from './components/Statement';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <Statement />
        <Footer />
      
      </div>
    </>
  )
}

export default App
