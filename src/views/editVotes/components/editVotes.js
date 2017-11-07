import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class editVotes extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.goToHome = this.goToHome.bind(this);
    this.goBack = this.goBack.bind(this);
    this.delOption = this.delOption.bind(this);
    this.state = {
      value: 0,
      checked:false,
      idValue: 1,
      status: 0
    };
    this.optionStyles = {
      display:'inline-block',
      width:36,
      lineHeight:48,
      height:48,
      top: 11
    }
  }
  goToHome() {
    let arr =[];
    this.state.item.map((value) =>{
      if(this.refs[value.id].getValue()!=""){
        arr.push(this.refs[value.id].getValue())
      }
    })
    console.log(arr);
    const data = {
      "_id": this.props.voteID.voteID,
      "title": this.refs.title.getValue(),
      "type": this.state.value,
      "items": arr
    }
    this.props.editVote(data,this.props)
  }

  goBack(){
    this.props.history.push("/home")
  }

  handleChange = (event, index, value) => this.setState({value});

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked
      };
    });
  }

  addOptions(optionList){
      const items = this.state.item;
      items.push({"id":`item${this.state.idValue+1}`});
      this.setState((oldState) => {
        return {
          item: items,
          idValue: this.state.idValue + 1
        };
      });
  }

  delOption(id){
    const options = this.state.item;
    console.log(options);
    options.map((value, key) =>{
      if(id === value.id){
        options.splice(key,1);
      }
    })
    this.setState((oldState) => {
      return {
        item: options
      };
    });
    console.log(options);
  }

  componentDidMount() {
    const {voteID, voteList} = this.props.voteID;
    console.log(this.props.voteID);
    let optionList = [];
    voteList.map((item, key) => {
      if(item._id === voteID){
        console.log(item.status)
        item.items.map((v, i) => {
          optionList.push({"id":`item${i+1}`,"value": v.description})
        })
        this.setState((oldState) => {
          return {
            value: item.type,
            title: item.title,
            status: item.status,
            item: optionList,
            idValue: optionList.length
          };
        });
        console.log(optionList)
      }
    })
  }

  render() {
    const optionList = this.state.item;
    console.log(this.props);
    return (
      <div className='add-vote-container'>
        <h2>修改投票</h2>
        {
          this.state.title && <TextField
          hintText="请输入投票内容"
          floatingLabelText="投票内容"
          multiLine={true}
          rows={1}
          fullWidth={true}
          ref="title"
          defaultValue={this.state.title}
          //value={this.state.title}
        />
        }

        <SelectField
          floatingLabelText="单选"
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth={true}
        >
          <MenuItem value={0} primaryText="单选" />
          <MenuItem value={1} primaryText="多选" />
        </SelectField>
        <div className="vote-option">
        {
            optionList && optionList.map((item, key) => {
               return <TextField key={key} hintText={item.id} ref={item.id} defaultValue={item.value} multiLine={true} fullWidth={true}/>
            })
          }
        </div>

        <div className='button add-vote-button-add'>
          <RaisedButton  label="添加选项" labelStyle={styles} onClick={() => {this.addOptions(optionList)}}/>
        </div>
        <div>
            <div className='button add-vote-button-save'>
            <RaisedButton label="保存" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
        </div>
          <div className='button add-vote-button-back'>
            <RaisedButton label="返回" labelStyle={styles} fullWidth={true} onClick={this.goBack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default editVotes;
