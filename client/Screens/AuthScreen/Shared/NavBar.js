import { useState } from 'react';
import { Text, View } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../../constants';
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { palette } from '../../../Utils/ColorScheme';

import styles from './Styles'
import { guestAuth } from '../../../Redux/actions';

export default function NavBar() {
  const state = useSelector(state => state);
  const guestHome = useSelector(state => state.guestHome);
  let theme = palette(state.theme);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    comicSans: require('../../../assets/fonts/comic.ttf')
  });

  return (
    <View style={[
        {
          backgroundColor: theme.navColor,
          borderTopColor: theme.buttonBorderColor
        },
        styles.loginBar
      ]}>
      <View style={styles.icon}>
        <FontAwesome5
          name='door-open'
          size={40}
          color={theme.tabIconInactive}
          onPress={() => dispatch(guestAuth())}
        />
        <Text
          style={[{ color: theme.iconColor }, styles.loginText]}
          onPress={() => dispatch(guestAuth())}>
          Log In
        </Text>
      </View>
    </View>
  )
}
