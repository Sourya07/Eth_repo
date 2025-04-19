import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
////// queryClient
function App() {
  const [count, setCount] = useState(0)

  function getPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((response) => {
      setCount(response.data)
    })

  }
  console.log(count)
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <div>hello</div>
      <div>
        {count.map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>

    </>
  )
}

export default App
