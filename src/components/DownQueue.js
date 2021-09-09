import { useState } from 'react';

const DownQueue = (props) => {
  const [queue, setQueue] = useState([])
  const {
    newCallLevel,
    currentLiftLevel
  } = props;

  if(newCallLevel < currentLiftLevel){
    // Place call at beginning of array
    setQueue = queue.unshift(newCallLevel)
  }else{
    // Place call at end of array
    setQueue = queue.shift(newCallLevel)
  }
}
export default DownQueue;
