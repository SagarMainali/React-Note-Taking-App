import { React, useState } from 'react'
import Sidebar from './Sidebar'
import NotesContainer from './NotesContainer'

function App() {

     const [note, setNote] = useState([
          {
               title: "note 1",
               lastModified: "5:00 am - 12 Dec, Friday",
               text: "this is my first note"
          },

          {
               title: "note 2",
               lastModified: "9:00 am - 16 Dec, Tuesday",
               text: "this is my second note"
          },

          {
               title: "note 3",
               lastModified: "3:00 pm - 19 Dec, Sunday",
               text: "this is my third note"
          },

          {
               title: "note 4",
               lastModified: "5:00 am - 12 Dec, Friday",
               text: "this is my fourth note"
          },

          {
               title: "note 5",
               lastModified: "9:00 am - 16 Dec, Tuesday",
               text: "this is my fifth note"
          }
     ])

     const [showTheme, setShowTheme] = useState(false)

     return (
          <div className="app flex">
               <Sidebar note={note} setNote={setNote} showTheme={showTheme} setShowTheme={setShowTheme} />
               <NotesContainer notesData={note} />
          </div>
     )
}

export default App