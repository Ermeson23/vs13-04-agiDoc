import { Link } from 'react-router-dom';

import './OurServices.css';

export default function OurServices() {
    return (
        <>
        <div className='custom-section'>
            <h2 className='custom-title'>Nossos Serviços</h2>
            <div className="custom-row">
                <div className="custom-card">
                    <h2>Gerenciamento de Contratos</h2>
                    <p>Permitir a criação, edição, visualização e exclusão de contratos, renovação e controle/customização do fluxo do contrato.</p>
                    <Link className="custom-link" to='/'>Saiba mais</Link>
                </div>
                <div className="custom-card">
                    <h2>Gerenciamento de Contratos</h2>
                    <p>Permitir a criação, edição, visualização e exclusão de contratos, renovação e controle/customização do fluxo do contrato.</p>
                    <Link className="custom-link" to='/'>Saiba mais</Link>
                </div>
                <div className="custom-card">
                    <h2>Gerenciamento de Contratos</h2>
                    <p>Permitir a criação, edição, visualização e exclusão de contratos, renovação e controle/customização do fluxo do contrato.</p>
                    <Link className="custom-link" to='/'>Saiba mais</Link>
                </div>
                <div className="custom-card">
                    <h2>Gerenciamento de Contratos</h2>
                    <p>Permitir a criação, edição, visualização e exclusão de contratos, renovação e controle/customização do fluxo do contrato.</p>
                    <Link className="custom-link" to='/'>Saiba mais</Link>
                </div>
            </div>
        </div>
        </>
    )
}