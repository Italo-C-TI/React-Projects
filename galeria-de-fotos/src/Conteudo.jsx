import './App.css';
import fecharModal from './assets/close-modal.svg';
import like from './assets/like.svg';
import anterior from './assets/prev.svg';
import proximo from './assets/next.svg';
import foto1 from './assets/gallery/image 1.png';
import foto2 from './assets/gallery/image 2.png';
import foto3 from './assets/gallery/image 3.png';
import foto4 from './assets/gallery/image 4.png';
import foto5 from './assets/gallery/image 5.png';
import foto6 from './assets/gallery/image 6.png';
import foto7 from './assets/gallery/image 7.png';
import foto8 from './assets/gallery/image 8.png';
import foto9 from './assets/gallery/image 9.png';
import foto10 from './assets/gallery/image 10.png';
import { useState } from 'react';
function Conteudo(){
    const [galeria,setGaleria] = useState([
        {   
        id:Math.random(),
        imagem:foto1,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto2,
        curtida:false  
        },
       {
        id:Math.random(),
        imagem:foto3,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto4,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto5,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto6,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto7,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto8,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto9,
        curtida:false  
        },
        {
        id:Math.random(),
        imagem:foto10,
        curtida:false  
        }
    ])
    const [mostraModal,setMostraModal] = useState("");
    const [modalAberto,setModalAberto] = useState(false);
    const handleMostraModal = (imagem)=>{
        setMostraModal(imagem);
        setModalAberto(!modalAberto);
    }
    const handleEscondeModal = ()=>{
        setModalAberto(!modalAberto);
    }
    const handleCurtida = ()=>{
        const alteraGaleria = [...galeria];
        alteraGaleria.forEach(function (imagem){
            if(imagem.imagem===mostraModal){
                imagem.curtida= !imagem.curtida;
                setGaleria(alteraGaleria);
            }
        })
    }
    const handleModalAnterior =()=>{
        let indexAtual;
        for(let i=0;i<galeria.length;i++){
           if(galeria[i].imagem===mostraModal){
            indexAtual = i;
           }
        }
        if(indexAtual-1>=0){
            setMostraModal(galeria[indexAtual-1].imagem);
        }
    }
    const handleProximoModal = ()=>{
        let indexAtual;
        for(let i=0;i<galeria.length;i++){
           if(galeria[i].imagem===mostraModal){
            indexAtual = i;
           }
        }
        if(indexAtual+1 <galeria.length){
            setMostraModal(galeria[indexAtual+1].imagem);
        }
    }
    return(  
        <div className="conteudo">
            <h1>Início</h1>
            <div className="galeria">
                <div className="row">
                    {galeria.map(postagem=>{
                        return(    
                            <div className="column">
                                <img className={postagem.curtida?"like":"like none"} src={like} alt="coração-aceso"/>
                                <img className="foto" src={postagem.imagem} alt="imagem da galeria" id={postagem.id} onClick={()=>handleMostraModal(postagem.imagem)}/>
                                <div className="cardInfos">
                                    <p>Lorem ipsum</p>
                                    <span>há 1 mês</span>
                                </div>
                            </div>              
                        )}
                    )}
            </div>
        </div>
        <div id={modalAberto?"":"modalHidden"} className="fundoModal" >
            <img className="fechaModal" src={fecharModal} alt="fecha-modal"onClick={handleEscondeModal}/> 
            <div className="row conteudoModal"/>
                <span className="contemImagemModal">
                    <img className="anterior" src={anterior} alt="seta-anterior"onClick={handleModalAnterior}/>
                    <img className="imageModal" src={mostraModal}onDoubleClick={handleCurtida}/> 
                    <img className={galeria.find(x=>x.imagem===mostraModal && x.curtida)?"like":"like none"} src={like} alt="coração-aceso"/>
                    <img className="proximo" src={proximo} alt="seta-proximo" onClick={handleProximoModal}/>
                </span>
        </div>
      </div>
    )
}

export default Conteudo;