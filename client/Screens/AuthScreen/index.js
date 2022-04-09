import { useState, getState } from 'react';
import { Text, View } from 'react-native';

import SignInScreen from './LoginScreen/SignIn';
import RegisterScreen from './RegisterScreen/Register';

export default function AuthScreen() {
  const [screen, setScreen] = useState('register');

  return (
    screen === 'login' ? (
      <SignInScreen />
    ) : (
      <RegisterScreen />
    )
  );
}
