import React from 'react'
import Note from './Note'

function NotesContainer(props) {
     return (
          <div className='notes-container flex'>
               {console.log(props)}
               {props.notesData.map((item, index) => <Note key={index} notesData={item} />)}
          </div>
     )
}

export default NotesContainer