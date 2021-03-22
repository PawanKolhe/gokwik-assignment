import './rainbowText.scss'

const RainbowText = ({ text, emoji }) => {
  return (
    <div className="RainbowText">
      <span className="RainbowText_Text">{text}</span>&nbsp;
      <span className="RainbowText_Emoji">{emoji}</span>
    </div>
  )
}

export default RainbowText
