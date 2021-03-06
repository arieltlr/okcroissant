import React from 'react';

class EditBProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thin: this.props.breadProfile.thin=== true? "true" : "false",
            wholewheat: this.props.breadProfile.wholewheat=== true? "true" : "false",
            filling: this.props.breadProfile.filling=== true? "true" : "false",
            savory: this.props.breadProfile.savory=== true? "true" : "false",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        const {name, value} = event.target;
        //  
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        //  
        let breadProfile = {
            id: this.props.breadProfile._id,
            thin: this.state.thin,
            wholewheat: this.state.wholewheat,
            filling: this.state.filling,
            savory: this.state.savory,
        }
        //  
        this.props.updateBreadProfile(breadProfile)
    }

    render(){
        return (
            <div className="edit-bprofile-container-div">
                <form className="edit-bprofile-container" onSubmit={this.handleSubmit}>
                    <h2 className="question-text">Update your preferences</h2>
                    <br/>
                    <div className="inter-page-container-edit">
                        <h2 className="question-text">Tall and fluffy or thin and flat?</h2>
                        <select name="thin"
                                id="thin"
                                defaultValue = {this.state.thin}
                                onChange = {this.handleChange}>
                            <option value='true'>Thin bread for me</option>
                            <option value='false'>Let it rise</option>
                            </select>
                    </div>
                    <div className = 'inter-page-container-edit'>
                            <h2 className="question-text">Wheatie or White?</h2>
                            <select name="wholewheat"
                                id="wholewheat"
                                defaultValue = {this.state.wholewheat}
                                onChange = {this.handleChange}>
                            <option value='true'>Healthy Whole Grains</option>
                            <option value='false'>Indulgent White Flour</option>
                            </select>        
                    </div>
                    <div className = 'inter-page-container-edit'>
                            <h2 className="question-text">Bread with filling or on it's own?</h2>
                            <select name="filling"
                                id="filling"
                                defaultValue = {this.state.filling}
                                onChange = {this.handleChange}>
                            <option value='true'>Fill it, stuff it, yum!</option>
                            <option value='false'>Bread and only bread</option>
                            </select>         
                    </div>
                    <div className = 'inter-page-container-edit'>
                            <h2 className="question-text">Sweet or savory?</h2>
                            <select name="savory"
                                id="savory"
                                defaultValue = {this.state.savory}
                                onChange = {this.handleChange}>
                            <option value='true'>Savory, please</option>
                            <option value='false'>Satisfy my sweet tooth</option>
                            </select>         
                    </div>
                    <button className="update-button">Update my Profile</button>
                </form> 
            </div>
            
        )
    }
}

export default EditBProfile;