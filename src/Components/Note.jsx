import React from 'react'

function Note(props) {
     return (
          <div className='note flex flex-col'>
               <div className="title flex">
                    <h2>{props.notesData.title}</h2>
                    <i className="fa-solid fa-trash"></i>
               </div>
               <span>{props.notesData.lastModified}</span>
               <hr />
               <p>{props.notesData.text}</p>
          </div>
     )
}

export default Note