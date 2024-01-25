import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

import '../../index.css';
import './Register.css';

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
    <div className="register-container">
      <h1>Cadastrar usuário</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='title'>Cadastro</h2>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" {...register('name', { required: true })} />
          {errors.name && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input id="cpf" type="text" {...register('cpf', { required: true })} />
          {errors.cpf && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Seu e-mail:</label>
          <input id="email" type="text" {...register('email', { required: true })} />
          {errors.email && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>Este campo é obrigatório</span>}
        </div>
        <div className="form-group">
          <label>Confirmar a Senha:</label>
          <input type="password" {...register('passwordConfirmation', { required: true })} />
          {errors.passwordConfirmation && <span>Este campo é obrigatório</span>}
        </div>
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default Register;