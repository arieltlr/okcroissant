import React from 'react';

class Page2 extends React.Component{

    render(){
        if(this.props.currentPage !==2){
            return null
        }
        const selector = <select name="wholewheat"
                            id="wholewheat"
                            value = {this.props.wholewheat}
                            onChange = {this.props.handleChange}>
                        <option  hidden disabled> Select your answer </option>
                        <option value='true'> True </option>
                        <option value='false'> False </option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <p>Is your bread wholewheat?</p>
                        <div>
                            {selector}
                        </div>            
                </div>
            </div>
        )
    }
}

export default Page2;