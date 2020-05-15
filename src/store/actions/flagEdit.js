export function changeFlagEdit(newBool) {
    return {
        type: 'CHANGED_FLAG_EDIT',
        payload: newBool
    }
}