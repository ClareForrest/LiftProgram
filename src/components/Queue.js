import React, { useState } from 'react';
import FloorDisplay from './FloorDisplay';

const Queue = (props) => {
  // const [queueType, setQueueType] = useState(props.queueType)
  const [queueType, setQueueType] = useState('down')
  const [upQueue, setUpQueue] = useState([])
  const [downQueue, setDownQueue] = useState([])
	const [liftLocation, setLiftLocation] = useState(0)
  const {
    callLocation, // 0
    userDestinationRequest // 5
  } = props;
  
  function queueSwitching (queueType, upQueue, downQueue ){
    if(upQueue.length === 0 || downQueue.length === 0){
      let newType = upQueue ? 'down' : 'up'
      setQueueType(newType)
      console.log('newqueue type', queueType)
    }
    if(queueType === 'up' && upQueue.length > 0){
      setLiftLocation(liftLocation +1)
      if(liftLocation === upQueue[0]){
        upQueue.shift()
        console.log('up queue', upQueue)
      }
    } else if (queueType === 'down' && downQueue.length > 1){
      setLiftLocation(liftLocation -1)
      if(liftLocation === downQueue[0]){
        downQueue.shift()
        console.log('down queue', downQueue)
      }
    }
    return(
    <>
      <h1>Queue Type: {queueType}</h1>
    </>
    )
  }

		// TO DO: check callLocation against items in array. Don't add if it already exists
		// Currently in LiftStatusState.js
    function liftQueueAllocation(userDirectionRequest, callLocation){
			if(userDirectionRequest === 'up'){
				if(callLocation < upQueue[0]) {
					let newQueue = [callLocation, ...upQueue]
					setUpQueue(newQueue)
					console.log('upQueue', upQueue)
				} else if (callLocation > upQueue[0]){
					let newQueue = [...upQueue, callLocation]
					setUpQueue(newQueue)
					console.log('upQueue', upQueue)
				}
			} else if(userDirectionRequest === 'down'){
				if(callLocation < downQueue[0]){
					let newQueue = [...downQueue, callLocation]
					setDownQueue(newQueue)
					console.log('down queue', downQueue)
				} else if(callLocation > downQueue[0]){
					let newQueue = [callLocation, ...downQueue]
					setDownQueue(newQueue)
					console.log('down queue', downQueue)
				}
			}
		}

		function destinationLiftQueueAllocation(userDestinationRequest, queueType){
			if(queueType === 'up'){
				if(userDestinationRequest < upQueue[0]){
					let newQueue = [callLocation, ...upQueue]
					setUpQueue(newQueue)
				} else if(userDestinationRequest > upQueue[0]){
					let newQueue = [...upQueue, callLocation]
					setUpQueue(newQueue)
				}
			} else if (queueType === 'down'){
				if(userDestinationRequest < downQueue[0]){
					let newQueue = [...downQueue, callLocation]
					setDownQueue(newQueue)
				} else if(userDestinationRequest > downQueue[0]){
					let newQueue = [callLocation, ...downQueue]
					setDownQueue(newQueue)
				}
			}
		}

  return( 
  <>
    <h1>Queue Component: {queueType}</h1>
  </>
  )
}

export default Queue;