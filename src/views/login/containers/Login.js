import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login'
import * as logon from '../state/action'


const mapStateToProps = (state) => {
  console.log(state);
  return {
    isLogonSuccess: state.login.isLogonSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(logon, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
