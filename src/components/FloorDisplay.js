import React, { useState, useEffect } from 'react';

// FloorDisplay component is passed a default value, then set with new user input
const FloorDisplay = (props) => {
  const [liftLocation, setLiftLocation] = useState(0)
  const downFloorDisplayArray = [9,8,7,6,5,4,3,2,1,0]
  const upFloorDisplayArray = [0,1,2,3,4,5,6,7,8,9]
  // let queue = props.queue
  let floorDisplayArray
  // if (props.queueType === 'up'){
  //   floorDisplayArray = upFloorDisplayArray
  // } else {
  //   floorDisplayArray = downFloorDisplayArray
  // }
  
  let queue = [3,5,7,9]
  floorDisplayArray = upFloorDisplayArray

	useEffect(() => {
    console.log('in useEffect for FloorDisplay component');
    floorDisplay(floorDisplayArray, queue)
		return <>{liftLocation}</>;
	},[]);
  
  // TO DO: add setInterval to setLiftLocation every 1 second
  
  function floorDisplay(floorDisplayArray, queue) {
    let i = 0
    while(queue.length > 0 && floorDisplayArray.length > i){
      setLiftLocation(floorDisplayArray[i])
      console.log(floorDisplayArray[i])

      if(floorDisplayArray[i] === queue[0]){
        queue.shift()
        
        console.log('queue array', queue)
      }     
      i++
    }
  }
  return(
    <>
    <h1>lift location {liftLocation}</h1>
    </>
  )
}

export default FloorDisplay;