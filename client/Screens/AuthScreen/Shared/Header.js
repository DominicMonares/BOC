// React-Native | Redux
import { View } from "react-native";
import { useSelector } from 'react-redux';

// Styling
import styles from './Styles';
import { lightTheme, darkTheme } from '../../../constants';
import { palette } from '../../../Utils/ColorScheme';

export default function Header() {
  const state = useSelector(state => state);
  let theme = palette(state.theme)
  return (
    <View style={[
      { backgroundColor: theme.navColor, borderBottomColor: theme.headerBorder },
      styles.header
    ]} />
  )
}
