import './end.css';
import { ReactComponent as Thanks } from '../../assets/icons/icon-thank-you.svg';

const End = ({ end }) => {
  return (
    <section className={`end flex-column text-center ${end ? 'flex' : 'none'}`}>
      <section className="end-image-holder">
        <Thanks />
      </section>
      <section className="end-title">Thank you!</section>
      <section className="end-content">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
      </section>
    </section>
  )
}

export default End