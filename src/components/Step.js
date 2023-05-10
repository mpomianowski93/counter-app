import './Step.css'

const Step = (props) => {
    return (
        <div className="steper">
            <form>
        Krok:
        <input type="number" min={1} className="stepCount" onChange={(event)=> props.updateStep(event)}></input>
            </form>
        </div>
    )
}

export default Step;