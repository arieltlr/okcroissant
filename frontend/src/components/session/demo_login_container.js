import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import DemoLogIn from './demo_login'


const mdp = dispatch=>{
    return ({
        login: (user) => dispatch(login(user))
    })
}

export default connect(null, mdp)(DemoLogIn);