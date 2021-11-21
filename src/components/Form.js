import React, { useState } from 'react'
import { CreateListItem } from '../redux/actions/actions'
import { useSelector, useDispatch } from "react-redux"
import './form.css'

const Form = () => {


  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      alert("please Enter a Todo")
      return
    }
    dispatch((CreateListItem((e.target[0].value))));
    e.target[0].value = null


  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter your todo..." />
        <button>Add Todo</button>
      </form>
    </>
  )
}

export default Form
