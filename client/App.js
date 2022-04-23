import { View } from "react-native";
import { Provider } from 'react-redux';
import { useFonts } from "expo-font";

import { store } from './Redux/store';
import App from "./Pages/index";
import ScreenCapture from "./Utils/ScreenShotDetector"
export default function AppWrapper() {
  const [fontsLoaded] = useFonts({
    comicSans: require('./assets/fonts/comic.ttf')
  });

  return(
    <Provider store={store}>
      <App />
      <ScreenCapture />
    </Provider>
  );
}
