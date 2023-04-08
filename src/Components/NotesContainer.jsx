import React from 'react'
import Note from './Note'

function NotesContainer(props) {

     const notesComponents = props.notes.length
          ? props.notes.map(item => < Note key={item.id} {...item} notes={props.notes} setNotes={props.setNotes} />)
          : <h2 style={{ fontFamily: 'Caveat', fontSize: "30px" }}>You haven't added any notes.</h2>

     return (
          <div className='notes-main-container flex flex-col'>
               <h1 >Notepad <i className="fa-solid fa-note-sticky"></i></h1>
               <div className='notes-container flex'>
                    {notesComponents}
               </div>
          </div>
     )
}

export default NotesContainer