import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    userNick: function(state, action) {
        return "Markelesis"
    },
    userName: function(state, action) {
        return "Marcus Tavares"
    },
    tweetsNumber: function(state, action) {
        return 1
    },
    location: function(state, action) {
        return "Itabuna, Bahia"
    },
    birth: function(state, action) {
        return "1994-10-01"
    },
    tweets: function(state, action) {
        return [
            {
                msg: 'sem ideia pra testar',
                date: '03-05',
                comments: 2,
                likes: 3,
                retweets: 2
            },
            {
                msg: 'sem ter o que falar',
                date: '03-06',
                comments: 0,
                likes: 2,
                retweets: 1

            }
        ]
    },
    tweet: function(state, action) {
        switch(action.type){
            case 'CHANGED_TWEET':
                return action.payload
            default:
                return ""
        }
    },
    flagTweet: function(state, action){
        switch(action.type){
            case 'CHANGED_FLAG_TWEET':
                return action.payload
            default:
                return false
        }
    },
    flagEdit: function(state, action){
        return false
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig