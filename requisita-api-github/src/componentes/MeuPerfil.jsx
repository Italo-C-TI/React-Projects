import React,{useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import dadosPerfis from '../dados/dadosPerfis.json';
import '../App.css';
import Footer from './Footer.jsx';
import logOut from '../assets/log-out.svg'

const MeuPerfil = ()=>{
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
    
    const handlebotaoSairClick = ()=>{
      history.push("/");
    }
  
    useEffect(()=>{
      const fetchPerfil = async ()=>{
        
          const {data} = await axios.get(`https://api.github.com/users/${params.perfil}`);
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
          const encontraPerfil = dadosPerfis.find(x => x.nick === formatData.nick);
          if(!encontraPerfil){
            dadosPerfis.push(formatData);
          }
          console.log(dadosPerfis);
        }
      
      fetchPerfil();  
    },[])
  
    return(
       <div className="meuPerfil">
          <div className="header">
              <p>{'#'+infoPerfil.nick}</p>
              <button>Sair<img src={logOut} alt="log-out" onClick={handlebotaoSairClick}/></button>
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

          <Footer label="Home"/>
        </div>
    )
  }

  export default MeuPerfil;