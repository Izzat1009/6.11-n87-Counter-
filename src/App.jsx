import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [, ] = useState(0)

  return (
    <>
      <div className="App">
        <Counter />
      </div>
    </>
  )
}

export default App
