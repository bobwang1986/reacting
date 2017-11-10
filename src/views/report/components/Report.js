import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import styles from '../../../themes/commonUIStyle'
import './styles.css'

class Report extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.gotHome = this.gotHome.bind(this);
  }
  gotHome = ()=>{
    this.props.history.push("/home")
  }
  componentDidMount() {
    const reportVote = this.props.reportVote;
    let des = [];
    let title = reportVote.title;
    let voters=[];
        //votersCount = item.votersCount;
        reportVote.items.map((v, i) => {
          console.log(v.voters.length);
          voters.push(v.voters.length)
          des.push(v.description)
        })
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title : {
          text: title
          //subtext: '投票总数:'+ votersCount
      },
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['投票结果']
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType: {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      xAxis : [
          {
              type : 'value',
              boundaryGap : [0, 1]
          }
      ],
      yAxis : [
          {
              type : 'category',
              data : des
          }
      ],
      series : [
          {
              name:'结果',
              type:'bar',
              itemStyle: {normal: {
                label : {show: true, position: 'right'}
               }},
              data: voters
          }
      ]
  });

  }
  render() {
    return (
      <div className='add-vote-container'>
        <div id="main" style={{ width: 800, height: 400 }}></div>
        <RaisedButton label="back" labelStyle={styles} fullWidth={true} onClick={this.gotHome}/>
      </div>
    );
  }
}

export default Report;
