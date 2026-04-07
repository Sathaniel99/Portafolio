// Import CSS
import './App.css'
// Hooks
import { WindowContext } from './components/hooks/Context_api';
import { useState } from 'react';
// Componentes
import { Aside, Main } from './components/index';
import { HexagonBackground } from './components/animate-ui/components/backgrounds/hexagon';


function App() {
  const [stateWindow, setStateWindow] = useState("SM");

  return (
    <>
      <HexagonBackground className='absolute top-0 left-0 w-screen h-screen' />
      <WindowContext.Provider value={{ stateWindow, setStateWindow }}>
        <div className='h-full md:h-[80vh] w-200 flex md:grid grid-cols-[auto_1fr] rounded m-auto p-3 bg-linear-to-tr from-neutral-300 dark:from-neutral-900 to-slate-300 dark:to-black/10 border border-neutral-700 relative'>
          <Aside />
          <Main />
        </div >
      </WindowContext.Provider>
    </>
  )
}

export default App
