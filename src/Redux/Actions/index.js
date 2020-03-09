export const setCurrentTask = (taskNumber) => {
    return {
        type: 'SET_CURRENT_TASK',
        taskNumber: taskNumber,
    }
}
export const addGrocery = (grocery, index) => {
    return {
        type: 'ADD_GROCERY',
        grocery: grocery,
        index: index,
    }
}
export const removeGrocery = (index) => {
    return {
        type: 'REMOVE_GROCERY',
        index: index,
    }
}
export const editGrocery = (newItem, index) => {
    return {
        type: 'EDIT_GROCERY',
        newItem: newItem,
        index: index,
    }
}
