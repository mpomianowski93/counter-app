import { useEffect, useState } from 'react';
import './Counter.css';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import Clock from './components/Clock';
import Step from './components/Step';

const Counter = (props) => {
	const [counter, setCounter] = useState(props.counterInitValue);
	const [showClock, setShowClock] = useState(true);
	const [stepValue, setStepValue] = useState(1);
	const [showStep, setShowStep] = useState();

	const updateStep = (event) => {
		setStepValue(+event.target.value);

		let Step;

		Step = event.target.value;

		console.log(Step);

		setShowStep(Step);
	};

	const updateCounter = (action) => {
		if (action === 'add') {
			setCounter(counter + stepValue);
			console.log();
		} else if (action === 'reset') {
			setCounter(props.counterInitValue);
		} else {
			setCounter(0);
		}
	};

	useEffect(() => {
		// console.log('wywołuje use effecta')
	}, [counter]);

	return (
		<div className="counter">
			<Display counter={counter} />
			<ButtonsPanel updateCounter={updateCounter} kurier={showStep} />
			{showClock ? (
				<Clock setShowClock={setShowClock} />
			) : (
				<p className="clockControl" onClick={() => setShowClock(true)}>
					pokaż zegar
				</p>
			)}
			<Step updateStep={updateStep} />
		</div>
	);
};

export default Counter;

// spraw aby wartośćs stepValue stawiała sie obok napisu ADD np. jak krok 7 to Add 7
