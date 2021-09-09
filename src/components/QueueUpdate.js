// Takes props

function QueueUpdate(props){
  if(props.liftLocation === props.UpQueue[0]){
    UpQueue.shift()
  }
}