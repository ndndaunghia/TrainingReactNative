import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import Title from '../Components/Title';
import Table from '../Components/Table';
import Keyboard from '../Components/Keyboard';
import { DATA_TABLE } from '../Components/data/dataKeyboard';

export class Main extends Component {
  state = {
    keyBoardActive: '',
    arrTable: DATA_TABLE,
    valueOnRow: [],
    rowIndex: 0,
    keyWord: 'ABCDE',
  };

  handleFillRow = () => {
    this.setState((prevState) => {
      let maxIndex = prevState.valueOnRow.length - 1;
      prevState.arrTable[prevState.rowIndex].splice(maxIndex, 1, {
        value: prevState.valueOnRow[maxIndex],
        status: 0,
      });
    });
  };

  handleRemoveValueOnRow = () => {
    let maxIndexInRow = this.state.valueOnRow.length - 1;
    this.setState((prevState) => {
      prevState.valueOnRow.pop();
    });
    this.state.arrTable[this.state.rowIndex].splice(maxIndexInRow, 1, '');
    this.setState({ arrTable: this.state.arrTable });
  };

  handleCheckWord = () => {
    const keyWord = this.state.keyWord.split('');
    let tmpArr = [...this.state.arrTable];
    for (let i = 0; i < this.state.valueOnRow.length; i++) {
      if (keyWord.includes(this.state.arrTable[this.state.rowIndex][i].value)) {
        if (this.state.arrTable[this.state.rowIndex][i].value === keyWord[i]) {
          tmpArr[this.state.rowIndex][i].status = 1;
        } else {
          tmpArr[this.state.rowIndex][i].status = 2;
        }
      } else {
        tmpArr[this.state.rowIndex][i].status = -1;
      }
    }
    this.setState({
      arrTable: tmpArr,
    });
    this.setState((prevState) => {
      prevState.rowIndex = prevState.rowIndex + 1;
      prevState.valueOnRow = [];
    });
  };
  handlePress = (i) => {
    if (i !== 'Enter' && i !== 'Del') {
      this.setState({ keyBoardActive: i });
      if (this.state.valueOnRow.length < 5) {
        this.setState((prevState) => {
          const updateValueOnRow = [...prevState.valueOnRow, i];
          prevState.valueOnRow = updateValueOnRow;
        });
        this.handleFillRow();
      }
    }
    if (i === 'Enter') {
      if (this.state.rowIndex <= 5) {
        if (this.state.valueOnRow.length == 5) {
          this.handleCheckWord();
        } else {
          alert('Chưa đủ ký tự');
        }
      } else {
        alert('Đã tối đa lượt đoán');
      }
    }

    if (i === 'Del') {
      this.handleRemoveValueOnRow();
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Title />
          <Table data={this.state.arrTable} />
        </View>

        <View>
          <Keyboard handlePress={this.handlePress} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Main;
