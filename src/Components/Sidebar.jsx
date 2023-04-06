import React from 'react'

function Sidebar(props) {

     const colorTheme = ["#5b5ea6", "#ff6f61", "#6b5b95", "#009b77", "#d65076"]

     function toggleTheme() {
          props.setShowTheme(prevState => !prevState)
     }

     function addNewNote() {
          props.setNote(
               prevState => prevState.push({
                    title: "note 6",
                    lastModified: "5:00 am - 22 Dec, Saturday",
                    text: "this is my sixth note"
               })
          )
     }

     return (
          <div className='sidebar flex flex-col'>
               <i className="fa-solid fa-plus" onClick={() => toggleTheme()}></i>
               {props.showTheme && <ul className='flex flex-col'>
                    {colorTheme.map((color, index) => <li title={color} key={index} style={{ backgroundColor: color }} onClick={() => addNewNote()} ></li>)}
               </ul>}
          </div >
     )
}

export default Sidebar