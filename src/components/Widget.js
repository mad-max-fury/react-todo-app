import React from 'react'
import "./widget.css"
import { useSelector } from 'react-redux'
import List from './List'
const Widget = () => {

  const { Todos } = useSelector(state => state)

  const _ = (selector) => {
    return document.querySelector(selector)
  }
  const All = Todos
  const Active = All.filter(activeItems => activeItems.active === true)
  const Completed = All.filter(activeItems => activeItems.active === false)
  function handleShowActiveItems() {
    const listWrapper = _('.todo__list')



  }
  return (
    <>
      <div className
        ="todo__footer">
        <div>
          <p className
            ="todo__count">{Active.length} items left</p>
        </div>
        <div className
          ="todo__buttons">
          <button className
            ="todo__button selected all">All</button><button
              className
              ="todo__button active" onClick={handleShowActiveItems}>Active</button><button
                className
                ="todo__button completed">Completed</button>
        </div>
        <div><button className
          ="todo__button clear">Clear Completed</button></div>
      </div>
    </>
  )
}

export default Widget
