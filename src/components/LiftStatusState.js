import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import FloorDisplay from './FloorDisplay';
import Queue from './Queue';

// Lift state is passed default values, then set with new user input
const LiftStatusState = () => {
	const [liftCalled, setLiftCalled] = useState(false);
	const [queueType, setQueueType] = useState('up');
	const [callLocation, setCallLocation] = useState(null);
	const [userDirectionRequest, setUserDirectionRequest] = useState(null);
	const [userDestinationRequest, setUserDestinationRequest] = useState(null);
	const [liftLocation, setLiftLocation] = useState(0);
	const [upQueue, setUpQueue] = useState([0])
	const [downQueue, setDownQueue] = useState([0])
	// const [upQueue, setUpQueue] = useState([1, 3, 4, 6, 7, 8]);
	// const [downQueue, setDownQueue] = useState([9, 7, 4, 2, 1]);

	useEffect(() => {
		return (
			<>{(userDirectionRequest, userDestinationRequest, upQueue, downQueue)}</>
		);
	});

	function onUpDirectionClick(event) {
		event.preventDefault();

		setLiftCalled(true);
		setCallLocation(getRandomCallLocation(0, 10));
		setUserDirectionRequest('up');
		liftQueueAllocation(userDirectionRequest, callLocation);
	}

	function onDownDirectionClick(event) {
		event.preventDefault();

		setCallLocation(getRandomCallLocation(0, 10));
		setLiftCalled(true);
		setUserDirectionRequest('down');
		liftQueueAllocation(userDirectionRequest, callLocation);
	}

	function onDestinationRequest(event) {
		event.preventDefault();
		setUserDestinationRequest(event.target.value);
		// Need to know what queue is currently in action (up or down) getQueue function??
		destinationLiftQueueAllocation(userDestinationRequest, queueType);
	}

	// A random selector for floor level instead of user having to select (better imitates real life).
	function getRandomCallLocation(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	// This only addresses lift calls from each level (not within the lift itself)
	// TO DO: check callLocation against items in array. Don't add if it already exists
	function liftQueueAllocation(userDirectionRequest, callLocation) {
		if (userDirectionRequest === 'up') {
			if (callLocation < upQueue[0]) {
				let newQueue = [callLocation, ...upQueue];
				setUpQueue(newQueue);
				console.log('userDirectionRequest - upQueue', upQueue);
			} else if (callLocation > upQueue[0]) {
				let newQueue = [...upQueue, callLocation];
				setUpQueue(newQueue);
				console.log('userDirectionRequest - upQueue', upQueue);
			}
		} else if (userDirectionRequest === 'down') {
			if (callLocation < downQueue[0]) {
				let newQueue = [...downQueue, callLocation];
				setDownQueue(newQueue);
				console.log('userDirectionRequest - down queue', downQueue);
			} else if (callLocation > downQueue[0]) {
				let newQueue = [callLocation, ...downQueue];
				setDownQueue(newQueue);
				console.log('userDirectionRequest - down queue', downQueue);
			}
		}
	}

	function destinationLiftQueueAllocation(userDestinationRequest, queueType) {
		if (queueType === 'up') {
			if (userDestinationRequest <= upQueue[0]) {
				let newQueue = [Number(userDestinationRequest), ...upQueue];
				setUpQueue(newQueue);
				console.log('userDestinationRequest - up queue', upQueue);
			} else if (userDestinationRequest >= upQueue[0]) {
				let newQueue = [...upQueue, Number(userDestinationRequest)];
				setUpQueue(newQueue);
				console.log('userDestinationRequest - up queue', upQueue);
			}
		} else if (queueType === 'down') {
			if (userDestinationRequest <= downQueue[0]) {
				let newQueue = [...downQueue, Number(userDestinationRequest)];
				setDownQueue(newQueue);
				console.log('userDestinationRequest - down queue', downQueue);
			} else if (userDestinationRequest >= downQueue[0]) {
				let newQueue = [Number(userDestinationRequest), ...downQueue];
				setDownQueue(newQueue);
				console.log('userDestinationRequest - down queue', downQueue);
			}
		}
	}

	const floorDisplay = (queueType, upQueue, downQueue) => {
		setTimeout(() => {
			if (queueType === 'up' && upQueue.length > 0) {
				setLiftLocation(liftLocation + 1);
				console.log('liftLocation', liftLocation);
				if (liftLocation === upQueue[0]) {
					upQueue.shift();
					console.log('up queue', upQueue);
				}
				if(upQueue.length === 0){
					setQueueType('down')
				}
			} else if (queueType === 'down' && downQueue.length > 1) {
				setLiftLocation(liftLocation - 1);
				console.log('liftLocation', liftLocation);
				if (liftLocation === downQueue[0]) {
					downQueue.shift();
					console.log('down queue', downQueue);
				}
				if(downQueue.length === 0){
					setQueueType('up')
				}
			}
		}, 1000);
	}

	// TO DO: check callLocation against items in array. Don't add if it already exists
	function liftQueueAllocation(userDirectionRequest, callLocation) {
		if (userDirectionRequest === 'up') {
			if (callLocation < upQueue[0]) {
				let newQueue = [callLocation, ...upQueue];
				setUpQueue(newQueue);
				console.log('upQueue', upQueue);
			} else if (callLocation > upQueue[0]) {
				let newQueue = [...upQueue, callLocation];
				setUpQueue(newQueue);
				console.log('upQueue', upQueue);
			}
		} else if (userDirectionRequest === 'down') {
			if (callLocation < downQueue[0]) {
				let newQueue = [...downQueue, callLocation];
				setDownQueue(newQueue);
				console.log('down queue', downQueue);
			} else if (callLocation > downQueue[0]) {
				let newQueue = [callLocation, ...downQueue];
				setDownQueue(newQueue);
				console.log('down queue', downQueue);
			}
		}
	}

	function destinationLiftQueueAllocation(userDestinationRequest, queueType) {
		if (queueType === 'up') {
			if (userDestinationRequest < upQueue[0]) {
				let newQueue = [callLocation, ...upQueue];
				setUpQueue(newQueue);
			} else if (userDestinationRequest > upQueue[0]) {
				let newQueue = [...upQueue, callLocation];
				setUpQueue(newQueue);
			}
		} else if (queueType === 'down') {
			if (userDestinationRequest < downQueue[0]) {
				let newQueue = [...downQueue, callLocation];
				setDownQueue(newQueue);
			} else if (userDestinationRequest > downQueue[0]) {
				let newQueue = [callLocation, ...downQueue];
				setDownQueue(newQueue);
			}
		}
	}

	const LiftButtonDisplay = (props) => {
		return <button onClick={onDestinationRequest}> {props.level} </button>
	}

	const UpDownButton = (props) => {
		return <button onClick={onDownDirectionClick}> {props.direction} </button>
	}

	const liftLevels = [1,2,3,4,5,6]
	return (
		<>
			{/* Change this to appear as two buttons that display as arrows (up and down) */}
			{/* TO DO: convert to inputs with radio selection */}
			<UpDownButton direction={'up'} />
			<UpDownButton direction={'down'} />
			<hr />
			<div>
			{/* TO DO: Make this visible only once lift reaches destination to mimick stepping into the lift */}
				{liftLevels.map(level => {
					<LiftButtonDisplay key={level} level={level}/>
					console.log('level', level)
				})}
			</div>
			<p>
				User Direction Request:
				{userDirectionRequest
					? userDirectionRequest
					: 'User Direction Request unknown'}
			</p>
			<p>
				Call Location:
				{callLocation ? callLocation : 'Call location unknown'}
			</p>
			<p>Lift Location: {liftLocation} </p>
		</>
	);
};

export default LiftStatusState;