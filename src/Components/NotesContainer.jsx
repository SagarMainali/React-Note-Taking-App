import React from 'react'
import Note from './Note'

function NotesContainer(props) {
     return (
          <div className='notes-container flex'>
               {props.notesData.map((item, index) => <Note key={index} {...item} />)}
          </div>
     )
}

export default NotesContainer