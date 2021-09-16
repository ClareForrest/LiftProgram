import React, { useState, useEffect } from "react";
import Queue from "./Queue";
// import { liftQueueAllocation } from "./Queue";

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {
  const [liftCalled, setLiftCalled] = useState(false)
  const [queueType, setQueueType] = useState('up')
  const [callLocation, setCallLocation] = useState(null)
  const [userDirectionRequest, setUserDirectionRequest] = useState(null)
  const [userDestinationRequest, setUserDestinationRequest] = useState(null)

  useEffect(() => {
    console.log('in useEffect')
    return (
      <>
        {userDirectionRequest, userDestinationRequest}
      </>
    )
  }, [])
  console.log(userDestinationRequest)

  function onUpDirectionClick(event) {
    event.preventDefault()

    setCallLocation(getRandomCallLocation(0, 10))
    setLiftCalled(true)
    setUserDirectionRequest('UP')
    setQueueType('upQueue')
    // liftQueueAllocation(queueType, liftLocation)
  }

  function onDownDirectionClick(event) {
    event.preventDefault()

    setCallLocation(getRandomCallLocation(0, 10))
    setLiftCalled(true)
    setUserDirectionRequest(event.target.value)
    setQueueType(event.target.value)
    // liftQueueAllocation(queueType, liftLocation)
  }

  function onDestinationRequest(event, queueType){
    event.preventDefault()
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
      {/* Change this to appear as two buttons that display as arrows (up and down) */}
      {/* TO DO: convert to inputs with radio selection */}
      <label>User Select: </label>
        <button type='submit' onClick={onUpDirectionClick} >UP</button>
        <button type='submit' onClick={onDownDirectionClick}  >DOWN</button>
    </form>
      <hr/>
      {/* Once this is a display button, trigger to be green once selected  */}
      <p>User Direction Request: 
        {userDirectionRequest ? userDirectionRequest : 'User Direction Request unknown'}
      </p>
      {/* This is automatically generated to imitate real lift */}
      <p>Call Location: 
        {callLocation ? callLocation : "Call location unknown"}
      </p>

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