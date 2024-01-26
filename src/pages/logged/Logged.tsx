import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Logged.css';
import '../../App.css'
import {File, Info, Gear, PresentationChart, PenNib, FilePlus, FileSearch, ListMagnifyingGlass, PlusCircle } from '@phosphor-icons/react';

export default function Logged() {
    return (
        <div className="page-render-login page-render">
            <section className="header-section">
                <Header></Header>
            </section>
            <section className='easy-logged'>
                <h1 className='light-theme-h h1-logged'>Área logada</h1>
                <span className='greetings'>Olá, <strong className='nametxt'> Rafael </strong></span>
                <h2 className='light-theme-h h2-main'> ACESSO RÁPIDO </h2>
                <div className="custom-easy-acess">
                   
                    <a href="#contracts"><div className="custom-acess">
                        <File size={32} weight="fill" />
                        <p>CONTRATOS</p>
                    </div></a>
                    <a href="#analysis"><div className="custom-acess">
                        <PresentationChart size={32} weight="fill" />
                        <p>ANÁLISES</p>
                    </div></a>

                    <div className="custom-acess">
                        <Info size={32} weight="fill" />
                        <p>AJUDA</p>
                    </div>

                    <div className="custom-acess">

                        <Gear size={32} weight="fill" />

                        <p>CONFIGURAÇÕES DA CONTA</p>
                    </div>
                </div>
                </section>
                <section className='logged-dark-section'>
                <h1 className="h1-dark-logged">Menu</h1>
                <div className='divide-section'> 
                <h2 className="h2-dark-logged">CONTRATOS</h2>
                <div className='menu-cards-div'id="contracts">
                    <div className='custom-card-menu'>
                        <FilePlus className='icon-card-menu' size={24} weight="fill" />
                        <p>NOVO CONTRATO</p>
                     </div>
                    <div className='custom-card-menu'>
                        <PenNib className='icon-card-menu' size={24} weight="fill" />
                        <p> assinar contrato</p> 
                    </div>
                    <div className='custom-card-menu'>
                        <FileSearch className='icon-card-menu' size={24} weight="fill" />
                        <p> consultar contratos</p> 
                     </div>

                </div>

                </div>
                <div className='divide-section' id="analysis"> 
                <h2 className="h2-dark-logged">ANÁLISES</h2>
                <div className='menu-cards-div'>
                    <div className='custom-card-menu'>
                        <PlusCircle className='icon-card-menu' size={24} weight="fill" />
                        <p> NOVA ANÁLISE</p>   
                    </div>
                    <div className='custom-card-menu'>
                        <ListMagnifyingGlass className='icon-card-menu' size={24} weight="fill" />
                        <p> INSIGHTS</p>
                     </div>
                    <div className='custom-card-menu'>
                        <FileSearch className='icon-card-menu' size={24} weight="fill" />
                        <p> consultar análises</p> 
                     </div>


                </div>
                </div>


                <Footer></Footer>
                </section>
            
        </div>
    )

}
