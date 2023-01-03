import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Detay from './Detay';

class Liste extends Component {
  state = { data: [] }
  componentDidMount() {
    axios
      .get('https://reqres.in/api/users')
      .then((response) => this.setState({ data: response.data.data }));
  }

  renderData() {
    return this.state.data.map((n, i) => (
      <Detay key={i} style={{ color: 'black' }}>
        {n}
      </Detay>
    ));
  }

  render() {
    return( 
    <ScrollView style={{ marginTop: 5 }}>
      {this.renderData()}
       </ScrollView>
    )
  }
}

export default Liste;
