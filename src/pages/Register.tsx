import React, {
  useEffect,
  useState,
} from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../firebase';
import {
  Button,
  Input,
  RegisterContainer,
} from './RegisterStyles';

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  const navigate = useNavigate();
  useEffect(() => { if (user) navigate("/home");
}, [user, loading]);
  return(
    <RegisterContainer>
      <Input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <Input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button style={{marginTop: 20, height: 30}} onClick={register}>
          Register
        </Button>
        <Button
        style={{marginTop: 20, height: 80}}
          onClick={signInWithGoogle}
        >
          Register with Google
        </Button>
    </RegisterContainer>
  )
}
