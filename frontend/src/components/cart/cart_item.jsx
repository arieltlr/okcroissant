import React from 'react';
import Footer from '../splash/footer';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = {
            bread:""
        }
    }

    componentDidMount(){
       this.state = this.setState({ bread: this.props.fetchABread(this.props.breadId)});
    }

    handleDelete(bread) {
        // debugger
        this.props.deleteBreadItem(bread)
    }

    render() {
        let totalsum = 0;
        // debugger
        return (
            <div>
                <div> 
                    {/* {bread} */}
                    {/* <p>{this.state.bread}</p> */}
                    <p>{this.props.breadId}</p>
                    {/* {console.log(this.state.bread)} */}
                    {/* onClick={() => this.handleDelete(.....)} */}
                    <button >Delete Bread</button>
                </div>
            </div>

        )
    }
}

export default CartItem;