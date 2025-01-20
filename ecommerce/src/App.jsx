import { Button } from "@/components/ui/button"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1> Sita Ram Sahu </h1>
      <Button>Click me</Button>
    </div>
    </>
  )
}

export default App
