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
                        <option hidden disabled> Select your answer </option>
                        <option value='true'>Fill it, stuff it, yum!</option>
                        <option value='false'>Bread and only bread</option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2 className="question-text">Filled with Fruits, Meat, or Cheese</h2>
                        <h2>Or</h2>
                        <h2>Bread Should Stand Alone!</h2>
                        {selector}          
                </div>
            </div>
        )
    }
}

export default Page3;