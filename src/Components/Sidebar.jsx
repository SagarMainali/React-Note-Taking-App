import React from 'react'

function Sidebar(props) {

     const colorTheme = ["#5b5ea6", "#ff6f61", "#6b5b95", "#009b77", "#d65076"]

     function toggleTheme() {
          props.setShowTheme(prevState => !prevState)
     }

     function addNewNote(color) {

          const temp = [...props.note]

          temp.push(
               {
                    title: "note 6",
                    lastModified: "5:00 am - 22 Dec, Saturday",
                    text: "this is my sixth note",
                    color
               }
          )

          props.setNote(temp)


          // props.setNote(
          //      prevState => prevState.push(
          //           {
          //                title: "note 6",
          //                lastModified: "5:00 am - 22 Dec, Saturday",
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