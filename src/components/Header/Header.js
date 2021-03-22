import './header.scss'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="Header">
      <div className="Header_logo">
        <img src={logo} alt="Company Logo" />
      </div>
    </div>
  )
}

export default Header
