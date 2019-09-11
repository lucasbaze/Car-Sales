export const ADD_ITEM = 'add_item';
export const addItem = item => {
    return { type: ADD_ITEM, payload: item };
};

export const REMOVE_ITEM = 'remove_item';
export const removeItem = item => {
    return { type: REMOVE_ITEM, payload: item };
};
