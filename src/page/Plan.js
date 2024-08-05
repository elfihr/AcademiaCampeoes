import React from 'react'
import '../style/Plan.css'
import { plans } from '../helper/Helper'

const Plan = () => {
    return (
        <div className='plan' id='plan'>
            <h3 className='title'>Nossos <span className='blue'>Planos</span></h3>
            <p className='sub_title'>Aqui o <span className='blue'>plano</span> é sob sua <span className='blue'>medida</span>!</p>
            <div className='plan_wrapper'>
                {plans.map((item, index) => {
                    return (
                        <div key={index} className='plan_container'>
                            <h4>{item.type}</h4>
                            <p className='planPrice'><span className='plan_price'>R$</span> {item.price} <span className='plan_price'>/Mês</span></p>
                            <div className='plan_separator'></div>
                            <div className='planCheck_Container'>
                                <p><i className={item.item01}></i>6 Matérias</p>
                                <p><i className={item.item02}></i>Download Aulas</p>
                                <p><i className={item.item03}></i>Todas as Matérias</p>
                                <p><i className={item.item04}></i>Suporte Sem Limites</p>
                                <p><i className={item.item05}></i>Canal Privado com Professores</p>
                            </div>
                            <div className='plan_separator'></div>
                            <h3 className='plan_sign'>Assine Agora</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Plan