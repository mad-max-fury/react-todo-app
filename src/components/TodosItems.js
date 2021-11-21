import React from 'react'
import "../TodoItems.css"
import { useSelector, useDispatch } from "react-redux"
import List from './List';
// import check from ""
function TodosItems() {
  const { Todos } = useSelector(state => state)

  return (
    <ul role="list" className="todo__list">
      {
        Todos.length > 0 ?
          <List items={Todos} />
          : <div>
            HELLO YOU HAVE NO TODO
          </div>
      }

    </ul>
  )
}

export default TodosItems
