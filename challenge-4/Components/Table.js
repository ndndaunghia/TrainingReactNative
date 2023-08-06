import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import InputValue from './InputValue';

export class Table extends Component {
  renderItem = () => {
    return this.props.data.map((data, index) => {
      return (
        <View key={index} style={styles.rowTable}>
          {data.map((item, index) => {
            return <InputValue key={index} textValue={item.value} status={item.status}/>;
          })}
        </View>
      );
    });
  };
  render() {
    return <View style={styles.tableWrapper}>{this.renderItem()}</View>;
  }
}

const styles = StyleSheet.create({
  tableWrapper: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  rowTable: {
    flexDirection: 'row',
    // marginRight: 6
  },
});

export default Table;
