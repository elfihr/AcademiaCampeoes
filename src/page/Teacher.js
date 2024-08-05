import React from 'react'
import '../style/Teacher.css'
import { teachers } from '../helper/Helper'

const Teacher = () => {
    return (
        <div id='teacher' className='teacher'>
            <h3 className='title'>Nossos <span className='blue'>Professores</span></h3>
            <h4 className='sub_title'>Conheça <span className='blue'>Alguns</span> dos Nossos <span className='blue'>Professores</span></h4>
            <div className='teacher_wrapper'>
                {teachers.map((item, index) => {
                    return (
                        <div key={index} className='teacher_container'>
                            <img src={item.img} alt='Professores' />
                            <h4>{item.name}</h4>
                            <p>Professor(a):{item.formation}</p>
                            <div className='teacher_separator'></div>
                            <div className='teacher_SocialMedia'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Teacher