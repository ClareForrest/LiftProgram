import React, {useState } from 'react';
// Takes props


function LiftLocation(props){
  // map? loop? array of levels (ie 1-10)
  // call QueueUpdate function? 
  
  const [liftLocation, setLiftLocation] = useState(0)


  liftLocation = props.UpQueue[0]
  if(props.liftMovingDirection === 'up'){
    setLiftLocation = (liftLocation +1)
  }
}

setTimeout(function(liftLocation){
  <h1>Lift Location: {liftLocation}</h1>
}, 1000);

export default LiftLocation;