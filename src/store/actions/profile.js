export function changeProfile(newInfo) {
    return {
        type: 'CHANGED_PROFILE',
        payload: newInfo
    }
}