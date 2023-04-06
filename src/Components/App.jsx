import { React, useState } from 'react'
import Sidebar from './Sidebar'
import NotesContainer from './NotesContainer'

function App() {

     const [note, setNote] = useState([
          {
               title: "note1",
               lastModified: "5:00 am - 12 Dec, Friday",
               text: "this is my first note"
          },

          {
               title: "note2",
               lastModified: "9:00 am - 16 Dec, Tuesday",
               text: "this is my second note"
          },

          {
               title: "note3",
               lastModified: "3:00 pm - 19 Dec, Sunday",
               text: "this is my third note"
          },

          {
               title: "note1",
               lastModified: "5:00 am - 12 Dec, Friday",
               text: "this is my first note"
          },

          {
               title: "note2",
               lastModified: "9:00 am - 16 Dec, Tuesday",
               text: "this is my second note"
          },

          {
               title: "note3",
               lastModified: "3:00 pm - 19 Dec, Sunday",
               text: "this is my third note"
          }
     ])

     const [showTheme, setShowTheme] = useState(false)

     return (
          <div className="app flex">
               <Sidebar showTheme={showTheme} setShowTheme={setShowTheme} />
               <NotesContainer notesData={note} />
          </div>
     )
}

export default App