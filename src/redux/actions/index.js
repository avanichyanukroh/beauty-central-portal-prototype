// import axios from 'axios';

// Codes below are normal redux actions

export const LOAD_ADMIN = 'LOAD_ADMIN';
export const loadAdmin = (admin) => ({
	type: LOAD_ADMIN,
	admin
});

// Codes below are redux-thunk middleware

export const getAdmin = () => dispatch => {
    const admin = {
        username: "admin"
    }

    dispatch(loadAdmin(admin))
}