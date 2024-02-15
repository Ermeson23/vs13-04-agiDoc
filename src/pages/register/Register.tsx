import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser, UserRegistrationData } from '../../store/register/registerSlice';
import { User, LockKey, IdentificationCard, Envelope, Lock } from '@phosphor-icons/react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import "./Register.css";

interface RegisterForm extends UserRegistrationData {
  passwordConfirmation: string;
}

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    try {
      if (data.password !== data.passwordConfirmation) {
        alert('A senha e a confirmação de senha não coincidem');
        return;
      }

      dispatch(registerUser(data) as any);
      
    } catch (error) {
      alert('Usuário não cadastrado');
    }
  };

  return (
    <div className='page-render'>
     <Header></Header>
      <div className="register-container">
        <section className="main-sec-reg">
          <h1 tabIndex={30} className='light-theme-h'>Cadastrar usuário</h1>
          <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 tabIndex={31} className='title'>Cadastro</h2>
            <div className="form-group">
              <div className='input-label'>
                <label htmlFor="name">Nome:</label>
                <div className="icon-container">
                  <User className='login-icon' weight="fill" />
                </div>
                <input id="name" type="text" {...register('name', { required: true })} placeholder='Digite seu nome completo' tabIndex={32} />
              </div>
              {errors.name && <span tabIndex={33}>Este campo é obrigatório</span>}
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
                })} placeholder='Digite seu CPF' tabIndex={34} />
              </div>
              {errors.cpf && <span tabIndex={35}>{errors.cpf.message}</span>}
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
                })} placeholder='Digite seu e-mail' tabIndex={36} />
              </div>
              {errors.email && <span tabIndex={37}>{errors.email.message}</span>}
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
                })} placeholder='Digite sua senha' tabIndex={38} />
              </div>
              {errors.password && <span tabIndex={39}>{errors.password.message}</span>}
            </div>
            <div className="form-group">
              <div className='input-label'>
                <label>Confirmar a Senha:</label>
                <div className="icon-container">
                  <Lock className='login-icon' weight="fill" />
                </div>
                <input type="password" {...register('passwordConfirmation', { required: true })} placeholder='Confirme sua senha' tabIndex={40} />
              </div>
              {errors.passwordConfirmation && <span tabIndex={41}>Este campo é obrigatório</span>}
            </div>
            <button className="reg-button" type="submit" tabIndex={42}>Criar</button>
          </form>
        </section>
        </div>
      <Footer />
    </div>
  );
};

export default Register;
