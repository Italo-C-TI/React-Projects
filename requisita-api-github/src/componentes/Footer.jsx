import React from 'react';
import {useHistory,useParams} from 'react-router-dom';
import '../App.css';

import homeBlack from '../assets/home-black.svg';
import homeGrey from '../assets/home-grey.svg';
import reposBlack from '../assets/repos-black.svg';
import reposGrey from '../assets/repos-grey.svg';
import followBlack from '../assets/follow-black.svg';
import followGrey from '../assets/follow-grey.svg';

const Footer = (props)=>{
    const params = useParams();
    const history = useHistory();
 
    const handleChangePage = (route)=>{
        history.push(route);
    }

    
    return(
      <footer className={Number(props.tamanho)<=5?"corrigeFooter":"footer"}>
      <span id={props.label ==="Home"?"atual":""}>
          <button onClick ={()=>handleChangePage(`/${params.perfil}`)}><img src={props.label
             === "Home"?homeBlack:homeGrey} alt="icone-home" /></button>
          <p >Home</p>
      </span>
      <span id={props.label === "Repos"?"atual":""}>
          <button onClick ={()=>handleChangePage(`/${params.perfil}/repos`)}><img src={props.label
             === "Repos"?reposBlack:reposGrey} alt="icone-repositorio"/></button>
          <p>Repos</p>
      </span>
      <span id={props.label === "Seguidores"?"atual":""}>
          <button onClick ={()=>handleChangePage(`/${params.perfil}/seguidores`)}
          ><img src={props.label === "Seguidores"?followBlack:followGrey} alt="icone-seguidores"/></button>
          <p>Seguidores</p>
      </span>
      <span id={props.label === "Seguindo"?"atual":""}>
          <button onClick ={()=>handleChangePage(`/${params.perfil}/seguindo`)}>
              <img src={props.label === "Seguindo"?followBlack:followGrey} alt="icone-seguindo"/></button>
          <p>Seguindo</p>
      </span>
    </footer>
    )   
  }

  export default Footer;