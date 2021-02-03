import React from 'react';

class Page4 extends React.Component{

    render(){
        if(this.props.currentPage !==4){
            return null
        }
        const selector = <select name="savory"
                            id="savory"
                            value = {this.props.savory}
                            onChange = {this.props.handleChange}>
                        <option  hidden  disabled> Select your answer </option>
                        <option value='true'>Savory, please</option>
                        <option value='false'>Satisfy my sweet tooth</option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2 className="question-text">Lastly - Savory</h2>
                        <h2>Or</h2>
                        <h2>Sweet?</h2>
                        {selector}          
                </div>
            </div>
        )
    }
}

export default Page4;