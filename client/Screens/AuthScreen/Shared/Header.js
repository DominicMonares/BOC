import { useState } from 'react';
import { View } from "react-native";
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../../constants';
import styles from './Styles';

export default function Header() {
  const theme = useSelector(state => state.theme);
  const [current, setCurrent] = useState(() => {
    if (theme) {
      return lightTheme;
    } else {
      return darkTheme;
    }
  });

  return (
    <View style={[
      { backgroundColor: current.navColor, borderColor: current.buttonBorderColor },
      styles.header
    ]} />
  )
}
