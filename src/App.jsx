import { useState } from 'react'
import Navbar from './components/Navbar'
import Cardsmenu from './components/Cardsmenu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Cardsmenu/>
    </>
  )
}

export default App
