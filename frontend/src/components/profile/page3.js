import React from 'react';

class Page3 extends React.Component{

    render(){
        if(this.props.currentPage !==3){
            return null
        }
        const selector = <select name="filling"
                            id="filling"
                            value = {this.props.filling}
                            onChange = {this.props.handleChange}>
                        <option value='0' disabled hidden > Select your answer </option>
                        <option value='true'> True </option>
                        <option value='false'> False </option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <p>Is your bread filled?</p>
                        <div>
                            {selector}
                        </div>            
                </div>
            </div>
        )
    }
}

export default Page3;