import './step.css';

const Step = ({ number, stepName, active }) => {
    return (
        <li className={`step-holder flex ${active ? active : ''}`}>
            <section className="number flex">{number}</section>
            <section className="step flex-column none uppercase">
                <section className="step-number">{`step ${number}`}</section>
                <section className="step-name">{stepName}</section>
            </section>
        </li>
    )
}

export default Step;