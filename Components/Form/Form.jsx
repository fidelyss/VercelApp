import { useState } from 'react';
import { FillField, Button } from '../index';
import style from './Form.module.css'

function Form({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: ''
    });

    const handleChange = (field) => (value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        onSubmit(formData);
        setFormData({ name: '', email: '', content: '' }); // Reset form
    };

    return (
        <div className={style.Form}>
            <FillField
                label="Nome"
                value={formData.name}
                onChange={handleChange('name')}
            />
            <FillField
                label="Email"
                value={formData.email}
                onChange={handleChange('email')}
                type="email"
            />
            <FillField
                label="Comentário"
                value={formData.content}
                onChange={handleChange('content')}
            />
            <Button onClick={handleSubmit}>
                Enviar Comentário
            </Button>
        </div>
    );
}

export default Form;