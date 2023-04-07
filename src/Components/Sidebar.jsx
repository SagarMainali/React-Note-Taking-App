import React from 'react'

function Sidebar(props) {

     const colorTheme = ["#4682B4", "#ff6f61", "#6b5b95", "#009b77", "#d65076"]

     function toggleTheme() {
          props.setShowTheme(prevState => !prevState)
     }

     function addNewNote(color) {

          const temp = [...props.notes]

          // unshift adds element at index 0
          temp.unshift(
               {
                    title: "note 6",
                    text: "this is my sixth note",
                    newClass: "add-animation",
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
          //      prevState => prevState.push(
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
               {!props.showTheme
                    ? < i className="fa-solid fa-plus" onClick={() => toggleTheme()}></i>
                    : <i className="fa-solid fa-minus" onClick={() => toggleTheme()}></i>
               }
               {
                    props.showTheme && <ul className='flex flex-col'>
                         {colorTheme.map((color, index) => <li title={color} key={index} style={{ backgroundColor: color }} onClick={() => addNewNote(color)} ></li>)}
                    </ul>
               }
          </div >
     )
}

export default Sidebar