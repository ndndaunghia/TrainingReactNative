import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import React, { Component } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TIME, MAIN_COLOR, COL_DEFAULT } from './config';
import Time from './Time';

export class TimeSelector extends Component {
  state = {
    arrTime: TIME,
    isHorizontal: false,
    col: COL_DEFAULT,
    colChanging: String(COL_DEFAULT),
    row: Math.ceil(TIME.length / COL_DEFAULT),
    itemSelected: null,
  };

  changeRowHorizontal = (time, col) => {
    let result = [];
    for (i = 0; i < Number(col); i++) {
      let tmp = [];
      for (j = i; j < time.length; j += Number(col)) {
        tmp.push(time[j]);
      }
      result.push(tmp);
    }
    this.setState({ arrTime: result });
  };

  handleRow = () => {
    if (this.state.isHorizontal === false) {
      if (
        Number(this.state.colChanging) >= COL_DEFAULT ||
        Number(this.state.colChanging) === 0
      ) {
        this.setState({ col: COL_DEFAULT.toString() });
        this.setState({ colChanging: COL_DEFAULT.toString() });
      } else {
        this.setState({ col: this.state.colChanging });
      }
    } else {
      if (Number(this.state.colChanging) === 0) {
        this.changeRowHorizontal(TIME, COL_DEFAULT.toString());
        this.setState({ col: COL_DEFAULT.toString() });
        this.setState({ colChanging: COL_DEFAULT.toString() });
      } else {
        this.changeRowHorizontal(TIME, this.state.colChanging);
      }
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

  handleSelected = (item) => {
    this.setState({ itemSelected: item });
  };

  handleCurrentTime = () => {
    return (
      <Text style={styles.currentTime}>{this.state.itemSelected?.time}</Text>
    );
  };

  renderChild = (item) => {
    return (
      <Time
        key={item.id}
        time={item.time}
        status={item.status}
        isSelected={item.id === this.state.itemSelected?.id}
        selectItem={() => this.handleSelected(item)}
      />
    );
  };

  renderItem = ({ item }) => {
    if (!this.state.isHorizontal) return this.renderChild(item);
    else {
      return (
        <View>
          {item.map((timeItem) => {
            return this.renderChild(timeItem);
          })}
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView onTouchStart={Keyboard.dismiss} style={styles.container}>
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
                this.setState({ colChanging: colChanging })
              }
            />

            <TouchableOpacity style={styles.saveBtn} onPress={this.handleRow}>
              <Text style={styles.saveBtnContent}>Lưu</Text>
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
          {this.handleCurrentTime()}
        </View>
        <FlatList
          data={this.state.arrTime}
          numColumns={!this.state.isHorizontal && Number(this.state.col)}
          key={!this.state.isHorizontal && Number(this.state.col)}
          // keyExtractor={(item) => item.id}
          horizontal={this.state.isHorizontal}
          renderItem={this.renderItem}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    color: `${MAIN_COLOR}`,
  },
  icon: {
    fontSize: 25,
    color: `${MAIN_COLOR}`,
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
    borderColor: `${MAIN_COLOR}`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  saveBtn: {
    borderWidth: 1,
    backgroundColor: `${MAIN_COLOR}`,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  saveBtnContent: {
    color: '#fff',
    fontWeight: 500,
  },
  currentTimeWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 40,
  },
  currentTime: {
    fontSize: 20,
    fontWeight: 500,
    minHeight: 26,
    color: `${MAIN_COLOR}`,
  },
  // flatListWrapper: {
  //   alignItems: 'center',
  // },
});

export default TimeSelector;
