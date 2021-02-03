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
                        <option value='true'> True </option>
                        <option value='false'> False </option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <p>Is your bread savory?</p>
                        <div>
                            {selector}
                        </div>            
                </div>
            </div>
        )
    }
}

export default Page4;