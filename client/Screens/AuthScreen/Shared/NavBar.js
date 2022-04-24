// React | React-Native
import { useState } from 'react';
import { Text, View } from "react-native";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { guestAuth } from '../../../Redux/actions';

// Styling
import styles from './Styles'
import { lightTheme, darkTheme } from '../../../constants';
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { palette } from '../../../Utils/ColorScheme';

export default function NavBar() {
  const state = useSelector(state => state);
  let theme = palette(state.theme);
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    comicSans: require('../../../assets/fonts/comic.ttf')
  });

  return (
    <View style={[
        {
          backgroundColor: theme.navColor,
          borderTopColor: theme.headerBorder
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
