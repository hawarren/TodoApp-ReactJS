import React from "react"
function Todoitem(props) {
  return (
    <li>
      <input type="checkbox" checked={props.completed} />
      {props.id}
      {props.text}
    </li>
  )
}

export default Todoitem
