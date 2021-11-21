import React from 'react'
import { useSelector } from 'react-redux'
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { User } = useSelector(state => state)
  let navigate = useNavigate();



  function HandleLogin(e) {
    e.preventDefault();
    console.log('started')
    const { target } = e
    const username = target.children[1].value
    const password = target.children[2].value
    if (User[0].name === username && User[0].password === password) {
      navigate('/App')
    }
    else {
      alert('wrong password, create an account')
      navigate('/')
    }
  }
  return (
    <form className="login" onSubmit={HandleLogin}>
      <div>LOGIN</div>
      <input placeholder="Enter Username" type="text" id="username" />
      <input placeholder="Enter Password" type="password" id="password" />
      <button type="submit">LOGIN</button>

    </form>
  )
}

export default Login
