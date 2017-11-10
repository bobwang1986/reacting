import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import editVotes from '../components/editVotes'
import * as edits from '../state/action'


const mapStateToProps = (state) => {
  return {
    reportVote: state.home.payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(edits, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(editVotes)
