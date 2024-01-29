import axios from 'axios';
import { createContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  cpf: string;
  email: string;
  password: string;
}

interface UserContextValue {
  user: User | null;
  getUser: (userId: string) => void;
  onLogin: (data: User) => void;
}

const UserContext = createContext<UserContextValue>({
  user: null,
  getUser: () => {},
  onLogin: () => {},
});

export const UserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useState<User | null>(null);

  const getUser = async (userId: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuário', error);
    }
  };

  const onLogin = (data: User) => {
    getUser(data.id);
  };

  return (
    <UserContext.Provider value={{ user, getUser, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
