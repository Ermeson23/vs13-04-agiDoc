import './introSection.css';
import agidocimg from '../../assets/agidoc-img.webp';

export default function IntroSection(){
  return(
    <div className="custom-intro">
        <div className="intro-text">
            <div className='isolate-titles'> 
                <h1 tabIndex={5}> AGIDOC </h1>
                <h2 tabIndex={6}> TRAZENDO AGILIDADE PARA SEUS DOCUMENTOS</h2>
            </div>
            <div className='isolate-desc'>
            <p tabIndex={7} aria-label='texto introdutório sobre o agiDoc'>
                Descubra o poder do agiDoc - Uma solução ágil e inovadora para simplificar o 
                gerenciamento de contratos públicos. 
                Torne a gestão governamental mais eficiente e descomplicada com agiDoc
            </p>
            </div>
            <a tabIndex={8} href='#about'><button aria-label='botão que te leva a seção about'>SAIBA MAIS</button></a>
        </div>
        <div className='intro-img'> 
            <img src={agidocimg} className='agidoc-img' loading='lazy' alt='imagem representando um homem negro e uma mulher branca dando um aperto de mão com  um contrato ao fundo. fundo decorativo de dois círculos nas cores da paleta agidoc'></img>
        </div>

    </div>
  )
}