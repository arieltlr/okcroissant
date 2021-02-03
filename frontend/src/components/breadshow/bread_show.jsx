import React from 'react';

class BreadShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.fetchABread(this.props.match.params.breadId)
    }

    render(){
        return (
            <h1>hello</h1>
        )
    }
}

export default BreadShow;