import React, { useState } from 'react'

function Sidebar(props) {

     const [showTheme, setShowTheme] = useState(false)

     const colorTheme = ["#4682B4", "#ff6f61", "#6b5b95", "#009b77", "#d65076"]

     // toggle state to show or hide colors
     function toggleTheme() {
          setShowTheme(prevState => !prevState)
     }

     // add new note on click
     function addNewNote(color) {

          const temp = [...props.notes]

          // unshift adds element at index 0
          temp.unshift(
               {
                    title: "note 6",
                    text: "this is my sixth note",
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

          props.setNotes(temp)

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

     return (
          <div className='sidebar flex flex-col'>
               {!showTheme
                    ? < i className="fa-solid fa-plus" onClick={() => toggleTheme()}></i>
                    : <i className="fa-solid fa-minus" onClick={() => toggleTheme()}></i>
               }
               {
                    showTheme && <ul className='flex flex-col'>
                         {colorTheme.map((color, index) => <li title={color} key={index} style={{ backgroundColor: color }} onClick={() => addNewNote(color)} ></li>)}
                    </ul>
               }
          </div >
     )
}

export default Sidebar