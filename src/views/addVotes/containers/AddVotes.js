import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddVotes from '../components/AddVotes'
import * as addVotes from '../state/action'


const mapStateToProps = (state) => {
  console.log("fdsafdsafdsafds");
  console.log(state);
  return {
    optionList: state.addVotes.addOption,
    voteData: state.addVotes.addVote
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(addVotes, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVotes)
