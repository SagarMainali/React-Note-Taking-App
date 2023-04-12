import React from 'react'

function Note(props) {

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

     function debounce(callback, delay) {
          let timer
          return function (...args) {
               clearTimeout(timer)
               timer = setTimeout(() => {
                    callback(...args)
               }, delay)
          }
     }

     const debouncedFunction = debounce(props.handleChange, 1000)

     return (
          <div className="note flex flex-col" style={{ backgroundColor: props.color }}>
               <div className="title flex">
                    <input placeholder='Title' name='title' onChange={(event) => debouncedFunction(event, props.id)} defaultValue={props.title} ></input>
                    {/* if 'value' is used instead of 'defaultValue', user won't be able to type because the input value is set to props.title which takes 1000ms 
                    to update since its state is being handled by react itself making it controlled state... so whats happening is that when user gives input,
                    the funcion waits 1000ms before updating props.title with the user input... but since the function is triggered right after user presses
                    a key and the current value of input is null when the function is triggered, props.title receives null since the value it reads at the time 
                    of function call has not been updated yet with the value that user typed...so everytime it receives null and updates the value of props.title 
                    with null which then gets updated as the input value*/}
                    <i className="fa-solid fa-trash" onClick={() => props.deleteNote(props.id)} ></i>
               </div>
               <span>{currentTime(props.time)}</span>
               <hr />
               <textarea name='text' onChange={(event) => debouncedFunction(event, props.id)} defaultValue={props.text} ></textarea>
          </div >
     )
}

export default Note