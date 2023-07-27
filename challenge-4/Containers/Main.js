import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Title from '../Components/Title';
import Table from '../Components/Table';
import Keyboard from '../Components/Keyboard';
import { dataKeyBoard } from '../Components/data/dataKeyboard';
import { dataTable } from '../Components/data/dataKeyboard';

export class Main extends Component {
  state = {
    keyBoardActive: '',
    arr: dataTable
  };
  handlePress = (i) => {
    this.setState({ keyBoardActive: i });
    let a =  this.state.arr[0][0].value = i
    console.log(a)
    // this.setState({arr: [...this.state.arr, this.state.arr[0][0].value = i]})
  };

  render() {
    console.log('a', this.state.keyBoardActive);
    return (
      <>
        <View style={{ flex: 1 }}>
          <Title />
          <Table data={this.state.arr}/>
        </View>

        <View>
          <Keyboard handlePress={this.handlePress} />
        </View>
      </>
    );
  }
}

export default Main;
