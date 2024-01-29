import { useContext } from 'react';
import UserContext from './UserContext';

const useAuth = () => {
  const { user } = useContext(UserContext);

  const isAuthenticated = user !== null;

  return {
    isAuthenticated,
    user,
  };
};

export default useAuth;
