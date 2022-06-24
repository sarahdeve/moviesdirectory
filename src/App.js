import React,{useState} from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'


const title = 'Favorite Movie Directory'

 

function App() {

  const [nameInput, setnameInput] = useState("")
  const [ratingsInput, setratingsInput] = useState("")
  const [durationInput, setdurationInput] = useState("")
  const [allInput, setallInput] = useState([])

 const addDetails = (newAll) => {

    setallInput([...allInput, newAll])
  }
  
  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform addDetails={addDetails}/>
        </div>
        <div className='layout-column w-30'>
          <Movieslist allInput={allInput}/> 
        </div>
      </div> 
    </div>
  )
}

export default App;
