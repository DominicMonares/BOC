// React-Native
import { View } from 'react-native';

// Components
import HeaderTemplate from '../../../Templates/HeaderTemplate'; // Logo
import BackButton from './BackButton';

// Styling
import styles from './Styles';

export default function LogoBackButton() {
  return (
    <View style={styles.top}>
      <HeaderTemplate />
      <View style={styles.backButton}>
        <BackButton />
      </View>
    </View>
  )
}