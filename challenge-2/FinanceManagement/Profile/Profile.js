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
  import {
    BACKGROUND_COLOR,
    MAIN_COLOR,
    USER_IMG,
    MONEY,
    OVERVIEW,
    NAVIGATE_ITEM,
    NAME,
    JOB,
    OVERVIEW_TITLE,
    DATE,
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
                <AntDesign name="swap" style={styles.profileIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="more-vertical" style={styles.profileIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.userDetail}>
              <Image source={{ uri: USER_IMG }} style={styles.userImg} />
              <Text style={styles.name}>{NAME}</Text>
              <Text style={styles.job}>{JOB}</Text>
              <View style={styles.wage}>
                {MONEY.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={[styles.wageItem, index === 1 && styles.middleItem]}>
                      <TouchableOpacity style={styles.itemContent}>
                        <Text style={styles.number}>{item.number}</Text>
                        <Text style={styles.desc}>{item.desc}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.overview}>
          <View style={styles.overviewTitle}>
            <View style={styles.overviewTextWrapper}>
              <Text style={styles.overviewText}>{OVERVIEW_TITLE}</Text>
              <View style={styles.notificationWrapper}>
                <Ionicons
                  name="notifications-outline"
                  style={styles.profileIcon}
                />
                <View style={styles.haveNotification}></View>
              </View>
            </View>
            <Text style={styles.time}>{DATE}</Text>
          </View>
  
          {OVERVIEW.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={props.handleNextToRecentTrans}
                key={index}>
                <View style={styles.overviewItem}>
                  <View style={styles.actionWrapper}>
                    <View style={styles.actionBtn}>
                      <FontAwesome name={item.icon} style={styles.icon} />
                    </View>
                    <View style={styles.actionDescriptionWrapper}>
                      <Text style={styles.actionDesc}>{item.action}</Text>
                      <Text style={styles.actionDesText}>{item.des}</Text>
                    </View>
                  </View>
                  <Text style={styles.overviewMoney}>{item.money}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.bottomNavigate}>
          {NAVIGATE_ITEM.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleChangeActive(index)}
                style={item.icon === 'plus' && styles.mainBtnWrapper}>
                <FontAwesome
                  name={item.icon}
                  style={[
                    (item.icon === 'plus' && styles.mainBtn) ||
                      (index === navigateActive && styles.activeBtn),
                    styles.profileIcon,
                  ]}
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
      backgroundColor: `${BACKGROUND_COLOR}`,
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
      borderRadius: 26,
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
      fontWeight: 700,
      marginTop: 16,
      color: `${MAIN_COLOR}`,
    },
    job: {
      fontSize: 14,
      marginTop: 5,
    },
    wage: {
      marginTop: 35,
      flexDirection: 'row',
    },
    wageItem: {
      // padding: 20,
      // justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 6,
    },
    middleItem: {
      borderLeftWidth: 0.4,
      borderRightWidth: 0.4,
      borderColor: '#ccc8c8',
    },
    number: {
      fontSize: 16,
      color: `${MAIN_COLOR}`,
      fontWeight: 500,
    },
    itemContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    desc: {
      fontSize: 12,
      marginTop: 12,
      fontWeight: 400,
    },
    overview: {
      flex: 1,
      paddingHorizontal: 28,
    },
    overviewTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
  
    overviewTextWrapper: {
      flexDirection: 'row',
      gap: 6,
    },
    overviewText: {
      fontSize: 22,
      fontWeight: 700,
      color: `${MAIN_COLOR}`,
    },
    time: {
      color: `${MAIN_COLOR}`,
      fontWeight: 600,
      marginTop: 8,
    },
    overviewItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 24,
      backgroundColor: '#ffffff',
      padding: 15,
      borderRadius: 26,
      shadowColor: '#d3dcf0',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
    },
  
    actionWrapper: {
      flexDirection: 'row',
      gap: 14,
    },
  
    actionDesc: {
      fontSize: 16,
      fontWeight: 700,
    },
  
    actionDesText: {
      marginTop: 3,
      opacity: 0.7,
      fontSize: 12,
    },
  
    overviewMoney: {
      color: '#000',
      fontWeight: 700,
      marginTop: 14,
    },
  
    actionBtn: {
      backgroundColor: '#e0e2f8',
      justifyContent: 'center',
      alignItems: 'center',
      width: 44,
      height: 44,
      borderRadius: 16,
    },
    bottomNavigate: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 12,
    },
    mainBtnWrapper: {
      backgroundColor: `${MAIN_COLOR}`,
      width: 26,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
    },
    mainBtn: {
      color: '#ffff',
      fontSize: 12,
    },
    icon: {
      fontSize: 18,
    },
    notificationWrapper: {
      // backgroundColor: 'green',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
    },
    haveNotification: {
      width: 6,
      height: 6,
      backgroundColor: 'red',
      borderRadius: 3,
      top: 6,
      right: 2,
      position: 'absolute',
    },
    activeBtn: {
      color: 'blue',
    },
    profileIcon: {
      fontSize: 20,
    },
  });
  