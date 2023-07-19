import './summary.css';
import Bottom from "../bottom/Bottom";


const Summary = ({ summary, setSummary, setAddons, setStep, setPlan, checked, checkedContent, selected, setEnd }) => {
    const handlePreviousSummary = () => {
        setAddons(true);
        setStep(3);
        setSummary(false);
    }

    const gotoPlan = () => {
        setSummary(false);
        setStep(2);
        setPlan(true);
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        console.log('Confirmed');
        setStep(4);
        setSummary(false);
        setEnd(true);
    }

    let addonTotal = 0;
    checkedContent.forEach(element => {
        if (checked) {
            addonTotal = addonTotal + parseInt(element.yearly);
        } else {
            addonTotal = addonTotal + parseInt(element.monthly);
        }
    });

    const subscriptionPrice = checked ? selected.yearlyPrice : selected.monthlyPrice;
    return (
        <fieldset className={`summary ${summary ? 'flex flex-column' : 'none'}`}>
            <header className='summary-header fieldset-header flex flex-column'>
                <h2 className='title'>Finishing up</h2>
                <p className='paragraph'>Double-check everything looks OK before confirming.</p>
            </header>

            <section className="summary-section w-100">
                <section className="subscription-type flex">
                    <section className="subscription-content flex flex-column">
                        <section className="subscription-name">{`${selected.name} (${checked ? 'Yearly' : 'Monthly'})`}</section>
                        <button type='button' className='go-to-plan' onClick={gotoPlan}>Change</button>
                    </section>
                    <section className="subscription-price">{`$${subscriptionPrice}/${checked ? 'yr' : 'mo'}`}</section>
                </section>
                <section className="selected-addons flex flex-column">
                    {checkedContent.map(content => {
                        return <section key={content.id} className={`picked-addons picked-addons-${content.name} flex w-100`}>
                            <section className='picked-addon-name'>{content.name}</section>
                            <section className="picked-addon-price">{`+$${checked ? content.yearly : content.monthly}/${checked ? 'yr' : 'mo'}`}</section>
                        </section>
                    })}
                </section>
            </section>

            <section className='total-billing flex w-100'>
                <p className="total-content">Total ({`per ${checked ? 'year' : 'month'}`})</p>
                <p className="actual-cost">{`$${subscriptionPrice + addonTotal}/${checked ? 'yr' : 'mo'}`}</p>
            </section>
            <Bottom field='plan' step={4} handlePrevious={handlePreviousSummary} handleConfirm={handleConfirm} />
        </fieldset>
    )
}

export default Summary