import DownQueue from './DownQueue';
import UpQueue from './UpQueue';

function QueueSwitching(props){
  switch(props.direction, props.length){
    case ((props.direction = 'up' && props.length === 0) && (props.direction === 'down' && props.length === 0)):
      console.log('reset to ground')
      break;
    case (props.direction === 'up' && props.length === 0):
      DownQueue()
      break;
    case (props.direction === 'down' && props.length === 0):
      UpQueue()
      break;
  }
}
export default QueueSwitching;