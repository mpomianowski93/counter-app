import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
	return (
		<div className="buttonsPanel">
			<button onClick={() => props.updateCounter('add') }> Add {props.kurier}</button>
			<button onClick={() => props.updateCounter('reinit')}>ReInit</button>
			<button onClick={() => props.updateCounter('reset')}>Reset</button>
		</div>
	);
};

export default ButtonsPanel;
