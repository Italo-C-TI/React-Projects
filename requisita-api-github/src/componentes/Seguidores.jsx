import React,{useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Footer from './Footer.jsx';
import arrowLeft from '../assets/arrow-left.svg'
import arrowRight from '../assets/arrow-right.svg'

const Seguidores = ()=>{
    const params = useParams();
    const history = useHistory();
    const handleBotaoHome = ()=>{
        history.push(`/${params.perfil}`);
    }
      
    const handleBotaoVerPerfil = (nickVisita)=>{
        history.push(`/${params.perfil}/visita/${nickVisita}`);
    }
   
    const [infoFollowers,setInfoFollowers] = useState([{
        id:0,  
        nickName:"",
        fotoPerfil:"",
        }])
        
    useEffect(()=>{
        console.log("meu followers Mudou");
            const fetchRepos = async ()=>{
            const {data} = await axios.get(`https://api.github.com/users/${params.perfil}/followers`);
            const allFollowers = [];
            data.map(follower=>{
                const {id,login,avatar_url} = follower;
                const formatData = {    
                    id:id,             
                    nick: login,
                    fotoPerfil:avatar_url,
                }
                allFollowers.push(formatData);
            })
                setInfoFollowers(allFollowers)
          }
          
          fetchRepos();  
        },[])
    return(
        <div className="container">
            <div className="headerr">
                <img className="setaHome" src={arrowLeft} alt="arrow-left" onClick={handleBotaoHome}/>
                <h2>{infoFollowers.length} Seguidores</h2>
            </div>
            {infoFollowers.map((infoFollower)=>{  
                return(
                    <div className="contemSeguidor" key={infoFollowers.id}>
                        <div className="contemInfoSeguidor">
                            <b className="amarelo"></b>
                            <img src={infoFollower.fotoPerfil} alt="Foto-perfil" />
                            <h2 className="nickSeguidor">{infoFollower.nick}</h2>
                        </div>
                        <img src={arrowRight} alt="Arrow-Right" className="verSeguidor" 
                        onClick={()=>handleBotaoVerPerfil(infoFollower.nick)} />
                    
                    </div>)            
            })}    
                    <Footer label="Seguidores" tamanho ={infoFollowers.length}/>
        </div>
    )

}

export default Seguidores;