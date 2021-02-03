import React from 'react';

class Page1 extends React.Component{

    render(){
        if(this.props.currentPage !==1){
            return null
        }
        const selector = <select name="thin"
                            id="thin"
                            // defaultValue = 'Select your answer'
                            value = {this.props.thin}
                            onChange = {this.props.handleChange}>
                        <option defaultValue='Select your answer' hidden disabled > Select your answer </option>
                        
                        <option value='true'>Thin bread for me</option>
                        <option value='false'>Let it rise</option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2 className="question-text">Fluffy, Yeasty, and Tall</h2>
                        <h2>Or</h2>
                        <h2>Thin, Flat and Delicious?</h2>
                        {selector}          
                </div>
            </div>
        )
    }
}

export default Page1;