// React | React-Native
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { authLog } from '../../../../Redux/actions';

// Styling
import styles from '../../Styles';
import { API_IP } from '../../../../constants.js';
import { lightTheme, darkTheme } from '../../../../constants';
import { useFonts } from "expo-font";
import { palette } from '../../../../Utils/ColorScheme';

import axios from 'axios';
import { containsUpperCase, containsNumber, containsSpecial } from '../registerHelpers';

const registrationEndpoint = `http://${API_IP}/user/addNewUser`;

export default function AccountInput() {
  const state = useSelector(state => state);
  const screen = useSelector(state => state.authScreen);
  const dispatch = useDispatch();
  let theme = palette(state.theme);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [invalidUsername, setInvalidUsername] = useState('');
  const [invalidEmail, setInvalidEmail] = useState('');
  const [invalidPassword, setInvalidPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState('');
  const [passwordCaptial, setPasswordCapital] = useState('');
  const [passwordNum, setPasswordNum] = useState('');
  const [passwordSpecial, setPasswordSpecial] = useState('');
  const [errors, setErrors] = useState([]);

  const [fontsLoaded] = useFonts({
    comicSans: require('../../../../assets/fonts/comic.ttf')
  });

  const handleSignUp = async () => {
    let validatedUsername = validUsername(username);
    let validatedEmail = validEmail(email);
    let validatedPasswords = validPassword(password, confirmPw);
    let validatedPwStrength = strongPassword(password);

    if (validatedUsername && validatedEmail && validatedPasswords && validatedPwStrength) {
      try {
        // Must use HTTPS when deployed in order to keep pw safe
        const register = await axios.post(registrationEndpoint, {
          username: username.toLowerCase(),
          email: email,
          password: password
        });

        dispatch(authLog());
        alert('We\'ve sent you an activation email!\nPlease check your inbox.');
      } catch (err) {
        alert('Registration failed.');
      }
    } else {
      alert(errorMessages())
    }
  }

  const errorMessages = () => {
    let alertErrors = [];
    if (invalidUsername) { alertErrors.push(invalidUsername) }
    if (invalidEmail) { alertErrors.push(invalidEmail) }
    if (invalidPassword) { alertErrors.push(invalidPassword) }
    if (passwordLength) { alertErrors.push(passwordLength) }
    if (passwordCaptial) { alertErrors.push(passwordCaptial) }
    if (passwordNum) { alertErrors.push(passwordNum) }
    if (passwordSpecial) { alertErrors.push(passwordSpecial) }
    return alertErrors.join('\n');
  }

  const validUsername = (username) => {
    let letters = username.split('');

    if (username.length >= 2 && username.length <= 16) {
      setInvalidUsername('');
      return true;
    } else {
      setInvalidUsername('Username must be between 2 and 16 characters long.');
      return false;
    }
  }

  const validEmail = (email) => {
    if (email.split('@').length === 2) {
      let splitEmail = email.split('@');
      let left = splitEmail[0].split('.').length;
      let right = splitEmail[1].split('.').length;
      let leftMatch = left <= 2 && left > 0;
      let rightMatch = right <= 2 && right > 0;

      if (leftMatch && rightMatch) {
        setInvalidEmail('');
        return true;
      } else {
        setInvalidEmail('• Invalid email format.');
        return false;
      }
    } else {
      setInvalidEmail('• Invalid email format.');
      return false;
    }
  }

  const validPassword = (pw1, pw2) => {
    if (pw1 === pw2) {
      setInvalidPassword('')
      return true;
    } else {
      setInvalidPassword('• Passwords do not match.')
      return false;
    }
  }

  const strongPassword = (pw) => {
    let length = pw.length >= 8;
    let capital = containsUpperCase(pw);
    let num = containsNumber(pw);
    let special = containsSpecial(pw);

    if (!length) {
      setPasswordLength('• Password must contain at least 8 characters.');
    } else {
      setPasswordLength('');
    }

    if (!capital) {
      setPasswordCapital('• Password must contain at least 1 capital letter.');
    } else {
      setPasswordCapital('');
    }

    if (!num) {
      setPasswordNum('• Password must contain at least 1 number.');
    } else {
      setPasswordNum('');
    }

    if (!special) {
      setPasswordSpecial('• Password must contain at least 1 special character.');
    } else {
      setPasswordSpecial('');
    }

    if (length && capital && num && special) {
      return true;
    }
  }

  return (
    <View style={styles.registerFields}>
      <Text style={styles.fieldLabels}>Username</Text>
      <TextInput
        style={[{ borderColor: theme.buttonBorderColor }, styles.field]}
        accessibilityLabel="reg-username"
        onChangeText={text => setUsername(text)}
        autoCapitalize="none"
      />
      <Text style={styles.fieldLabels}>Email Address</Text>
      <TextInput
        style={[{ borderColor: theme.buttonBorderColor }, styles.field]}
        accessibilityLabel="reg-email"
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <Text style={styles.fieldLabels}>Password</Text>
      <TextInput
        style={[{ borderColor: theme.buttonBorderColor }, styles.field]}
        accessibilityLabel="reg-pw1"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        textContentType="oneTimeCode"
      />
      <Text style={styles.fieldLabels}>Password Again</Text>
      <TextInput
        style={[{ borderColor: theme.buttonBorderColor }, styles.field]}
        accessibilityLabel="reg-pw2"
        onChangeText={text => setConfirmPw(text)}
        secureTextEntry={true}
        textContentType="oneTimeCode"
      />
      <View style={styles.buttonContainer}>
        <Pressable
          title={'Sign Up'}
          style={[
            { backgroundColor: theme.buttonColor, borderColor: theme.buttonBorderColor },
            styles.button
          ]}
          onPress={() => handleSignUp()}>
          <Text
            style={[{ color: theme.tabIconInactive }, styles.buttonText]}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
