import Step from '../step/Step';
import './navigation.css';
const Navigation = ({ step }) => {
    return (
        <section className='navigation flex'>
            <ul className="navigation-list flex">
                <Step number='1' stepName='your info' active={step === 1 && 'active'} />
                <Step number='2' stepName='select plan' active={step === 2 && 'active'} />
                <Step number='3' stepName='add-ons' active={step === 3 && 'active'} />
                <Step number='4' stepName='summary' active={step === 4 && 'active'} />
            </ul>
        </section>
    )
}

export default Navigation