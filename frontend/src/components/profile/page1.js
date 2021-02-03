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
                        
                        <option value='true'> True </option>
                        <option value='false'> False </option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2>First, let's get you set up.</h2>
                        <p>Is your bread thin?</p>
                        <div>
                            {selector}
                        </div>            
                </div>
            </div>
        )
    }
}

export default Page1;