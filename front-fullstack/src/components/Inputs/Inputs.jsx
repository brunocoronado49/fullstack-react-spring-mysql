import './inputs.css';

export const Inputs = ({type, placeholder, name, id, value, onChange}) => {
  return (
    <input value={value} 
      className='input' 
      type={type} 
      placeholder={placeholder}
      onChange={onChange}
      name={name} id={id} />
  )
}
