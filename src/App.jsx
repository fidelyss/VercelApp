import { useState } from 'react';
import { Form, Coment, ComponenteOtimizado } from '../Components';


function App() {
  const [comments, setComments] = useState([]);

  const handleSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className="app">
      <Form onSubmit={handleSubmit} />

      <div className="comments-list">
        <h2>Comentários {comments.length}</h2>
        {comments.map((comment, index) => (
          <Coment
            key={index}
            author={comment.name}
            email={comment.email}
            content={comment.content}
          />
        ))}
      </div>
      <section style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}></section>
      <ComponenteOtimizado  />
      <section style={{ width: '100vw', height: '100vh', backgroundColor: 'green' }}></section>
      <section style={{ width: '100vw', height: '100vh', backgroundColor: 'blue' }}></section>
    </div>
  );
}

export default App;