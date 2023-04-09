import React from 'react'
import Note from './Note'

function NotesContainer(props) {

     return (
          <div className='notes-main-container flex flex-col'>
               <h1 >Notepad <i className="fa-solid fa-note-sticky"></i></h1>
               <div className='notes-container flex'>
                    {props.notes.length
                         ? props.notes.map(item => < Note key={item.id} {...item} deleteNote={props.deleteNote} handleChange={props.handleChange} />)
                         : <h2 style={{ fontFamily: 'Caveat', fontSize: "30px" }}>You haven't added any notes.</h2>}
               </div>
          </div>
     )
}

export default NotesContainer