import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getName } from '../store/action/name';


const mapStateToProps = (state) => {
  let { allData } = state;
  return { allData }
}
const mapDispatchToProps = {
  getName
}

class Getname extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    this.props.getName()
  }
  render() {
    const nameList = this.props.allData.contents.map((val, index) => {
      return <li key={index}>
        {val.id} : {val.user_name}
      </li>
    })
    return (
      <div>
        <h1>这里获取数据库数据</h1>
        <ul>
          {nameList}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Getname);