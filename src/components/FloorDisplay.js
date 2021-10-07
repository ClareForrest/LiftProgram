import React, { useState, useEffect } from 'react';

// FloorDisplay component is passed a default value, then set with new user input
// FloorDisplay - sole job is to display incrementing/decrementing numbers on a screen

// TO DO: adjust display (currently going one higher) Will be related to if statement
const FloorDisplay = (props) => {
  const [liftLocation, setLiftLocation] = useState(0)
  let queue = props.queue
  let queueType = props.queueType

  setTimeout(() => {
    if(queueType === 'up' && queue.length > 0){
      setLiftLocation(liftLocation +1)
      if(liftLocation === queue[0]){
        queue.shift()
      }
    } else if (queueType === 'down' && queue.length < 0){
      setLiftLocation(liftLocation -1)
      if(liftLocation === queue[0]){
        queue.shift()
      }
    }
  }, 1000)

  return(
    <>
    <h1>FloorDisplay Component</h1>
    <h3>Lift Level: {liftLocation}</h3>
    </>
  )
}

export default FloorDisplay;