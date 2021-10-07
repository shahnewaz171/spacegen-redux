const initialState = 0;

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return state;
        default:
            return state;
    }
}

export default reducer;