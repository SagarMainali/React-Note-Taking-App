import React from 'react'

function Sidebar(props) {

     const colorTheme = ["#5b5ea6", "#ff6f61", "#6b5b95", "#009b77", "#d65076"]

     function toggleTheme() {
          props.setShowTheme(prevState => !prevState)
     }

     return (
          <div className='sidebar flex flex-col'>
               <i className="fa-solid fa-plus" onClick={() => toggleTheme()}></i>
               {props.showTheme && <ul className='flex flex-col'>
                    {colorTheme.map((color, index) => <li title={color} key={index} style={{ backgroundColor: color }}></li>)}
               </ul>}
          </div >
     )
}

export default Sidebar