import logo from './logo.svg';
// import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home';

function App() {
  const count = useSelector(state => state.user.count);
  const dispatch = useDispatch();

  const fetchAllUsers = async () => {
    let res = await axios.get("");
    const data = res && res.data ? res.data : [];
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Home />
  );
}

export default App;
