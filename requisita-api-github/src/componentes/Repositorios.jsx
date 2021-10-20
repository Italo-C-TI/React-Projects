import React,{useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Footer from './Footer.jsx';
import arrowLeft from '../assets/arrow-left.svg'
import lockClose from '../assets/lock-close.svg'
import lockOpen from '../assets/lock-open.svg'
import star from '../assets/star.svg'

const Repo = ()=>{
    const params = useParams();
    const history = useHistory();
    
    const [infoRepos,setInfoRepos] = useState([{
        nomeRepo: "",
        numStars: 0,
        descreveRepo:""
      }])
      
      const handleBotaoHome = ()=>{
        history.push(`/${params.perfil}`);
      }
    
      useEffect(()=>{
        console.log("meu perfil Mudou");
        const fetchRepos = async ()=>{
            const {data} = await axios.get(`https://api.github.com/users/${params.perfil}/repos`);
            const allRepos = [];
            data.map(Repo=>{
                const {name,description,stargazers_count} = Repo;
                const formatData = {                
                    nomeRepo: name,
                    descreveRepo:description,
                    numStars: stargazers_count
                }
                allRepos.push(formatData);
            })
            setInfoRepos(allRepos)
        }
        
        fetchRepos();  
      },[])
    return(
        <div className="container">
            <div className="headerr">
                <img className="setaHome" src={arrowLeft} alt="arrow-left" onClick={handleBotaoHome}/>
                <h2>{infoRepos.length} Repositorios</h2>
            </div>
            
            {infoRepos.map((infoRepo)=>{   
                return(       
                    <div className="contemRepo">
                        <div className="contemNomeRepo">
                            <b className="amarelo"></b>
                            <h2 className="nomeRepo">{infoRepo.nomeRepo}</h2>
                        </div>
                    <p className="descreveRepo">{infoRepo.descreveRepo}</p>
                    
                    <div className="contemInteragiveis">
                        <span className="row"><img src={star} alt="star" /> <p>{infoRepo.numStars}</p> </span>    
                        <span className="row"><img src={lockOpen} alt="lock-open" /> <img src={lockClose} alt="lock-close" /> </span>    
                    </div>    
                    </div>
                )
        })}
        <Footer label="Repos" tamanho={infoRepos.length}/>
        </div>
    )
}

export default Repo;