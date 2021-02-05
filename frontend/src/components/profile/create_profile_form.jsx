import React from 'react'

import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'

class NewProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            thin: "false",
            wholewheat: "false",
            filling: "false",
            savory: "false",
            user: this.props.user
        }
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.nextButton=this.nextButton.bind(this);
        this.prevButton=this.prevButton.bind(this);
    }
    handleSubmit(event){
         
        event.preventDefault();
        // this.setState({[user]: this.props.user})
        let newState =Object.assign({}, this.state);
        delete newState['currentPage'];
         
        this.props.createBreadProfile(newState)
            .then((project)=>{
                return  this.props.history.push(`/main`)})
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    next(){
        let currentPage = this.state.currentPage;
        currentPage = currentPage >=3 ? 4 : currentPage+1;
        this.setState({
            currentPage :currentPage
        })
    }

    previous(){
        let currentPage = this.state.currentPage;
        currentPage = currentPage <= 1? 1: currentPage-1;
        this.setState({
            currentPage: currentPage
        })
    }

    nextButton(){
        if(this.state.currentPage === 1){
            return (
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'button'
                    onClick = {this.next}
                    // disabled={!this.state.thin}
                >
                    Next: Flour
                </button>
            )
        }else if(this.state.currentPage === 2){
            return (
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'button'
                    onClick = {this.next}
                    // disabled={!this.state.wholewheat}
                >
                    Next: Filling
                </button>
            )
        }else if(this.state.currentPage === 3){
            return (
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'button'
                    onClick = {this.next}
                    // disabled={!this.state.filling}
                >
                    Next: Savory
                </button>
            )
        }else{
            return (
                <button
                    id= 'next-button'
                    className = 'next-page-button'
                    type = 'submit'
                    // disabled={!this.state.savory}
                >
                    Create Profile
                </button>
            )
        }
    }

    prevButton(){
        if(this.state.currentPage === 2){
            return(
                <button
                    id='prev-button'
                    className = 'prev-page-button'
                    type ='button'
                    onClick={this.previous}
                >
                    ⬅ Height
                </button>
            )
        }else if( this.state.currentPage === 3){
            return(
                <button
                    id='prev-button'
                    className = 'prev-page-button'
                    type ='button'
                    onClick={this.previous}
                >
                    ⬅ Flour
                </button>
            )
        }else if( this.state.currentPage === 4){
            return(
                <button
                    id='prev-button'
                    className = 'prev-page-button'
                    type ='button'
                    onClick={this.previous}
                >
                    ⬅ Filling
                </button>
            )
        }else{
            return (
                null
            )
        }
    }

    render(){
        return (
        <div className = 'profile-block'>
            <div className = 'profile-container'>
                <div className="welcome-message-container">
                    
                    {/* <h2>{this.state.currentPage} of 4</h2> */}
                </div>
                <div className='profile-form-container'>
                    <form className="profile-form" onSubmit={this.handleSubmit}>
                        <h1 className="welcome-message">Find Your Bread Matches!</h1>
                        <Page1 
                            currentPage = {this.state.currentPage}
                            handleChange = {this.handleChange}
                            thin = {this.state.thin}
                        />
                        <Page2 
                            currentPage = {this.state.currentPage}
                            handleChange = {this.handleChange}
                            wholewheat = {this.state.wholewheat}
                        />
                        <Page3 
                            currentPage = {this.state.currentPage}
                            handleChange = {this.handleChange}
                            filling = {this.state.filling}
                        />
                        <Page4 
                            currentPage = {this.state.currentPage}
                            handleChange = {this.handleChange}
                            savory = {this.state.savory}
                        />
                        <div className='form-buttons'>
                            {this.nextButton()}
                            {this.prevButton()}
                        </div> 
                    </form> 
                </div>
            </div>
        </div>
        )
    }
}

export default NewProfile;
