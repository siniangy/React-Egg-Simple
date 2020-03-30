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

class App extends Component {
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
        <ul>
          {nameList}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);