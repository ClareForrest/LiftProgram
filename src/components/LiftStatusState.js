import React, { useState } from "react";

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {
  const initialState = {
    liftCalled: false,
    liftLocation: 0,
    callLocation: null,
    userDirectionRequest: null,
    userDestinationRequest: null,
    liftMovingDirection: null,
  }

  const


  function onCallLocationClick(event) {
    event.preventDefault()
    setCallLocation = event.target.value
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
    console.log("onDirectionClick return", onDirectionClick)
    return(
      <>
        {/* {liftCalled} */}
      </>
    )
  }
  return(
  <>
    <form>
      <label>Select which floor you are on</label>
      <button type='submit' value='Ground' onClick={(e) => onCallLocationClick}>G</button>
      <button type='submit' value='One' onClick={(e) => setCallLocation(e.target.value)}>1</button>
      <button type='submit' value='Two' onClick={(e) => setCallLocation(e.target.value)}>2</button>
      <button type='submit' value='Three' onClick={(e) => setCallLocation(e.target.value)}>3</button>
      <button type='submit' value='Four' onClick={(e) => setCallLocation(e.target.value)}>4</button>
      <button type='submit' value='Five' onClick={(e) => setCallLocation(e.target.value)}>5</button>
    </form>

    <form>
      <button type='submit' value={userDirectionRequest} onClick={(e) => onDirectionClick(e)}>UP</button>
      <button type='submit' value={userDirectionRequest} onClick={(e) => onDirectionClick(e)}>DOWN</button>
    </form>
    <h1>Call Location: {callLocation}</h1>
    <h1>Lift Location: {liftLocation}</h1>
    <h1>User Direction Request: {userDirectionRequest}</h1>
    <h1>Lift Moving Direction: {liftMovingDirection}</h1>

  </>
  )
}

export default LiftStatusState;