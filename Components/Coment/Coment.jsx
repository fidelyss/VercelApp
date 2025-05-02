import style from './Coment.module.css'

function Coment({ author, email, content }) {
  return (
    <div className={style.Coment}>
      <h4>{author}</h4>
      <small>{email}</small>
      <p>{content}</p>
    </div>
  );
}

export default Coment;