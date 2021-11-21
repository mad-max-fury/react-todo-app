import React from 'react'
import "./Registration.css"
import { useDispatch, useSelector } from 'react-redux'
import { handleCreateUser } from '../redux/actions/actions'
import { useNavigate } from 'react-router-dom';




const Registration = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()


  function HandleSubmit(e) {
    e.preventDefault();
    const { target } = e
    const username = target.children[1].value
    const password = target.children[2].value
    if (username === "" || password === "") {
      alert('Enter a username and  password')
    }
    dispatch(handleCreateUser(username, password))
    navigate('/login')

  }
  return (
    <form className="register" onSubmit={HandleSubmit}>
      <div>Create An Account</div>
      <input placeholder="Enter Username" type="text" id="username" />
      <input placeholder="Enter Password" type="password" id="password" />
      <button type="submit">Submit</button>

    </form>
  )
}

export default Registration
