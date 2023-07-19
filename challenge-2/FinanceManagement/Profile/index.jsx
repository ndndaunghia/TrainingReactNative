import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { backgroundColor } from '../../assets/config';
import {
  mainColor,
  userImg,
  money,
  overView,
  navigateItem,
} from '../../assets/config';

export default function Profile(props) {
  const [navigateActive, setNavigateActive] = useState(4);
  const handleChangeActive = (index) => {
    setNavigateActive(index);
  };
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
                  <TouchableOpacity key={index}>
                    <View
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
                  </TouchableOpacity>
                );
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
            <TouchableOpacity
              onPress={props.handleNextToRecentTrans}
              key={index}>
              <View style={styles.overviewItem}>
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
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.bottomNavigate}>
        {navigateItem.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeActive(index)}
              style={item.icon === 'plus' && styles.mainBtnWrapper}>
              <FontAwesome
                name={item.icon}
                size={20}
                style={
                  (item.icon === 'plus' && { color: '#ffff', fontSize: 12 }) ||
                  (index === navigateActive && { color: 'blue' })
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: `${backgroundColor}`,
    flex: 1,
  },
  userInformationWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
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
    color: `${mainColor}`,
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
    // backgroundColor: '#f2f2f2',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 16,
    color: `${mainColor}`,
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
    color: `${mainColor}`,
  },
  time: {
    color: `${mainColor}`,
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
    shadowColor: '#d3dcf0',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },

  actionWrapper: {
    flexDirection: 'row',
    gap: 10,
  },

  actionBtn: {
    backgroundColor: '#e0e2f8',
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
  mainBtnWrapper: {
    backgroundColor: `${mainColor}`,
    width: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  mainBtn: {
    color: '#ffff',
    fontSize: 12,
  },
});
