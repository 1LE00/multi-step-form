import { useState } from "react"
import Navigation from "../navigation/Navigation"
import Personal from "../personal/Personal"
import Plan from "../plan/Plan"
import './main.css'
import Addons from "../addons/Addons"
import Summary from "../summary/Summary"
import End from "../end/end"

const Main = () => {
    const [personal, setPersonal] = useState(true);
    const [plan, setPlan] = useState(false);
    const [addons, setAddons] = useState(false);
    const [summary, setSummary] = useState(false);
    const [end, setEnd] = useState(false);
    const [step, setStep] = useState(1);
    const [checked, setChecked] = useState(false);
    const [checkedContent, setCheckedContent] = useState([]);
    const [selected, setSelected] = useState({
        type: 1,
        name: 'arcade',
        monthlyPrice: 9,
        yearlyPrice: 90
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnd(false);
    }
    return (
        <main id="main">
            <Navigation step={step} />
            {end ? null : <section className="form-container">
                <form action="" id="multi-step-form" name="multi-step-form" onSubmit={handleSubmit}>
                    <Personal personal={personal}
                        setPersonal={setPersonal}
                        setPlan={setPlan}
                        setStep={setStep} />
                    <Plan plan={plan}
                        checked={checked}
                        selected={selected}
                        setPlan={setPlan}
                        setPersonal={setPersonal}
                        setAddons={setAddons}
                        setStep={setStep}
                        setChecked={setChecked}
                        setSelected={setSelected} />
                    <Addons addons={addons}
                        checked={checked}
                        checkedContent={checkedContent}
                        setAddons={setAddons}
                        setSummary={setSummary}
                        setPlan={setPlan}
                        setStep={setStep}
                        setCheckedContent={setCheckedContent} />
                    <Summary summary={summary}
                        checked={checked}
                        selected={selected}
                        setSummary={setSummary}
                        setAddons={setAddons}
                        setStep={setStep}
                        setPlan={setPlan}
                        checkedContent={checkedContent}
                        setEnd={setEnd} />
                </form>
            </section>}
            <End end={end} setEnd={setEnd} />
        </main>
    )
}

export default Main