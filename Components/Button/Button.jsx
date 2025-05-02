import style from './Button.module.css'


function Button({ children, onClick, disabled = false }) {
  return (
    <button className={style.Button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;