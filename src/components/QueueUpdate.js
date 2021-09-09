// Takes props

function QueueUpdate(props){

  const [userDestinationRequest, setUserDestinationRequest] = useState(null)

  function onDestinationRequest(event){
    setUserDestinationRequest(event.target.value)

    console.log('setUserDestinationRequest', setUserDestinationRequest)
    console.log('userDestinationRequest', userDestinationRequest)
  }

  if(props.liftLocation === props.Queue[0]){
    Queue.shift()
  }
  return (
    <>
      <form>
      {/* Only visible once lift reaches destination  */}
        <label>Choose your destination</label>
        <button type='submit' value={userDestinationRequest} onClick={onDestinationRequest}>Ground </button>
        <button type='submit' value={userDestinationRequest} >1</button>
        <button type='submit' value={userDestinationRequest} >2</button>
        <button type='submit' value={userDestinationRequest} >3</button>
        <button type='submit' value={userDestinationRequest} >4</button>
        <button type='submit' value={userDestinationRequest} >5</button>
        <button type='submit' value={userDestinationRequest} >6</button>
        <button type='submit' value={userDestinationRequest} >7</button>
        <button type='submit' value={userDestinationRequest} >8</button>
        <button type='submit' value={userDestinationRequest} >8</button>
        <button type='submit' value={userDestinationRequest} >8</button>
      </form>
    </>
  )
}