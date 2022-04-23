// React | Redux
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';

// Components
import Header from '../Shared/Header';
import LogoBackButton from '../Shared/LogoBackButton';
import Tabs from '../Shared/Tabs';
import BackButton from '../Shared/BackButton';
import Google from '../Shared/Google';
import Twitter from '../Shared/Twitter';
import AccountInput from './AccountInput.js';
import NavBar from '../Shared/NavBar';
import PasswordInput from './PasswordInput.js';
import ContinueButton from './ContinueButton.js';

// Styling
import styles from '../Styles'
import { lightTheme, darkTheme } from '../../../constants';
import { palette } from '../../../Utils/ColorScheme';

const SignInScreen = function(){
  const state = useSelector((state) => state);
  let theme = palette(state.theme);

  return (
    <View style={[{ backgroundColor: theme.pageColor }, styles.container]}>
      <Header />
      <LogoBackButton />
      <Tabs />
      <AccountInput />
      <Google />
      <Twitter />
    </View>
  )
}

export default SignInScreen;
