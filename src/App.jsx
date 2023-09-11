
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Bookmark from './components/Bookmark/Bookmark'
import Cards from './components/Cards.jsx/Cards'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [item,setItem]=useState([])
  const [deuratin,setDeuration]=useState(0)
 const hadladalingChange = (data)=> {
    setItem([...item,data])
    setDeuration(deuratin+data.reading_time)
    toast("Your Book mark is Add")
 } 

  return (
    <>
      <div className='md:max-w-[1200px] w-[80%] mx-auto border-b-2 mt-7'>
          <Navbar></Navbar>
      </div>
     <div className='md:flex block  gap-x-20 w-[80%] md:max-w-[1200px] mx-auto mt-7'>
        <Cards hadladalingChange={hadladalingChange}></Cards>
        <Bookmark item={item} deuratin={deuratin}></Bookmark>
     </div>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
