import React from 'react'
import Note from './Note'

function NotesContainer(props) {
     return (
          <div className='notes-main-container'>
               <h1>Notes App</h1>
               <div className='notes-container flex'>
                    {props.notesData.map((item, index) => <Note key={index} {...item} />)}
               </div>
          </div>
     )
}

export default NotesContainer