import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/login/login'
import * as loginActions from '../actions/login'
function mapStateToProps(state) {
  return {
        userName: state.userName,
        Password: state.Password
    }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
