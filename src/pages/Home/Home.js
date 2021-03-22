import { useState } from 'react'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import GiftCard from '../../components/GiftCard/GiftCard'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import RainbowText from '../../components/RainbowText/RainbowText'
import './home.scss'
import whatsappIcon from '../../assets/images/whatsapp.svg'
import giftboxIcon from '../../assets/images/gift-box.svg'
import cancelIcon from '../../assets/images/close.svg'

const companyName = 'Man Matters';
const infoTextIntialState = `Enter the same number used on ${companyName}`;

const Home = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [infoText, setInfoText] = useState(infoTextIntialState);
  const [inputValid, setInputValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(localStorage.getItem('form_submitted') || 'false');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!(phone && ['6','7','8','9'].includes(phone[0]))) {
      setError('Enter a valid mobile number');
      return;
    }

    // Validation Successful
    setError('')
    setFormSubmitted('true')
    localStorage.setItem('form_submitted', 'true');
  }

  return (
    <div className="Home">
      <div className="Home_background"></div>

      <div className="container">
        <Header />

        <RainbowText text="Congratulations" emoji="🥳" />
        <GiftCard style={{marginBottom: '40px'}} />

        {formSubmitted !== 'true' ?
          <>
            <p className="Home_mainText">
              You have WON Paytm Gift Card of Rs 200 for <strong>placing the order on {companyName}</strong>
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number"
                infoText={infoText}
                value={phone}
                error={error}
                onChange={(event) => {
                  setError('')
                  const value = event.target.value;
                  if(value.length === 0) {
                    setInfoText(infoTextIntialState);
                  } else {
                    setInfoText('');
                  }
                  if(value.length > 10) {
                    return;
                  }
                  console.log(value)
                  if(value.length === 10) {
                    setInputValid(true);
                  } else {
                    setInputValid(false);
                  }
                  setPhone(event.target.value);
                }}
              />
              <Button style={{marginTop: '15px'}} disabled={!inputValid}>Wow! Get my Paytm Gift Card</Button>
            </form>
          </>
          :
          <div>
            <div className="SuccessText">Submitted!</div>
            <ul className="SuccessContent">
              <li className="SuccessContent_item">
                <h3>Where will I get the gift card?</h3>
                <p>You will receive it on Whatsapp/SMS on your mobile.</p>
                <img src={whatsappIcon} alt="Whatsapp" />
              </li>
              <li className="SuccessContent_item">
                <h3>Where will I receive the gift card?</h3>
                <p>Within 48 hours, when you {companyName} order is delivered.</p>
                <img src={giftboxIcon} alt="Giftbox" />
              </li>
              <li className="SuccessContent_item">
                <h3>What if I cancel the order?</h3>
                <p>The voucher will not delivered if you cancel the order.</p>
                <img src={cancelIcon} alt="Cancel" />
              </li>
            </ul>
          </div>
        }
        <Footer />
      </div>
      
    </div>
  )
}

export default Home
