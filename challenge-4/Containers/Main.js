import { View, StyleSheet, Text, Alert } from 'react-native';
import React, { Component } from 'react';
import Title from '../Components/Title';
import Table from '../Components/Table';
import Keyboard from '../Components/Keyboard';
import { DATA_TABLE, DATA_KEYBOARD, WORD_LIST } from '../Components/data/data';

export class Main extends Component {
  get rawArrTable() {
    return DATA_TABLE.map((row) => {
      return row.map((char) => ({ ...char }));
    });
  }

  get rawArrKeyboard() {
    return DATA_KEYBOARD.map((row) => {
      return row.map((item) => ({ ...item }));
    });
  }

  state = {
    keyBoardActive: '',
    arrTable: this.rawArrTable,
    arrKeyboard: this.rawArrKeyboard,
    arrCorrectLetter: [],
    valueOnRow: [],
    rowIndex: 0,
    keyWord: WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)],
  };

  createPlayAgainConfirm = (message) =>
    Alert.alert(message, 'Chơi lại', [
      { text: 'OK', onPress: () => this.resetGame() },
    ]);

  resetGame = () => {
    this.setState({
      keyBoardActive: '',
      arrTable: this.rawArrTable,
      arrKeyboard: this.rawArrKeyboard,
      arrCorrectLetter: [],
      valueOnRow: [],
      rowIndex: 0,
      keyWord: WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)],
    });
  };

  handleFillRow = () => {
    this.setState((prevState) => {
      let maxIndex = prevState.valueOnRow.length - 1;
      const updateArrTable = [...prevState.arrTable];
      updateArrTable[prevState.rowIndex].splice(maxIndex, 1, {
        value: prevState.valueOnRow[maxIndex],
        status: 0,
      });
      return {
        arrTable: updateArrTable,
      };
    });
  };

  handleRemoveValueOnRow = () => {
    let maxIndexInRow = this.state.valueOnRow.length - 1;
    console.log('a', this.state);
    this.setState((prevState) => {
      prevState.valueOnRow.pop();
    });
    this.state.arrTable[this.state.rowIndex].splice(maxIndexInRow, 1, '');
    this.setState({ arrTable: this.state.arrTable });
  };

  handleCheckWord = () => {
    // const rightWord = WORD_LIST.some(
    //   (word) => word === this.state.valueOnRow.join(''),
    // );
    // if (rightWord) {
    // const keyWord = ['F', 'L', 'O', 'O', 'R'];
    const keyWord = this.state.keyWord.split('');
    let tmpArr = [...this.state.arrTable];
    let tmpKeyboard = [...this.state.arrKeyboard];
    let tmpValueOnRow = [...this.state.valueOnRow];
    let tmpArrCorrectLetter = [];

    // console.log(
    //   tmpValueOnRow.map((letter, idx) =>
    //     letter == keyWord[idx] ? (keyWord[idx] = false) : letter,
    //   ),
    // );

    let status = tmpValueOnRow
      .map((letter, idx) =>
        letter == keyWord[idx] ? (keyWord[idx] = false) : letter,
      )
      .map((letter, idx) =>
        letter
          ? (idx = keyWord.indexOf(letter)) < 0
            ? 'incorrect'
            : (keyWord[idx] = 'notEntirelyCorrect')
          : 'correct',
      );

    tmpArr[this.state.rowIndex].forEach((item, i) => {
      if (status[i] === 'correct') {
        item.status = 1;
        tmpArrCorrectLetter.push(item.value);
      } else if (status[i] === 'notEntirelyCorrect') {
        item.status = 2;
      } else {
        item.status = -1;
      }

      const keyObj = tmpKeyboard
        .flat()
        .find((item) => item.value === tmpArr[this.state.rowIndex][i].value);
      if (keyObj) {
        if (item.status === 1) {
          keyObj.status = 1;
        } else if (item.status === 2 && keyObj.status === 0) {
          keyObj.status = 2;
        } else if (item.status === -1 && keyObj.status === 0) {
          keyObj.status = -1;
        }
      }
    });

    this.setState(
      (prevState) => {
        return {
          valueOnRow: [],
          rowIndex: prevState.rowIndex + 1,
          arrTable: tmpArr,
          arrKeyboard: tmpKeyboard,
          arrCorrectLetter: tmpArrCorrectLetter,
        };
      },
      () => {
        const isWin = this.state.arrCorrectLetter.length === 5;
        const isLose = this.state.rowIndex > 5;
        if (isWin) {
          this.createPlayAgainConfirm('Đoán đúng rồi');
        } else if (isLose) {
          this.createPlayAgainConfirm('Đã tối đa lượt đoán');
        }
      },
    );
    // } else {
    //   alert('Vui lòng chọn từ có nghĩa');
    // }
  };

  handlePress = (i) => {
    switch (i) {
      case 'ENTER':
        if (this.state.rowIndex <= 5) {
          if (this.state.valueOnRow.length === 5) {
            this.handleCheckWord();
          } else {
            alert('Chưa đủ ký tự');
          }
        }
        break;
      case 'DEL':
        this.handleRemoveValueOnRow();
        break;
      default:
        if (i !== 'ENTER' && i !== 'DEL') {
          this.setState((prevState) => {
            const keyBoardActive = i;
            const newValueOnRow =
              prevState.valueOnRow.length < 5
                ? [...prevState.valueOnRow, i]
                : prevState.valueOnRow;

            return { keyBoardActive, valueOnRow: newValueOnRow };
          });
          this.handleFillRow();
        }
        break;
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Title />
          <View>
            <Text>{this.state.keyWord}</Text>
          </View>
          <Table data={this.state.arrTable} />
        </View>

        <View>
          <Keyboard
            handlePress={this.handlePress}
            data={this.state.arrKeyboard}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
