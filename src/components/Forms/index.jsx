import { useState } from 'react';
import './styles.css';

export default function Forms(){
  const [formData, setFormData]= useState({
    nome:'',
    email:'',
    senha:''
  });

  const handleChange = (event) => {
    const {name, value} = event.target

    setFormData({
      ...formData,
      [name]: value
    });
  }
    return (
        <section class ="last">
            <h2>Form simples</h2>
            <form action="#">
              <div>
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange}/>
              </div>
              <div>
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/>
              </div>
              <div>
                <label for="senha">Senha:</label>
                <input type="password" name="senha" id="senha" value={formData.senha} onChange={handleChange}/>
              </div>
            </form>
        </section>
    )
}