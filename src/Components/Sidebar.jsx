import React, { useState } from 'react'

function Sidebar(props) {

     // state to store boolean only
     const [showTheme, setShowTheme] = useState(false)

     // to render li through array mapping
     const colorTheme = ["#4682B4", "#ff6f61", "#6b5b95", "#009b77", "#d65076"]

     // toggle state's boolean to show or hide colors
     function toggleTheme() {
          setShowTheme(prevState => !prevState)
     }

     return (
          <div className='sidebar flex flex-col'>
               {!showTheme
                    ? < i className="fa-solid fa-plus" onClick={() => toggleTheme()}></i>
                    : <i className="fa-solid fa-minus" onClick={() => toggleTheme()}></i>
               }
               {
                    showTheme && <ul className='flex flex-col'>
                         {colorTheme.map((color, index) => <li title={color} key={index} style={{ backgroundColor: color }} onClick={() => props.addNewNote(color)} ></li>)}
                    </ul>
               }
          </div >
     )
}

export default Sidebar