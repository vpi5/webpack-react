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
        this.a = '1';
        React.$APT = () => {};
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
