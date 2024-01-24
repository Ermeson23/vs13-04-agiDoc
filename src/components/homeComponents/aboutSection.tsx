import './aboutSection.css';
import { LockKey, ChartLineUp, ArrowSquareOut, PersonArmsSpread} from '@phosphor-icons/react';
export default function AboutSection(){
    return(
        <div className='custom-about'>
            <h1> QUEM SOMOS? </h1>
            <div className='isolated-text'>
                <p>
                    Desafios no processo licitatório? 
                    O agiDoc surge como uma solução abrangente, 
                    focada em inovação e agilidade para transformar a gestão de contratos públicos. 
                    Esta poderosa ferramenta não apenas simplifica,
                    mas redefine a maneira como lidamos com licitações, priorizando eficiência e transparência.
                    Buscamos representar uma abordagem inovadora para a administração pública, 
                    proporcionando uma gestão de contratos mais eficiente e ágil. 
                </p>
            </div>
            <h2>NOSSOS VALORES</h2>
            <div className='values-container'>
                <div className='value' id='seguranca'>
                    <LockKey size={50} weight="fill" className='val-icon'/>
                    <span> SEGURANÇA </span>
                </div>

                <div className='value' id='desempenho'>
                    <ChartLineUp size={50} weight="fill"  className='val-icon'/>
                    <span> DESEMPENHO </span>
                </div>

                <div className='value' id='escalabilidade'>
                    <ArrowSquareOut size={50} weight="fill"  className='val-icon'/>
                    <span> ESCALABILIDADE </span>
                </div>

                <div className='value' id='acessibilidade'>
                    <PersonArmsSpread size={50} weight="fill"  className='val-icon'/>
                    <span> ACESSIBILIDADE </span>
                </div>

            </div>
         </div>
    )
}