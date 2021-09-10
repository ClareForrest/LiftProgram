import React, { useState } from "react";
import Queue from "./Queue";

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {
  const [liftCalled, setLiftCalled] = useState(false)
  const [queueType, setQueueType] = useState('up')
  const [callLocation, setCallLocation] = useState(null)
  const [userDirectionRequest, setUserDirectionRequest] = useState(null)
  const [userDestinationRequest, setUserDestinationRequest] = useState(null)
  
  function onDirectionClick(event) {
    console.log('event', event)

    setCallLocation(getRandomCallLocation(0, 10))
    setLiftCalled(true)
    setUserDirectionRequest(event.target.value)
    setQueueType(event.target.value)
    // liftQueueAllocation(queueType, liftLocation)
  }

  function onDestinationRequest(event, queueType){
    setUserDestinationRequest(event.target.value)
    // liftQueueAllocation(queueType, userDestinationRequest)
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

      <form>
      {/* Make this visible only once lift reaches destination to mimick stepping into the lift?? */}
        <label>Choose your destination</label>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>Ground </button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>1</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>2</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>3</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>4</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>5</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>6</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>7</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>8</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>9</button>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>10</button>
      </form>
    </>
  )
}

export default LiftStatusState;