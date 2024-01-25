import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../../components/header/Header';
import './Login.css';
import '../../index.css';

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
      const response = await axios.get(
        `http://localhost:3001/users?username=${data.userName}&password=${data.password}`
      );
      if (response.data.length > 0) {
        alert(`Login com sucesso:', ${response.data[0].id}`);
        navigate('/');
      } else {
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Login falhou:', error);
    }
  };

  return (
    <div className='page-render-login'>
      <div className="header-section"><Header /></div>
      <h1>LOGIN</h1>
      <div className='custom-row'>
        <div className='custom-form'>
          <h2 className='title'>Usuário e senha</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Endereço de e-mail:</label>
              <div className="icon-container">
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.8652 24.5034C25.7774 24.6555 25.6512 24.7817 25.4991 24.8695C25.347 24.9573 25.1746 25.0034 24.999 25.0034H0.998975C0.823525 25.0032 0.651211 24.9569 0.499334 24.869C0.347458 24.7812 0.221365 24.6549 0.133718 24.503C0.0460713 24.351 -4.50103e-05 24.1786 3.29647e-08 24.0031C4.50762e-05 23.8277 0.0462498 23.6553 0.133975 23.5034C2.03772 20.2122 4.97147 17.8521 8.39522 16.7334C6.70168 15.7252 5.38591 14.189 4.64996 12.3606C3.91401 10.5323 3.79858 8.5129 4.3214 6.6126C4.84422 4.71229 5.97638 3.03614 7.54401 1.84156C9.11164 0.64697 11.0281 0 12.999 0C14.9699 0 16.8863 0.64697 18.4539 1.84156C20.0216 3.03614 21.1537 4.71229 21.6765 6.6126C22.1994 8.5129 22.0839 10.5323 21.348 12.3606C20.612 14.189 19.2963 15.7252 17.6027 16.7334C21.0265 17.8521 23.9602 20.2122 25.864 23.5034C25.9519 23.6553 25.9984 23.8277 25.9986 24.0032C25.9988 24.1788 25.9528 24.3513 25.8652 24.5034Z" fill="#8BAAAD" />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Endereço de e-mail"
                {...register('userName')}
              />
              {errors.userName && <p>{errors.userName.message}</p>}
            </div>
            <div>
              <label>Senha:</label>
              <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 9H18V6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6V9H2C1.46957 9 0.960859 9.21071 0.585786 9.58579C0.210714 9.96086 0 10.4696 0 11V25C0 25.5304 0.210714 26.0391 0.585786 26.4142C0.960859 26.7893 1.46957 27 2 27H22C22.5304 27 23.0391 26.7893 23.4142 26.4142C23.7893 26.0391 24 25.5304 24 25V11C24 10.4696 23.7893 9.96086 23.4142 9.58579C23.0391 9.21071 22.5304 9 22 9ZM13 18.8288V22C13 22.2652 12.8946 22.5196 12.7071 22.7071C12.5196 22.8946 12.2652 23 12 23C11.7348 23 11.4804 22.8946 11.2929 22.7071C11.1054 22.5196 11 22.2652 11 22V18.8288C10.3328 18.5929 9.77045 18.1287 9.41237 17.5183C9.05429 16.9079 8.92353 16.1905 9.0432 15.493C9.16288 14.7955 9.52527 14.1628 10.0663 13.7066C10.6074 13.2505 11.2923 13.0003 12 13.0003C12.7077 13.0003 13.3926 13.2505 13.9337 13.7066C14.4747 14.1628 14.8371 14.7955 14.9568 15.493C15.0765 16.1905 14.9457 16.9079 14.5876 17.5183C14.2296 18.1287 13.6672 18.5929 13 18.8288ZM16 9H8V6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6V9Z" fill="#8BAAAD" />
              </svg>

              <input
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Entrar</button>
            <div>
              <button>Esqueci minha senha</button>
              <button>Criar nova conta</button>
            </div>
          </form>
        </div>
        <div className='custom-form'>
          <h2 className='title'>Certificado Digital</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Para realizar autenticação com
              certificado digital clique na
              imagem abaixo.</p>

            <svg width="96" height="71" viewBox="0 0 96 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_85_210)">
                <path d="M85.7138 16.0317V5.24984C85.7138 3.8575 85.0516 2.52218 83.8728 1.53764C82.694 0.553107 81.0952 0 79.4282 0H10.2857C8.61861 0 7.01983 0.553107 5.84103 1.53764C4.66224 2.52218 4 3.8575 4 5.24984V47.2486C4 48.6409 4.66224 49.9762 5.84103 50.9608C7.01983 51.9453 8.61861 52.4984 10.2857 52.4984H54.2854V60.3732C54.285 60.8209 54.4218 61.2612 54.6826 61.6523C54.9433 62.0434 55.3196 62.3723 55.7755 62.6077C56.2313 62.8431 56.7517 62.9773 57.2872 62.9974C57.8227 63.0174 58.3554 62.9228 58.8347 62.7225L69.9996 58.0567L81.1646 62.7225C81.6439 62.9228 82.1766 63.0174 82.7121 62.9974C83.2475 62.9773 83.7679 62.8431 84.2238 62.6077C84.6797 62.3723 85.0559 62.0434 85.3167 61.6523C85.5775 61.2612 85.7142 60.8209 85.7138 60.3732V41.7166C89.7428 38.2889 92 33.6775 92 28.8741C92 24.0708 89.7428 19.4594 85.7138 16.0317ZM44.8569 34.124H22.857C22.0235 34.124 21.2241 33.8474 20.6347 33.3552C20.0453 32.8629 19.7142 32.1952 19.7142 31.4991C19.7142 30.8029 20.0453 30.1352 20.6347 29.643C21.2241 29.1507 22.0235 28.8741 22.857 28.8741H44.8569C45.6904 28.8741 46.4898 29.1507 47.0792 29.643C47.6686 30.1352 47.9998 30.8029 47.9998 31.4991C47.9998 32.1952 47.6686 32.8629 47.0792 33.3552C46.4898 33.8474 45.6904 34.124 44.8569 34.124ZM44.8569 23.6243H22.857C22.0235 23.6243 21.2241 23.3477 20.6347 22.8555C20.0453 22.3632 19.7142 21.6955 19.7142 20.9994C19.7142 20.3032 20.0453 19.6355 20.6347 19.1433C21.2241 18.651 22.0235 18.3745 22.857 18.3745H44.8569C45.6904 18.3745 46.4898 18.651 47.0792 19.1433C47.6686 19.6355 47.9998 20.3032 47.9998 20.9994C47.9998 21.6955 47.6686 22.3632 47.0792 22.8555C46.4898 23.3477 45.6904 23.6243 44.8569 23.6243ZM79.4282 56.1274L71.4061 52.774C70.9694 52.5916 70.4879 52.4966 69.9996 52.4966C69.5114 52.4966 69.0298 52.5916 68.5932 52.774L60.5711 56.1274V45.4735C63.5173 46.6422 66.738 47.2486 69.9996 47.2486C73.2612 47.2486 76.482 46.6422 79.4282 45.4735V56.1274ZM69.9996 41.9987C66.8917 41.9987 63.8535 41.229 61.2693 39.7868C58.6851 38.3447 56.671 36.2949 55.4816 33.8967C54.2922 31.4985 53.981 28.8596 54.5874 26.3137C55.1937 23.7677 56.6903 21.4291 58.888 19.5936C61.0857 17.7581 63.8857 16.5081 66.9339 16.0017C69.9822 15.4953 73.1418 15.7552 76.0132 16.7486C78.8846 17.7419 81.3388 19.4242 83.0655 21.5825C84.7922 23.7408 85.7138 26.2783 85.7138 28.8741C85.7138 32.355 84.0582 35.6933 81.1113 38.1546C78.1643 40.616 74.1673 41.9987 69.9996 41.9987Z" fill="#8BAAAD" />
              </g>
              <defs>
                <filter id="filter0_d_85_210" x="0" y="0" width="96" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_85_210" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_85_210" result="shape" />
                </filter>
              </defs>
            </svg>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;