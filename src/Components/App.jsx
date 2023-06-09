import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import NotesContainer from './NotesContainer'

function App() {

     // main state - store notes as objects
     const [notes, setNotes] = useState(
          JSON.parse(localStorage.getItem('savedNotesData')) || []
     )

     // run this function only when there is any changes in notes
     useEffect(() => {
          localStorage.setItem('savedNotesData', JSON.stringify(notes))
     }, [notes]
     )

     // add new note on click
     function addNewNote(color) {

          const temp = [...notes]

          // unshift adds element at index 0
          temp.unshift(
               {
                    id: Date.now(),
                    title: '',
                    text: '',
                    time: Date.now(),
                    color
               }
          )

          // splice adds or remove element at a given index
          // temp.splice(0, 0, 
          //      {
          //           title: "note 6",
          //           text: "this is my sixth note",
          //           newClass: "add-animation",
          //           color
          //      }
          // )

          setNotes(temp)

          //this doesn't seem to work, don't know why 
          // props.setNote(
          //      prevState => prevState.unshift(
          //           {
          //                title: "note 6",
          //                date: "5:00 am - 22 Dec, Saturday",
          //                text: "this is my sixth note",
          //                color
          //           }
          //      )
          // )
     }

     // delete note
     function deleteNote(myId) {
          const temp = [...notes]

          const matchedIndex = temp.findIndex(item => myId === item.id)

          temp.splice(matchedIndex, 1)

          setNotes(temp)
     }

     // handling changes of input
     function handleChange(event, myId) {

          // destructure and only get required properties
          const { name, value } = event.target

          const temp = [...notes]

          const matchedIndex = temp.findIndex(item => myId === item.id)

          // because temp[matchedIndex].[name] doesn't work
          if (name === 'title') {
               temp[matchedIndex].title = value
          }
          else {
               temp[matchedIndex].text = value
          }

          setNotes(temp)
     }

     return (
          <div className="app flex">
               <Sidebar addNewNote={addNewNote} />
               <NotesContainer notes={notes} deleteNote={deleteNote} handleChange={handleChange} />
          </div>
     )
}

export default App