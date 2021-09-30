import React, { useState, useEffect } from 'react';
import Queue from './Queue';
// import { liftQueueAllocation } from "./Queue";

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {
	const [liftCalled, setLiftCalled] = useState(false);
	const [queueType, setQueueType] = useState('up');
	const [callLocation, setCallLocation] = useState(null);
	const [userDirectionRequest, setUserDirectionRequest] = useState(null);
	const [userDestinationRequest, setUserDestinationRequest] = useState(null);

	useEffect(() => {
		console.log('in useEffect');
		return <>{(userDirectionRequest, userDestinationRequest)}</>;
	}, []);

	function onUpDirectionClick(event) {
		event.preventDefault();

		setCallLocation(getRandomCallLocation(0, 10));
		setLiftCalled(true);
		setUserDirectionRequest('UP');
		setQueueType('upQueue');
		// liftQueueAllocation(queueType, liftLocation)
	}

	function onDownDirectionClick(event) {
		event.preventDefault();

		setCallLocation(getRandomCallLocation(0, 10));
		setLiftCalled(true);
		setUserDirectionRequest('DOWN');
		setQueueType('downQueue');
		// liftQueueAllocation(queueType, liftLocation)
	}

	function onDestinationRequest(event, queueType) {
		event.preventDefault();
		setUserDestinationRequest(event.target.value);
		// liftQueueAllocation(queueType, userDestinationRequest)
	}

	// A random selector for floor level instead of user having to select (better imitates real life).
	function getRandomCallLocation(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
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