import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setUserName } from './redux/actions';
import Users from './components/Users';
import Product from './components/Product';
import UserList from './components/UserList';


function App() {

  const addName =  () => {
    dispatch(setUserName('azad'));
  }

  const name = useSelector(state => state.user.userName);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


        {/* <button onClick={()=> addName()} type="button" class="btn btn-primary">SetName</button> */}

        {/* <h1>{name}</h1> */}

        <Users />
        <Product />
        <UserList />
     
      </header>
    </div>
  );
}

export default App;
