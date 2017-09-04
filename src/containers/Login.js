//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../components/login/login'
import { submit } from '../actions/login'


const mapStateToProps = (state) => {
  return {
    userName: state.login.userName,
    password: state.login.password
  }
}

const mapDispatchToProps = (dispatch) => ({
    fn: {
      onFetch: () => {
        dispatch(submit());
      }
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
