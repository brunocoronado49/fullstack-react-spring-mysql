import './buttons.css';

export const Buttons = ({text, classBtn, onClick, type = null}) => {
  return (
    <button onClick={onClick} type={type} className={
      classBtn === 'success' ?
      'success' : classBtn === 'danger' ?
      'danger' : 'default'
    }>
      {text}
    </button>
  );
}
