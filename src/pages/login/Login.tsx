import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Footer from '../../components/footer/Footer';
import '../../App.css'
import Header from '../../components/header/Header';
import './Login.css';
import { User, LockKey} from '@phosphor-icons/react';

interface Form {
  userName: string;
  password: string;
}

const schema = yup.object().shape({
  userName: yup.string().required('O nome é obrigatório'),
  password: yup.string().required('A senha é obrigatória'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: Form) => {
    try {
      const response = await axios.get(`http://localhost:3001/users?email=${data.userName}&password=${data.password}`);

      if (response.data.length > 0) {
        alert(`Login com sucesso: ${response.data[0].name}`);
        navigate('/');
      } else {
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Login falhou:', error);
    }
  };

  return (
    <div className='page-render-login page-render'>
      <section className="header-section"><Header /></section>
      <section className='main-section main-sec'>
      <h1 className='light-theme-h'>LOGIN</h1>
      <div className='custom-row'>
        <div className='custom-form'>
          <h2 className='title'>Usuário e senha</h2>
          <form className="forms" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Endereço de e-mail:</label>
              <div className="icon-container">
              <User className='login-icon' weight="fill" />
              </div>
              
              <input
                type="text"
                placeholder="Endereço de e-mail"
                {...register('userName')}
              />
              
              </div>
              {errors.userName && <p>{errors.userName.message}</p>}
            <div>
              <label>Senha:</label>
              <div className="icon-container">
              <LockKey className='login-icon' weight="fill" />
              </div>

              <input
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
              
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <div>
            <button className="button-enter" type="submit">Entrar</button>
            </div>
            <div className='isolated-btns'>
              <button>Esqueci minha senha</button>
              <Link to='/register'><button>Criar nova conta</button></Link>
            </div>
          </form>
        </div>
      </div>
      </section>
      <Footer></Footer>
    </div>
    
  );
};

export default Login;