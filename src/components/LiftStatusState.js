import React, { useState } from "react";
import Queue from "./Queue";

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {

  const [liftCalled, setLiftCalled] = useState(false)
  const [callLocation, setCallLocation] = useState(null)
  const [userDirectionRequest, setUserDirectionRequest] = useState(null)
  // Need lift Location (currently in Queue)
  
  function onDirectionClick(event) {
    console.log('event', event)

    setLiftCalled(true)
    setCallLocation(getRandomCallLocation(0, 10))

    if(event){
      setLiftCalled(true)
      setUserDirectionRequest(event.target.value)
    } else {
      console.log('Lift has not been called')
    }
    console.log("onDirectionClick return")
    if(liftCalled){
      return ('lift called')
    }
  }

  // A random selector for floor level instead of user having to select (better imitates real life). 
  function getRandomCallLocation(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  return(
  <>
    <form>
      {/* Change this to be two buttons that display as arrows (up and down) */}
      <label>User Select: </label>
        <button type='submit' value={userDirectionRequest} onClick={onDirectionClick} >UP</button>
        <button type='submit' value={userDirectionRequest} onClick={onDirectionClick}  >DOWN</button>
    </form>
      <hr/>
      {/* Once this is a display button, trigger to be green once selected  */}
      <p>User Direction Request: {userDirectionRequest}</p>
      {/* This is automatically generated to imitate real lift */}
      <p>Call Location: {callLocation}</p>
  </>
  )
}

export default LiftStatusState;