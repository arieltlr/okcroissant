import React from 'react';
import Footer from '../splash/footer';


class CartItem extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }

    // componentDidMount(){
    //     this.props.fetchABread(this.props)
    // }

    // deleteBread(breadId) {
    //     debugger //need to place correct breadId
    //     this.props.deleteBreadItem(breadId)
    // }
    

    render() {
        let totalsum = 0
        // debugger
        return (
            <div>
                <div> 
                </div>
                <div className="footer">
                    {/* <button onClick={()=>deleteBread(this.props.breadId)}>Delete Bread</button> */}
                    <Footer />
                </div>
            </div>

        )
    }
}

export default CartItem;