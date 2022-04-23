import { Text, View, ScrollView, Modal, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Button } from 'react-native';
import { useSelector, useStore } from "react-redux";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import moment from 'moment';
import axios from "axios";

import { palette } from '../Utils/ColorScheme';
import { API_IP } from "../constants";


const CommentTemplate = (props, searchIconColor) => {
  const state = useSelector(state => state);
  const userData = useSelector(state => state.user);

  let date = moment(`${props.commentData.createdAt}`);
  date = moment(`${props.commentData.createdAt}`).fromNow();
  console.log(searchIconColor)
  let ProfPhoto = (props.commentData.profPhoto === "undefined") ?
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
            style={styles.profileImage}
            resizeMode='cover'
            source={{
              uri: `${props.commentData.profPhoto}`,
            }}/>
        </View>

  return (
    <View
    style={styles.commentContainer}
    style={[styles.commentContainer,
      {
        borderColor: palette(state.theme).commentBorderColor
      }]}>
      {ProfPhoto}
      <View
        style={styles.textContainer}>
        <View
        style={styles.commentHeader}>
          <Text
          style={styles.userNameText}>
            {props.commentData.username}
          </Text>
          <Text
          style={styles.dateText}>
            {date}
          </Text>
        </View>
        <View
        style={styles.commentTextContainer}>
          <Text
          style={styles.commentText}>
            {props.commentData.comment}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    padding: 10,
    borderBottomWidth: 2,
    // borderColor: 'black',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 5,
  },
  commentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  profileContainer: {
    flex: 1,
    // backgroundColor: 'black',
  },
  profileImageContainer: {
  },
  profileImage: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  noProfileImageContainer: {
    flex: 1,
    // backgroundColor: 'black',
    justifyContent: 'center',
    // alignItems: 'center',

  },
  noProfileImage: {
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  userNameText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#FEFB9F',
    fontFamily: 'comicSans'
  },
  dateText: {
    fontSize: 10,
    color: '#FDFEFE',
    fontFamily: 'comicSans'
  },
  commentTextContainer: {
    paddingTop: 5,
  },
  commentText: {
    color: '#FDFEFE',
    fontFamily: 'comicSans'
  }
});

export default CommentTemplate;