
const initial_state = {
    count: 0
};
const Reducer = (state = initial_state, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count + 1 }
        case 'dec':
            return { ...state, count: state.count - 1 }

        default:
            return state
    }
}

export default Reducer