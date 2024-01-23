import './introSection.css';
import agidocimg from '../../assets/agidoc-img.webp';

export default function IntroSection(){
  return(
    <div className="custom-intro">
        <div className="intro-text">
            <div className='isolate-titles'> 
                <h1> AGIDOC </h1>
                <h2> TRAZENDO AGILIDADE PARA SEUS DOCUMENTOS</h2>
            </div>
            
            <p>
                Descubra o poder do agiDoc - Uma solução ágil e inovadora para simplificar o 
                gerenciamento de contratos públicos. 
                Torne a gestão governamental mais eficiente e descomplicada com agiDoc
            </p>
            <button>SAIBA MAIS</button>
        </div>
        <div className='intro-img'> 
            <img src={agidocimg} className='agidoc-img' alt='imagem representando um homem negro e uma mulher branca dando um aperto de mão com  um contrato ao fundo. fundo decorativo de dois círculos nas cores da paleta agidoc'></img>
        </div>

    </div>
  )
}