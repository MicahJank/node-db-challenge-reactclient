// action variable names should be imported here
import { GET_PROJECTS_FAIL, GET_PROJECTS_SUCCESS, GET_PROJECTS_PENDING } from '../actions/index.js'


const initialState = {
    projects: [],
    error: '',
    pending: false
};

export const projectList = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROJECTS_PENDING:
            return {
                ...state,
                pending: true,
                error: ''
            }

        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                error: '',
                pending: false,
                projects: action.payload
            }

        case GET_PROJECTS_FAIL:
            return {
                ...state,
                pending: false,
                error: action.payload
            }

        default:
            return state;
    };
};