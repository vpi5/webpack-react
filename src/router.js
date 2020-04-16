/*eslint-disable*/
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homePage';
import pages from './pages';



/**
 *
 *  @param BasicRoute
 *
*/

class BasicRoute extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){}

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    {
                        pages.length > 0 && pages.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    exact
                                    path={`/${item.path}`}
                                    component={item.comp}
                                />
                            )
                        })
                    }
                </Switch>
            </HashRouter>
        )
    }
}


export default BasicRoute;
