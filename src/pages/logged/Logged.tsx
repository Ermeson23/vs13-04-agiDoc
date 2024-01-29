import { useContext, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { File, Info, PresentationChart, PenNib, FilePlus, FileSearch, ListMagnifyingGlass, PlusCircle } from '@phosphor-icons/react';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './Logged.css';
import '../../App.css'
import UserContext from '../context/UserContext';

export default function Logged() {

    const [openHelp, setOpenHelp] = useState(false);
    const handleOpen = () => setOpenHelp(true);
    const handleClose = () => setOpenHelp(false);

    const [openSettings, setOpenSettings] = useState(false);
    const handleOpenSettings = () => setOpenSettings(true);
    const handleCloseSettings = () => setOpenSettings(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'var(--blue)',
        color: '#fff',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 5
    };

    const { user } = useContext(UserContext);

    return (
        <div className="page-render-login page-render">
            <section className="header-section">
                <Header></Header>
            </section>
            <section className='easy-logged'>
                <h1 className='light-theme-h h1-logged'>Área logada</h1>
                <span className='greetings'>Olá, <strong className='nametxt'> { user?.name } </strong></span>
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

                    <Modal
                        open={openHelp}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Olá, como podemos te ajudar?
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <p>
                                    <ol>
                                        <li>
                                            <strong>Perguntas Frequentes (FAQ):</strong>
                                            <p>Encontre respostas rápidas para as perguntas mais comuns em nossa seção de Perguntas Frequentes. Se sua dúvida não estiver lá, sinta-se à vontade para entrar em contato conosco.</p>

                                            <strong>E-mail:</strong> <span>support@agidoc.com</span>
                                            <p>
                                                Nossa equipe de suporte está disponível para responder às suas perguntas de segunda a sexta, das 9h às 18h. Aguarde um retorno dentro de 24 horas úteis.
                                            </p>
                                        </li>
                                        <li>
                                            <strong>Suporte Técnico:</strong>
                                            <p>Caso precise de assistência mais personalizada, nossa equipe de suporte técnico está pronta para ajudar. Envie-nos uma mensagem e responderemos o mais rápido possível.</p>
                                        </li>
                                    </ol>
                                </p>
                            </Typography>
                        </Box>
                    </Modal>
                    <a href="#help" onClick={handleOpen}><div className="custom-acess">
                        <Info size={32} weight="fill" />
                        <p>AJUDA</p>
                    </div></a>

                    <Modal
                        open={openSettings}
                        onClose={handleCloseSettings}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Bem-vindo às configurações da conta, como podemos te ajudar?
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <p className="custom-links">
                                    <ol>
                                        <li>
                                            <a href="#">Perfil do Usuário</a>
                                        </li>
                                        <li>
                                            <a href="#">Preferências de Notificação</a>
                                        </li>
                                        <li>
                                            <a href="#">Configurações de Privacidade</a>
                                        </li>
                                        <li>
                                            <a href="#">Idioma e Região</a>
                                        </li>
                                        <li>
                                            <a href="#">Histórico de Atividades</a>
                                        </li>
                                    </ol>
                                </p>
                            </Typography>
                        </Box>
                    </Modal>
                    <a href="#account-settings" onClick={handleOpenSettings}><div className="custom-acess">
                        <Info size={32} weight="fill" />
                        <p>CONFIGURAÇÕES DA CONTA</p>
                    </div></a>
                </div>
            </section>
            <section className='logged-dark-section'>
                <h1 className="h1-dark-logged">Menu</h1>
                <div className='divide-section'>
                    <h2 className="h2-dark-logged">CONTRATOS</h2>
                    <div className='menu-cards-div' id="contracts">

                        <a href="#new-contract">
                            <div className='custom-card-menu'>
                                <FilePlus className='icon-card-menu' size={24} weight="fill" />
                                <p>NOVO CONTRATO</p>
                            </div>
                        </a>
                        <a href="#contract-assign">
                            <div className='custom-card-menu'>
                                <PenNib className='icon-card-menu' size={24} weight="fill" />
                                <p> assinar contrato</p>
                            </div>
                        </a>
                        <a href="#consult-contract">
                            <div className='custom-card-menu'>
                                <FileSearch className='icon-card-menu' size={24} weight="fill" />
                                <p> consultar contratos</p>
                            </div>
                        </a>

                    </div>

                </div>
                <div className='divide-section' id="analysis">
                    <h2 className="h2-dark-logged">ANÁLISES</h2>
                    <div className='menu-cards-div'>
                        <a href="#new-analyze">
                            <div className='custom-card-menu'>
                                <PlusCircle className='icon-card-menu' size={24} weight="fill" />
                                <p> NOVA ANÁLISE</p>
                            </div>
                        </a>
                        <a href="#insight">
                            <div className='custom-card-menu'>
                                <ListMagnifyingGlass className='icon-card-menu' size={24} weight="fill" />
                                <p> INSIGHTS</p>
                            </div>
                        </a>
                        <a href="#consult-analyze">
                            <div className='custom-card-menu'>
                                <FileSearch className='icon-card-menu' size={24} weight="fill" />
                                <p> consultar análises</p>
                            </div>
                        </a>
                    </div>
                </div>


                <Footer></Footer>
            </section>

        </div>
    )

}
