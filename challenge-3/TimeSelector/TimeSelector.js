import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TIME } from './config';
import Time from './Time';

const ROW_DEFAULT = 3;
export class TimeSelector extends Component {
  state = {
    arrTime: TIME,
    isHorizontal: true,
    row: ROW_DEFAULT,
    col: Math.ceil(TIME.length / ROW_DEFAULT),
  };

  handleTime = (time, row) => {
    const arrTemp = [];
    let index = 0;
    for (let i = 0; i < this.state.col; i++) {
      for (let j = 0; j < row; j++) {
        index = i + j * this.state.col;
        if (index < time.length) {
          arrTemp.push(time[index]);
        }
      }
    }
    console.log(arrTemp);
    this.setState({ arrTime: arrTemp });
  };

  componentDidMount() {
    // this.handleTime(TIME, this.state.row);
  }

  onChangeRow = (row) => {
    this.setState({ row });
  };

  changeSetting = () => {
    this.setState((prevState) => ({
      isHorizontal: !prevState.isHorizontal,
    }));

    this.setState({isHorizontal: !this.state.isHorizontal});

    if(this.state.isHorizontal === false) {
        // const newRow = this.state.col;
        // this.setState({col: Math.ceil(TIME.length / newRow)})
        // this.handleTime(TIME, newRow);
        console.log(1);
    }
    else {
        // this.setState({arrTime: TIME});
        // this.setState({row: ROW_DEFAULT})
        console.log(2);
    }
  };

  handleRow = () => {
    let newCol = Math.ceil(TIME.length / this.state.row);
    this.setState({ col: newCol });
  };

  renderItem = ({ item, index }) => {
    return <Time time={item.time} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timeWrapper}>
          <View style={styles.titleWrapper}>
            <Feather name="clock" style={styles.icon} />
            <Text style={styles.title}>Thời gian</Text>
          </View>
          <View style={styles.settingWrapper}>
            <TextInput
              style={styles.inputField}
              value={this.state.row}
              onChangeText={this.onChangeRow}
            />

            <TouchableOpacity style={styles.saveBtn} onPress={this.handleRow}>
              <Text>Luu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.changeSetting}>
              <Feather
                name={
                  this.state.isHorizontal ? 'more-horizontal' : 'more-vertical'
                }
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.currentTimeWrapper}>
          <Text style={styles.currentTime}>8.30</Text>
        </View>
        <FlatList
          data={this.state.arrTime}
          numColumns={!this.state.isHorizontal && this.state.col }
          key={!this.state.isHorizontal && this.state.col}
        //   key={this.state.col}
          horizontal={this.state.isHorizontal}
            // numColumns={this.state.isHorizontal ? this.state.col : this.state.row}
            // key={this.state.isHorizontal ? this.state.col : this.state.row}
          // data={TIME}
          renderItem={this.renderItem}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1.5,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  icon: {
    fontSize: 25,
    // color: '#91C8E4',
  },
  settingWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  saveBtn: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 6,
  },
  currentTimeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  currentTime: {
    fontSize: 18,
  },
});

export default TimeSelector;
