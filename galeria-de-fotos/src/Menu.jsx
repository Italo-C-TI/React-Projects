import './App.css';
import abrerMenu from './assets/closed-menu.svg';
import fecharMenu from './assets/open-menu.svg';
import abreFavoritos from './assets/inactive-like.svg';
import home from './assets/active-home.svg';
import engrenagem from './assets/inactive-settings.svg';
import { useState } from 'react';

function Menu(){
    const [menuAberto,setMenuAberto] = useState(false)
    const handleClickMenu = ()=>{
        setMenuAberto(!menuAberto);
    }
    return( 
    <header className={menuAberto===false?"fechado":"aberto"}> 
        <div className="interageMenu">
            <img className="alteraMenu" src={menuAberto?fecharMenu:abrerMenu} alt="interage-menu" onClick={handleClickMenu}/>
            <div className="row">
                <img className="abreHome" src={home} alt="home"/> 
                <span className={menuAberto===false?"none":"atual"}>Início</span>
            </div>
            <div className="row">
                <img className="abreFavoritos" src={abreFavoritos} alt="coração-apagado"/>
                <span className={menuAberto===false?"none":""}>Favoritos</span>
            </div>
        </div>
        <div className="row">
            <img src={engrenagem} alt="engrenagem-apagada"/>
            <span className={menuAberto===false?"none":""}>Configurações</span>
        </div>
    </header>
    )
}


export default Menu;