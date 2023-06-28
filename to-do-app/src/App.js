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

    <div className="App bg-[#27374D] h-screen  flex justify-center items-center">
      <div className='flex gap-5 h-5/6 w-5/6 bg-[#526D82]  rounded-xl px-5 py-8
      max-sm:h-screen max-sm:w-screen max-sm:rounded-none max-sm:flex-col'>
        <userContext.Provider value={{ setRefresh, refresh, val, setVal }}>
          <Sidebar />
          <Content />
        </userContext.Provider>
      </div>
    </div>
  );
}

export default App;
