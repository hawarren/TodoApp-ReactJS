import React, { useState, useEffect } from "react"
import TodoItem from "./TodoItem"

function App() {
  const [data, setData] = useState("")
  const [todoList, setTodoList] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const filteredTodoList = todoList.filter(item => item.text.toLowerCase().includes(searchQuery.toLowerCase()))

  useEffect(() => {
    ;(async function () {
      try {
        const response = await fetch(`/api/todolist?name=Hanif`)
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

  const handleToggle = id => {
    setTodoList(todoList.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
      <div>{data}</div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Search todos" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ width: "100%", maxWidth: "400px", marginBottom: "20px" }} />
      <h2>My todo items</h2>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredTodoList.map(item => (
              <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} onToggle={handleToggle} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
