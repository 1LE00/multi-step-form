import './personal.css'
import Input from '../input/Input'
import Bottom from "../bottom/Bottom"
import { useRef, useState } from 'react'


const Personal = ({ plan, setPlan, setStep, personal, setPersonal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const nameField = useRef(null);
    const emailField = useRef(null);
    const phoneField = useRef(null);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

    const pattern = /^[\d]*$/;
    ;

    const handleNextPersonal = () => {
        const goToPlan = isFieldEmpty() && isEmailValid() && isPhoneValid();
        if (goToPlan) {
            setPlan(true);
            setStep(2);
            setPersonal(false);
        }
    }

    const isFieldEmpty = () => {
        if (nameField.current.value === '' && emailField.current.value === '' && phoneField.current.value === '') {
            setNameError('This field is required!');
            setEmailError('This field is required!');
            setPhoneError('This field is required!');
            nameField.current.focus();
            return false;
        } else if (nameField.current.value === '' && emailField.current.value === '') {
            setNameError('This field is required!');
            setEmailError('This field is required!');
            nameField.current.focus();
            return false;
        } else if (emailField.current.value === '' && phoneField.current.value === '') {
            setEmailError('This field is required!');
            setPhoneError('This field is required!');
            emailField.current.focus();
            return false;
        } else if (phoneField.current.value === '' && nameField.current.value === '') {
            setPhoneError('This field is required!');
            setNameError('This field is required!');
            nameField.current.focus();
            return false;
        } else if (nameField.current.value === '') {
            setNameError('This field is required!');
            nameField.current.focus();
            return false;
        } else if (emailField.current.value === '') {
            setEmailError('This field is required!');
            emailField.current.focus();
            return false;
        } else if (phoneField.current.value === '') {
            setPhoneError('This field is required!');
            phoneField.current.focus();
            return false;
        }
        return true;
    }

    const isEmailValid = () => {
        if (emailField.current.value !== '') {
            if (!emailRegex.test(emailField.current.value)) {
                setEmailError('Please enter a valid email!');
                emailField.current.focus();
                return emailRegex.test(emailField.current.value)
            }
        }
        setEmailError('');
        return true;
    }

    const isPhoneValid = () => {
        if (phoneField.current.value.length !== 10) {
            setPhoneError('Please enter 10 digit phone number!');
            phoneField.current.focus();
            return false
        }
        setPhoneError('');
        return true;
    }


    const handleChange = (e) => {
        const element = e.target;
        if (nameField.current === element) {
            setName(element.value);
            setNameError('');
            return
        }

        if (emailField.current === element) {
            setEmail(element.value)
            setEmailError('');
            return
        }

        if (phoneField.current === element) {
            if (pattern.test(element.value)) {
                setPhone(element.value);
                setPhoneError('');
            }
        }
    }

    const handleBlur = (e) => {
        if (emailField.current === e.target && emailField.current.value !== '') {
            return !emailRegex.test(emailField.current.value) && setEmailError('Please enter a valid email!');
        }

        if (nameField.current === e.target && nameField.current.value !== '') {
            return !nameRegex.test(nameField.current.value) && setNameError('Please enter a valid name!')
        }

        return nameField.current === e.target && nameField.current.value === '' ? setNameError('This field is required!') :
            emailField.current === e.target && emailField.current.value === '' ? setEmailError('This field is required!') :
                phoneField.current === e.target && phoneField.current.value === '' ? setPhoneError('This field is required!') : null;
    }

    return (
        <fieldset className={`personal ${personal ? 'flex flex-column' : 'none'}`}>
            <header className='personal-header flex flex-column fieldset-header'>
                <h2 className='title'>Personal info</h2>
                <p className='paragraph'>Please provide your name, email address, and phone number.</p>
            </header>
            <section className="personal-content flex flex-column w-100">
                <section className="name-container flex flex-column">
                    <Input type='text'
                        name='name'
                        id='name'
                        placeholder='e.g. Stephen King'
                        label='Name'
                        error={nameError}
                        value={name}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        ref={nameField} />
                </section>
                <section className="email-container flex flex-column">
                    <Input type='text'
                        name='email'
                        id='email'
                        placeholder='e.g. stephenking@lorem.com'
                        label='Email Address'
                        error={emailError}
                        value={email}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        ref={emailField} />
                </section>
                <section className="phone-container flex flex-column">
                    <Input type='tel'
                        name='phone'
                        id='phone'
                        placeholder='e.g. +1 234 567 890'
                        label='Phone Number'
                        error={phoneError}
                        value={phone}
                        max={10}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        ref={phoneField} />
                </section>
            </section>

            <Bottom field='personal' step={1} handleNext={handleNextPersonal} />
        </fieldset>
    )
}

export default Personal