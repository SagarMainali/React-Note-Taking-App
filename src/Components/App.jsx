import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import NotesContainer from './NotesContainer'

function App() {

     const [notes, setNotes] = useState(
          JSON.parse(localStorage.getItem('savedNotesData')) || []
     )

     useEffect(() => {
          localStorage.setItem('savedNotesData', JSON.stringify(notes))
     }, [notes]
     )

     return (
          <div className="app flex">
               <Sidebar notes={notes} setNotes={setNotes} />
               <NotesContainer notes={notes} />
          </div>
     )
}

export default App