import React, { useState } from 'react';
import { render } from 'react-dom';

const Queue = (props) => {
  const [queueType, setQueueType] = useState(props.queueType)
  const [upQueue, setUpQueue] = useState([])
  const [downQueue, setDownQueue] = useState([])
  const [liftLocation, setLiftLocation] = useState(0)
  const {
    callLocation,
    userDestinationRequest
  } = props;
  
  const updateLiftLocationAndQueue = (liftLocation, queueType, upQueue, downQueue ) => {
    // Make this into a loop? or switch case? 

    switch (queueType) {
      case 'up':
        if (upQueue.length > 0){
          setLiftLocation(`${liftLocation +1}`)
          return liftLocation
        } else if (upQueue.length === 0){
          console.log("switching to down queue")
          setQueueType('down')
          return queueType
        }
        break;
      case 'down':
        if (downQueue.length > 0) {
          setLiftLocation(`${liftLocation -1}`)
          return liftLocation
          } else if (downQueue.length === 0){
            console.log("switching to up queue")
            setQueueType('up')
            return queueType
          }
        break;
      default: 
        console.log('reset to ground')
        break;
    }
    return(
      <>
        <h1>Lift Location: {liftLocation}</h1>
        <h1>Queue Type: {queueType}</h1>
      </>
      )
    // if((upQueue.length === 0) && (downQueue.length === 0)) {
    //   console.log('reset to ground')
    // } else if (queueType === 'up'){
    //   if (upQueue.length > 0){
    //     setLiftLocation(`${liftLocation} +1`)
    //     return(
    //       <>
    //         <h1>Lift Location: {liftLocation}</h1>
    //         <h1>Queue Type: {queueType}</h1>
    //       </>
    //       )
    //   } else if (upQueue.length === 0){
    //     setQueueType('down')
    //     console.log("switching to down queue")
    //   }
    // } else if (queueType === 'down')
    //   if (downQueue.length > 0) {
    //   setLiftLocation(`${liftLocation} -1`)
    //   return(
    //     <>
    //       <h1>Lift Location: {liftLocation}</h1>
    //       <h1>Queue Type: {queueType}</h1>
    //     </>
    //     )
    //   } else if (downQueue.length === 0){
    //     setQueueType('up')
    //     console.log("switching to up queue")
    //   }
  }
  
  // setTimeout(updateLiftLocationAndQueue, 1000, liftLocation, queueType, upQueue, downQueue)

  const liftQueueAllocation = (queueType, liftLocation) => {
    if(callLocation && (queueType === 'up')){
      if(callLocation < liftLocation) {
        // Place call at beginning of array
        setUpQueue(upQueue(callLocation, ...upQueue))
      } else if (callLocation > liftLocation){
        // Place call at end of array
        setUpQueue(upQueue(...upQueue, callLocation))
      }
    } if (userDestinationRequest && (queueType === 'up')){
      if(userDestinationRequest < liftLocation) {
        // Place call at beginning of array
        setUpQueue(upQueue(userDestinationRequest, ...upQueue))
      } else if (userDestinationRequest > liftLocation){
        // Place call at end of array
        setUpQueue(upQueue(...upQueue, userDestinationRequest))
      }
    } if(callLocation && (queueType === 'down')){
      if(callLocation < liftLocation) {
        // Place call at beginning of array
        setDownQueue(downQueue(callLocation, ...downQueue))
      } else if (callLocation > liftLocation){
        // Place call at end of array
        setDownQueue(downQueue(...downQueue, callLocation))
      }
    } if (userDestinationRequest && (queueType === 'down')){
      setDownQueue(downQueue(callLocation, ...downQueue))
    } else if (callLocation > liftLocation){
      // Place call at end of array
      setDownQueue(downQueue(...downQueue, callLocation))
    }
  }

  return( 
  <>
    <h1>in the queue</h1>
  </>
  )
}

export default Queue;