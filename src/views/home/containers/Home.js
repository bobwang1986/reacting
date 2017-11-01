import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/Home'
import * as home from '../state/action'


const mapStateToProps = (state) => {
  console.log(state);
  return {
    voteList: state.home.payload,
    voteListID: state.home.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(home, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
