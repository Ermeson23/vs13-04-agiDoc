import './aboutSection.css';
import { LockKey, ChartLineUp, ArrowSquareOut, PersonArmsSpread} from '@phosphor-icons/react';
export default function AboutSection(){
    return(
        <div className='custom-about'>
            <h1> QUEM SOMOS? </h1>
            <div className='isolated-text'>
                <p aria-label='texto informativo sobre o agiDoc'>
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
                <div className='value' id='seguranca' aria-label='um valor do agiDoc e seu ícone correspondente'>
                    <LockKey size={50} weight="fill" className='val-icon' aria-label='um cadeado, representando segurança'/>
                    <span> SEGURANÇA </span>
                </div>

                <div className='value' id='desempenho' aria-label='um valor do agiDoc e seu ícone correspondente'>
                    <ChartLineUp size={50} weight="fill"  className='val-icon' aria-label='um gráfico crescendo, representando desempenho'/>
                    <span> DESEMPENHO </span>
                </div>

                <div className='value' id='escalabilidade' aria-label='um valor do agiDoc e seu ícone correspondente'>
                    <ArrowSquareOut size={50} weight="fill"  className='val-icon' aria-label='uma seta para cima, representando escalabilidade'/>
                    <span> ESCALABILIDADE </span>
                </div>

                <div className='value' id='acessibilidade' aria-label='um valor do agiDoc e seu ícone correspondente'>
                    <PersonArmsSpread size={50} weight="fill"  className='val-icon' aria-label='uma pessoa de braços abertos, representando acessibilidade'/>
                    <span> ACESSIBILIDADE </span>
                </div>

            </div>
         </div>
    )
}