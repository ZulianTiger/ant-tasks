export const setCurrentTask = (taskNumber) => {
    return {
        type: 'SET_CURRENT_TASK',
        taskNumber: taskNumber,
    }
}