import React, { Component } from 'react';
import { getName } from '../store/action/name';
import axios from '../util/axios';

// const mapStateToProps = (state) => {
//   let { allData } = state;
//   return { allData }
// }
// const mapDispatchToProps = {
//   getName
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    console.log(1111);
    // getName().then((res) => {
    //   console.log(res);
    // });
    // axios.get('/name')
    // .then((res) => {console.log(res)})
    // .catch((err) => {console.log(err)});
  }
  render() {
    return (
      <div>
        <h1>Hello Webpack</h1>
      </div>
    );
  }
}

export default APP
// export default connect(mapStateToProps, mapDispatchToProps)(APP);