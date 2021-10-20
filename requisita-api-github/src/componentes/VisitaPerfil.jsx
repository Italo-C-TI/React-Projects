import React,{useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Footer from './Footer.jsx';
import signIn from '../assets/sign-in.svg'
import arrowLeft from '../assets/arrow-left.svg'

const VisitaPerfil = ()=>{
    const [infoPerfil,setInfoPerfil] = useState({
      nome: "",
      fotoPerfil:"" ,
      email:"" ,
      local:"" ,
      numSeguidores:0 ,
      numSeguindo:0 ,
      numRepos: 0,
      descreveBio:""
    })
    const params = useParams();
    const history = useHistory();
    
    const handlebotaoSalvar = ()=>{
      history.push(`/${params.pessoa}`);
    }
    const handleBotaoHome = ()=>{
        history.push(`/${params.perfil}`);
      }
      
    useEffect(()=>{
      const fetchPerfil = async ()=>{
        
          const {data} = await axios.get(`https://api.github.com/users/${params.pessoa}`);
          const formatData= {
            nick:data.login,
            nome: data.name,
            fotoPerfil:data.avatar_url ,
            email:data.email,
            local:data.location ,
            numSeguidores:data.followers ,
            numSeguindo:data.following ,
            numRepos: data.public_repos,
            descreveBio:data.bio
          }
          setInfoPerfil(formatData);
       
        }
      
      fetchPerfil();  
    },[])
  
    return(
       <div className="meuPerfil">
            <div className="header">
                <img className="setaHome" src={arrowLeft} alt="arrow-left" onClick={handleBotaoHome}/>
                <p className="nickPerfil">{'#'+infoPerfil.nick}</p>
                <button className="buttonHeader">Salvar<img src={signIn} alt="botton-save" onClick={handlebotaoSalvar}/></button>
        </div>
        <img className="imagemPerfil" src={infoPerfil.fotoPerfil} alt="foto-perfil"/>
        <div className="contemNome">
            <b className="amarelo"></b>
            <h2 className="nome">{infoPerfil.nome}</h2>
          </div>
          <span className="email">{infoPerfil.email}</span>
          <span className="local" > {infoPerfil.local}</span>
  
          <div className="infoNumeros">
              <p><span className="numSeguidores" >{infoPerfil.numSeguidores}</span>Seguidores</p>
              <p><span className="numSeguindo">{infoPerfil.numSeguindo}</span>Seguindo</p>
              <p><span className="numRepos">{infoPerfil.numRepos}</span>Repos</p>
          </div>
  
          <div className="bio">
              <b className="amarelo"></b>
              <h2>BIO</h2>
          </div>
          
          <p className="descreveBio">{infoPerfil.descreveBio}</p>

          <Footer label=""/>
        </div>
    )
  }

  export default VisitaPerfil;