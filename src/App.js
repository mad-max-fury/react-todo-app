
import './App.css';
import Form from './components/Form';
import TodosItems from './components/TodosItems';
import Widget from './components/Widget';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { handleSetLogin } from './redux/actions/actions';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link, useHistory

} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const { User } = useSelector(state => state)
  // function HandleLogOut() {
  //   dispatch(handleSetLogin(false))
  // }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/app" element={<div className="App">
            <div className="welcome">
              <span>welcome  {User[0]?.name}</span>
              <button >LogOut</button>
            </div>
            <header className="App-header">
              <div>
                <span>Todo</span>
                <span>Mode</span>
              </div>
              <Form />
            </header>
            <TodosItems />
            <Widget />
          </div>} />
        </Routes>


      </Router>
    </>
  );
}

export default App;
