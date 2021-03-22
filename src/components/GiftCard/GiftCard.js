import './giftCard.scss'
import logo from '../../assets/images/giftcard.png'

const GiftCard = ({ ...props }) => {
  return (
    <div className="GiftCard" {...props}>
      {/* <img src={logo} alt="Paytm Logo" /> */}
      <img className="GiftCard_image" src={logo} alt="Giftcard" />
    </div>
  )
}

export default GiftCard
