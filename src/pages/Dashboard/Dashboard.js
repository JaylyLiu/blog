/**
 * createdBy: Jayly 2018-08-16
 */
import React from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

class Dashboard extends React.Component {
  /**
   * number1 一个实例 变量
   */
  state = {
    number1: 1,
  }

  /**
   * 增加numberValue
   */
  addNumberValue = () => {
    let num = this.state.number1;
    num++;
    this.setState({
      number1: num,
    })
  }



  render() {
    const { string1, string2, array1} = this.props;
    const {number1} = this.state;
    let infoCards = array1.map(
      (item, i) => 
        <ul key={i}>
          <li>{'name: ' + item.name}</li>
          <li>{'age: ' + item.age}</li>
          <li>{'sex: ' + item.sex}</li>
        </ul>
    )
    return(
      <div className="dashboard">
        <h2>{number1}</h2>
        <h3>{string1}</h3>
        <h4>{string2}</h4>
        <div>{infoCards}</div>
        <button className="dashboard-add-btn" onClick={this.addNumberValue}>Add Number</button>
      </div>
    )
  }
}

/**
 * 设置this.props 的默认值
 * https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
 */
Dashboard.defaultProps = {
  string1: '这是默认值'
}
/**
 * 设置this.props 的数据类型和是否必须传递
 * https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values
 */
Dashboard.protoTypes = {
  /**
   * 字符串类型
   */
  string1: PropTypes.string,
  /**
   * 如果实例化组件时不提供，将报错
   */
  string2: PropTypes.string.isRequired,
  /**
   * 数组
   */
  array1: PropTypes.array,
}

export default Dashboard;