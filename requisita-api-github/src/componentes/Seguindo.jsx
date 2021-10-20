import React,{useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Footer from './Footer.jsx';
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

const Seguindo = ()=>{
    const params = useParams();
    const history = useHistory();
    const handleBotaoHome = ()=>{
        history.push(`/${params.perfil}`);
      }
      
    const handleBotaoVerPerfil = (nickVisita)=>{
        history.push(`/${params.perfil}/visita/${nickVisita}`);
    }
   
      const [infoFollowings,setInfoFollowings] = useState([{
          id:1,
          nick:"",
          fotoPerfil:"",
        }])
        
        useEffect(()=>{
          console.log("meu following Mudou");
          const fetchRepos = async ()=>{
              const {data} = await axios.get(`https://api.github.com/users/${params.perfil}/following`);
              const allFollowings = [];
              data.map(following=>{
                  const {id,login,avatar_url} = following;
                  const formatData = { 
                    id:id,                
                    nick: login,
                    fotoPerfil:avatar_url,
                  }
                  allFollowings.push(formatData);
              })
              setInfoFollowings(allFollowings)
          }
          
          fetchRepos();  
        },[])
    return(
        <div className="container">
            <div className="headerr">
                <img className="setaHome" src={arrowLeft} alt="arrow-left" onClick={handleBotaoHome}/>
                <h2>{infoFollowings.length} Seguindo</h2>
            </div>
            {infoFollowings.map((infoFollowing)=>{  
                return(
                    <div className="contemSeguidor" key={infoFollowing.id}>
                        <div className="contemInfoSeguidor">
                            <b className="amarelo"></b>
                            <img src={infoFollowing.fotoPerfil} alt="Foto-perfil" />
                            <h2 className="nickSeguidor">{infoFollowing.nick}</h2>
                        </div>
                        <img src={arrowRight} alt="Arrow-Right" className="verSeguidor" 
                        onClick={()=>handleBotaoVerPerfil(infoFollowing.nick)} />
                    
                    </div>)            
            })}    
                    <Footer label="Seguindo" tamanho ={infoFollowings.length}/>
        </div>
    )

}
export default Seguindo;