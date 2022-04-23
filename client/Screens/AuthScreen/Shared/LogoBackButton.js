import { useState } from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import HeaderTemplate from '../../../Templates/HeaderTemplate'; // Logo
import BackButton from './BackButton';
import styles from './Styles';
import { palette } from '../../../Utils/ColorScheme';

export default function LogoBackButton() {
  const state = useSelector(state => state);
  let theme = palette(state.theme)
  return (
    <View style={[{ borderTopColor: theme.headerBorder }, styles.top]}>
      <HeaderTemplate />
      <View style={styles.backButton}>
        <BackButton />
      </View>
    </View>
  )
}