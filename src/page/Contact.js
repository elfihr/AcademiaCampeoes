import React from 'react'
import '../style/Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h3 className='title'>Dúv<span className='blue'>idas</span></h3>
        <p className='description'>Envie uma mensagem pra gente!</p>
        <form className='contact_form' method='POST'>
            <div className='contact_row'>
                <input type='name' placeholder='Nome Completo*' required></input>
                <input type='email' placeholder='E-mail*' required></input>
            </div>
            <div className='contact_row'>
                <input type='number' placeholder='Telefone*' required></input>
                <input type='text' placeholder='Assunto*' required></input>
            </div>
            <textarea rows={6} placeholder='Digite sua Dúvida*' name='message' required></textarea>
            <button type='submit'>Enviar Menssagem</button>
        </form> 
    </div>
  )
}

export default Contact