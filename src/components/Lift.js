import React, { useState, useEffect } from 'react';

const UpDownButton = (props) => {
	const handleClick = () => {
		props.onClick(props.liftDirection, props.callToAllocate)
	}
	return(
		<button 
			className='upDownButton'
			onClick={handleClick}
		>
			{props.liftDirection}
		</button>
	)
}

const LiftButtonDisplay = (props) => {
	const liftLevels = [0,1,2,3,4,5,6,7,8,9]
	const handleClick = () => {
		// props.onClick()
	}
	return (
		liftLevels.map(number => 
			<button
				onClick={handleClick}
			>
				{number}
			</button>
		)
	)	
}

const Lift = () => {
  const [liftDirection, setLiftDirection] = useState();
	const [upQueue, setUpQueue] = useState([1,5,9])
	const [downQueue, setDownQueue] = useState([2,6,8])

	// A random selector for floor level instead of user having to select (better imitates real life).
	const getRandomCallLocation = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	// need lift direction (either from up/down call or from active lift queue/lift direction - either up/down)
	const liftQueueAllocation = (liftDirection, callToAllocate) => {
		console.log('call to allocate', callToAllocate)
		
		if (liftDirection === 'up') {
			if (upQueue.includes(callToAllocate)){
				return upQueue
			} else {
				for(let i=0; upQueue.length >=0 ; i++){
					console.log('upQueue length', upQueue.length)
					if (callToAllocate < upQueue[i]) {
						setUpQueue(upQueue.splice(i, 0, callToAllocate ))
						break;
					}
				}
				return upQueue
			}
		}
		if (liftDirection === 'down') {
			if(downQueue.includes(callToAllocate)){
				return downQueue
			} else {
				for(let i=0; downQueue.length >=0 ; i++){
					console.log('down Queue length', downQueue.length)
					if (callToAllocate < downQueue[i]) {
						setDownQueue(downQueue.splice(i, 0, callToAllocate ))
						break;
					}
				}
			}
		}
		return {  liftQueueAllocation }
	}

	return (
		<>
			<UpDownButton 
				liftDirection={'up'}
				onClick={liftQueueAllocation}
				callToAllocate={getRandomCallLocation(1,9)}
			/>
			<UpDownButton 
				liftDirection={'down'}
				onClick={liftQueueAllocation}
				callToAllocate={getRandomCallLocation(1,9)}
			/>
			<hr></hr>
			<LiftButtonDisplay 
				callToAllocate={() => {console.log('lift button - need to get the value of the button')}}
				onClick={liftQueueAllocation}
				// activeQueue={} //extract the lift direction from active queue

			/>
		</>
	)
}





























// // Lift state is passed default values, then set with new user input
// const LiftStatusState = () => {
// 	const [liftLocation, setLiftLocation] = useState(0);
//   const [liftDirection, setLiftDirection] = useState();
//   const [activeQueue, setActiveQueue] = useState(upQueue.length > 0 ? 'up' : 'down')
//   const liftLevels = [1,2,3,4,5,6,7,8,9]
// 	// const [upQueue, setUpQueue] = useState([1, 3, 4, 6, 7, 8]);
// 	// const [downQueue, setDownQueue] = useState([9, 7, 4, 2, 1]);

//   useEffect (() => {
//     const timerId = setTimeout(() => {
// 			if (activeQueue === 'up' && activeQueue.length > 0) {
// 				setLiftLocation(liftLocation + 1);
// 			} else if (activeQueue === 'down' && activeQueue.length >1) {
//         setLiftLocation(liftLocation - 1);
//       }
// 		}, 1000);
//     return () => clearTimeout(timerId)
//   })

// 	const onClick = (event) => {
// 		event.preventDefault();
//     // get the lift direction and lift location (from state)
//     // put into appropriate queue
//     liftQueueAllocation(liftDirection, liftLocation, request)
// 	}

// 	// A random selector for floor level instead of user having to select (better imitates real life).
// 	function getRandomCallLocation(min, max) {
// 		min = Math.ceil(min);
// 		max = Math.floor(max);
// 		return Math.floor(Math.random() * (max - min + 1) + min);
// 	}
 
// 	// TO DO: check callLocation against items in array. Don't add if it already exists
// 	function liftQueueAllocation() {
// 		if (liftDirection === 'up') {
// 			if (callLocation < upQueue[0]) {
// 				let newQueue = [callLocation, ...upQueue];
// 				setUpQueue(newQueue);
// 			} else if (callLocation > upQueue[0]) {
// 				let newQueue = [...upQueue, callLocation];
// 				setUpQueue(newQueue);
// 			}
// 		} else if (liftDirection === 'down') {
// 			if (callLocation < downQueue[0]) {
// 				let newQueue = [...downQueue, callLocation];
// 				setDownQueue(newQueue);
// 			} else if (callLocation > downQueue[0]) {
// 				let newQueue = [callLocation, ...downQueue];
// 				setDownQueue(newQueue);
// 			}
// 		}
// 	}

// 	const floorCounter = (queueType, upQueue, downQueue) => {
// 		setTimeout(() => {
// 			if (queueType === 'up' && upQueue.length > 0) {
// 				setLiftLocation(liftLocation + 1);
// 				if (liftLocation === upQueue[0]) {
// 					upQueue.shift();
// 				}
// 				if(upQueue.length === 0){
// 					setQueueType('down')
// 				}
// 			} else if (queueType === 'down' && downQueue.length > 1) {
// 				setLiftLocation(liftLocation - 1);
// 				if (liftLocation === downQueue[0]) {
// 					downQueue.shift();
// 				}
// 				if(downQueue.length === 0){
// 					setQueueType('up')
// 				}
// 			}
// 		}, 1000);
// 	}

// 	const LiftButtonDisplay = (props) => {
// 		return <button onClick={() => {props.request} }> {props.level} </button>
// 	}

// 	const UpDownButton = (props) => {
// 		return <button onClick={props.onClick} callLocation={props.callLocation}> {props.direction} </button>
// 	}

//   const FloorDisplay = (props) => {
//     console.log('FloorDisplay Component')
//       return(
//         <h3>Lift Level: {props.liftLocation}</h3>
//       )
//     }

// 	return (
// 		<>
// 			<UpDownButton 
//         direction={'up'} 
//         onClick={onClick}
//         request={getRandomCallLocation}
//       />
// 			<UpDownButton 
//         direction={'down'} 
//         onClick={onClick}
//         request={getRandomCallLocation}
//       />
// 			<hr />
// 			<div>
// 				{liftLevels.map(level => {
// 					<LiftButtonDisplay 
//             key={level} 
//             level={level} 
//             request={level}
//           />
// 					console.log('level', level)
// 				})}
// 			</div>
//       <div>
//         <FloorDisplay 
//           liftLocation={liftLocation}
//         />
//       </div>
// 		</>
// 	);
// };

export default Lift;