const ADD = "ADD";
const REMOVE = "REMOVE";

let initialState = {
    cart: []
}

export default function reducer(state=initialState, action) {
    switch( action.type ) {
        case ADD:
            return [...state, action.payload]

        case REMOVE:
            const firstMatch = state.indexOf(action.payload)
            return state.filter((item, index) => index !== firstMatch)

        default:
            return state
    }
}