import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  profile: function (
    state = {
      userNick: "Markelesis",
      userName: "Marcus Tavares",
      bio: "",
      location: "Itabuna, Bahia",
      birth: "1994-01-10",
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
          website: action.payload.website || state.website,
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
      case "CHANGED_PROFILE_PIC":
        return action.payload;
      default:
        return false;
    }
  },
  picture: function (
    state = {
      profile:
        "https://scontent.fssa2-2.fna.fbcdn.net/v/t1.0-9/p960x960/59554567_2668586213213141_1750381653395505152_o.jpg?_nc_cat=100&_nc_sid=13bebb&_nc_ohc=Z1tGGf3Y9AcAX9jp9IU&_nc_ht=scontent.fssa2-2.fna&_nc_tp=6&oh=6e41a9e70a38e057a61f95835a4b8995&oe=5EE5C8AF",
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
      case "CHANGED_PROFILE_PIC":
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
