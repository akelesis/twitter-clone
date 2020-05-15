export function changeCoverPicture(newPic) {
    return {
        type: 'CHANGED_COVER',
        payload: newPic
    }
}

export function changeProfilePicture(newPic) {
    return {
        type: 'CHANGED_PROFILE_PIC',
        payload: newPic
    }
}