import React from 'react'

function Note(props) {

     console.log(props.id)

     // delete note
     function deleteNote(myId) {
          const temp = [...props.notes]

          const matchedIndex = temp.findIndex((item) => myId === item.id)

          temp.splice(matchedIndex, 1)

          props.setNotes(temp)
     }

     // generate date
     function currentTime(milliseconds) {
          const d = new Date(milliseconds)

          const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

          const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]

          // day
          const day = days[d.getDay()]

          // month
          const month = months[d.getMonth()]

          // hours
          let hours = d.getHours()
          const amPm = hours < 12 ? "AM" : "PM"
          hours = hours > 12 ? hours - 12 : hours
          hours = hours ? hours : 12

          // minutes
          let minutes = d.getMinutes()
          minutes = minutes < 10 ? "0" + minutes : minutes

          // date
          const date = d.getDate()

          return `${hours}:${minutes} ${amPm}, ${month} ${date} - ${day}`
          // 9:37 PM, Jan 5 - Sunday
     }

     return (
          <div className="note flex flex-col" style={{ backgroundColor: props.color }}>
               <div className="title flex">
                    <input placeholder='Title' ></input>
                    <i className="fa-solid fa-trash" onClick={() => deleteNote(props.id)}></i>
               </div>
               <span>{currentTime(props.time)}</span>
               <hr />
               <textarea defaultValue="hello"></textarea>
          </div >
     )
}

export default Note