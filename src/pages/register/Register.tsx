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
                    <input id="cpf" type="text" {...register('cpf', {
                        required: true, pattern: {
                            value: /^[0-9]{11}$/,
                            message: "O CPF deve ter exatamente 11 dígitos."
                        }
                    })} />
                    {errors.cpf && <span>{errors.cpf.message}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Seu e-mail:</label>
                    <input id="email" type="email" {...register('email', { required: true })} />
                    {errors.email && <span>Este campo é obrigatório</span>}
                </div>
                <div className="form-group">
                    <label>Senha:</label>
                    <input type="password" {...register('password', {
                        required: true, minLength: {
                            value: 6,
                            message: "A senha deve ter pelo menos 6 caracteres."
                        },
                        maxLength: {
                            value: 15,
                            message: "A senha não pode ter mais de 15 caracteres."
                        }
                    })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
                <div className="form-group">
                    <label>Confirmar a Senha:</label>
                    <input type="password" {...register('passwordConfirmation', {
                        required: true
                    })} />
                    {errors.passwordConfirmation && <span>Este campo é obrigatório.</span>}
                </div>
                <button type="submit">Criar</button>
            </form>
        </div>
    );
};

export default Register;