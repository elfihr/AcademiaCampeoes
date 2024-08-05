import React from 'react'
import '../style/Hero.css'
import heroImg from '../assets/hero02.jpg'

const Hero = () => {
  return (
    <section className='hero' id='home' style={{ backgroundImage: `url(${heroImg})` }}>
      <h3 className='title'>Sua Aprovação é Nossa Missão!</h3>
      <p className='description'>
        Nós temos o método de ensino mais eficaz sob<br />
         medida de acordo com sua nescessidade
      </p>
      <div className='heroContact_container'>
        <a className='heroContato description' href='https://wa.me/'>Entre em Contato</a>
        <a className='heroCurso description' href='#courses'>Veja nossos Cursos</a>
      </div>
    </section>
  )
}

export default Hero