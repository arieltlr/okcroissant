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
            thin: false,
            wholewheat: false,
            filling: false,
            savory: false,

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
        let newState =Object.assign({}, this.state);
        delete newState['currentPage'];
        // debugger;
        this.props.createBreadProfile(newState)
            .then((project)=>{
                debugger
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
                    Next: Wholewheat
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
                    ⬅ Thin
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
                    ⬅ Wholewheat
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
                <p>Welcome back.</p>
            )
        }
    }

    render(){
        return (
        <div className = 'profile-block'>
            <div className = 'profile-container'>
                <h2>{this.state.currentPage} of 4</h2>
                <div className='profile-form'>
                    <form onSubmit={this.handleSubmit}>
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
                            {this.prevButton()}
                            {this.nextButton()}
                        </div> 
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default NewProfile;
