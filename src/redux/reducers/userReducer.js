const initialState = {
    user: {
        name: 'alvim do redux'
    }
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};