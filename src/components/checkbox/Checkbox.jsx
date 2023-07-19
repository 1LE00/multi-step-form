import './checkbox.css';

const Checkbox = ({ name, title, subtitle, monthly, yearly, value, ticked, checked, styleContent }) => {

  const handleCheck = () => {
    styleContent(name, !ticked, title, monthly, yearly, value);
  }
  return (
    <section className={`checkbox-container flex ${name} w-100 ${ticked ? 'highlight' : ''}`} onClick={handleCheck} >
      <section className="checkbox-input">
        <input type="checkbox" name={name} id={name} checked={ticked} onChange={() => { }} />
      </section>
      <section className="checkbox-details flex w-100">
        <section className='checkbox-content flex flex-column'>
          <h5 className='checkbox-title'>{title}</h5>
          <h6 className='checkbox-subtitle'>{subtitle}</h6>
        </section>
        <section className="checkbox-pricing">
          {checked ? `+$${yearly}/yr` : `+$${monthly}/mo`}
        </section>
      </section>
    </section>
  )
}
export default Checkbox
