import type { FC, ReactNode } from 'react';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import FirstPage from '../assets/components/FirstPage';
import { useRecoilState } from 'recoil';
import{userState} from '../atoms/Atom'

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props;

  const [user] = useRecoilState(userState)
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>();

  if (!user) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }

    return <FirstPage />;
  }


  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;