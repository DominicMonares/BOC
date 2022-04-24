// React | React-Native
import { useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../Redux/actions';

// Web Browser
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { API_IP } from '../../../constants.js';

// Styling
import styles from './Styles'
import { lightTheme, darkTheme } from '../../../constants';
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { palette } from '../../../Utils/ColorScheme';

import axios from 'axios';

const googleRegEndpoint = `http://54.215.206.56.nip.io/oauth2/redirect/google`;

WebBrowser.maybeCompleteAuthSession();

export default function Google() {
  const state = useSelector(state => state);
  const authScreen = useSelector(state => state.authScreen);
  let theme = palette(state.theme)

  const [screen, setScreen] = useState(() => {
    if (authScreen === 'login') {
      return 'Login';
    } else {
      return 'Register';
    }
  });

  const [fontsLoaded] = useFonts({
    comicSans: require('../../../assets/fonts/comic.ttf')
  });

  const dispatch = useDispatch();
  const _openAuthSessionAsync = async () => {
    try {
      let result = await WebBrowser.openAuthSessionAsync(googleRegEndpoint);
      let redirectData;
      if (result.url) {
        redirectData = Linking.parse(result.url);
      }

      let username = redirectData.queryParams.username;
      dispatch(login(username));
    } catch (err) {
      alert('Unable to connect to Google.');
    }
  }

  return (
    <View style={styles.googleContainer}>
      <Pressable
        style={[{ backgroundColor: theme.buttonColor, borderColor: theme.buttonBorderColor }, styles.socialButton]}
        title="Register with Google"
        onPress={ () => _openAuthSessionAsync() }>
        <View
          style={styles.socialInner}>
          <FontAwesome5
            name='google'
            size={30}
            color={theme.iconColor}
          />
          <Text
            style={[{ color: theme.tabIconInactive }, styles.socialText]}>
            &nbsp;&nbsp;{screen} with Google
          </Text>
        </View>
      </Pressable>
    </View>
  )
}
