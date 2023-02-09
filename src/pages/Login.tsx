import React, {
  useEffect,
  useState,
} from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase';
import {
  Button,
  Input,
  LoginContainer,
} from './LoginStyles';

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => { if (user) navigate("/home");
}, [user, loading]);
  return(
    <LoginContainer>
      <Input
      type="text"
      className="login__textBox"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="E-mail Address"
    />
    <Input
      type="password"
      className="login__textBox"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    <Button style={{marginTop: 30}} onClick={() => logInWithEmailAndPassword(email, password)}>Login</Button>
    <Button style={{marginTop: 20, height: 80}}  onClick={signInWithGoogle}>
          Login with Google
        </Button>
  </LoginContainer>
  )
}
