export function changeFlagTweet(newBool) {
    return {
        type: 'CHANGED_FLAG_TWEET',
        payload: newBool
    }
}