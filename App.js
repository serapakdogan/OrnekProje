import React from "react";
import { View } from 'react-native';
import Header from "./src/components/Header";
import Liste from "./src/components/Liste";




export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
       <Header HeaderText={'deneme12345'} />
       <Liste />
       </View>
    );
  }
};

