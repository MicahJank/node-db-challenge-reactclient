import { combineReducers } from 'redux';

// reducers that should be combined get imported here
import { projectList } from './projectList.js';


// this file exports all the reducers combined by passing in an object to the combineReducers function that has all the reducers to be combined
// as keys of the object
export default combineReducers({
    projectList // this is shorthand for 'projectList: projectList'
});