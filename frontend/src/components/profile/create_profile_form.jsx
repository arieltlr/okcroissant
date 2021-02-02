import React from 'react'

class NewProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage = 1,
            thin = false,
            wholewheat = false,
            filling = false,
            savory = false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        let newState =Object.assign({}, this.state);
        delete newState['currentPage'];
        this.props.createProfile(newState)
            .then((project)=>{
                return  this.props.history.push(``)})
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
        currentPage = currentPage <= 1? 1: currentPage - 1;
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
                    disabled={!this.state.thin}
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
                    disabled={!this.state.wholewheat}
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
                    disabled={!this.state.filling}
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
                    disabled={!this.state.savory}
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
        
    }
}