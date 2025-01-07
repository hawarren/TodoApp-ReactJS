import React from "react"

function TodoItem(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.text}</td>
      <td>
        <input type="checkbox" checked={props.completed} onChange={() => props.onToggle(props.id)} />
      </td>
    </tr>
  )
}

export default TodoItem
