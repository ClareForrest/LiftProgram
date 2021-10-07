import React, { useState, useEffect } from 'react';
import FloorDisplay from './FloorDisplay';
import Queue from './Queue';

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {
	const [liftCalled, setLiftCalled] = useState(false);
	const [queueType, setQueueType] = useState('up');
	const [callLocation, setCallLocation] = useState(null);
	const [userDirectionRequest, setUserDirectionRequest] = useState(null);
	const [userDestinationRequest, setUserDestinationRequest] = useState(null);
	const [liftLocation, setLiftLocation] = useState(0)
	const [upQueue, setUpQueue] = useState([0])
  const [downQueue, setDownQueue] = useState([])
	// const [upQueue, setUpQueue] = useState([1,3,4,6,7,8])
  // const [downQueue, setDownQueue] = useState([9,7,4,2,1])
	

	useEffect(() => {
		return <>{(userDirectionRequest, userDestinationRequest, upQueue, downQueue)}</>;
	}, []);

	function onUpDirectionClick(event) {
		event.preventDefault();

		setCallLocation(getRandomCallLocation(0, 10));
		setLiftCalled(true);
		setUserDirectionRequest('up');
		liftQueueAllocation(userDirectionRequest, callLocation)
	}

	function onDownDirectionClick(event) {
		event.preventDefault();

		setCallLocation(getRandomCallLocation(0, 10));
		setLiftCalled(true);
		setUserDirectionRequest('down');
		liftQueueAllocation(userDirectionRequest, callLocation)
	}

	function onDestinationRequest(event) {
		event.preventDefault();
		setUserDestinationRequest(event.target.value);
		// Need to know what queue is currently in action (up or down) getQueue function??
		destinationLiftQueueAllocation(userDestinationRequest, queueType)
	}

	// A random selector for floor level instead of user having to select (better imitates real life).
	function getRandomCallLocation(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	  // This only addresses lift calls from each level (not within the lift itself)
		// TO DO: check callLocation against items in array. Don't add if it already exists
		// TO DO: move to another file and import 
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
			floorDisplay(queueType, upQueue, downQueue)
		}

		// TO DO: move to another file and import 
		function destinationLiftQueueAllocation(userDestinationRequest, queueType){
			if(queueType === 'up'){
				if(userDestinationRequest <= upQueue[0]){
					let newQueue = [Number(userDestinationRequest), ...upQueue]
					setUpQueue(newQueue)
					console.log('up queue', upQueue)
				} else if(userDestinationRequest >= upQueue[0]){
					let newQueue = [...upQueue, Number(userDestinationRequest)]
					setUpQueue(newQueue)
					console.log('up queue', upQueue)
				}
			} else if (queueType === 'down'){
				if(userDestinationRequest <= downQueue[0]){
					let newQueue = [...downQueue, Number(userDestinationRequest)]
					setDownQueue(newQueue)
				} else if(userDestinationRequest >= downQueue[0]){
					let newQueue = [Number(userDestinationRequest), ...downQueue]
					setDownQueue(newQueue)
					console.log('down queue', downQueue)
				}
			}
		}

		function floorDisplay(queueType, upQueue, downQueue ){
			setTimeout(() => {
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
			}, 1000)
		
			return(
				<>
				<h1>FloorDisplay Component</h1>
				<h3>Lift Level: {liftLocation}</h3>
				</>
			)
		}

	return (
		<>
			<form>
				{/* Change this to appear as two buttons that display as arrows (up and down) */}
				{/* TO DO: convert to inputs with radio selection */}
				<label>User Select: </label>
				<button type='submit' onClick={onUpDirectionClick}>
					UP
				</button>
				<button type='submit' onClick={onDownDirectionClick}>
					DOWN
				</button>
			</form>
			<hr />
			{/* Once this is a display button, trigger to be green once selected  */}
			<p>
				User Direction Request:
				{userDirectionRequest
					? userDirectionRequest
					: 'User Direction Request unknown'}
			</p>
			{/* This is automatically generated to imitate real lift */}
			<p>
				Call Location:
				{callLocation ? callLocation : 'Call location unknown'}
			</p>

			{/* Make this visible only once lift reaches destination to mimick stepping into the lift?? */}
			{/* Change to input selector instead of buttons  */}

			<div onChange={onDestinationRequest}>
				<label>Choose your destination</label>
				{/* TO DO: have values displayed from mapped options const  */}
				<input type='radio' value={1} name='destinationRequest' /> 1
				<input type='radio' value={2} name='destinationRequest' /> 2
				<input type='radio' value={3} name='destinationRequest' /> 3
				<input type='radio' value={4} name='destinationRequest' /> 4
				<input type='radio' value={5} name='destinationRequest' /> 5
				<input type='radio' value={6} name='destinationRequest' /> 6
				<input type='radio' value={7} name='destinationRequest' /> 7
				<input type='radio' value={8} name='destinationRequest' /> 8
				<input type='radio' value={9} name='destinationRequest' /> 9
				<input type='radio' value={10} name='destinationRequest' /> 10
				<p> Destination Request: {userDestinationRequest} </p>
			</div>
		</>
	);
};

export default LiftStatusState;