import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/32619479?s=460&u=73445bb9ec11dd30e838bc7f9f2c7c8a6b0ab2d3&v=4" alt="Noberto filho"/>
                <div>
                    <strong>Noberto filho</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de matemática avançada.
                <br/><br/>
                Apaixonado por calcular ate os proprios passos dados durante o dia
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>

            </footer>
        </article>
    );
}
export default TeacherItem;