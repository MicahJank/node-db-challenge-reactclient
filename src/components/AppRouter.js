import React from 'react';

import { Route } from 'react-router-dom';

import Projects from './ProjectsList.js';


const AppRouter = () => {

    return (
        <>
            <Route path='/projects' component={Projects} />
        </>
    );

};

export default AppRouter;