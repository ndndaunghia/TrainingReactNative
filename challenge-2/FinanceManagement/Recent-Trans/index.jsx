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
import { mainColor } from '../../assets/config';
import { backgroundColor, userImg, dataUser, tabs } from '../../assets/config';

export default function RecentTrans(props) {
  
  const [tabActive, setTabActive] = useState(0);

  const handleActiveTab = (index) => {
    setTabActive(index);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.topPart}>
          <View style={styles.headerNav}>
            <TouchableOpacity onPress={props.handleBackProfile}>
              <AntDesign name="back" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="search1" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.mainTitle}>Recent Transactions</Text>
           <TouchableOpacity>
           <Text style={styles.subTitle}>See all</Text>
           </TouchableOpacity>
          </View>
          <View style={styles.tabs}>
            {tabs.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => handleActiveTab(index)}> 
                <View
                  style={[
                    styles.tabItem,
                    index === tabActive && { backgroundColor: `${mainColor}` },
                  ]}
                  >
                  <Text
                    style={[
                      styles.tabContent,
                      index === tabActive && { color: '#ffff' },
                    ]}>
                    {item.name}
                  </Text>
                </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.date}>
            <Text style={styles.dateContent}>Today</Text>
          </View>
         <TouchableOpacity>
         <View style={styles.history}>
            <View style={styles.actionWrapper}>
              <FontAwesome
                name="envelope-open-o"
                size={25}
                style={{ marginTop: 8, color: `${mainColor}` }}
              />
              <View style={styles.action}>
                <Text style={styles.actionTitle}>Payment</Text>
                <Text style={styles.actionContent}>Payment from Andrea</Text>
              </View>
            </View>
            <View style={styles.money}>
              <Text style={styles.totalMoney}>$30.00</Text>
            </View>
          </View>
         </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.bottomPart}>
            <View style={styles.connection}>
              <Image source={{ uri: userImg }} style={styles.userImg} />
            </View>
            <View style={styles.secondAround}></View>
            <View style={styles.mainAround}></View>
            {dataUser.map((item, index) => {
              return (
                <View
                  style={[
                    styles.anotherUser,
                    { top: item.top, left: item.left },
                  ]}
                  key={index}>
                  <Image source={{ uri: item.img }} style={styles.anotherImg} />
                </View>
              );
            })}
          </View>
        </View>
        <TouchableOpacity style={styles.detailWrapper}>
          <Text style={styles.detail}>See Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${backgroundColor}`,
    // paddingBottom: 10
  },
  mainWrapper: {
    paddingHorizontal: 14,
    flex: 1,
  },
  topPart: {
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
    color: `${mainColor}`,
    fontSize: 20,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 14,
    color: `${mainColor}`,
  },
  tabs: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
  },
  tabItem: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  tabContent: {
    fontWeight: 600,
    color: `${mainColor}`,
  },
  date: {
    marginTop: 24,
  },
  dateContent: {
    fontSize: 18,
    color: `${mainColor}`,
    fontWeight: 700,
  },
  history: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 15,
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
    color: `${mainColor}`,
  },
  money: {
    marginTop: 11,
  },
  totalMoney: {
    color: `${mainColor}`,
    fontWeight: 700,
  },
  connection: {
    width: 100,
    height: 100,
    // backgroundColor: 'blue',
    borderRadius: 50,
    borderWidth: 2,
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
    width: 60,
    height: 60,
    // top: 10,
    // left: 150,
  },
  anotherImg: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  detailWrapper: {
    backgroundColor: `${mainColor}`,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 15,
  },
  detail: {
    color: '#ffff',
    fontWeight: 600,
  },
});
