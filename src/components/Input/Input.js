import './input.scss'

const Input = ({ value, infoText, error, ...props }) => {
  return (
    <div className="Input">
      <input value={value} required {...props} />
      {!error && infoText && <div className="Input_infoText">{infoText}</div>}
      {error && <div className="Input_error">{error}</div>}
    </div>
  )
}

export default Input
