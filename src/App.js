import React, { useState, useEffect } from "react"
import TodoItem from "./Todoitem"

const testData2 = [
  { text: "Sign up for pilates", id: 1, completed: false },
  { text: "Pay the light bill", id: 2, completed: true },
  { text: "Get some milk", id: 3, completed: false }
]
function App() {
  const [data, setData] = useState("")
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    ;(async function () {
      try {
        const response = await fetch(`/api/todolist?name=sally`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result.message)
        setTodoList(result.testData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    })()
  }, [])

  return (
    <>
      <div>{data}</div>
      <ul>
        {todoList.map(item => (
          <TodoItem completed={item.completed} text={item.text} id={item.id}></TodoItem>
        ))}
      </ul>
    </>
  )
}

export default App
