import { LOAD_ADMIN } from 'redux/actions';

const initialState = {
    admin: null
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ADMIN:
            return Object.assign({}, state, {
                admin: action.admin
            })

        default:
            return state
      }
};