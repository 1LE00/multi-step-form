import './plancard.css';

const planCard = ({ name, monthlyPrice, yearlyPrice, logo, value, selected, checked, selectPlan }) => {
    return (
        <section className={`${name}-section plancard w-100 ${selected ? 'selected' : ''}`} onClick={() => selectPlan(name, monthlyPrice, yearlyPrice, value)}>
            <input type="radio" name={name} id={name} value={value} />
            <section className={`${name}-content plan-content flex`}>
                <section className="img-section">{logo}</section>
                <section className="details flex flex-column">
                    <label htmlFor={name}>{name}</label>
                    <section className="pricing">{checked ? `$${yearlyPrice}/yr` : `$${monthlyPrice}/mo`}</section>
                    {checked && <h6 className='free'>2 months free</h6>}
                </section>
            </section>
        </section>
    )
}

export default planCard