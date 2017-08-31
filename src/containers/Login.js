import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/login/login'
import * as loginAction from '../actions/login'


function mapStateToProps(state) {
  return {
        userName: state.userName,
        password: state.password
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
