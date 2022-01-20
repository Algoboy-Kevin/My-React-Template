import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="hero min-h-screen bg-base-200">
      <header className="text-center hero-content ">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold ">
            Hello World
          </h1>
          <p className="mb-5">
            Welcome to AlgoBoy's basic setup. If this page is not displaying properly, please check your settings. Happy hacking!
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
    
      </header>
    </div>
  )
}

export default App
