import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const userImg =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80";

const dataUser = [
  {
    img: userImg,
    top: 10,
    left: 150,
  },
  {
    img: userImg,
    top: 100,
    left: 30,
  },
  {
    img: userImg,
    top: 100,
    left: 270,
  },
  {
    img: userImg,
    top: 230,
    left: 230,
  },
  {
    img: userImg,
    top: 230,
    left: 80,
  },
];

const tabs = [
  {
    id: "1",
    name: "All",
  },
  {
    id: "2",
    name: "Income",
  },
  {
    id: "3",
    name: "Expense",
  },
];

export default function RecentTrans(props) {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.topPart}>
          <View style={styles.headerNav}>
            <TouchableOpacity onPress={props.hanleBackProfile}>
              <AntDesign name="back" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="search1" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.title}>
            <Text style={styles.mainTitle}>Recent Transactions</Text>
            <Text style={styles.subTitle}>See all</Text>
          </View>
          <View style={styles.tabs}>
            {tabs.map((item, index) => {
              if (index === 0) {
                return (
                  <View
                    style={[styles.tabItem, { backgroundColor: "#333474" }]}
                  >
                    <Text style={[styles.tabContent, { color: "#ffff" }]}>
                      {item.name}
                    </Text>
                  </View>
                );
              } else {
                return (
                  <View style={[styles.tabItem, { backgroundColor: "#ffff" }]}>
                    <Text style={[styles.tabContent, { color: "#333474" }]}>
                      {item.name}
                    </Text>
                  </View>
                );
              }
            })}
          </View>
          <View style={styles.day}>
            <Text style={styles.dayContent}>Today</Text>
          </View>
          <View style={styles.history}>
            <View style={styles.actionWrapper}>
              <FontAwesome
                name="envelope-open-o"
                size={25}
                style={{ marginTop: 12, color: "#333474" }}
              />
              <View style={styles.action}>
                <Text style={styles.actionTitle}>Payment</Text>
                <Text style={styles.actionContent}>Payment from Andrea</Text>
              </View>
            </View>
            <View style={styles.money}>
              <Text style={styles.monenyNumber}>$30.000</Text>
            </View>
          </View>
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
                  key={index}
                >
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
    backgroundColor: "#f1f6fe",
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
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  headerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainTitle: {
    color: "#333474",
    fontSize: 16,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 14,
    color: "#333474",
  },
  tabs: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  tabItem: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tabContent: {
    fontWeight: 600,
  },
  day: {
    marginTop: 12,
  },
  dayContent: {
    color: "#333474",
    fontWeight: 700,
  },
  history: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffff",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 15,
    shadowColor: "#8a8787",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  actionWrapper: {
    flexDirection: "row",
    gap: 14,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  actionContent: {
    fontSize: 12,
    color: "#333474",
  },
  money: {
    marginTop: 11,
  },
  monenyNumber: {
    color: "#333474",
    fontWeight: 700,
  },
  connection: {
    width: 100,
    height: 100,
    // backgroundColor: 'blue',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
  },
  userImg: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  secondAround: {
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 100,
    borderWidth: 10,
    borderColor: "#c9d8f6",
  },
  mainAround: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: "#c9d8f6",
  },
  anotherUser: {
    position: "absolute",
    width: 60,
    height: 60,
    // top: 10,
    // left: 150,
  },
  anotherImg: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  },
  detailWrapper: {
    backgroundColor: "#333474",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 15,
  },
  detail: {
    color: "#ffff",
    fontWeight: 600,
  },
});
