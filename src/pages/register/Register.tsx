import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { registerUser } from '../../store/register/registerSlice';
import Header from '../../components/header/Header';
import { User, LockKey, IdentificationCard, Envelope, Lock } from '@phosphor-icons/react';
import '../../App.css';
import './Register.css';
import Footer from '../../components/footer/Footer';
import axios from 'axios';

interface Register {
  id: string,
  name: string;
  cpf: string,
  email: string
  password: string;
  passwordConfirmation: string
}

const Register = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Register>();
  const navigate = useNavigate();
  const status = useSelector((state: RootState) => state.register.status); 

  const onSubmit: SubmitHandler<Register> = async (data) => {

    const { passwordConfirmation, ...dataToSend } = data;

    try {

      if (dataToSend.password !== passwordConfirmation) {
        alert('A senha e a confirmação de senha não coincidem');
        return;
      }

      const emailExists = await axios.get('http://localhost:3001/users', {
        params: { email: dataToSend.email }
      });

      if (emailExists.data.length > 0) {
        alert('Email já cadastrado!');
        return;
      }

      dispatch(registerUser(dataToSend));
    } catch (error) {
      alert('Usuário não cadastrado');
    }
  };

  // Adicione lógica para redirecionar com base no status de registro

  return (
    <div className='page-render'>
      <div className="register-container">
        <section className="header-section">
          <Header></Header>
        </section >
        <section className="main-sec-reg">
        <h1 tabIndex={30} className='light-theme-h'>Cadastrar usuário</h1>
        <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 tabIndex={31} className='title'>Cadastro</h2>
          {/* Restante do formulário */}
          <button className="reg-button" type="submit" tabIndex={42}>Criar</button>
        </form>
        </section>
      </div>
      
      <Footer></Footer>
    
    </div>
  );
};

export default Register;
