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

const MAIN_WIDTH = 250;
const SUB_WIDTH = 62;
const r = SUB_WIDTH / 2;
const R = MAIN_WIDTH / 2;
const BORDER_WIDTH_MAIN = 1;
const BORDER_WIDTH_SUB_USER = 1;
const angle = (2 * Math.PI) / DATA_USER.length;

export default function RecentTrans(props) {
  const [tabActive, setTabActive] = useState(0);

  const handleActiveTab = (index) => {
    setTabActive(index);
  };

  const subUserStyle = (index) => {
    const base = R - r - BORDER_WIDTH_SUB_USER;
    const x = base - (R - BORDER_WIDTH_MAIN / 2) * Math.sin(angle * index);
    const y = base - (R - BORDER_WIDTH_MAIN / 2) * Math.cos(angle * index);
    return {
      top: y,
      left: x,
    };
  };

  const renderUser = () => {
    return DATA_USER.map((item, index) => {
      return (
        <View style={[styles.subUser, subUserStyle(index)]} key={index}>
          <Image source={{ uri: item.img }} style={styles.subImg} />
        </View>
      );
    });
  };

  // return (
  //   <View
  //     style={{
  //       width: 200,
  //       height: 200,
  //       borderWidth: 10,
  //       borderRadius: 100,
  //       top: 250,
  //       left: 100,
  //     }}>
  //     <View
  //       style={{
  //         ...StyleSheet.absoluteFillObject,
  //         width: '100%',
  //         height: '100%',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       <View style={{ height: 20, width: 20, backgroundColor: 'black' }} />
  //     </View>
  //     {[1, 2, 3, 4, 5, 6].map((_, i) => {
  //       const total = 5;
  //       const R = 100;
  //       const w = 50,
  //         r = w / 2,
  //         b = 10,
  //         B = 10;

  //         const base = R - r - b
  //         const angle = 2 * Math.PI / total
  //         const x = base - (R - B/2) * Math.sin(angle * i);
  //         const y = base - (R - B/2) * Math.cos(angle * i) ;
  //       return (
  //         <View
  //           style={{
  //             position: 'absolute',
  //             width: w,
  //             height: w,
  //             borderRadius: r,
  //             borderWidth: 10,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             left: x,
  //             top: y,
  //           }}>
  //           <View
  //             style={{
  //               width: 10,
  //               height: 10,
  //               backgroundColor: 'green',
  //             }}
  //           />
  //         </View>
  //       );
  //     })}
  //   </View>
  // );

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
            <View style={styles.mainAround}>{renderUser()}</View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    // backgroundColor: 'green',
  },
  mainAround: {
    height: MAIN_WIDTH,
    width: MAIN_WIDTH,
    borderWidth: BORDER_WIDTH_MAIN,
    borderColor: '#c9d8f6',
    borderRadius: R,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  subUser: {
    position: 'absolute',
    width: SUB_WIDTH,
    height: SUB_WIDTH,
    borderWidth: BORDER_WIDTH_SUB_USER,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SUB_WIDTH / 2,
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  subImg: {
    width: '100%',
    height: '100%',
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
