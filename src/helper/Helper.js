import math from '../assets/course/course_math.webp'
import portuguese from '../assets/course/couse_portuguese.webp'
import geograph from '../assets/course/couse_geography.webp'
import history from '../assets/course/couse_history.webp'
import physic from '../assets/course/course_physic.webp'
import chemist from '../assets/course/couse_chemist.webp'

import teacher01 from '../assets/teacher/teacher01.webp'
import teacher02 from '../assets/teacher/teacher02.webp'
import teacher03 from '../assets/teacher/teacher03.webp'

import testi01 from '../assets/testimonials/testi01.webp'
import testi02 from '../assets/testimonials/testi02.webp'
import testi03 from '../assets/testimonials/testi03.webp'
import testi04 from '../assets/testimonials/testi04.webp'
import testi05 from '../assets/testimonials/testi05.webp'

export const menuLink = [
    {
        label:'Home',
        class:'link',
        href:'#home'
    },
    {
        label:'Sobre',
        class:'link',
        href:'#about'
    },
    {
        label:'Cursos',
        class:'link',
        href:'#courses'
    },
    {
        label:'Planos',
        class:'link',
        href:'#plan'
    },
    {
        label:'Professores',
        class:'link',
        href:'#teacher'
    },
    {
        label:'FeedBack',
        class:'link',
        href:'#testimonials'
    },
    {
        label:'Contato',
        class:'link',
        href:'#contact'
    }
]

export const aboutTips = [
    {
        class:"fa-solid fa-award",
        label:"Prêmios",
        number:'170+'
    },
    {
        class:"fa-solid fa-book",
        label:"Cursos",
        number:'15+'
    },
    {
        class:"fa-solid fa-users",
        label:"Estudantes",
        number:'700+'
    },
] 

export const courseGroup = [
    {
        img:math,
        price:'R$ 150,00',
        name:'Matemática',
        description:'O curso aborda todo o conteúdo cobrado nos principais vestibulares, incluindo álgebra, geometria, trigonometria, estatística e cálculo. As aulas são estruturadas para proporcionar uma compreensão profunda e eficaz dos conceitos matemáticos.',
        modules:'10',
        month:'6',
        hour:'200'
    },
    {
        img:portuguese,
        price:'R$ 150,00',
        name:'Português',
        description:'O curso cobre gramática, interpretação de texto, redação e literatura, alinhando-se aos critérios dos principais vestibulares do país. As aulas são cuidadosamente planejadas para abordar cada tópico de maneira detalhada.',
        modules:'10',
        month:'6',
        hour:'200'
    },
    {
        img:geograph,
        price:'R$ 120,00',
        name:'Geografia',
        description:'O curso cobre todos os tópicos importantes da Geografia, incluindo geografia física, geopolítica, geografia humana e econômica, abordando também questões ambientais e temas contemporâneos.',
        modules:'7',
        month:'4',
        hour:'120'
    },
    {
        img:history,
        price:'R$ 120,00',
        name:'História',
        description:'Cobrimos desde a Antiguidade até os tempos contemporâneos, com atenção especial aos temas mais relevantes e recorrentes nos vestibulares. O curso aborda História do Brasil e História Geral, garantindo uma visão completa e contextualizada.',
        modules:'18',
        month:'4',
        hour:'120'
    },
    {
        img:physic,
        price:'R$ 140,00',
        name:'Física',
        description:'O curso cobre todos os tópicos essenciais da Física, desde mecânica e termodinâmica até eletromagnetismo e óptica. As aulas são estruturadas para aprofundar o conhecimento e facilitar a compreensão de conceitos complexos.',
        modules:'10',
        month:'6',
        hour:'150'
    },
    {
        img:chemist,
        price:'R$ 140,00',
        name:'Química',
        description:'O curso cobre todos os tópicos essenciais de Química, incluindo química geral, inorgânica, orgânica, físico-química e bioquímica. O material é atualizado regularmente para refletir as tendências mais recentes dos exames.',
        modules:'10',
        month:'6',
        hour:'150'
    }
]

export const plans = [
    {
        type:'Básico',
        price:'80,00',
        item01:'fa-solid fa-check',
        item02:'fa-solid fa-check',
        item03:'fa-solid fa-xmark',
        item04:'fa-solid fa-xmark',
        item05:'fa-solid fa-xmark',
    },
    {
        type:'Avançado',
        price:'120,00',
        item01:'fa-solid fa-check',
        item02:'fa-solid fa-check',
        item03:'fa-solid fa-check',
        item04:'fa-solid fa-xmark',
        item05:'fa-solid fa-xmark',
    },
    {
        type:'Plus',
        price:'180,00',
        item01:'fa-solid fa-check',
        item02:'fa-solid fa-check',
        item03:'fa-solid fa-check',
        item04:'fa-solid fa-check',
        item05:'fa-solid fa-check',
    }
]

export const teachers = [
    {
        img:teacher01,
        name:'Luciana Almeida',
        formation:'Português'
    },
    {
        img:teacher02,
        name:'Pablo de Barros',
        formation:'Gerografia'
    },
    {
        img:teacher03,
        name:'Marcia Bela de Santos',
        formation:'Química'
    }
]

export const testimonials = [
    {
        img:testi01,
        name:'Leonel Alca',
        star:'',
        description:'Os professores realmente entendem o que estão ensinando e conseguem explicar conceitos complexos de forma simples e clara. O apoio individualizado que recebi foi crucial para o meu desempenho.'
    },
    {
        img:testi02,
        name:'Alma Cardoso',
        star:'',
        description:'O curso foi fundamental para minha aprovação no vestibular. Os professores eram extremamente dedicados e sempre disponíveis para tirar dúvidas. Os simulados regulares me ajudaram a ganhar confiança e a me sentir preparado para o exame.'
    },
    {
        img:testi03,
        name:'Pedro Delgado',
        star:'',
        description:'Gostei muito da forma como as aulas foram conduzidas. O material didático era muito bem estruturado e cobria todos os tópicos importantes. As aulas eram interativas, o que tornava o aprendizado mais interessante e eficaz.'
    },
    {
        img:testi04,
        name:'Carlo Takezawa',
        star:'',
        description:'Os simulados eram muito semelhantes aos exames reais, o que me ajudou a me sentir mais à vontade no dia do vestibular. Consegui identificar minhas fraquezas e trabalhar nelas antes do exame.'
    },
    {
        img:testi05,
        name:'Debora Barroso',
        star:'',
        description:'O curso criou um ambiente onde me senti sempre motivado a aprender mais. A interação com outros alunos e o apoio da equipe foram muito importantes para manter o foco e a determinação.'
    },
]