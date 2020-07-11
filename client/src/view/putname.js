import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { putData } from '../store/action/test';
import { Input, Button } from 'antd';

const mapStateToProps = (state) => {
  let { allData } = state;
  return { allData }
}
const mapDispatchToProps = {
  putData
}

class Putname extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }
  handleInputChange(e) {
    let content = e.target.value
    this.setState({
      content
    })
  }
  handleSubmit() {
    if (this.state.content === '') {
      alert('请输入姓名')
      return;
    }
    const params = {
      user_name: this.state.content,
      create_date: moment().format('YYYY-MM-DD')
    }
    this.props.putData(params);
  }
  render() {
    return (
      <div style={{ marginLeft: '40px' }}>
        <h1>这里往数据库里装数据</h1>
        <Input style={{ width: '120px' }} onChange={(e) => this.handleInputChange(e)} />
        <Button style={{ marginLeft: '10px' }} onClick={() => this.handleSubmit()}>Submit</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Putname);