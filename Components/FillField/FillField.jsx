import style from './FillField.module.css'


function FillField({ label, value, onChange, type = "text" }) {
  return (
    <div className={style.FillField}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default FillField;