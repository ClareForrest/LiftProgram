import { useState } from 'react';

const Queue = (props) => {
  const queueType = props.queueType
  const [upQueue, setUpQueue] = useState([])
  const [downQueue, setDownQueue] = useState([])

  const {
    newCallLevel,
    currentLiftLevel
  } = props;

  if(queueType === 'down' && newCallLevel < currentLiftLevel){
    // Place call at beginning of array
    setQueue = upQueue(newCallLevel, ...upQueue)
    return(
      upQueue
      )
    }else{
    // Place call at end of array
    setQueue = downQueue(...downQueue, newCallLevel)
    return(
      downQueue
    )
  }
}
export default Queue;


