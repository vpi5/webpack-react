import React from 'react';
import './style.less';


/**
 *
 *  @param Demo
 *
*/

export default class Demo extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){}

    componentWillReceiveProps(){}

    componentWillUnmount(){}

    render(){
        return (
            <div className={'demo'}>
                Lorem ipsum.
            </div>
        )
    }
}
