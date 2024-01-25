import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import Header from '../../components/header/Header';
import { User, LockKey, IdentificationCard, Envelope, Lock } from '@phosphor-icons/react';
import '../../App.css';
import './Register.css';

interface UserRegistrationResponse {
  id: number;
  error?: string;
}

interface Register {
  id: string,
  name: string;
  cpf: string,
  email: string
  password: string;
  passwordConfirmation: string
}

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Register>();
  const navigate = useNavigate();

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

      const response: AxiosResponse<UserRegistrationResponse> = await axios.post('http://localhost:3001/users', dataToSend);
      alert(`Usuário cadastrado com o ID:', ${response.data.id}`);
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
        <h1 className='light-theme-h'>Cadastrar usuário</h1>
        <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className='title'>Cadastro</h2>
          <div className="form-group">
            <div className='input-label'>
              <label htmlFor="name">Nome:</label>
              <div className="icon-container">
                <User className='login-icon' weight="fill" />
              </div>
              <input id="name" type="text" {...register('name', { required: true })} placeholder='Digite seu nome completo' />
            </div>
            {errors.name && <span>Este campo é obrigatório</span>}
          </div>
          <div className="form-group">
            <div className='input-label'>
              <label htmlFor="cpf">CPF:</label>
              <div className="icon-container">
                <IdentificationCard className='login-icon' weight="fill" />
              </div>
              <input id="cpf" type="text" {...register('cpf', {
                required: true, pattern: {
                  value: /^[0-9]{11}$/,
                  message: "O CPF deve ter exatamente 11 dígitos."
                }
              })} placeholder='Digite seu CPF' />
            </div>
            {errors.cpf && <span>{errors.cpf.message}</span>}
          </div>
          <div className="form-group">
            <div className='input-label'>
              <label htmlFor="email">Seu e-mail:</label>
              <div className="icon-container">
                <Envelope className='login-icon' weight="fill" />
              </div>
              <input id="email" type="email" {...register('email', {
                required: true, minLength: {
                  value: 6,
                  message: "O e-mail deve ter no mínimo 6 caracteres"
                },
                maxLength: {
                  value: 30,
                  message: "O e-mail não pode ter mais de 30 caracteres."
                }
              })} placeholder='Digite seu e-mail' />
            </div>
            {errors.email && <span>{ errors.email.message }</span>}
          </div>
          <div className="form-group">
            <div className='input-label'>
              <label>Senha:</label>
              <div className="icon-container">
                <LockKey className='login-icon' weight="fill" />
              </div>
              <input type="password" {...register('password', {
                required: true, minLength: {
                  value: 6,
                  message: "A senha deve ter pelo menos 6 caracteres."
                },
                maxLength: {
                  value: 15,
                  message: "A senha não pode ter mais de 15 caracteres."
                }
              })} placeholder='Digite sua senha' />
            </div>
            {errors.password && <span>{ errors.password.message }</span>}
          </div>
          <div className="form-group">
            <div className='input-label'>
              <label>Confirmar a Senha:</label>
              <div className="icon-container">
                <Lock className='login-icon' weight="fill" />
              </div>
              <input type="password" {...register('passwordConfirmation', { required: true })} placeholder='Confirme sua senha' />
            </div>
            {errors.passwordConfirmation && <span>Este campo é obrigatório</span>}
          </div>
          <button className="reg-button" type="submit">Criar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;