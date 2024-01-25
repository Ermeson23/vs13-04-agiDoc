import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import Header from '../../components/header/Header';
import { User, LockKey, IdentificationCard, Envelope, Lock} from '@phosphor-icons/react';
import '../../App.css';
import './Register.css';
import Footer from '../../components/footer/Footer';


interface UserRegistrationResponse {
  id: number;
  error?: string;
}

interface Register {
  name: string;
  cpf: string,
  email: string
  password: string;
  passwordConfirmation: string
}

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Register>();
  
  const onSubmit: SubmitHandler<Register> = async (data) => {
    try {
      const response: AxiosResponse<UserRegistrationResponse> = await axios.post('http://localhost:3001/users', data);
      alert(`Usuário cadastrado com o ID:', ${response.data.id}`);
      const navigate = useNavigate();
      navigate('/login');
      reset();
    } catch (error) {
      alert('Usuário não cadastrado');
    }
  };

  return (
    <div className='page-render'>
    <div className="register-container">
      <section className="header-section"> 
        <Header></Header>
      </section>
      <section className='main-section main-sec-reg'>
      <h1>Cadastrar usuário</h1>
      <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className='title'>Cadastro</h2>
        <div className="form-group">
          <div className='input-label'>
            <label htmlFor="name">Nome:</label>
            <div className="icon-container">
                <User className='login-icon' weight="fill" />
                </div>
            <input id="name" type="text" {...register('name', { required: true })} placeholder='Digite seu nome completo'/>
          </div>
          {errors.name && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
          <div className='input-label'>
            <label htmlFor="cpf">CPF:</label>
            <div className="icon-container">
                <IdentificationCard className='login-icon' weight="fill" />
                </div>
          <input id="cpf" type="text" {...register('cpf', { required: true })} placeholder='Digite seu CPF'/>
          </div>
          {errors.cpf && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
          <div className='input-label'>
          <label htmlFor="email">Seu e-mail:</label>
          <div className="icon-container">
              <Envelope className='login-icon' weight="fill" />
              </div>
          <input id="email" type="text" {...register('email', { required: true })} placeholder='Digite seu e-mail'/>
          </div>
          {errors.email && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
        <div className='input-label'>
          <label>Senha:</label>
          <div className="icon-container">
              <LockKey className='login-icon' weight="fill" />
              </div>
          <input type="password" {...register('password', { required: true })} placeholder='Digite sua senha' />
          </div>
          {errors.password && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
        <div className='input-label'>
          <label>Confirmar a Senha:</label>
          <div className="icon-container">
              <Lock className='login-icon' weight="fill" />
              </div>
          <input type="password" {...register('passwordConfirmation', { required: true })} placeholder='Confirme sua senha'/>
          </div>
          {errors.passwordConfirmation && <span>Este campo é obrigatório</span>}
        </div>
        <button className="reg-button" type="submit">Criar</button>
      </form>
      </section>
    </div>
    
    <Footer></Footer>
    </div>
  );
};

export default Register;