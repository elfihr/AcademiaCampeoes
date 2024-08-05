import React from 'react'
import '../style/Footer.css'
import logoFooter from '../assets/logoFooter.webp'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_wrapper'>
                <div className='footer_container'>
                    <div className='logo_box'>
                        <img className='logo_img' src={logoFooter} alt='logoFooter' />
                        <p>Academia
                            <br />Dos Campeões</p>
                    </div>
                    <p className='sub_description'>Fornecemos suporte individualizado para resolver dúvidas específicas e reforçar o aprendizado, garantindo que cada aluno esteja bem preparado para o dia do exame</p>
                </div>

                <div className='footer_container'>
                    <h3 className='description'>Links Úteis</h3>
                    <a href='#about' className='footer_link'><i class="fa-solid fa-right-long"></i> Sobre</a>
                    <a href='#courses' className='footer_link'><i class="fa-solid fa-right-long"></i> Cursos</a>
                    <a href='#plan' className='footer_link'><i class="fa-solid fa-right-long"></i> Planos</a>
                    <a href='#teacher' className='footer_link'><i class="fa-solid fa-right-long"></i> Professores</a>
                    <a href='#testimonials' className='footer_link'><i class="fa-solid fa-right-long"></i> Feedback</a>
                </div>

                <div className='footer_container'>
                    <h3 className='contact_info'>Informações de Contato</h3>
                    <p><i class="fa-solid fa-phone"></i> 055 11 2643-XXXX</p>
                    <p><i class="fa-solid fa-envelope"></i> acadcampeoes@email.com</p>
                    <p><i class="fa-solid fa-location-dot"></i> São Paulo - SP</p>
                    <div className='footer_SocialMedia'>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-x-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
            </div>
            <div className='separator_container'>
                <div className='separator_footer'></div>
                <h3 className='sub_description'>
                    Copyright &copy; A <span className='blue'>Fihr</span> Site - Academia dos Campeões
                </h3>
            </div>
        </footer>
    )
}

export default Footer