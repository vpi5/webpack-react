import React from 'react';
import BasicRoute from './router';


/**
 *
 *  @param App
 *
*/

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    render(){
        return (
            <div className="App">
                <BasicRoute/>
            </div>
        );
    }
}
