import { useState } from 'react';

const UpQueue = (props) => {
  const [queue, setQueue] = useState([])
  const {
    newCallLevel,
    currentLiftLevel
  } = props;

  if(newCallLevel < currentLiftLevel){
    // Place call at beginning of array
    setQueue = queue.unshift(newCallLevel)
    return(queue)
  }else{
    // Place call at end of array
    setQueue = queue.shift(newCallLevel)
    return(queue)
  }
};

export default UpQueue;