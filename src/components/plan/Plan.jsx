import './plan.css';
import PlanCard from '../planCard/PlanCard';
import Bottom from "../bottom/Bottom";
import { ReactComponent as Arcade } from '../../assets/icons/icon-arcade.svg';
import { ReactComponent as Advanced } from '../../assets/icons/icon-advanced.svg';
import { ReactComponent as Pro } from '../../assets/icons/icon-pro.svg';
const Plan = ({ plan, setPersonal, setPlan, setStep, setAddons, checked, setChecked, selected, setSelected }) => {

    const handleNextPlan = () => {
        setPlan(false);
        setStep(3);
        setAddons(true);
    }

    const handlePreviousPlan = () => {
        setPlan(false);
        setStep(1);
        setPersonal(true);
    }

    const selectPlan = (name, monthlyPrice, yearlyPrice, value) => {
        setSelected({
            type: parseInt(value),
            name: name,
            monthlyPrice: parseInt(monthlyPrice),
            yearlyPrice: parseInt(yearlyPrice)
        });
    }

    return (
        <fieldset className={`plans ${plan ? 'flex flex-column' : 'none'}`}>
            <header className='plan-header fieldset-header flex flex-column'>
                <h2 className='title'>Select your plan</h2>
                <p className='paragraph'>You have the option of monthly or yearly billing.</p>
            </header>
            <section className="plans-section flex flex-column w-100">
                <PlanCard name='arcade'
                    monthlyPrice='9'
                    yearlyPrice='90'
                    value='1'
                    checked={checked}
                    selectPlan={selectPlan}
                    logo=<Arcade />
                    selected={selected.type === 1} />
                <PlanCard name='advanced'
                    monthlyPrice='12'
                    yearlyPrice='120'
                    value='2'
                    checked={checked}
                    selectPlan={selectPlan}
                    logo=<Advanced />
                    selected={selected.type === 2} />
                <PlanCard name='pro'
                    monthlyPrice='15'
                    yearlyPrice='150'
                    value='3'
                    checked={checked}
                    selectPlan={selectPlan}
                    logo=<Pro />
                    selected={selected.type === 3} />

            </section>
            <section className="switcher flex w-100">
                <h5 className={checked ? "monthly checked" : "monthly"}>Monthly</h5>
                <input type="checkbox"
                    name="payment-toggler"
                    id="payment-toggler"
                    className='payment-toggler'
                    onChange={() => setChecked(value => { return !value })} />
                <h5 className="yearly">Yearly</h5>
            </section>
            <Bottom field='plan' step={2} handleNext={handleNextPlan} handlePrevious={handlePreviousPlan} />
        </fieldset>
    )
}

export default Plan