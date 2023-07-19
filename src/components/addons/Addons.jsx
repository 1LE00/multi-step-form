import './addons.css';
import Bottom from "../bottom/Bottom";
import Checkbox from '../checkbox/Checkbox';
import { useEffect, useState } from 'react';

const Addons = ({ addons, setAddons, setPlan, setStep, setSummary, checked, checkedContent, setCheckedContent }) => {
    const [error, setError] = useState(false);
    const [ticked, setTicked] = useState({
        service: false,
        storage: false,
        profile: false
    });

    const handleNextAddOns = () => {
        let tickedValues = [];
        for (let key in ticked) {
            tickedValues.push(ticked[key]);
        }
        if ((tickedValues.every(value => value === false))) {
            setError(true);
        } else {
            setSummary(true);
            setStep(4);
            setAddons(false);
        }
    }

    const handlePreviousAddons = () => {
        setPlan(true);
        setStep(2);
        setAddons(false);
    }

    const styleContent = (name, checked, title, monthly, yearly, value) => {
        setTicked((prevValue) => ({
            ...prevValue,
            [name]: checked
        }));

        const listOfCheckedItems = {
            id: value,
            name: title,
            monthly: monthly,
            yearly: yearly
        }
        if (checked) {
            setCheckedContent(prevItems => [...prevItems, listOfCheckedItems]);
        } else {
            setCheckedContent(prevItems => prevItems.filter(item => item.id !== listOfCheckedItems.id))
        }
        setError(false);
    }

    useEffect(() => {
        console.log(checkedContent);
    }, [checkedContent])
    return (
        <fieldset className={`addons ${addons ? 'flex flex-column' : 'none'}`}>
            <header className='addons-header fieldset-header flex flex-column'>
                <h2 className='title'>Pick add-ons</h2>
                <p className='paragraph'>Add-ons help enhance your gaming experience.</p>
            </header>

            <section className="addons-container flex flex-column w-100">
                <Checkbox name={'service'}
                    title={'Online service'}
                    subtitle={'Access to multiplayer games'}
                    monthly={'1'}
                    yearly={'10'}
                    ticked={ticked.service}
                    value={1}
                    checked={checked}
                    styleContent={styleContent}
                />
                <Checkbox name={'storage'}
                    title={'Larger storage'}
                    subtitle={'Extra 1TB of cloud save'}
                    monthly={'2'}
                    yearly={'20'}
                    ticked={ticked.storage}
                    value={2}
                    checked={checked}
                    styleContent={styleContent}
                />
                <Checkbox name={'profile'}
                    title={'Customizable profile'}
                    subtitle={'Custom theme on your profile'}
                    monthly={'2'}
                    yearly={'20'}
                    ticked={ticked.profile}
                    value={3}
                    checked={checked}
                    styleContent={styleContent}
                />
            </section>
            {error && <p className="addons-error">Please select one of the above fields.</p>}
            <Bottom field='plan' step={3} handleNext={handleNextAddOns} handlePrevious={handlePreviousAddons} />
        </fieldset>
    )
}

export default Addons