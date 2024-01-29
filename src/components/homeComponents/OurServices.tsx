
import './OurServices.css';

export default function OurServices() {
    return (
        <>
        <div className='custom-section'>
            <h2 className='custom-title' tabIndex={9}>Nossos Serviços</h2>
            <div className="custom-row">
                <div className="custom-card" aria-label='card detalhando uma funcionalidade do agiDoc' tabIndex={10}>
                    <h2>Gerenciamento de Contratos</h2>
                    <p>Permitir a criação, edição, visualização e exclusão de contratos, renovação e controle/customização do fluxo do contrato.</p>
                    
                </div>
               
                <div className="custom-card" aria-label='card detalhando uma funcionalidade do agiDoc' tabIndex={11}>
                    <h2>Controle de Versionamento</h2>
                    <p>Histórico detalhado de alterações nos contratos e licitações, incluindo o rastreamento de documentos deletados</p>
                    
                </div>
                <div className="custom-card" aria-label='card detalhando uma funcionalidade do agiDoc'>
                    <h2>Gerenciamento de Licitações</h2>
                    <p>Permitir a criação, edição, visualização e exclusão de licitações, renovação e controle/customização do fluxo da licitação.</p>
                    
                </div>
                <div className="custom-card" aria-label='card detalhando uma funcionalidade do agiDoc' tabIndex={13}>
                    <h2>Realização de Assinaturas</h2>
                    <p>Centralização da atividade de assinar documentos e contratos para segurança e rastreabilidade.</p>
                    
                </div>
            </div>
        </div>
        
        </>
        
    )
}