import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import TextField from 'material-ui/TextField'
import styles from '../../../themes/commonUIStyle'
import './styles.css'

class Report extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.goToHome = this.goToHome.bind(this);
  }
  goToHome = ()=>{
    this.props.history.push("/home")
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        title: { text: '投票结果' },
        tooltip: {},
        xAxis: {
            data: ["选项1", "选项2", "选项3", "选项4", "选项5", "选项6"]
        },
        yAxis: {},
        series: [{
            name: '投票数量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }
  render() {
    return (
      <div className='add-vote-container'>
        <div id="main" style={{ width: 400, height: 400 }}></div>
        <RaisedButton label="back" labelStyle={styles} fullWidth={true} onClick={this.goToHome}/>
      </div>
    );
  }
}

export default Report;
