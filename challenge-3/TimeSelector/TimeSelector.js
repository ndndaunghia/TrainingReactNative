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

const COL_DEFAULT = 3;
export class TimeSelector extends Component {
  state = {
    arrTime: TIME,
    isHorizontal: false,
    col: COL_DEFAULT,
    colChanging: COL_DEFAULT,
    row: Math.ceil(TIME.length / COL_DEFAULT),
  };

  changeRowHorizontal = (time, col) => {
    // console.log(col);
    let result = [];
    for (i = 0; i < col; i++) {
      let tmp = [];
      for (j = i; j < time.length; j += col) {
        // console.log(typeof(j));
        tmp.push(time[j]);
        // console.log('j', j);
        // console.log('time', time);
      }
      result.push(tmp);
    }
    // console.log('pess', result);
    this.setState({ arrTime: result });
  };

  handleRow = () => {
    if (this.state.isHorizontal === false) {
      if (
        this.state.colChanging >= COL_DEFAULT ||
        this.state.colChanging === 0
      ) {
        this.setState({ col: COL_DEFAULT });
        this.setState({ colChanging: COL_DEFAULT });
      } else {
        this.setState({ col: this.state.colChanging });
      }
    } else {
      if (this.state.colChanging == 0) {
        this.setState({ colChanging: COL_DEFAULT });
        this.changeRowHorizontal(TIME, COL_DEFAULT);
      }
      this.changeRowHorizontal(TIME, this.state.colChanging);
    }
  };

  changeSetting = () => {
    this.setState((prevState) => ({
      isHorizontal: !prevState.isHorizontal,
    }));
    if (!this.state.isHorizontal) {
      this.changeRowHorizontal(TIME, COL_DEFAULT);
    } else {
      this.setState({ arrTime: TIME });
    }
  };

  // renderItem2 = (arrItem, indexItem) => {
  //   return arrItem.map((item, index) => {
  //     return <Time time={item.time} />;
  //   });
  // };

  renderItem = ({ item, index }) => {
    console.log('item', item);
    if (!this.state.isHorizontal)
      return <Time time={item.time} status={item.status} key={item.id}/>;
    else {
      return (
        <View>
          {item.map((timeItem, index) => {
            return <Time time={timeItem.time} status={timeItem.status}/>;
            // return <View>{this.renderItem2(timeItem, index)}</View>;
          })}
        </View>
      );
    }
  };

  render() {
    // console.log('newArr', this.state.arrTime);
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
              keyboardType="numeric"
              defaultValue={COL_DEFAULT.toString()}
              value={this.state.colChanging}
              onChangeText={(colChanging) =>
                this.setState({ colChanging: Number(colChanging) })
              }
            />

            <TouchableOpacity style={styles.saveBtn} onPress={this.handleRow}>
              <Text>Lưu</Text>
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
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={this.state.arrTime}
            numColumns={!this.state.isHorizontal && this.state.col}
            key={!this.state.isHorizontal && this.state.col}
            keyExtractor={(item) => item.id}
            horizontal={this.state.isHorizontal}
            renderItem={this.renderItem}
            style={styles.flatListStyle}
            contentContainerStyle={{ justifyContent: 'flex-start' }}
            //   key={this.state.col}
            // numColumns={this.state.isHorizontal ? this.state.col : this.state.row}
            // key={this.state.isHorizontal ? this.state.col : this.state.row}
            // data={TIME}
          />
        </View>
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
    marginTop: 20,
  },
  currentTime: {
    fontSize: 18,
  },
  flatListStyle: {
    flexWrap: 'wrap',
    // backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});

export default TimeSelector;
