import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setStatus } from '../redux/actions/actions'



const List = ({ items }) => {
  const { Todos } = useSelector(state => state)

  const dispatch = useDispatch()
  function FinishTodo({ target }) {
    console.log(Todos);

    target.parentElement.classList.toggle("checked");
    if (target.parentElement.classList.contains("checked")) {
      dispatch(setStatus(target.parentElement.id))
      console.log(Todos)

    } else {
      dispatch(setStatus(target.parentElement.id))
      console.log(Todos)

    }

  }
  return (
    <>
      {

        items.map((li, i) => {
          return <li className="todo__item" id={li.id}>
            <span className="todo__checkbox " onClick={FinishTodo}>
              <img src="/public/images/icon-check.svg" alt="" className="todo__check" />
            </span>
            <p className="todo__text" contentEditable="true">{li.todos

            }</p>
            <i className="fas fa-edit"></i>
            <svg className="todo__close" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494c6b" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
          </li>
        })
      }
    </>
  )
}

export default List
