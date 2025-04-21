import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WalletOptions } from './WalletOption'
import { Account } from './Userbalance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <input type="text"></input>
      <button>Send</button>
      <WalletOptions />
      <Account />
    </div>
  )
}

export default App
