// Import CSS
import './App.css'
// Hooks
import { WindowContext } from './components/hooks/Context_api';
import { useState } from 'react';
// Componentes
import { Aside, Main } from './components/index';


function App() {
  const [stateWindow, setStateWindow] = useState("SM");

  return (
    <>
      <WindowContext.Provider value={{ stateWindow, setStateWindow }}>
        <div className='h-[80vh] w-200 flex md:grid grid-cols-[auto_1fr] rounded m-auto p-3 overflow-hidden bg-linear-to-tr from-neutral-300 dark:from-neutral-900 to-slate-300 dark:to-black/10 border border-neutral-700 relative'>
          <Aside />
          <Main />
        </div >
      </WindowContext.Provider>
    </>
  )
}

export default App
