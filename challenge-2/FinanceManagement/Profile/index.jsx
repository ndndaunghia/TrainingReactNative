import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const userImg =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80';

export default function Profile(props) {
  const money = [
    {
      number: '$8900',
      desc: 'Income',
    },
    {
      number: '$5500',
      desc: 'Expenses',
    },
    {
      number: '$890',
      desc: 'Loan',
    },
  ];

  const overView = [
    {
      icon: 'arrow-up',
      action: 'Sent',
      des: 'Sending Payments to Clients',
      money: '$150',
    },
    {
      icon: 'arrow-down',
      action: 'Receive',
      des: 'Received Salary from company',
      money: '$250',
    },
    {
      icon: 'money',
      action: 'Loan',
      des: 'Loan for the car',
      money: '$400',
    },
  ];

  const navigateItem = [
    {
      icon: 'home',
    },
    {
      icon: 'credit-card',
    },
    {
      icon: 'plus',
    },
    {
      icon: 'dollar',
    },
    {
      icon: 'user-o',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInformationWrapper}>
        <View style={styles.userInformation}>
          <View style={styles.userSetting}>
            <TouchableOpacity onPress={props.handleBackToLogin}>
              <AntDesign name="swap" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="more-vertical" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.userDetail}>
            <Image source={{ uri: userImg }} style={styles.userImg} />
            <Text style={styles.name}>Hira Riaz</Text>
            <Text style={styles.job}>UX/UI Designer</Text>
            <View style={styles.wage}>
              {money.map((item, index) => {
               return (
                <View
                  key={index}
                  style={[
                    styles.wageItem,
                    index === 1 && {
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderColor: '#ccc8c8',
                    },
                  ]}>
                  <Text style={styles.number}>{item.number}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                </View>
               )
              })}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.overview}>
        <View style={styles.overviewTitle}>
          <View style={styles.overviewTextWrapper}>
            <Text style={styles.overviewText}>Overview</Text>
            <Ionicons name="notifications-outline" size={20} />
          </View>
          <Text style={styles.time}>Sept 13, 2020</Text>
        </View>

        {overView.map((item, index) => {
          return (
            <View style={styles.overviewItem} key={index}>
              <View style={styles.actionWrapper}>
                <View style={styles.actionBtn}>
                  <FontAwesome name={item.icon} />
                </View>
                <View style={styles.actionDescWrapper}>
                  <Text style={styles.actionDesc}>{item.action}</Text>
                  <Text style={styles.actionDesText}>{item.des}</Text>
                </View>
              </View>
              <Text styles={styles.overviewMoney}>{item.money}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.bottomNavigate}>
        {navigateItem.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={props.handleNextToRecentTrans}
              key={index}>
              <FontAwesome name={item.icon} size={20} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f6fe',
    flex: 1,
  },
  userInformationWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#8a8787',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  userInformation: {
    width: 340,
    height: 340,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  userSetting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  userDetail: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 28,
    fontWeight: 600,
    marginTop: 10,
    color: '#333474',
  },
  job: {
    fontSize: 14,
    marginTop: 6,
  },
  wage: {
    marginTop: 20,
    flexDirection: 'row',
  },
  wageItem: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 16,
    color: '#333474',
    marginBottom: 6,
  },
  desc: {
    fontSize: 12,
  },
  overview: {
    flex: 1,
    paddingHorizontal: 28,
  },
  overviewTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  overviewTextWrapper: {
    flexDirection: 'row',
    gap: 6,
  },
  overviewText: {
    fontSize: 18,
    fontWeight: 600,
    color: '#333474',
  },
  time: {
    color: '#333474',
    fontWeight: 600,
  },
  overviewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#8a8787',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  actionWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    backgroundColor: '#d3e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 12,
  },
  bottomNavigate: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
  },
});
