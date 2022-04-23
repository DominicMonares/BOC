import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { guestHome } from '../../../Redux/actions';
import { lightTheme, darkTheme } from '../../../constants';
import styles from './Styles';
import { useFonts } from "expo-font";
import { palette } from '../../../Utils/ColorScheme';

export default function BackButton() {
  const state = useSelector(state => state);
  let theme = palette(state.theme);
  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    comicSans: require('../../../assets/fonts/comic.ttf')
  });

  return (
    <View>
      <Text
        style={[{ color: theme.tabIconInactive }, styles.x]}
        onPress={ () => dispatch(guestHome())}>
        X
      </Text>
    </View>
  )
}
