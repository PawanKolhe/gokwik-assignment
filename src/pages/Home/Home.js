import './home.scss'
import logo from '../../assets/images/logo.png'

const Home = () => {
  return (
    <div className="Home">
      <div className="Home_Background"></div>
      
      <div className="Home_Logo">
        <img src={logo} alt="Company Logo" />
      </div>
    </div>
  )
}

export default Home
