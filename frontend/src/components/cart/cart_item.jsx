
import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
        //  
    }

    componentDidMount(){
        //  
        this.props.fetchABread(this.props.breadId)
        //  
    }


    render() {
        if (!this.props.bread){
            return null
        } else {
            return (
                <div>
                    <div>
                        {/* {bread} */}
                        {/* <p>{this.state.bread}</p> */}
                        <p>{this.props.bread.name}</p>
                        <p>{this.props.bread.price}</p>
                        {/* {console.log(this.state.bread)} */}
                        {/* onClick={() => this.handleDelete(.....)} */} 
                    </div>
                </div>

            )
        }
    }
}

export default CartItem;