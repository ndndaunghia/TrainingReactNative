import { Text, View, SafeAreaView, FlatList } from 'react-native';
import React, { Component } from 'react';

const TIME = [
  {
    time: '8:00',
  },
  {
    time: '8:30',
  },
  {
    time: '9:00',
  },
  {
    time: '9:30',
  },
  {
    time: '10:00',
  },
  {
    time: '10:30',
  },
  {
    time: '11:00',
  },
  {
    time: '11:30',
  },
  {
    time: '12:00',
  },
  {
    time: '12:30',
  },
];

const ROW = 3;
const COL = Math.ceil(TIME.length / ROW);
export class Time extends Component {
  state = {
    arrTime: [],
  };

  componentDidMount() {
    this.handleTime(TIME, ROW);
  }
  handleTime = (time, row) => {
    const arrTemp = [];
    let index = 0;
    for (let i = 0; i < COL; i++) {
      for (let j = 0; j < row; j++) {
        index = i + j * COL;
        if (index < TIME.length) {
          arrTemp.push(TIME[index]);
        }
      }
    }
    this.setState({ arrTime: arrTemp });
  };

  renderItem = ({ index, item}) => {
    // console.log('item, index', index, item)
    return (
      <View>
        <Text>{item.time}</Text>
      </View>
    );
  };

  render() {
    console.log('ARR', this.state.arrTime)

    return (
      <SafeAreaView>
        <FlatList
          //   horizontal
          numColumns={COL}
          data={TIME}
          renderItem={this.renderItem}

          keyExtractor={item => item.id}
          // extraData={selectedId}
        />
      </SafeAreaView>
    );
  }
}

export default Time;
