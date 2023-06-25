// import { createContext, useState } from 'react';
import { createContext, useContext, useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Sidebar from './Components/Sidebar';

export let userContext = createContext();

function App() {
  const [refresh, setRefresh] = useState(false);
  const [val, setVal] = useState([])

  return (

    <div className="App bg-blue-100 h-screen flex justify-center items-center">
      <div className='flex h-5/6 w-5/6 bg-teal-300 rounded-xl px-5 py-8'>
        <userContext.Provider value={{ setRefresh, refresh, val, setVal }}>
          <Sidebar />
          <Content />
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
