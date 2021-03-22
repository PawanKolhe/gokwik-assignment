import './footer.scss'
import logo from '../../assets/images/gokwik-logo.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_text">
        <span>Powered by</span>
        <img src={logo} alt="GoKwik Logo" />
      </div>
      
    </div>
  )
}

export default Footer
