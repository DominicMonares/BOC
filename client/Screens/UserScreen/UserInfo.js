import { Text, View, Dimensions, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

import { palette } from '../../Utils/ColorScheme';

const UserInfo = (props) => {
  const state = useSelector((state) => state);


  let ProfPhoto = (!props.userData.userInfo.profPhoto) ?
    <View
    style={styles.noProfileImageContainer}>
      <View
        style={[styles.noProfileImage, { backgroundColor: 'white' }]}>
        <FontAwesome5
          name="user-alt"
          size={35}
          color="grey"
        ></FontAwesome5>
      </View>
    </View> : <View
        style={styles.profileContainer}>
        <Image
          style={styles.profilePicture}
          resizeMode='cover'
          source={{
            uri: `${props.userData.userInfo.profPhoto}`,
          }}/>
      </View>;

  return (
    <View
      style={styles.userInfoContainer}>
      <View
        style={styles.textContainer}>
        <Text
          style={[styles.usernameText, {color: palette(state.theme).buttonText}]}>
          {props.userData.userInfo.username} </Text>
          <Text
          style={[styles.followersText, {color: palette(state.theme).buttonText}]}>
          {(props.userData.userInfo.followers) ? props.userData.userInfo.followers.length : 0} Followers</Text>
          <Text
          style={[styles.followingText, {color: palette(state.theme).buttonText}]}>
          {(props.userData.userInfo.followers) ?props.userData.userInfo.following.length : 0} Following</Text>
      </View>
      {/* <View
        style={styles.profileContainer}>
        <Image
          style={styles.profilePicture}
          resizeMode='cover'
          source={{
            uri: `${props.userData.userInfo.profPhoto}`,
          }}/>
      </View> */}
      {ProfPhoto}
    </View>
  )
};

const styles = StyleSheet.create({
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    paddingRight: 5,
  },
  profileContainer: {
  },
  profilePicture: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  noProfileImageContainer: {
    justifyContent: 'center',
  },
  noProfileImage: {
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameText: {
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#FEFB9F',
    fontFamily: 'comicSans'
  },
  followersText: {
    textAlign: 'right',
    fontSize: 10,
    color: '#FDFEFE',
    fontFamily: 'comicSans'
  },
  followingText: {
    textAlign: 'right',
    fontSize: 10,
    color: '#FDFEFE',
    fontFamily: 'comicSans'
  },
});

export default UserInfo;