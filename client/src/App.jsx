import { useState } from 'react'
import CodeReviewPage from './components/CodeReviewPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CodeReviewPage/>
    </>
  )
}

export default App
