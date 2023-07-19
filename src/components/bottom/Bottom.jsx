import './bottom.css';

const Bottom = ({ field, step, handlePrevious, handleNext, handleConfirm }) => {
  return (
    <section className={`bottom ${field}-bottom w-100 flex`} style={step > 1 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-end' }}>
      {step > 1 && <button type='button' id={`${field}-back`} className='back' onClick={handlePrevious}>Go Back</button>}
      <section className="go-next">
        {step === 4 ?
          <button type='submit' id='confirm' className='confirm' onClick={handleConfirm}>Confirm</button> :
          <button type='button' id={`${field}-next`} className='next' onClick={handleNext}>Next Step</button>}
      </section>
    </section>
  )
}

export default Bottom