import React from 'react'
import '../style/Now.css'
import now from '../assets/now.webp'

const Now = () => {
    return (
        <div className='now' style={{ backgroundImage: `url(${now})` }}>
            <h3>
                Novos <span className='blue'>Assinantes</span> Ganham <span className='blue'>Desconto</span> de 50%
                <br />
                 de <span className='blue'>6 meses</span> do plano <span className='blue'>PLUS</span>
            </h3>
            <button className='now_btn'><i class="fa-brands fa-whatsapp"></i> Entre em Contato</button>
        </div>
    )
}

export default Now