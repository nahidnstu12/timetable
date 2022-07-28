import { useState } from 'react'
import useClock from './hooks/useClock';

function App() {
  const {clock: local} = useClock();  
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: pakistan } = useClock('UTC', 5*60);
  const { clock: india } = useClock('UTC', 5.30*60);
  const { clock: edt } = useClock('EDT');
  
  
  console.log("Local Clock: ", local.date)
  console.log("EST Clock: ", est.date)
  console.log("PST Clock: ", pst.date)
  console.log("Pakistan Clock: ", pakistan.date)
  console.log("EDT Clock: ", edt.date)
  console.log("India Clock: ", india.date)
  return (
    <div className="App">
      
    </div>
  )
}

export default App
