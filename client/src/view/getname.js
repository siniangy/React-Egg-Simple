import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../store/action/test';


const mapStateToProps = (state) => {
  let { allData } = state;
  return { allData }
}
const mapDispatchToProps = {
  getData
}

class Getname extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.getData()
  }
  render() {
    const nameList = this.props.allData.contents.map((val, index) => {
      return <li key={index}>
        {val.id} : {val.user_name}
      </li>
    });
    const dateList = this.props.allData.contents.map((val, index) => {
      return <li key={index}>
        {val.id} : {val.create_date}
      </li>
    });
    return (
      <div>
        <h1>这里获取数据库数据</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <ul>
              {nameList}
            </ul>
          </div>
          <div style={{ flex: 1 }}>
            <ul>
              {dateList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Getname);