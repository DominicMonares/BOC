import { View } from "react-native";
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '../../../constants';
import styles from './Styles';
import { palette } from '../../../Utils/ColorScheme';

export default function Header() {
  const state = useSelector(state => state);
  let theme = palette(state.theme)
  return (
    <View style={[{ backgroundColor: theme.navColor }, styles.header]} />
  )
}
