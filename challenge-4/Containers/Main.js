import { Text, View } from 'react-native';
import React, { Component } from 'react';
import Title from '../Components/Title';
import Table from '../Components/Table';
import Keyboard from '../Components/Keyboard';
import { dataKeyBoard } from '../Components/data/dataKeyboard';
import { dataTable } from '../Components/data/dataKeyboard';
import { KEY_WORD } from '../Components/data/dataKeyWord';
export class Main extends Component {
  state = {
    keyBoardActive: '',
    arrTable: dataTable,
    isLimit: false,
    valueOnRow: [],
    rowIndex: 0,
    correctIndex: [],
    incorrectIndex: [],
    keyWord: 'ABCDE',
  };

  handleFillRow = () => {
    this.setState((prevState) => {
      let maxIndex = prevState.valueOnRow.length - 1;
      prevState.arrTable[prevState.rowIndex].splice(
        maxIndex,
        1,
        prevState.valueOnRow[maxIndex],
      );
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
    for (let i = 0; i < this.state.valueOnRow.length; i++) {
      if (keyWord.includes(this.state.valueOnRow[i])) {
        if (this.state.valueOnRow[i] === keyWord[i]) {
          this.setState((prevState) => {
            const updateCorrectIndex = [
              ...prevState.correctIndex,
              this.state.valueOnRow[i],
            ];

            return { correctIndex: updateCorrectIndex };
          });
        } else {
          this.setState((prevState) => {
            const updateIncorrectIndex = [
              ...prevState.incorrectIndex,
              this.state.valueOnRow[i],
            ];

            return { incorrectIndex: updateIncorrectIndex };
          });
        }
      }
    }
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
      if (this.state.rowIndex < 5) {
        if (this.state.valueOnRow.length == 5) {
          this.handleCheckWord();
          // if (this.state.valueOnRow.length < 5) {
          //   // if (i !== 'Enter') {
          //   // this.state.valueOnRow.push(i);
          //   this.handleFillRow();
          //   // }
          // }
          // this.setState({correctIndex: [], incorrectIndex: []})
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

  // shouldComponentUpdate(nextState) {
  //   if(this.state.correctIndex !== nextState.correctIndex)
  //   {
  //     return true
  //   }
  //   return false
  // }

  render() {
    // console.log(this.state.valueOnRow);
    // console.log(this.state.arrTable);
    console.log('dung vi tri', this.state.correctIndex);
    console.log('sai vi tri', this.state.incorrectIndex);
    return (
      <>
        <View style={{ flex: 1 }}>
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

export default Main;
