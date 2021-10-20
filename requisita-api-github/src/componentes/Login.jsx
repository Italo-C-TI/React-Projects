import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import logoGitHub from '../assets/github.svg'
import arrowRightBlack from '../assets/arrow-right-black.svg'

const Login = ()=>{
    const history = useHistory();
    const [message,setMessage] = useState("");
    const [inputData,setInputData] = useState("");
    
    const handleEnviarClick = (e)=>{
      e.preventDefault();
      const verificaPerfil = async ()=>{
        const {data} = await axios.get(`https://api.github.com/users/${inputData}`);
        history.push(`/${inputData}`)
      }
      verificaPerfil();
  }
    const handleInputChange = (e)=>{
      setInputData(e.target.value);
    }
    return(
    <div className="login">
      <img className="github " src={logoGitHub} alt="logo-Github"/>
      <form onSubmit={inputData ===""? ()=>setMessage("Campo Obrigatorio")
      :handleEnviarClick}>
          <input className="usuario" type="text" placeholder="Usuário" 
          onKeyDown={()=>setMessage("")} onChange={handleInputChange}
          value={inputData}
          />
  
          <span className="mensagem">{message}</span>
      </form>
      <button className="entrar" onClick={inputData ===""? ()=>setMessage("Campo Obrigatorio")
      :handleEnviarClick} >ENTRAR<img src={arrowRightBlack} alt="arrow-right" /></button>
      
  </div> 
    )
}
export default Login;