import React from 'react'
import '../style/Courses.css'
import { courseGroup } from '../helper/Helper'

const Courses = () => {
  return (
    <div className='courses' id='courses'>
      <h3 className='title'><span className='blue'>Cursos</span> em <span className='blue'>Destaque</span></h3>
      <div className='course_Wrapper'>
        {courseGroup.map((item, index) => {
          return (
            <div className='course_container'>
              <img src={item.img} alt='curso' />
              <p className='course_price'>{item.price}</p>
              <h4>{item.name}</h4>
              <p className='course_description'>{item.description}</p>
              <h3>Leia Mais</h3>
              <div className='course_separator'></div>

              <div className='course_info_wrapper'>

                <div className='course_info_container'>
                  <p><i class="fa-solid fa-book"></i> {item.modules} Módulos</p>
                </div>
                <div className='course_info_container'>
                  <p><i class="fa-solid fa-calendar-days"></i> {item.month} Meses</p>
                </div>
                <div className='course_info_container'>
                  <p><i class="fa-regular fa-clock"></i> {item.hour} Horas</p>
                </div>

              </div>
            </div>
          )

        })}

      </div>
    </div>
  )
}

export default Courses