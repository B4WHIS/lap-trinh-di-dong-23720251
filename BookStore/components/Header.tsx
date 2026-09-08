import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>BookStore</Text>
      <View style={styles.actionIconGroups}>
        <Feather name="search" size={24} color="black" />
        <AntDesign name="shopping-cart" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#f08c8c",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  actionIconGroups: {
    flexDirection: "row",
    gap: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
