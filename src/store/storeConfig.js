import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  profile: function (
    state = {
      userNick: "Markelesis",
      userName: "Marcus Tavares",
      bio: "",
      location: "Itabuna, Bahia",
      birth: "1994-10-01",
    },
    action
  ) {
    switch (action.type) {
      case "CHANGED_PROFILE":
        return {
          userNick: action.payload.userNick || state.userNick,
          userName: action.payload.userName || state.userName,
          bio: action.payload.bio || state.bio,
          location: action.payload.location || state.location,
          birth: action.payload.birth || state.birth,
        };
      default:
        return state;
    }
  },
  tweetsNumber: function (state, action) {
    return 1;
  },
  tweets: function (state = [], action) {
    switch (action.type) {
      case "CHANGED_TWEETS":
        return [
          ...state,
          {
            msg: action.payload,
            date: `${
              new Date().getMonth() + 1 < 10
                ? "0" + (new Date().getMonth() + 1)
                : new Date().getMonth() + 1
            }-${new Date().getDate()}`,
            comments: 0,
            likes: 0,
            retweets: 0,
          },
        ];
      default:
        return state;
    }
  },
  flagTweet: function (state, action) {
    switch (action.type) {
      case "CHANGED_FLAG_TWEET":
        return action.payload;
      default:
        return false;
    }
  },
  flagEdit: function (state, action) {
    switch (action.type) {
      case "CHANGED_FLAG_EDIT":
        return action.payload;
      case "CHANGED_COVER":
        return action.payload;
      case "CHANGED_PROFILE":
        return action.payload;
      default:
        return false;
    }
  },
  picture: function (
    state = {
      profile:
        "https://scontent.fssa2-1.fna.fbcdn.net/v/t1.0-1/p160x160/58549537_2665841310154298_4350074990582824960_n.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=G5ikMoAq0t8AX_pw2zo&_nc_ht=scontent.fssa2-1.fna&_nc_tp=6&oh=ba31829023a282744d5e9a0b7f0bac61&oe=5EE35E75",
      cover:
        "https://scontent.fssa2-1.fna.fbcdn.net/v/t1.0-9/15873099_1330320627039713_8234148496805583062_n.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=njXz-7HD5CUAX_LxQHJ&_nc_ht=scontent.fssa2-1.fna&oh=6810e016d296ec0b4d8cbea6a695a6e3&oe=5EE3E551",
    },
    action
  ) {
    switch (action.type) {
      case "CHANGED_COVER":
        return {
          ...state,
          cover: action.payload,
        };
      case "CHANGED_PROFILE":
        return {
          ...state,
          profile: action.payload,
        };
      default:
        return {
            ...state
        };
    }
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
