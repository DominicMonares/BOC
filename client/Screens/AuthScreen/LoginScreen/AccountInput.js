import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useNavigation } from '@react-navigation/native';


import styles from '../Styles';
import { API_IP_login } from '../../../constants.js';
import { login } from '../../../Redux/actions';
import { authLog } from '../../../Redux/actions';
import { authReg } from '../../../Redux/actions';
import { palette } from '../../../Utils/ColorScheme';


//import { authlog } from '../../../Redux/actions';

const loginEndpoint = `http://${API_IP_login}/user/login/password`;

export default function AccountInput({ navigation }){
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const screen = useSelector(state => state.authScreen);
  let theme = palette(state.theme);


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
     console.log('endpoint', loginEndpoint);
     console.log('username', username);
     console.log('password', password);


  await axios.post(loginEndpoint, {
    username: username,
    password: password
  })
  .then(function (response) {

    console.log('successfully sent login data to backend');
    dispatch(login(username));

  })
  .catch(function (error) {
    console.log('error sending login', error);
    console.log(error.response.data)
  });


}




  const handleSignUpRedirect= async () => {
    console.log('handleSignUpRedirect was called');
    dispatch(authReg());


  }

  return (
    <View style={styles.loginFields}>
      <Text style={styles.fieldLabels}>Account name</Text>
      <TextInput
        style={[{ borderColor: theme.buttonBorderColor }, styles.field]}
        onChangeText={text => setUsername(text)}
        autoCapitalize="none"
      />
      <Text style={styles.fieldLabels}>Password</Text>
      <TextInput
        style={[{ borderColor: theme.buttonBorderColor }, styles.field]}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}

      />

      <View style={styles.buttonContainer}>
        <Pressable
          title={'Continue'}
          style={[
            { backgroundColor: theme.buttonColor, borderColor: theme.buttonBorderColor },
            styles.button
          ]}
          onPress={() => handleLogin()}>
          <Text
            style={[{ color: theme.tabIconInactive }, styles.buttonText]}>
            Log In
          </Text>
        </Pressable>
      </View>

    </View>
  )




}

