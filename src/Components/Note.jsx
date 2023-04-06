import React from 'react'

function Note(props) {
     return (
          <div className='note flex flex-col'>
               <div className="title flex">
                    <h2>{props.title}</h2>
                    <i className="fa-solid fa-trash"></i>
               </div>
               <span>{props.lastModified}</span>
               <hr />
               <p>{props.text}</p>
          </div>
     )
}

export default Note