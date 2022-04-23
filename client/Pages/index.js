import { View } from "react-native";
import { useSelector } from 'react-redux';
import { useFonts } from "expo-font";

import Authorized from "./Authorized";
import UnAuthorized from "./UnAuthorized";

// replace return statement w/ Authorized to bypass
const App = function() {
  const user = useSelector(state => state.user);
  const [fontsLoaded] = useFonts({
    comicSans: require('../assets/fonts/comic.ttf')
  });

  return (
    user.username ? (
      <Authorized />
    ) : (
      <UnAuthorized />
    )
  )
  // return <Authorized />
}

export default App;