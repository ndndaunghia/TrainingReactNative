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
      isEnded: false,
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
    this.setState((prevState) => {
      prevState.valueOnRow.pop();
    });
    this.state.arrTable[this.state.rowIndex].splice(maxIndexInRow, 1, '');
    this.setState({ arrTable: this.state.arrTable });
  };

  handleCheckWord = () => {
    const rightWord = WORD_LIST.some(
      (word) => word === this.state.valueOnRow.join(''),
    );
    if (rightWord) {
      const keyWord = this.state.keyWord.split('');
      let tmpArr = [...this.state.arrTable];
      let tmpKeyboard = [...this.state.arrKeyboard];
      let tmpArrCorrectLetter = [...this.state.arrCorrectLetter];
      for (let i = 0; i < this.state.valueOnRow.length; i++) {
        if (keyWord.includes(tmpArr[this.state.rowIndex][i].value)) {
          if (tmpArr[this.state.rowIndex][i].value === keyWord[i]) {
            tmpArr[this.state.rowIndex][i].status = 1;
            const keyObj = tmpKeyboard
              .flat()
              .find(
                (item) => item.value === tmpArr[this.state.rowIndex][i].value,
              );
            if (keyObj) {
              keyObj.status = 1;
            }
            if (
              !tmpArrCorrectLetter.includes(
                tmpArr[this.state.rowIndex][i].value,
              )
            ) {
              tmpArrCorrectLetter.push(tmpArr[this.state.rowIndex][i].value);
            }
          } else {
            tmpArr[this.state.rowIndex][i].status = 2;
            const keyObj = tmpKeyboard
              .flat()
              .find(
                (item) =>
                  item.value ===
                  this.state.arrTable[this.state.rowIndex][i].value,
              );
            if (keyObj && keyObj.status === 0) {
              keyObj.status = 2;
            }
          }
        } else {
          tmpArr[this.state.rowIndex][i].status = -1;
          const keyObj = tmpKeyboard
            .flat()
            .find(
              (item) =>
                item.value ===
                this.state.arrTable[this.state.rowIndex][i].value,
            );
          if (keyObj) {
            keyObj.status = -1;
          }
        }
      }
      this.setState(
        (prevState) => {
          prevState.rowIndex = prevState.rowIndex + 1;
          prevState.valueOnRow = [];
          return {
            arrTable: tmpArr,
            arrKeyboard: tmpKeyboard,
            arrCorrectLetter: tmpArrCorrectLetter,
          };
        },
        () => {
          const isGameOver = this.state.arrCorrectLetter.length === 5;
          if (isGameOver) {
            this.createPlayAgainConfirm('Đoán đúng rồi');
          }
        },
      );
    } else {
      alert('Vui lòng chọn từ có nghĩa');
    }
  };

  handlePress = (i) => {
    switch (i) {
      case 'ENTER':
        if (this.state.rowIndex < 5) {
          if (this.state.valueOnRow.length === 5) {
            this.handleCheckWord();
          } else {
            alert('Chưa đủ ký tự');
          }
        } else if (this.state.arrCorrectLetter.length === 5) {
          this.handleCheckWord();
          this.createPlayAgainConfirm('Đã tối đa lượt đoán');
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
