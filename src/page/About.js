import React from 'react'
import '../style/About.css'
import aboutImg from '../assets/about.webp'
import { aboutTips } from '../helper/Helper'

const About = () => {
    return (
        <div className='about' id='about'>
        <h3 className='title'>Sobre <span className='blue'>Nós</span></h3>
            <div className='about_Container'>
                <img src={aboutImg} alt='notebook' />
                <div className='aboutContainer_Content'>
                    <h3 className='sub_title'>Transformando <span className='blue' >Esforço</span>  em Conquistas</h3>
                    <p className='sub_description'>
                        O curso preparatório para o vestibular foi projetado para ajudar estudantes a alcançarem seus sonhos de ingressar nas melhores universidades. Com uma abordagem focada e abrangente, nosso curso oferece todo o suporte necessário para maximizar seu desempenho nas provas.
                    </p>
                    <p className='about_check sub_description'><i class="fa-solid fa-right-long"></i> Diversos Cursos</p>
                    <p className='about_check sub_description'><i class="fa-solid fa-right-long"></i> +1000 horas de Curso</p>
                    <p className='about_check sub_description'><i class="fa-solid fa-right-long"></i> Tira-Dúvidas Online</p>
                    <p className='about_check sub_description'><i class="fa-solid fa-right-long"></i> Simulados em Tempo Real</p>
                    <div className='aboutTips_Wrapper'>
                    {aboutTips.map((item,index) => {
                        return(
                            <div className='aboutTips_Container'>
                                <i className={item.class}></i>
                                <h4>{item.label}</h4>
                                <p>{item.number}</p>
                            </div>
                        )
                    })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About