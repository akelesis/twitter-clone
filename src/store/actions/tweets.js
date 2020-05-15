export function changeTweets(newText) {
    return {
        type: 'CHANGED_TWEETS',
        payload: newText
    }
}