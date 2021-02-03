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
                        <option value='true'>Healthy Whole Grains</option>
                        <option value='false'>Indulgent White Flour</option>
                        </select>
        return(
            <div className = 'inner-page-blcok'>
                <div className = 'inter-page-container'>
                        <h2 className="question-text">Wheat Berries and Wholegrains</h2>
                        <h2>Or</h2>
                        <h2>Pristine and Refined White Flour?</h2>
                        {selector}          
                </div>
            </div>
        )
    }
}

export default Page2;