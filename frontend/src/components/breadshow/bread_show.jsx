import React from 'react';

class BreadShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.fetchABread(this.props.match.params.breadId)
    }

    render(){
        debugger
        const { bread } = this.props;
        return (
            <div>
                <div>
                    <div>
                        <h3>{bread.name}</h3>
                    </div>
                    <div>
                        <div>
                            <img src={bread.image} />
                        </div>
                        <div>
                            <label>Origin</label>
                            <p>{bread.origin}</p>
                        </div>
                        <div>
                            <p>{bread.description}</p>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div>
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BreadShow;