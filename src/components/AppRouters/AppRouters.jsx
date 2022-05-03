import React from 'react';
import {Routers} from "./Routers";
import {Redirect, Route, Switch} from 'react-router-dom'
const AppRouters = (props) => {
    return (
        <Switch>
            {Routers.map((route)=>{
                return (
                    <Route path={route.path} component={route.component} exact={route.exact} key={route.path}/>
                )
            })}
            <Redirect to={'/'}/>
        </Switch>
    );
};

export default AppRouters;