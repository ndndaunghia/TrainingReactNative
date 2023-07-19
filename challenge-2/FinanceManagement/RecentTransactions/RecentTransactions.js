import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
  BACKGROUND_COLOR,
  USER_IMG,
  DATA_USER,
  TABS,
  MAIN_COLOR,
  RECENT_TRANS,
  SEE_ALL,
  TODAY,
  PAYMENT,
  SENDER,
  MONEY_SEND,
  SEE_DETAILS,
} from '../../assets/config';

export default function RecentTrans(props) {
  const [tabActive, setTabActive] = useState(0);

  const handleActiveTab = (index) => {
    setTabActive(index);
  };

  const anotherUserStyle = (item) => {
    return {top: item.top, left: item.left};
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.topPart}>
          <View style={styles.headerNav}>
            <TouchableOpacity onPress={props.handleBackProfile}>
              <AntDesign name="back" style={styles.iconHeader} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="search1" style={styles.iconHeader} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.mainTitle}>{RECENT_TRANS}</Text>
            <TouchableOpacity>
              <Text style={styles.subTitle}>{SEE_ALL}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabs}>
            {TABS.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleActiveTab(index)}>
                  <View
                    style={[
                      styles.tabItem,
                      index === tabActive && styles.tabActiveWrapper,
                    ]}>
                    <Text
                      style={[
                        styles.tabContent,
                        index === tabActive && styles.tabActiveContent,
                      ]}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.date}>
            <Text style={styles.dateContent}>{TODAY}</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.history}>
              <View style={styles.actionWrapper}>
                <FontAwesome name="envelope-open-o" style={styles.icon} />
                <View style={styles.action}>
                  <Text style={styles.actionTitle}>{PAYMENT}</Text>
                  <Text style={styles.actionContent}>{SENDER}</Text>
                </View>
              </View>
              <View style={styles.money}>
                <Text style={styles.totalMoney}>{MONEY_SEND}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPartWrapper}>
          <View style={styles.bottomPart}>
            <View style={styles.connection}>
              <Image source={{ uri: USER_IMG }} style={styles.userImg} />
            </View>
            <View style={styles.secondAround}></View>
            <View style={styles.mainAround}></View>
            {DATA_USER.map((item, index) => {
              return (
                <View
                  style={[
                    styles.anotherUser,
                    anotherUserStyle(item)
                  ]}
                  key={index}>
                  <Image source={{ uri: item.img }} style={styles.anotherImg} />
                </View>
              );
            })}
          </View>
        </View>
        <TouchableOpacity style={styles.detailWrapper}>
          <Text style={styles.detail}>{SEE_DETAILS}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${BACKGROUND_COLOR}`,
    // paddingBottom: 10
  },
  mainWrapper: {
    paddingHorizontal: 18,
    flex: 1,
  },
  topPart: {
    flex: 1,
  },
  bottomPartWrapper: {
    flex: 1,
  },
  bottomPart: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainTitle: {
    color: `${MAIN_COLOR}`,
    fontSize: 22,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 14,
    color: '#000',
    opacity: 0.8,
  },
  tabs: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  tabItem: {
    paddingHorizontal: 24,
    paddingVertical: 6,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  tabContent: {
    // fontWeight: 600,
    color: '#000',
    opacity: 0.8,
  },
  date: {
    marginTop: 24,
  },
  dateContent: {
    fontSize: 18,
    color: `${MAIN_COLOR}`,
    fontWeight: 700,
  },
  history: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 26,
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  actionWrapper: {
    flexDirection: 'row',
    gap: 14,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  actionContent: {
    fontSize: 12,
    color: `${MAIN_COLOR}`,
    marginTop: 4,
    opacity: 0.7,
  },
  icon: {
    fontSize: 28,
    marginTop: 10,
    color: `${MAIN_COLOR}`,
  },
  iconHeader: {
    fontSize: 22,
  },
  money: {
    marginTop: 11,
  },
  totalMoney: {
    color: `${MAIN_COLOR}`,
    fontWeight: 700,
    marginTop: 10,
  },
  connection: {
    width: 106,
    height: 106,
    backgroundColor: '#ffff',
    borderRadius: 53,
    borderWidth: 4,
    borderColor: '#6a6f9f',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
  },
  userImg: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  secondAround: {
    width: 160,
    height: 160,
    position: 'absolute',
    borderRadius: 80,
    borderWidth: 14,
    borderColor: '#c9d8f6',
    backgroundColor: '#ecf4ff',
  },
  mainAround: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: '250%',
    borderWidth: 1,
    borderColor: '#c9d8f6',
  },
  anotherUser: {
    position: 'absolute',
    width: 68,
    height: 68,
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    // top: 10,
    // left: 150,
  },
  anotherImg: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
  detailWrapper: {
    backgroundColor: `${MAIN_COLOR}`,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 26,
  },
  detail: {
    color: '#ffff',
    fontWeight: 600,
    fontSize: 15,
  },
  tabActiveWrapper: {
    backgroundColor: `${MAIN_COLOR}`,
  },
  tabActiveContent: {
    color: '#ffff',
  },
});