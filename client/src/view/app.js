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
    let targetName = this.props.allData.contents.name;
    return (
      <div>
        <h1>Hello {targetName}</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);