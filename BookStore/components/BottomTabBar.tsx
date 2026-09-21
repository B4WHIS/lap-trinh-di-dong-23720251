import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const BottomTabBar = ({ currentTab, onSelectTab }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onSelectTab("home")}
      >
        <Entypo name="home" size={30} color="#94A3B8" />
        <Text>Trang chủ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onSelectTab("home")}
      >
        <AntDesign name="bars" size={30} color="black" />
        <Text>Danh mục</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onSelectTab("cart")}
      >
        <Entypo name="shopping-cart" size={30} color="black" />
        <Text>Giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onSelectTab("home")}
      >
        <MaterialCommunityIcons name="account" size={30} color="black" />
        <Text>Tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    padding: 10,
    height: 60,
    borderColor: "#E2E8F0",
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  //   tabItem2: {
  //     flex: 1,
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   tabItem3: {
  //     flex: 1,
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   tabItem4: {
  //     flex: 1,
  //     flexDirection: "column",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
});

export default BottomTabBar;
