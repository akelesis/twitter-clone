export function changeCoverPicture(newPic) {
    return {
        type: 'CHANGED_COVER',
        payload: newPic
    }
}

export function changeProfilePicture(newPic) {
    return {
        type: 'CHANGED_PROFILE',
        payload: newPic
    }
}