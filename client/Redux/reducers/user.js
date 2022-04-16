import { userData } from '../../Templates/sampleData';

const userReducer = (state = userData, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        posts: action.payload.posts,
        userInfo: action.payload.userInfo
      }
    case 'AUTHORIZED':
      return {
        ...state,
        username: action.payload
      };
    case 'UNAUTHORIZED':
      return {
        ...state,
        username: null
      };
    case 'UPDATE_PROF_PHOTO':
      // console.log('profPhotoUrl', state.userInfo.profPhoto);
      // console.log('action payload', action.payload);
      return {
        ...state,
        userInfo: {
          profPhoto: action.payload
        }
      };
    default:
      return state;
  }
}

export default userReducer;