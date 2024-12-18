import React, { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    ;(async function () {
      try {
        const response = await fetch(`/api/todolist`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result.message)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    })()
  }, [])

  return <div>{data}</div>
}

export default App
