import React, { useState } from "react";
import liftLocation from './LiftLocation';

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {

  const [liftCalled, setLiftCalled] = useState(false)
  const [callLocation, setCallLocation] = useState(null)
  const [userDirectionRequest, setUserDirectionRequest] = useState(null)
  const [userDestinationRequest, setUserDestinationRequest] = useState(null)
  const [liftMovingDirection, setLiftMovingDirection] = useState(null)


  function onClickCallLocation(event) {
    // event.preventDefault()
    setCallLocation = event.target.value
    setLiftCalled = true
    // setLiftLocation = //LiftLocation functional Component 
    
  }

  function onDestinationRequest(event){
    setUserDestinationRequest = event.target.value
  }

  // The below, OR liftDirection = queue (up or down)
  function liftDirection(liftLocation, callLocation){
    if (liftLocation < callLocation){
      setLiftMovingDirection = 'up'
      return(liftMovingDirection)
    } else {
      setLiftMovingDirection = 'down'
      return(liftMovingDirection)
    }
  }

  function onDirectionClick(event) {
    console.log('event', event)
    if(event){
      setLiftCalled(true)
      setUserDirectionRequest(event.target.value)
    } else {
      console.log('Lift has not been called')
    }
    if(liftLocation < callLocation){
      setLiftMovingDirection('up')
    } else {
      setLiftMovingDirection('down')
    }
    console.log("onDirectionClick return")
    return(
      <>
        {liftCalled}
      </>
    )
  }
  return(
  <>
    <form>
      <label>Select which floor you are on</label>
      <button type='submit' value='Ground' onClick={onClickCallLocation}>G</button>
      <button type='submit' value='One' onClick={onClickCallLocation}>1</button>
      <button type='submit' value='Two' onClick={onClickCallLocation}>2</button>
      <button type='submit' value='Three' onClick={onClickCallLocation}>3</button>
      <button type='submit' value='Four' onClick={onClickCallLocation}>4</button>
      <button type='submit' value='Five' onClick={onClickCallLocation}>5</button>
    </form>

    <form>
      <label>Up or Down?</label>
      <button type='submit' value={userDirectionRequest} onClick={onDirectionClick} >UP</button>
      <button type='submit' value={userDirectionRequest} onClick={onDirectionClick}  >DOWN</button>
    </form>

    <form>
    <label>Choose your destination</label>
      <button type='submit' value={userDestinationRequest} >UP</button>
      <button type='submit' value={userDestinationRequest} >DOWN</button>
    </form>

      <h1>Lift Called: {liftCalled}</h1>
      <h1>Lift Location: {liftLocation}</h1>
      <h1>Call Location: {callLocation}</h1>
      <h1>User Direction Request: {userDirectionRequest}</h1>
      <h1>User Destination Request: {userDestinationRequest}</h1>
      <h1>Lift Moving Direction: {liftMovingDirection}</h1>
  </>
  )
}

export default LiftStatusState;