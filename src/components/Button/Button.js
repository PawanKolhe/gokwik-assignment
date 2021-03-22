import './button.scss'
import rightChevron from '../../assets/images/right-chevron.svg'

const Button = ({ children, ...props }) => {
  return (
    <button className="Button" {...props}>
      {children}
      <img src={rightChevron} alt="Right Arrow" />
    </button>
  )
}

export default Button
