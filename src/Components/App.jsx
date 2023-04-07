import { React, useState } from 'react'
import Sidebar from './Sidebar'
import NotesContainer from './NotesContainer'

function App() {

     const [notes, setNotes] = useState([])

     const [showTheme, setShowTheme] = useState(false)

     return (
          <div className="app flex">
               <Sidebar notes={notes} setNotes={setNotes} showTheme={showTheme} setShowTheme={setShowTheme} />
               <NotesContainer notes={notes} />
          </div>
     )
}

export default App