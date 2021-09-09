import { useState } from 'react';

const Queue = (props) => {
  // const queueType = props.queueType
  const [queueType, setQueueType] = useState('up')
  const [upQueue, setUpQueue] = useState([])
  const [downQueue, setDownQueue] = useState([])
  // Not sure I need liftMovingDirection at all 
  // const [liftMovingDirection, setLiftMovingDirection] = useState(null)
  const [liftLocation, setLiftLocation] = useState('G')
  
  const updateLiftLocation = (liftLocation, queueType, upQueue, downQueue ) => {
    if(queueType === 'up' && upQueue.length > 0){
      setLiftLocation(`${liftLocation} +1`)
      return(
        <h1>Lift Location: {liftLocation}</h1>
        )
    } else {
      setLiftLocation(`${liftLocation} -1`)
      return(
        <h1>Lift Location: {liftLocation}</h1>
        )
    }
  }
  
  setTimeout(updateLiftLocation, 1000, liftLocation, queueType, upQueue, downQueue)

  const {
    newCallLevel,
  } = props;

  if((queueType === 'down') && (newCallLevel < liftLocation)){
    // Place call at beginning of array
    setUpQueue(upQueue(newCallLevel, ...upQueue))
    console.log('upQueue', upQueue)
    setTimeout()
    return(
      upQueue
    )
  } else {
    // Place call at end of array
    setDownQueue(downQueue(...downQueue, newCallLevel))
    setTimeout()
    return(
      downQueue
    )
  }
}

function queueSwitching(queueType, upQueue, downQueue){
  // const [liftMovingDirection, setLiftMovingDirection] = useState('up')
  if((queueType === 'up' && upQueue.length === 0) && (queueType === 'down' && downQueue.length === 0)) {
    console.log('reset to ground')
  } else if (queueType === 'up' && upQueue.length === 0){
    console.log('switch to down queue')
  } else if (queueType === 'down' && downQueue.length === 0){
    console.log('switch to up queue')
  } else {

  }
}

export default Queue;


