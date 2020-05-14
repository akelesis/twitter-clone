import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    userNick: function(state, action) {
        return {
            idUser: "Markelesis"
        }
    },
    userName: function(state, action) {
        return {userName: "Marcus Tavares"}
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig