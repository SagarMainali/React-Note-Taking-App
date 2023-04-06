import { React, useState } from 'react'
import Sidebar from './Sidebar'
import NotesContainer from './NotesContainer'

function App() {

     const [note, setNote] = useState([])

     const [showTheme, setShowTheme] = useState(false)

     return (
          <div className="app flex">
               <Sidebar notes={note} setNote={setNote} showTheme={showTheme} setShowTheme={setShowTheme} />
               <NotesContainer notes={note} />
          </div>
     )
}

export default App