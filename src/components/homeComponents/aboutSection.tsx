import './aboutSection.css';
import { LockKey, ChartLineUp, ArrowSquareOut, PersonArmsSpread} from '@phosphor-icons/react';
export default function AboutSection(){
    return(
        <div className='custom-about'>
            <h2 tabIndex={14}> QUEM SOMOS? </h2>
            <div className='isolated-text' tabIndex={15}>
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
            <h2 tabIndex={16}>NOSSOS VALORES</h2>
            <div className='values-container'>
                <div className='value' id='seguranca'>
                    <LockKey size={50} weight="fill" className='val-icon'/>
                    <span tabIndex={17}> SEGURANÇA </span>
                </div>

                <div className='value' id='desempenho'>
                    <ChartLineUp size={50} weight="fill"  className='val-icon'/>
                    <span tabIndex={18}> DESEMPENHO </span>
                </div>

                <div className='value' id='escalabilidade'>
                    <ArrowSquareOut size={50} weight="fill"  className='val-icon'/>
                    <span tabIndex={19}> ESCALABILIDADE </span>
                </div>

                <div className='value' id='acessibilidade'>
                    <PersonArmsSpread size={50} weight="fill"  className='val-icon'/>
                    <span tabIndex={20}> ACESSIBILIDADE </span>
                </div>

            </div>
         </div>
    )
}